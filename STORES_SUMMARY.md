# Stores 处理总结

## ✅ 已完成

### 1. 创建了 UIStore
- 位置：`src/stores/uiStore.ts`
- 功能：提供通知管理功能
- 使用：`useUIStore()` hook

### 2. 移除了所有 useAuthStore 引用
已从以下组件中移除：
- ✅ `src/components/UI/AvatarUpload.tsx` - 已注释，改为通过 props
- ✅ `src/components/Layout/Sidebar.tsx` - 已注释，改为默认值
- ✅ `src/components/Auth/AuthModal.tsx` - 已注释，改为空函数
- ✅ `src/components/Auth/ProtectedRoute.tsx` - 已注释，改为默认值

### 3. 修复了路径
- ✅ `NotificationContainer.tsx` - 使用相对路径 `../../stores/uiStore`
- ✅ `AvatarUpload.tsx` - 使用相对路径 `../../stores/uiStore`

## 📝 使用说明

### UIStore 使用

```typescript
import { useUIStore } from '@lingui/ui/stores/uiStore'

function MyComponent() {
  const { notifications, addNotification, removeNotification } = useUIStore()
  
  const handleClick = () => {
    addNotification({
      type: 'success',
      title: '操作成功',
      message: '您的操作已完成',
      duration: 3000
    })
  }
  
  return (
    <div>
      {notifications.map(notif => (
        <div key={notif.id}>{notif.title}</div>
      ))}
    </div>
  )
}
```

### 已移除的组件

以下组件已从入口文件移除，但仍保留在代码库中（供参考）：
- `Layout/Sidebar.tsx` - 需要认证状态和 i18n
- `Layout/Footer.tsx` - 需要 i18n
- `Auth/*` - 所有认证相关组件
- `UI/LanguageSelector.tsx` - 需要 i18n store
- `UI/EnhancedThemeToggle.tsx` - 需要 theme 和 i18n stores
- `Voice/*` - 所有语音相关组件

这些组件如果需要使用，需要：
1. 实现相应的 stores
2. 或通过 props 传入所需数据

## ⚠️ 注意事项

1. **UIStore 是独立的**：不依赖任何外部状态管理库
2. **AuthStore 已完全移除**：所有认证相关功能需要通过 props 或自定义实现
3. **i18nStore 未实现**：如果需要国际化，请自行实现或使用第三方库

