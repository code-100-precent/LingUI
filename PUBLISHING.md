# 发布指南

## 准备工作

1. **更新版本号**
   ```bash
   npm version patch  # 补丁版本 (1.0.0 -> 1.0.1)
   npm version minor  # 次要版本 (1.0.0 -> 1.1.0)
   npm version major  # 主要版本 (1.0.0 -> 2.0.0)
   ```

2. **更新 package.json 中的仓库信息**
   - 将 `repository.url` 更新为你的 GitHub 仓库地址
   - 将 `bugs.url` 和 `homepage` 更新为正确的 URL

3. **安装依赖**
   ```bash
   npm install
   ```

4. **构建项目**
   ```bash
   npm run build
   ```

5. **类型检查**
   ```bash
   npm run type-check
   ```

## 发布到 npm

### 首次发布

1. **登录 npm**
   ```bash
   npm login
   ```

2. **发布包**
   ```bash
   npm publish --access public
   ```
   
   注意：如果包名是 `@lingui/ui`，需要使用 `--access public` 因为 scoped packages 默认是私有的。

### 后续发布

1. **更新版本号并发布**
   ```bash
   npm version patch && npm publish
   ```

## 发布到 GitHub

1. **提交更改**
   ```bash
   git add .
   git commit -m "chore: prepare for release v1.0.0"
   ```

2. **创建标签**
   ```bash
   git tag v1.0.0
   git push origin main --tags
   ```

3. **推送到 GitHub**
   ```bash
   git push origin main
   ```

## 注意事项

- 确保 `.npmignore` 文件正确配置，避免发布不必要的文件
- 确保 `dist` 目录包含构建后的文件
- 确保所有依赖都正确声明在 `package.json` 中
- 如果使用了外部依赖（如 stores、config），需要确保它们被正确处理或移除

## 已知问题

某些组件可能依赖应用特定的 stores 或 config 文件，这些需要在使用时由用户自行实现或移除相关依赖。

