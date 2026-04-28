# 第二节：Agent 创建与管理

## 学习目标
- 掌握 Agent 配置文件结构
- 学会创建和管理多个 Agent
- 理解多 Agent 协作模式

## 核心概念

**Agent 架构：**

| 组件 | 说明 |
|------|------|
| **Agent Config** | 定义 Agent 的行为、工具、权限 |
| **System Prompt** | Agent 的核心指令和系统提示 |
| **Tools** | Agent 可调用的工具集合 |
| **Permissions** | 工具调用的权限控制 |

---

## 动手实战

### 实战 2.1：创建第一个 Agent

```bash
# 创建新 Agent
claude agent create my-first-agent

# 查看 Agent 配置文件
cat ~/.claude-code/agents/my-first-agent/agent.json
```

**Agent 配置示例：**

```json
{
  "name": "my-first-agent",
  "description": "我的第一个 Agent",
  "model": "claude-3.5-sonnet",
  "systemPrompt": "你是一个专业的代码助手，擅长 JavaScript 和 TypeScript。",
  "tools": ["file-read", "file-write", "bash-execute"],
  "permissions": {
    "file-read": "allow",
    "file-write": "ask",
    "bash-execute": "deny"
  }
}
```

### 实战 2.2：配置 Agent 工具权限

```bash
# 编辑 Agent 配置
claude agent config my-first-agent

# 设置工具权限
claude agent permission my-first-agent --tool file-write --level ask
claude agent permission my-first-agent --tool bash-execute --level allow
```

### 实战 2.3：多 Agent 架构设计

```bash
# 创建前端 Agent
claude agent create frontend-agent --description "前端开发专家"

# 创建后端 Agent
claude agent create backend-agent --description "后端开发专家"

# 创建 DevOps Agent
claude agent create devops-agent --description "部署运维专家"

# 查看所有 Agent
claude agent list
```

**多 Agent 协作配置：**

```json
{
  "name": "orchestrator",
  "type": "coordinator",
  "agents": ["frontend-agent", "backend-agent", "devops-agent"],
  "routing": {
    "frontend": "frontend-agent",
    "backend": "backend-agent",
    "deploy": "devops-agent"
  }
}
```

---

## 案例：构建一个全栈开发团队

```bash
# 启动协调者 Agent
claude chat --agent orchestrator

# 协调者会自动路由任务：
> 帮我创建一个 React 登录页面
# → 路由到 frontend-agent

> 实现一个 JWT 认证 API
# → 路由到 backend-agent

> 部署到 Vercel
# → 路由到 devops-agent
```

---

## 课后作业

1. - [ ] 创建 3 个不同专长的 Agent
2. - [ ] 配置每个 Agent 的工具权限
3. - [ ] 创建一个协调者 Agent
4. - [ ] 测试多 Agent 协作模式
5. - [ ] 尝试让 Agent 完成一个完整的功能开发

---

## 知识卡片

```
┌─────────────────────────────────────────┐
│  Agent 权限级别                        │
├─────────────────────────────────────────┤
│  allow   → 自动允许，无需确认           │
│  ask     → 每次执行前询问用户           │
│  deny    → 禁止执行该工具             │
└─────────────────────────────────────────┘
```

---

## 下节预告

下一节我们将学习 **渠道集成配置**，
包括 VS Code、CLI、API 等多种接入方式。
