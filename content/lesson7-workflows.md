# 第七节：自定义工作流

## 学习目标
- 理解工作流编排的概念
- 学会设计并行任务流程
- 掌握条件分支和错误处理

## 核心概念

**工作流组件：**

| 组件 | 说明 |
|------|------|
| **Task** | 工作流中的单个任务 |
| **Parallel** | 并行执行多个任务 |
| **Conditional** | 条件分支 |
| **Error Handler** | 错误处理和重试 |

---

## 动手实战

### 实战 7.1：创建工作流定义文件

```bash
# 创建工作流目录
mkdir -p ~/.claude-code/workflows

# 创建第一个工作流
cat > ~/.claude-code/workflows/code-review-flow.yaml << 'EOF'
name: code-review-flow
description: 自动化代码审查流程
version: 1.0.0

tasks:
  - name: lint
    agent: linter-agent
    prompt: "检查代码风格和语法错误"
    
  - name: type-check
    agent: type-checker-agent
    prompt: "运行类型检查"
    
  - name: security-scan
    agent: security-agent
    prompt: "扫描安全漏洞"
    
  - name: generate-report
    agent: doc-writer
    prompt: "生成审查报告"
    dependsOn: [lint, type-check, security-scan]
EOF
```

### 实战 7.2：执行并行任务

```bash
# 定义并行任务工作流
cat > ~/.claude-code/workflows/parallel-build.yaml << 'EOF'
name: parallel-build
description: 并行构建前后端

parallel:
  - name: build-frontend
    agent: frontend-agent
    prompt: "构建前端项目，运行 npm run build"
    
  - name: build-backend
    agent: backend-agent
    prompt: "构建后端项目，运行 npm run build"
    
  - name: run-tests
    agent: test-agent
    prompt: "运行所有测试用例"

onComplete:
  - name: deploy
    agent: devops-agent
    prompt: "部署构建结果"
EOF

# 执行工作流
claude workflow run parallel-build
```

### 实战 7.3：条件分支和错误处理

```bash
# 带条件分支的工作流
cat > ~/.claude-code/workflows/smart-deploy.yaml << 'EOF'
name: smart-deploy
description: 智能部署流程

tasks:
  - name: run-tests
    agent: test-agent
    prompt: "运行完整测试套件"
    
  - name: check-results
    type: conditional
    dependsOn: [run-tests]
    condition: "${run-tests.passed} == true"
    onTrue:
      - name: deploy-prod
        agent: devops-agent
        prompt: "部署到生产环境"
    onFalse:
      - name: notify-failure
        agent: notifier-agent
        prompt: "通知团队测试失败，请检查"
        
  - name: rollback
    agent: devops-agent
    prompt: "回滚到上一个稳定版本"
    condition: "${deploy-prod.status} == failed"
    maxRetries: 3
EOF
```

---

## 案例：完整的 CI/CD 工作流

```bash
# 场景：构建一个完整的 CI/CD 流程

# 1. 创建 CI/CD 工作流定义
cat > ~/.claude-code/workflows/cicd-pipeline.yaml << 'EOF'
name: cicd-pipeline
description: 完整的 CI/CD 流水线

parallel:
  - name: lint-and-test
    workflow: code-review-flow
    
  - name: build
    agent: builder-agent
    prompt: "构建项目"

onComplete:
  - name: deploy
    workflow: smart-deploy
    condition: "${lint-and-test.status} == success"
EOF

# 2. 执行 CI/CD 流水线
claude workflow run cicd-pipeline --trigger git-push

# 3. 监控工作流执行
claude workflow status cicd-pipeline
```

---

## 课后作业

1. - [ ] 创建一个包含至少 3 个任务的工作流
2. - [ ] 实现并行任务执行
3. - [ ] 添加条件分支逻辑
4. - [ ] 配置错误处理和重试机制
5. - [ ] 构建一个完整的 CI/CD 工作流

---

## 知识卡片

```
┌─────────────────────────────────────────┐
│  工作流设计原则                        │
├─────────────────────────────────────────┤
│  1. 任务粒度要适中，避免过细或过粗     │
│  2. 明确任务间的依赖关系               │
│  3. 并行任务要充分考虑资源竞争         │
│  4. 错误处理要覆盖各种异常场景         │
│  5. 工作流要可观测、可调试             │
└─────────────────────────────────────────┘
```

---

## 下节预告

下一节我们将学习 **生产部署与运维**，
包括 Docker 部署、监控告警和高可用配置。
