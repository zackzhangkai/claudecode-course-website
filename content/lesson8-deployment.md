# 第八节：生产部署与运维

## 学习目标
- 掌握 Docker 容器化部署
- 学会配置监控和告警
- 理解高可用架构设计

## 核心概念

**部署架构：**

| 组件 | 说明 |
|------|------|
| **Container** | Docker 容器化部署 |
| **Orchestration** | Kubernetes / Docker Compose |
| **Monitoring** | 监控指标收集 |
| **Logging** | 日志聚合和分析 |
| **High Availability** | 高可用配置 |

---

## 动手实战

### 实战 8.1：Docker 容器化

```bash
# 创建 Dockerfile
cat > Dockerfile << 'EOF'
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
EOF

# 构建镜像
docker build -t claude-code-agent:latest .

# 运行容器
docker run -d \
  --name claude-agent \
  -p 3000:3000 \
  -v ~/.claude-code:/root/.claude-code \
  claude-code-agent:latest

# 查看日志
docker logs -f claude-agent
```

### 实战 8.2：使用 Docker Compose

```bash
# 创建 docker-compose.yml
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  claude-agent:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - ~/.claude-code:/root/.claude-code
      - ./logs:/app/logs
    environment:
      - NODE_ENV=production
      - LOG_LEVEL=info
    restart: unless-stopped
    
  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
    volumes:
      - redis-data:/data
      
  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      
volumes:
  redis-data:
EOF

# 启动所有服务
docker-compose up -d

# 查看服务状态
docker-compose ps
```

### 实战 8.3：配置监控和告警

```bash
# 创建 Prometheus 配置
cat > prometheus.yml << 'EOF'
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'claude-agent'
    static_configs:
      - targets: ['claude-agent:3000']
    
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']
EOF

# 配置告警规则
cat > alerts.yml << 'EOF'
groups:
  - name: claude-agent
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.1
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "高错误率检测"
          description: "错误率超过 10%"
EOF

# 启动监控
docker-compose up -d prometheus
```

---

## 案例：高可用部署架构

```bash
# 场景：部署高可用的 Claude Code 集群

# 1. 使用 Nginx 做负载均衡
cat > nginx.conf << 'EOF'
upstream claude_cluster {
    server claude-agent-1:3000;
    server claude-agent-2:3000;
    server claude-agent-3:3000;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://claude_cluster;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
EOF

# 2. 部署多个 Agent 实例
for i in 1 2 3; do
  docker run -d \
    --name claude-agent-$i \
    -p 300$i:3000 \
    claude-code-agent:latest
done

# 3. 启动负载均衡器
docker run -d \
  --name nginx-lb \
  -p 80:80 \
  -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf \
  nginx:alpine
```

---

## 课后作业

1. - [ ] 成功构建 Docker 镜像并运行容器
2. - [ ] 使用 Docker Compose 编排多个服务
3. - [ ] 配置 Prometheus 监控
4. - [ ] 设置至少一个告警规则
5. - [ ] 尝试部署简单的高可用架构

---

## 知识卡片

```
┌─────────────────────────────────────────┐
│  生产部署检查清单                      │
├─────────────────────────────────────────┤
│  ✓ 镜像构建成功且体积优化               │
│  ✓ 环境变量配置正确                     │
│  ✓ 数据持久化配置妥当                   │
│  ✓ 日志收集系统就绪                     │
│  ✓ 监控指标正常上报                     │
│  ✓ 告警规则测试通过                     │
│  ✓ 健康检查端点可用                     │
│  ✓ 资源限制合理配置                     │
└─────────────────────────────────────────┘
```

---

## 课程总结

恭喜你完成了 Claude Code 7 Days 实战课程！

**你已掌握：**
- ✅ Claude Code 基础架构和环境搭建
- ✅ Agent 创建与多 Agent 协作
- ✅ 渠道集成（VS Code、CLI、API）
- ✅ Skills 技能系统开发
- ✅ Memory 和上下文管理
- ✅ MCP 工具集成
- ✅ 自定义工作流编排
- ✅ 生产级部署与运维

**下一步建议：**
1. 在实际项目中应用所学知识
2. 参与开源社区，分享你的 Skills
3. 持续关注 Claude Code 的最新更新
4. 尝试更复杂的 Agent 架构设计

Happy Coding! 🚀
