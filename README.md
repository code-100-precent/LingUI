# LingUI

一个现代化、功能丰富的 React UI 组件库，具有精美的动画和主题系统。

## ✨ 特性

- 🎨 **丰富的组件** - 包含 100+ 个精心设计的 React 组件
- 🎭 **精美动画** - 基于 Framer Motion 的流畅动画效果
- 🎨 **主题系统** - 内置多种主题，支持自定义主题
- 📱 **响应式设计** - 所有组件都支持移动端和桌面端
- ♿ **无障碍支持** - 遵循 WAI-ARIA 标准
- 🎯 **TypeScript** - 完整的 TypeScript 类型支持
- 🚀 **性能优化** - 内置性能监控和优化组件
- 🎵 **音频反馈** - 可选的音频交互反馈

## 📦 安装

```bash
npm install @lingui/ui
# 或
yarn add @lingui/ui
# 或
pnpm add @lingui/ui
```

## 🔧 依赖要求

LingUI 需要以下 peer dependencies：

- React >= 16.8.0
- React DOM >= 16.8.0

## 🚀 快速开始

### 基础使用

```tsx
import { Button, Card, Input } from '@lingui/ui';

function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        点击我
      </Button>
      
      <Card title="示例卡片" padding="md">
        <Input placeholder="输入内容" />
      </Card>
    </div>
  );
}
```

### 样式配置

LingUI 使用 Tailwind CSS。你需要在项目中配置 Tailwind CSS：

1. 安装 Tailwind CSS：

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. 在 `tailwind.config.js` 中添加内容路径：

```js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@lingui/ui/dist/**/*.{js,jsx,ts,tsx}"
  ],
  // ... 其他配置
}
```

3. 在 CSS 文件中导入 Tailwind：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📚 组件文档

### UI 组件

#### Button

```tsx
import { Button } from '@lingui/ui';

<Button 
  variant="primary" 
  size="md" 
  loading={false}
  onClick={() => console.log('clicked')}
>
  按钮文本
</Button>
```

**Props:**
- `variant`: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success' | 'warning'
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon'
- `loading`: boolean
- `leftIcon`: ReactNode
- `rightIcon`: ReactNode
- `fullWidth`: boolean
- `animation`: 'none' | 'scale' | 'bounce' | 'pulse' | 'slide'
- `enableAudio`: boolean

#### Card

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@lingui/ui';

<Card variant="elevated" padding="md">
  <CardHeader>
    <CardTitle>卡片标题</CardTitle>
  </CardHeader>
  <CardContent>
    卡片内容
  </CardContent>
  <CardFooter>
    卡片底部
  </CardFooter>
</Card>
```

#### Input

```tsx
import { Input } from '@lingui/ui';

<Input 
  label="用户名"
  placeholder="请输入用户名"
  error="错误信息"
  helperText="帮助文本"
  size="md"
/>
```

### 动画组件

```tsx
import { FadeIn, LoadingAnimation, ParticleEffect } from '@lingui/ui';

<FadeIn delay={0.2}>
  <div>淡入动画</div>
</FadeIn>

<LoadingAnimation />
<ParticleEffect />
```

### 布局组件

```tsx
import { Layout, Sidebar, PageContainer } from '@lingui/ui';

<Layout>
  <Sidebar />
  <PageContainer>
    页面内容
  </PageContainer>
</Layout>
```

### 表单组件

```tsx
import { AdvancedForm, FormField } from '@lingui/ui';

<AdvancedForm onSubmit={handleSubmit}>
  <FormField name="username" label="用户名" required />
  <FormField name="email" label="邮箱" type="email" />
</AdvancedForm>
```

## 🎨 主题系统

LingUI 内置了多种主题：

```tsx
import { setTheme, getCurrentTheme } from '@lingui/ui';

// 设置主题
setTheme('dark'); // 'default' | 'dark' | 'nature' | 'ocean' | 'sunset' | 'purple' | 'rose' | 'fresh'

// 获取当前主题
const currentTheme = getCurrentTheme();
```

## 🎵 音频反馈

```tsx
import { setAudioEnabled, playClickSound } from '@lingui/ui';

// 启用/禁用音频
setAudioEnabled(true);

// 播放音效
playClickSound();
```

## 📦 导出组件列表

### UI 组件
- Button, Card, Input, Select, Modal, Badge, Avatar, Tabs, Tooltip, Popover, Switch, Slider, Stepper, DatePicker, FileUpload, DragDrop, DragSort, EmptyState, Chart, MarkdownRenderer, InfiniteScroll, VirtualList, NotificationContainer, 等

### 布局组件
- Layout, Sidebar, Footer, Grid, PageContainer, PageHeader

### 表单组件
- AdvancedForm, FormField, FormSection

### 数据展示组件
- DataTable, ProgressBar, StatCard, Timeline, AdvancedChart

### 动画组件
- FadeIn, LoadingAnimation, ParticleEffect, PageTransition, ParallaxScroll, Typewriter, WaterRipple, 等

### 其他组件
- AuthModal, ErrorBoundary, PerformanceMonitor, PWAInstaller, 等

## 🛠️ 开发

```bash
# 克隆仓库
git clone https://github.com/yourusername/lingui.git

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 类型检查
npm run type-check
```

## ⚠️ 注意事项

### 依赖问题

某些工具函数（如 `axios.ts`, `notification.ts`）可能依赖应用特定的 stores 或 config 文件。如果遇到相关错误，你需要：

1. **实现缺失的依赖**：根据你的项目需求实现相应的 stores 或 config
2. **移除相关依赖**：如果不需要这些功能，可以移除相关导入

### Tailwind CSS 配置

LingUI 使用 Tailwind CSS，你需要在项目中配置 Tailwind。确保在 `tailwind.config.js` 中包含 LingUI 的路径：

```js
content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/@lingui/ui/dist/**/*.{js,jsx,ts,tsx}"
]
```

## 📝 License

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

如有问题或建议，请通过 GitHub Issues 联系我们。

## 📚 相关文档

- [发布指南](./PUBLISHING.md) - 如何发布新版本到 npm

