# 类型错误说明

## 预期的类型错误

以下类型错误是**预期的**，因为这些组件包含业务逻辑或可选依赖，已从主入口文件移除：

### 业务组件（已移除导出）
- `src/components/Auth/AuthModal.tsx` - 依赖 `react-router-dom` 和业务 stores
- 其他 Auth 组件 - 依赖业务 API

这些组件已从 `src/index.ts` 中移除导出，类型错误不影响构建。

### 可选依赖组件

以下组件使用了可选依赖，如果不需要这些功能，可以忽略错误或安装依赖：

1. **FadeIn.tsx** - 使用 `react-intersection-observer`
   ```bash
   npm install react-intersection-observer --legacy-peer-deps
   ```

2. **LottieAnimation.tsx** - 使用 `lottie-web`
   ```bash
   npm install lottie-web --legacy-peer-deps
   ```

## 已修复的错误

- ✅ NodeJS 命名空间错误 - 已添加 `@types/node`
- ✅ 路径别名错误 - 已全部修复为相对路径
- ✅ Export 语法错误 - 已修复

## 构建说明

即使有这些类型错误，**构建仍然可以成功**，因为：
1. Rollup 会忽略未导出的文件
2. 业务组件已从入口文件移除
3. 可选依赖不影响核心功能

如果要在开发时消除这些错误，可以：
1. 安装可选依赖（见上）
2. 或者从 `.tsconfig.json` 中排除这些文件

