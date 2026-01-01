# UI/UX Pro Max

一款为跨平台和框架构建专业 UI/UX 提供设计智能的 AI 技能。

<p align="center">
  <img src="screenshots/website.png" alt="UI UX Pro Max" width="800">
</p>

## 概述
UI/UX Pro Max 是一个可搜索的 UI 风格、调色板、字体配对、图表类型、产品建议、UX 指南以及特定视角最佳实践的数据库。它作为 AI 编码助手（如 Claude Code、Cursor、Windsurf 等）的技能/工作流运行。

## 特性
- **57 种 UI 风格** - 玻璃拟态 (Glassmorphism)、粘土拟态 (Claymorphism)、极简主义 (Minimalism)、野兽派 (Brutalism)、新拟态 (Neumorphism)、Bento Grid、深色模式等。
- **95 种配色方案** - 针对 SaaS、电子商务、医疗保健、金融科技、美容等行业的专业色板。
- **56 种字体配对** - 策划的风格组合，包含 Google Fonts 导入。
- **24 种图表类型** - 用于仪表板和分析的建议。
- **8 种技术栈** - React、Next.js、Vue、Svelte、SwiftUI、React Native、Flutter、HTML+Tailwind。
- **98 条 UX 指南** - 最佳实践、反模式和无障碍规则。

## 安装

### 使用 CLI (推荐)
```bash
# 全局安装 CLI
npm install -g uipro-cli

# 进入你的项目目录
cd /path/to/your/project

# 为你的 AI 助手进行初始化
uipro init --ai claude      # Claude Code
uipro init --ai cursor      # Cursor
uipro init --ai windsurf    # Windsurf
uipro init --ai antigravity # Antigravity (.agent + .shared)
uipro init --ai copilot     # GitHub Copilot
uipro init --ai kiro        # Kiro
uipro init --ai all         # 所有助手
```

### 其他 CLI 命令
```bash
uipro versions              # 列出可用版本
uipro update                # 更新到最新版本
uipro init --version v1.0.0 # 安装特定版本
```

### 手动安装
将相应的文件夹复制到你的项目中：

| AI 助手 | 需要复制的文件夹 |
| -------------- | ------------------------------------------------------------------- |
| Claude Code    | `.claude/skills/ui-ux-pro-max/`                                     |
| Cursor         | `.cursor/commands/ui-ux-pro-max.md` + `.shared/ui-ux-pro-max/`      |
| Windsurf       | `.windsurf/workflows/ui-ux-pro-max.md` + `.shared/ui-ux-pro-max/`   |
| Antigravity    | `.agent/workflows/ui-ux-pro-max.md` + `.shared/ui-ux-pro-max/`      |
| GitHub Copilot | `.github/prompts/ui-ux-pro-max.prompt.md` + `.shared/ui-ux-pro-max/`|
| Kiro           | `.kiro/steering/ui-ux-pro-max.md` + `.shared/ui-ux-pro-max/`        |

## 前置条件
搜索脚本需要 Python 3.x。

```bash
# 检查 Python 是否已安装
python3 --version

# macOS
brew install python3

# Ubuntu/Debian
sudo apt update && sudo apt install python3

# Windows
winget install Python.Python.3.12
```

## 使用方法

### Claude Code
当你请求 UI/UX 工作时，该技能会自动激活。只需自然对话：

```
Build a landing page for my SaaS product
(为我的 SaaS 产品构建一个着陆页)
```

### Cursor / Windsurf / Antigravity
使用斜杠命令调用该技能：

```
/ui-ux-pro-max Build a landing page for my SaaS product
(/ui-ux-pro-max 为我的 SaaS 产品构建一个着陆页)
```

### Kiro
在聊天中输入 `/` 以查看可用命令，然后选择 `ui-ux-pro-max`：

```
/ui-ux-pro-max Build a landing page for my SaaS product
```

### GitHub Copilot
在带有 Copilot 的 VS Code 中，在聊天中输入 `/` 以查看可用提示，然后选择 `ui-ux-pro-max`：

```
/ui-ux-pro-max Build a landing page for my SaaS product
```

### 示例提示词
```
Build a landing page for my SaaS product
(为我的 SaaS 产品构建一个着陆页)

Create a dashboard for healthcare analytics
(为医疗分析创建一个仪表板)

Design a portfolio website with dark mode
(设计一个带有深色模式的作品集网站)

Make a mobile app UI for e-commerce
(为电子商务制作一个移动应用 UI)
```

### 工作原理
1. **你提问** - 请求任何 UI/UX 任务（构建、设计、创建、实现、审查、修复、改进）。
2. **技能激活** - AI 自动在设计数据库中搜索相关的风格、颜色、排版和指南。
3. **智能建议** - 根据你的产品类型和要求，它会找到最匹配的设计系统。
4. **代码生成** - 使用正确的颜色、字体、间距和最佳实践来实现 UI。

### 支持的技术栈
该技能为以下项提供特定技术栈的指南：

- **HTML + Tailwind** (默认)
- **React** / **Next.js**
- **Vue** / **Svelte**
- **SwiftUI** / **React Native** / **Flutter**

只需在提示语中提及你偏好的技术栈，或者让其默认使用 HTML + Tailwind。

## 星标历史
[![星标历史图表](https://api.star-history.com/svg?repos=nextlevelbuilder/ui-ux-pro-max-skill&type=Date)](https://star-history.com/#nextlevelbuilder/ui-ux-pro-max-skill&Date)

## 许可证
该项目根据 [MIT 许可证](LICENSE) 获得许可。
