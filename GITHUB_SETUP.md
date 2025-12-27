# GitHub 上传指南

## 步骤 1: 初始化 Git 仓库（如果还没有）

```bash
git init
```

## 步骤 2: 添加所有文件

```bash
git add .
```

## 步骤 3: 提交代码

```bash
git commit -m "Initial commit: LingUI component library"
```

## 步骤 4: 在 GitHub 上创建仓库

1. 访问 https://github.com/new
2. 仓库名称：`LingUI` 或 `lingui-ui`
3. 描述：`A modern, feature-rich React UI component library`
4. 选择 Public 或 Private
5. **不要**勾选 "Initialize this repository with a README"（因为我们已经有了）
6. 点击 "Create repository"

## 步骤 5: 连接本地仓库到 GitHub

```bash
# 替换 <your-username> 为你的 GitHub 用户名
git remote add origin https://github.com/<your-username>/LingUI.git

# 或者使用 SSH（如果你配置了 SSH key）
# git remote add origin git@github.com:<your-username>/LingUI.git
```

## 步骤 6: 推送代码

```bash
git branch -M main
git push -u origin main
```

## 步骤 7: 更新 package.json 中的仓库信息

在 `package.json` 中更新以下字段：

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/<your-username>/LingUI.git"
  },
  "bugs": {
    "url": "https://github.com/<your-username>/LingUI/issues"
  },
  "homepage": "https://github.com/<your-username>/LingUI#readme"
}
```

## 可选：添加 GitHub Actions 自动构建

创建 `.github/workflows/build.yml`：

```yaml
name: Build and Test

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '20'
        cache: 'npm'
    
    - run: npm ci --legacy-peer-deps
    - run: npm run type-check
    - run: npm run build
```

## 注意事项

1. **不要提交** `node_modules/` 和 `dist/` 目录（已在 .gitignore 中）
2. **不要提交**敏感信息（API keys、tokens 等）
3. 确保 `.npmignore` 正确配置，避免发布不必要的文件
4. 首次推送可能需要输入 GitHub 用户名和密码（或使用 Personal Access Token）

