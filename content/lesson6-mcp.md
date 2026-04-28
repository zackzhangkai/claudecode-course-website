# 第六节：MCP 工具集成

## 学习目标
- 理解 Model Context Protocol (MCP) 架构
- 学会配置和使用 MCP 服务器
- 掌握自定义 MCP 服务器开发

## 核心概念

**MCP 架构：**

| 组件 | 说明 |
|------|------|
| **MCP Server** | 提供工具和能力的服务端 |
| **MCP Client** | 调用 MCP 服务器的客户端 |
| **Tools** | MCP 服务器暴露的工具 |
| **Resources** | MCP 服务器提供的资源 |

---

## 动手实战

### 实战 6.1：配置 MCP 服务器

```bash
# 查看已配置的 MCP 服务器
claude mcp list

# 添加一个 MCP 服务器
claude mcp add filesystem --command "npx -y @anthropic-ai/mcp-filesystem" --args "--path /workspace"

# 启用 MCP 服务器
claude mcp enable filesystem

# 测试 MCP 连接
claude mcp test filesystem
```

**MCP 配置示例：**

```json
{
  "mcp": {
    "servers": {
      "filesystem": {
        "command": "npx",
        "args": ["-y", "@anthropic-ai/mcp-filesystem", "--path", "/workspace"],
        "tools": ["read_file", "write_file", "list_directory"]
      },
      "database": {
        "command": "python",
        "args": ["-m", "mcp_sqlite", "--db", "./data.db"],
        "tools": ["query", "insert", "update", "delete"]
      },
      "web-search": {
        "command": "node",
        "args": ["./mcp-servers/web-search/index.js"],
        "tools": ["search", "fetch_url"]
      }
    }
  }
}
```

### 实战 6.2：使用 MCP 工具

```bash
# 查看 MCP 服务器提供的工具
claude mcp tools filesystem

# 在对话中使用 MCP 工具
claude chat "使用 filesystem 工具读取 package.json 文件"

# 查看工具调用日志
claude mcp logs filesystem --tool read_file
```

### 实战 6.3：开发自定义 MCP 服务器

```bash
# 创建 MCP 服务器项目
mkdir my-mcp-server && cd my-mcp-server
npm init -y
npm install @anthropic-ai/mcp-sdk

# 创建服务器代码
cat > index.js << 'EOF'
const { MCPServer } = require('@anthropic-ai/mcp-sdk');

const server = new MCPServer({
  name: 'my-custom-server',
  version: '1.0.0',
});

// 定义工具
server.tool('custom_tool', {
  description: '我的自定义工具',
  parameters: {
    input: { type: 'string', description: '输入参数' }
  },
  handler: async (params) => {
    return { result: `处理了: ${params.input}` };
  }
});

server.start();
EOF

# 配置到 Claude Code
claude mcp add my-custom --command "node" --args "$(pwd)/index.js"
```

---

## 案例：集成第三方服务 MCP

```bash
# 场景：集成 GitHub MCP 服务器

# 1. 安装 GitHub MCP 服务器
npm install -g @anthropic-ai/mcp-github

# 2. 配置 MCP 服务器
claude mcp add github \
  --command "mcp-github" \
  --env GITHUB_TOKEN=your_token_here

# 3. 使用 GitHub 工具
claude chat "使用 github 工具列出我的仓库"
claude chat "创建一个新的 issue 在 my-repo 仓库"
```

---

## 课后作业

1. - [ ] 配置至少 3 个不同的 MCP 服务器
2. - [ ] 在对话中实际使用这些 MCP 工具
3. - [ ] 开发一个简单的自定义 MCP 服务器
4. - [ ] 测试 MCP 工具的调用和返回结果
5. - [ ] 尝试将多个 MCP 服务器组合使用

---

## 知识卡片

```
┌─────────────────────────────────────────┐
│  MCP 开发要点                          │
├─────────────────────────────────────────┤
│  1. 工具定义要清晰明确                 │
│  2. 参数验证不可少                     │
│  3. 错误处理要完善                     │
│  4. 返回结果格式要规范                 │
│  5. 提供详细的使用文档                 │
└─────────────────────────────────────────┘
```

---

## 下节预告

下一节我们将学习 **自定义工作流**，
包括工作流编排、并行任务和条件分支。
