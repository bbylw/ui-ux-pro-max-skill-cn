# UI/UX Pro Max 中文教程网站

一个基于 [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) 项目的中文教程网站，为 AI 编码助手提供专业级设计智能。本站已同步上游 v2.15.0。

![UI/UX Pro Max](https://img.shields.io/badge/UI%2FUX-Pro%20Max%20v2.15.0-6366f1?style=for-the-badge)
![Reasoning Rules](https://img.shields.io/badge/reasoning_rules-192-green?style=for-the-badge)
![UI Styles](https://img.shields.io/badge/UI_styles-79_searchable-purple?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📖 项目简介

本网站是 UI/UX Pro Max 技能库的中文教程站点，面向中文开发者介绍安装、使用方式和智能设计系统生成能力。UI/UX Pro Max 是一个面向 AI 编码助手的设计智能技能，可帮助 Claude Code、Cursor、Windsurf、Antigravity、Codex CLI、GitHub Copilot、Kiro 等 20+ 工具在生成界面时做出更专业的设计决策。

## 🆕 v2.15 同步内容

### 智能设计系统生成器（旗舰能力）

AI 会分析项目需求，并在几秒内输出定制化设计系统，包括：

- 推荐页面结构与转化模式
- 最匹配的 UI 风格
- 行业专属配色方案
- 字体组合与情绪定位
- 关键动效与交互建议
- 需要避免的反模式
- 交付前 UX / Accessibility 检查清单

### 设计系统生成流程

1. **用户请求**：例如“为我的美容水疗中心构建一个着陆页”。
2. **多域检索**：并行匹配产品类型（192 种）、UI 风格（79 种可检索）、配色（192 套）、落地页模式（34 种）和字体组合（74 组）。
3. **推理引擎**：结合产品分类规则、BM25 排名、行业反模式与 192 条条件规则进行筛选。
4. **完整输出**：生成 Pattern、Style、Colors、Typography、Effects、Anti-patterns 与 Checklist。

### 192 条行业推理规则

推理规则覆盖以下方向：

| 类别 | 示例 |
| --- | --- |
| Tech & SaaS | SaaS、Micro SaaS、B2B Service、Developer Tool、AI/Chatbot Platform、Cybersecurity |
| Finance | Fintech/Crypto、Banking、Insurance、Personal Finance Tracker、Invoice & Billing |
| Healthcare | Medical Clinic、Pharmacy、Dental、Veterinary、Mental Health、Medication Reminder |
| E-commerce | General、Luxury、Marketplace、Subscription Box、Food Delivery |
| Services | Beauty/Spa、Restaurant、Hotel、Legal、Home Services、Booking & Appointment |
| Creative | Portfolio、Agency、Photography、Gaming、Music Streaming、Photo/Video Editor |
| Lifestyle | Habit Tracker、Recipe & Cooking、Meditation、Weather、Diary、Mood Tracker |
| Emerging Tech | Web3/NFT、Spatial Computing、Quantum Computing、Autonomous Drone Fleet |

## 🆕 v2.0 → v2.15 其他亮点

- **1900+ 可检索字体库**：新增 Google Fonts 全量数据库（1934 款），支持按名称与授权方式检索。
- **105 个精选图标 + 17 组 GSAP 动效预设**：新增 icons 与 motion 检索域。
- **6 个附加设计技能**：`brand`、`design`、`design-system`、`ui-styling`、`banner-design`、`slides`。
- **韧性文本与紧凑 UI 准则**：标题换行、长词折行、Chip/徽章溢出、被中断的微交互等生产级指南。
- **为现有应用换肤（Retheme）**：复用现有语义 Token、逐组件替换硬编码样式的工作流与检查清单。
- **设计系统持久化升级**：Master + Overrides 模式，按项目分目录（`design-system/<project>/MASTER.md` + `pages/`）。
- **版本感知框架搜索**：React 19、Nuxt UI v4.12 等最新指南；显式查询旧版本只返回策展的遗留指南。
- **风格分类体系**：79 种可检索风格分为 50 常用 / 29 补充 / 9 弃用，收录 Fluent 2、Shopify Polaris、Adobe Spectrum 等官方设计系统。
- **更多平台**：新增 CodeWhale、ZCode、Kimi Code、Amazon Q Developer、OpenClaw、AutoClaw 与通用 Agent 标准（`--ai universal`）。
- **更多桌面栈**：新增 WPF、WinUI 3、UWP、Avalonia、Uno Platform，并支持 React 19、Nuxt UI v4。

## 🎯 核心能力

| 特性 | 数量 | 说明 |
| --- | --- | --- |
| UI 风格 | 79 种可检索（50 个常用） | Glassmorphism、Claymorphism、Minimalism、Brutalism、AI-Native UI、Spatial UI 等 |
| 配色方案 | 192 种 | 与 192 个产品类型一一对齐的行业专属调色板 |
| 字体配对 | 74 种 | 精选 Google Fonts 排版组合（另有 1934 款字体可检索库） |
| 图表类型 | 25 种 | 仪表盘和数据分析可视化建议 |
| 技术栈 | 22 种 | React、Next.js、Nuxt UI、Svelte、shadcn/ui、Angular、Laravel、SwiftUI、Flutter、JavaFX、WinUI 3 等 |
| UX 准则 | 119 条 | 最佳实践、反模式、无障碍规则，含韧性文本与紧凑标签指南 |
| 推理规则 | 192 条 | 用于智能生成行业专属设计系统 |
| 图标与动效 | 105 个 / 17 组 | 精选 Phosphor 图标与 GSAP 动效预设 |

## 🚀 快速开始

### Claude Marketplace（Claude Code）

```text
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```

### CLI 安装（推荐）

```bash
# 全局安装 CLI 工具
npm install -g ui-ux-pro-max-cli

# 进入你的项目目录
cd /path/to/your/project

# 为指定 AI 助手安装技能
uipro init --ai claude      # Claude Code
uipro init --ai cursor      # Cursor
uipro init --ai windsurf    # Windsurf
uipro init --ai antigravity # Antigravity
uipro init --ai copilot     # GitHub Copilot
uipro init --ai kiro        # Kiro
uipro init --ai codex       # Codex CLI
uipro init --ai qoder       # Qoder
uipro init --ai roocode     # Roo Code
uipro init --ai gemini      # Gemini CLI
uipro init --ai trae        # Trae
uipro init --ai opencode    # OpenCode
uipro init --ai continue    # Continue
uipro init --ai codebuddy   # CodeBuddy
uipro init --ai droid       # Droid (Factory)
uipro init --ai kilocode    # KiloCode
uipro init --ai warp        # Warp
uipro init --ai augment     # Augment
uipro init --ai codewhale   # CodeWhale
uipro init --ai zcode       # ZCode
uipro init --ai kimi        # Kimi Code
uipro init --ai amazonq     # Amazon Q Developer
uipro init --ai openclaw    # OpenClaw
uipro init --ai autoclaw    # AutoClaw
uipro init --ai universal   # 通用 Agent 标准 (.agents/skills/)
uipro init --ai all         # 所有助手
```

> 当前 npm 包名是 `ui-ux-pro-max-cli`，安装后仍使用 `uipro` 命令。旧的 `uipro-cli` 已过时，不建议继续使用。

### 全局安装

```bash
uipro init --ai claude --global    # 安装到 ~/.claude/skills/
uipro init --ai cursor --global    # 安装到 ~/.cursor/skills/
uipro init --ai zcode --global     # 安装到 ~/.zcode/skills/
uipro init --ai kimi --global      # 安装到 ~/.kimi-code/skills/
uipro init --ai universal --global # 安装到 ~/.agents/skills/
```

### 其他 CLI 命令

```bash
uipro versions              # 列出可用版本
uipro update                # 从已安装 CLI 包刷新技能文件
uipro update --global       # 刷新全局安装的技能文件
uipro init --offline        # 使用随包模板离线安装
uipro init --dry-run        # 预览安装动作，不写入文件
uipro uninstall             # 卸载自动检测到的平台
uipro uninstall --ai claude # 卸载指定平台
uipro uninstall --global    # 移除全局安装
```

## ✅ 前置条件

搜索脚本需要 Python 3.x：

```bash
python3 --version
brew install python3                         # macOS
sudo apt update && sudo apt install python3  # Ubuntu/Debian
winget install Python.Python.3.12            # Windows
```

## 💬 使用方式

### Skill Mode（自动激活）

支持：Claude Code、Cursor、Windsurf、Antigravity、Codex CLI、Continue、Gemini CLI、OpenCode、Qoder、CodeBuddy、Droid (Factory)、KiloCode、Warp、Augment、CodeWhale、ZCode、Kimi Code、Amazon Q Developer、OpenClaw、GitHub Copilot。

直接自然语言描述需求即可：

```text
Build a landing page for my SaaS product
```

> Trae 用户请先切换到 **SOLO** 模式，再提出 UI/UX 请求。

### Workflow Mode（斜杠命令）

支持：Kiro、Roo Code、KiloCode。

```text
/ui-ux-pro-max Build a landing page for my SaaS product
```

### 示例提示词

```text
Build a landing page for my SaaS product
Create a dashboard for healthcare analytics
Design a portfolio website with dark mode
Make a mobile app UI for e-commerce
Build a fintech banking app with dark theme
```

## 🧠 设计系统命令（高级）

```bash
# 生成 ASCII 设计系统输出
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness" --design-system -p "Serenity Spa"

# 生成 Markdown 设计系统输出
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "fintech banking" --design-system -f markdown

# 按领域检索
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "glassmorphism" --domain style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "elegant serif" --domain typography
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dashboard" --domain chart
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "decorative icon aria hidden" --domain icons
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "smooth stagger reveal" --domain motion

# 按技术栈检索指南
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "form validation" --stack react
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "responsive layout" --stack html-tailwind
```

### 持久化设计系统（Master + Overrides 模式）

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS dashboard" --design-system --persist -p "MyApp"
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS dashboard" --design-system --persist -p "MyApp" --page "dashboard"
```

生成结构：

```text
design-system/
└── myapp/                  # 每个项目一个目录（-p "MyApp" 的 slug）
    ├── MASTER.md           # 全局唯一事实源（颜色、字体、间距、组件）
    └── pages/
        └── dashboard.md    # 页面级覆盖（只记录与 Master 的偏差）
```

层级检索规则：构建具体页面时先查 `design-system/<project>/pages/<page>.md`，存在则覆盖 Master 规则，否则只使用 Master。

## 🛠️ 技术栈

本站本身使用：

- **HTML5**：语义化页面结构
- **CSS3**：Grid、Flexbox、Custom Properties、玻璃拟态和响应式设计
- **JavaScript**：原生 ES6+ 交互逻辑
- **Font Awesome**：图标库
- **Google Fonts**：Inter 与 JetBrains Mono

## 📂 项目结构

```text
ui-ux-pro-max-skill-cn/
├── index.html      # 中文教程主页面
├── style.css       # 样式文件
├── script.js       # 交互脚本
├── README.md       # 中文项目说明
├── README_ZH.md    # 上游官方中文 README（同步自 README.zh.md）
├── CNAME           # GitHub Pages 自定义域名
└── LICENSE         # MIT 许可证
```

## ✨ 本次同步内容（v2.15.0）

- 全站统计数据更新到 v2.15：79 种可检索 UI 风格（50 个常用）、192 套配色、74 种字体配对、25 种图表、22 个技术栈、119 条 UX 准则、192 条推理规则。
- 新增“v2.0 → v2.15 其他亮点”区块：字体库、图标与动效域、附加技能、韧性文本准则、Retheme 工作流、版本感知搜索。
- CLI 安装命令补全 25 个目标平台（新增 codewhale、zcode、kimi、amazonq、openclaw、autoclaw、universal）。
- 新增全局安装命令块（zcode / kimi / universal）与 `--dry-run`、`update --global` 命令。
- 手动安装表更新为当前模板路径（Cursor/Windsurf 已改为 Skill 模式，Copilot 改为 `.github/skills/`，Antigravity 使用 `.agents/skills/`）。
- Skill Mode / Workflow Mode 平台列表与上游对齐（Copilot 移入自动激活，斜杠命令仅剩 Kiro、Roo Code、KiloCode）。
- 技术栈网格补全 Nuxt.js/Nuxt UI、shadcn/ui、Jetpack Compose、Avalonia、Uno Platform。
- 设计系统持久化章节更新为 Master + Overrides 按项目分目录的结构。

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源。

原始 UI/UX Pro Max 项目：[nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

---

<p align="center">
  <strong>为 AI 时代打造的卓越设计技能库</strong>
</p>
