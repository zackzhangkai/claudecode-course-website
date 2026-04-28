# 第三节：渠道集成配置

## 学习目标
- 理解 Claude Code 的渠道系统
- 配置 VS Code 集成
- 设置 CLI 和 API 渠道

## 核心概念

**渠道类型：**

| 渠道 | 说明 | 使用场景 |
|------|------|----------|
| **VS Code** | VS Code 扩展集成 | 开发环境内使用 |
| **CLI** | 命令行界面 | 终端、脚本自动化 |
| **API** | HTTP API 接口 | 第三方集成、远程调用 |
| **Web** | Web 界面 | 浏览器访问 |

---

## 动手实战

### 实战 3.1：配置 VS Code 集成

```bash
# 安装 VS Code 扩展
code --install-extension anthropic.claude-code

# 启用 VS Code 渠道
claude channel enable vscode

# 配置 VS Code 渠道
claude channel config vscode --auto-start true --port 3000
```

**VS Code 配置示例：**

```json
{
  "claudeCode.enable": true,
  "claudeCode.defaultAgent": "my-first-agent",
  "claudeCode.autoSuggest": true,
  "claudeCode.shortcut": "cmd+shift+c"
}
```

### 实战 3.2：配置 CLI 渠道

```bash
# 启用 CLI 渠道
claude channel enable cli

# 配置全局默认 Agent
claude config set defaultAgent my-first-agent

# 测试 CLI 渠道
claude chat "帮我写一个 Hello World 程序"
```

### 实战 3.3：配置 API 渠道

```bash
# 启用 API 渠道
claude channel enable api

# 生成 API Token
claude channel token create --name "my-api-token"

# 测试 API 调用
curl -X POST https://api.claudecode.ai/v1/chat \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"message": "你好"}'
```

**API 请求示例：**

```json
{
  "agent": "my-first-agent",
  "message": "帮我分析这个代码文件",
  "context": {
    "files": ["./src/index.ts"]
  },
  "stream": true
}
```

---

## 案例：多渠道协同工作

```bash
# 场景：在 VS Code 中开发，通过 CLI 自动化，API 对外服务

# 1. VS Code 中实时编码辅助
# → 使用 VS Code 渠道获取代码建议

# 2. CLI 运行自动化测试
claude chat --agent test-agent "运行所有单元测试"

# 3. API 提供外部服务
# → 其他应用通过 API 调用 Agent 能力
```

---

## 课后作业

1. - [ ] 安装并配置 VS Code 扩展
2. - [ ] 测试 CLI 渠道的各种命令
3. - [ ] 生成 API Token 并测试 API 调用
4. - [ ] 尝试在 VS Code 中让 Agent 帮你写代码
5. - [ ] 创建一个简单的 API 调用脚本

---

## 知识卡片

```
┌─────────────────────────────────────────┐
│  渠道选择建议                          │
├─────────────────────────────────────────┤
│  日常开发 → VS Code 渠道               │
│  自动化任务 → CLI 渠道                 │
│  对外服务 → API 渠道                   │
│  快速测试 → Web 渠道                   │
└─────────────────────────────────────────┘
```

---

## 下节预告

下一节我们将学习 **Skills 技能系统**，
包括内置技能的使用和自定义 Skill 开发。
