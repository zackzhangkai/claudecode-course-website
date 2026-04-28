# 第一节：Claude Code 基础与环境搭建

## 学习目标
- 理解 Claude Code 架构与核心概念
- 完成开发环境安装
- 运行第一个 Agent

## 核心概念

**核心概念说明：**

| 概念 | 说明 |
|--------|------|
| **Agent** | AI 代理实例，拥有独立的 workspace、memory、配置 |
| **Channel** | 接入渠道（VS Code、CLI、API 等） |
| **Skill** | 可复用技能模块 |
| **MCP** | Model Context Protocol，扩展工具协议 |
| **Workspace** | Agent 的工作目录 |

---

## 动手实战

### 实战 1.1：安装 Claude Code

```bash
# 检查环境
node --version  # 要求 v18+
npm --version

# 安装 Claude Code CLI
npm install -g @anthropic-ai/claude-code

# 验证安装
claude --version

# 初始化配置目录
claude init
```

### 实战 1.2：查看配置结构

```bash
# 查看主配置文件
cat ~/.claude-code/claude.json

# 查看 Agent 目录
ls -la ~/.claude-code/agents/

# 查看插件目录
ls -la ~/.claude-code/extensions/
```

**配置文件结构解析：**

```json
{
  "meta": { "version": "2026.4.11" },
  "models": {
    "providers": { ... },      // 模型提供商
    "defaults": { ... }       // 默认模型配置
  },
  "agents": {
    "list": [ ... ],          // Agent 列表
    "defaults": { ... }       // 默认配置
  },
  "channels": { ... },        // 渠道配置
  "plugins": { ... },         // 插件配置
  "mcp": { servers: {} }     // MCP 服务器
}
```

### 实战 1.3：运行 Doctor 检查

```bash
# 运行健康检查
claude doctor

# 输出示例：
# ✓ Node.js v18.x.x
# ✓ CLI installed
# ✓ Config file exists
# ✓ 3 agents configured
# ✓ 2 channels enabled
```

### 实战 1.4：配置第一个模型（使用免费模型）

```bash
# 编辑配置文件
claude config edit

# 添加免费模型提供商
# 在 models.providers 中添加：
```

```json
"opencode-zen": {
  "baseUrl": "https://opencode.ai/zen/v1",
  "apiKey": "YOUR_API_KEY",
  "api": "openai-completions",
  "models": [{
    "id": "claude-3.5-sonnet-free",
    "name": "Claude 3.5 Sonnet Free",
    "input": ["text", "image"],
    "contextWindow": 200000,
    "maxTokens": 8192
  }]
}
```

---

## 案例：运行你的第一个对话 Agent

```bash
# 启动交互式会话
claude chat

# 输入测试消息
> 你好，请介绍一下你自己
```

**预期输出：**

```
你好！我是 Claude Code Agent，
我可以帮你完成代码开发、文件操作、
搜索研究等各种任务。有什么可以帮你的吗？
```

---

## 课后作业

1. - [ ] 完成 Claude Code 安装
2. - [ ] 运行 `claude doctor` 通过所有检查
3. - [ ] 找到并阅读你的 `claude.json` 配置文件
4. - [ ] 配置一个免费模型提供商
5. - [ ] 成功运行 `claude chat` 并完成一次对话

---

## 知识卡片

```
┌─────────────────────────────────────────┐
│  Claude Code 核心文件位置              │
├─────────────────────────────────────────┤
│  主配置:  ~/.claude-code/claude.json    │
│  Agent配置: ~/.claude-code/agents/<name>/ │
│  插件:   ~/.claude-code/extensions/      │
│  日志:   ~/.claude-code/logs/           │
│  Memory: ~/.claude-code/memory/         │
│  Workspace: ~/.claude-code/workspace/   │
└─────────────────────────────────────────┘
```

---

## 下节预告

下一节我们将学习 **Agent 的创建与管理**，
包括多 Agent 架构设计和配置。
