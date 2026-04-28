# 第五节：记忆与上下文管理

## 学习目标
- 理解 Claude Code 的 Memory 系统
- 掌握上下文管理策略
- 学会使用混合搜索功能

## 核心概念

**Memory 架构：**

| 组件 | 说明 |
|------|------|
| **Short-term Memory** | 当前会话的短期记忆 |
| **Long-term Memory** | 持久化的长期记忆 |
| **Working Memory** | 当前任务的工作记忆 |
| **Hybrid Search** | 混合搜索（向量+关键词） |

---

## 动手实战

### 实战 5.1：配置 Memory 系统

```bash
# 查看 Memory 配置
claude config get memory

# 启用长期记忆
claude config set memory.longTerm.enabled true

# 设置记忆存储路径
claude config set memory.path ~/.claude-code/memory

# 配置记忆压缩策略
claude config set memory.compression auto
```

**Memory 配置示例：**

```json
{
  "memory": {
    "shortTerm": {
      "maxTokens": 8000,
      "strategy": "sliding-window"
    },
    "longTerm": {
      "enabled": true,
      "storage": "sqlite",
      "path": "~/.claude-code/memory/long-term.db"
    },
    "compression": {
      "enabled": true,
      "threshold": 0.8,
      "method": "semantic"
    }
  }
}
```

### 实战 5.2：使用 Memory 存储和检索

```bash
# 存储记忆
claude memory save --key "project-structure" --value "$(cat project.md)"

# 检索记忆
claude memory search "项目结构"

# 列出所有记忆
claude memory list

# 删除记忆
claude memory delete "old-key"
```

### 实战 5.3：混合搜索功能

```bash
# 启用混合搜索
claude config set search.hybrid true

# 配置向量数据库
claude config set search.vectorDb "chromadb"
claude config set search.vectorDbPath "~/.claude-code/search/vectors"

# 执行混合搜索
claude search "如何实现用户认证" --mode hybrid

# 搜索结果包含：
# - 向量相似度匹配
# - 关键词精确匹配
# - 时间相关性排序
```

**上下文压缩示例：**

```bash
# 查看当前上下文大小
claude context size

# 手动触发压缩
claude context compress

# 自动压缩配置
claude config set context.autoCompress true
claude config set context.maxTokens 16000
```

---

## 案例：构建项目知识库

```bash
# 场景：为项目建立完整的知识库

# 1. 存储项目文档到 Memory
claude memory save --key "api-docs" --file ./docs/api.md
claude memory save --key "arch-design" --file ./docs/architecture.md

# 2. 在对话中自动检索
claude chat "根据我们的 API 文档，如何实现用户登录？"
# → Agent 会自动从 Memory 中检索相关文档

# 3. 持续学习
# → Agent 会将新的发现自动存储到 Long-term Memory
```

---

## 课后作业

1. - [ ] 配置并启用 Memory 系统
2. - [ ] 存储至少 5 条项目相关的记忆
3. - [ ] 测试混合搜索功能
4. - [ ] 尝试不同的上下文压缩策略
5. - [ ] 让 Agent 基于 Memory 回答复杂问题

---

## 知识卡片

```
┌─────────────────────────────────────────┐
│  上下文管理技巧                        │
├─────────────────────────────────────────┤
│  1. 定期压缩上下文，避免 token 浪费    │
│  2. 重要信息存入 Long-term Memory      │
│  3. 使用混合搜索提高检索准确性         │
│  4. 合理设置上下文窗口大小             │
│  5. 定期清理无用记忆                   │
└─────────────────────────────────────────┘
```

---

## 下节预告

下一节我们将学习 **MCP 工具集成**，
包括 MCP 架构和自定义 MCP 服务器开发。
