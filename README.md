# Claude Code 7 Days 实战课程

> 从零开始，掌握 Claude Code 的使用与架构

🖥️ **在线课程网站**:
- **Vercel**: https://claudecode-7days.vercel.app
- **Cloudflare Pages**: https://claudecode-7days.pages.dev

---

## 课程介绍

本课程面向希望掌握 Claude Code 的开发者，通过 8 节实战课程，层层递进地学习 Claude Code 的各项核心功能。

**课程特色：**
- 🛠️ 每节都有动手实战
- 📚 真实的案例驱动
- 🔰 从基础到生产部署
- 📝 完整的命令示例

---

## 课程大纲

| 课次 | 主题 | 核心内容 |
|:---:|------|---------|
| **Lesson 1** | Claude Code 基础与环境搭建 | 安装配置、架构概念、运行第一个 Agent |
| **Lesson 2** | Agent 创建与管理 | Agent 配置、多 Agent 架构、工具权限 |
| **Lesson 3** | 渠道集成配置 | VS Code、CLI、API 等渠道接入 |
| **Lesson 4** | Skills 技能系统 | 内置 Skills、自定义 Skill 开发 |
| **Lesson 5** | 记忆与上下文管理 | Memory 系统、混合搜索、上下文压缩 |
| **Lesson 6** | MCP 工具集成 | MCP 架构、自定义 MCP 服务器 |
| **Lesson 7** | 自定义工作流 | 工作流编排、并行任务、条件分支 |
| **Lesson 8** | 生产部署与运维 | Docker 部署、监控告警、高可用 |

---

## 学习路径

```
Lesson 1 → Lesson 2 → Lesson 3 → Lesson 4 → Lesson 5 → Lesson 6 → Lesson 7 → Lesson 8
  ↓          ↓          ↓          ↓          ↓          ↓          ↓          ↓
基础概念    Agent管理   渠道集成   Skills系统   记忆管理   MCP扩展    工作流编排  生产部署
```

---

## 前置要求

- Node.js 18+
- 基础命令行操作
- 基本编程概念

---

## 部署说明

### Vercel 部署
```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署到 Vercel
vercel --prod

# 设置项目名
vercel alias set <deployment-url> claudecode-7days.vercel.app
```

### Cloudflare Pages 部署
```bash
# 构建项目
npm run build

# 使用 Wrangler CLI 部署
wrangler pages deploy out --project-name=claudecode-7days

# 或使用 Cloudflare Dashboard
# 1. 登录 https://dash.cloudflare.com
# 2. 进入 Pages → Create a project
# 3. 连接 GitHub 仓库
# 4. 构建命令：npm run build
# 5. 输出目录：out
```

**Cloudflare Pages 配置：**
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Node.js version**: 18+

---

## 互动与反馈

- 💬 课程问题与讨论：使用 [GitHub Issues](https://github.com/zackzhangkai/claudecode-course-website/issues)
- 🐛 发现问题？欢迎提交 [Issue](https://github.com/zackzhangkai/claudecode-course-website/issues/new)
- ⭐ 觉得有帮助？给个 Star！

---

## 参考资源

- [Claude Code 官方文档](https://opencode.ai)
- [Claude Code GitHub](https://github.com/anthropics/claude-code)
- 技术自留地公众号：扫码关注获取更多教程

---

**版本**：v1.0
**更新日期**：2026-04-28
**作者**：Claude Code Training Team
