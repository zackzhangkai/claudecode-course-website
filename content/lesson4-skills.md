# 第四节：Skills 技能系统

## 学习目标
- 理解 Skills 的设计理念
- 掌握内置 Skills 的使用方法
- 学会开发自定义 Skill

## 核心概念

**Skill 系统：**

| 概念 | 说明 |
|------|------|
| **Built-in Skills** | 官方提供的预置技能 |
| **Custom Skills** | 用户自定义的技能模块 |
| **Skill Config** | Skill 的配置文件 |
| **Skill Chain** | 多个 Skill 组合使用 |

---

## 动手实战

### 实战 4.1：查看和使用内置 Skills

```bash
# 列出所有内置 Skills
claude skill list

# 查看 Skill 详情
claude skill info code-review

# 使用内置 Skill
claude chat --skill code-review "请审查这段代码"
```

**常用内置 Skills：**

| Skill 名称 | 功能说明 |
|------------|----------|
| `code-review` | 代码审查，提供改进建议 |
| `refactor` | 代码重构，优化代码结构 |
| `test-generator` | 自动生成单元测试 |
| `doc-writer` | 生成代码文档 |
| `debug-helper` | 辅助调试，定位问题 |

### 实战 4.2：创建自定义 Skill

```bash
# 创建 Skill 目录结构
mkdir -p ~/.claude-code/skills/my-skill

# 创建 Skill 配置文件
cat > ~/.claude-code/skills/my-skill/skill.json << 'EOF'
{
  "name": "my-skill",
  "description": "我的自定义技能",
  "version": "1.0.0",
  "author": "Your Name",
  "triggers": ["帮我做 X", "执行 Y 任务"],
  "prompt": "你是一个专业的 X 助手..."
}
EOF
```

**Skill 配置详解：**

```json
{
  "name": "api-tester",
  "description": "API 自动化测试工具",
  "version": "1.0.0",
  "triggers": ["测试 API", "检查接口"],
  "prompt": "你是一个 API 测试专家。当用户请求测试 API 时，你需要：\n1. 分析 API 文档\n2. 生成测试用例\n3. 执行测试并报告结果",
  "tools": ["http-request", "json-parser"],
  "examples": [
    "测试 https://api.example.com/users 接口"
  ]
}
```

### 实战 4.3：Skill 组合与链式调用

```bash
# 创建 Skill 链配置
cat > ~/.claude-code/skills/my-chain/chain.json << 'EOF'
{
  "name": "full-stack-feature",
  "steps": [
    { "skill": "requirement-analyzer", "output": "requirements" },
    { "skill": "api-designer", "input": "requirements", "output": "api-spec" },
    { "skill": "backend-coder", "input": "api-spec", "output": "backend-code" },
    { "skill": "frontend-coder", "input": "api-spec", "output": "frontend-code" },
    { "skill": "test-generator", "input": "backend-code", "output": "tests" }
  ]
}
EOF

# 执行 Skill 链
claude chat --skill-chain full-stack-feature "实现一个用户注册功能"
```

---

## 案例：开发一个完整的自定义 Skill

```bash
# 场景：创建一个"数据库迁移" Skill

# 1. 创建 Skill 目录
mkdir -p ~/.claude-code/skills/db-migration

# 2. 编写 Skill 配置
# (参考上面的 skill.json 格式)

# 3. 测试 Skill
claude chat --skill db-migration "帮我迁移用户表从 MySQL 到 PostgreSQL"

# 4. 分享 Skill（可选）
claude skill publish db-migration
```

---

## 课后作业

1. - [ ] 尝试使用 3 个不同的内置 Skills
2. - [ ] 创建一个简单的自定义 Skill
3. - [ ] 为你的 Skill 编写至少 2 个使用示例
4. - [ ] 尝试组合多个 Skills 完成复杂任务
5. - [ ] 阅读一个复杂 Skill 的源码并理解其工作原理

---

## 知识卡片

```
┌─────────────────────────────────────────┐
│  Skill 开发最佳实践                     │
├─────────────────────────────────────────┤
│  1. 明确 Skill 的单一职责              │
│  2. 提供清晰的使用示例                 │
│  3. 定义准确的触发条件                 │
│  4. 合理选择所需工具                   │
│  5. 编写详细的 prompt 指令             │
└─────────────────────────────────────────┘
```

---

## 下节预告

下一节我们将学习 **记忆与上下文管理**，
包括 Memory 系统和上下文压缩策略。
