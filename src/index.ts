// UI Components
export { default as Button } from './components/UI/Button'
export { default as Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/UI/Card'
export { default as Input } from './components/UI/Input'
export { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from './components/UI/Select'
export { default as Modal } from './components/UI/Modal'
export { default as Badge } from './components/UI/Badge'
export { default as Avatar } from './components/UI/Avatar'
// NOTE: AvatarUpload 依赖 stores，已移除导出
// export { default as AvatarUpload } from './components/UI/AvatarUpload'
export { default as Tabs } from './components/UI/Tabs'
export { default as Tooltip } from './components/UI/Tooltip'
export { default as Popover } from './components/UI/Popover'
export { default as Switch } from './components/UI/Switch'
export { default as Slider } from './components/UI/Slider'
export { default as Stepper } from './components/UI/Stepper'
export { default as DatePicker } from './components/UI/DatePicker'
export { default as FileUpload } from './components/UI/FileUpload'
export { default as DragSort } from './components/UI/DragSort'
export { default as EmptyState } from './components/UI/EmptyState'
export { default as Chart } from './components/UI/Chart'
export { default as MarkdownRenderer } from './components/UI/MarkdownRenderer'
export { default as MarkdownPreview } from './components/UI/MarkdownPreview'
export { default as TypewriterMarkdown } from './components/UI/TypewriterMarkdown'
export { default as InfiniteScroll } from './components/UI/InfiniteScroll'
export { default as VirtualList } from './components/UI/VirtualList'
// NOTE: NotificationContainer 依赖 uiStore，已移除导出
// export { default as NotificationContainer } from './components/UI/NotificationContainer'
export { default as PositionedToast } from './components/UI/PositionedToast'
export { default as ConfirmDialog } from './components/UI/ConfirmDialog'
// NOTE: LanguageSelector 依赖 i18nStore，已移除导出
// export { default as LanguageSelector } from './components/UI/LanguageSelector'
export { default as AudioController } from './components/UI/AudioController'
export { default as EnhancedMagneticButton } from './components/UI/EnhancedMagneticButton'
// NOTE: EnhancedThemeToggle 依赖 stores，已移除导出
// export { default as EnhancedThemeToggle } from './components/UI/EnhancedThemeToggle'
export { default as EpicRatingEffect } from './components/UI/EpicRatingEffect'
export { default as AutocompleteInput } from './components/UI/AutocompleteInput'
// NOTE: GlobalSearch 已重构为接受 props，不再依赖 stores
export { default as GlobalSearch } from './components/UI/GlobalSearch'
export type { SearchResult, GlobalSearchProps } from './components/UI/GlobalSearch'
export { default as IconText } from './components/UI/IconText'
export { default as ChapterOutline } from './components/UI/ChapterOutline'
export { default as PageTurner } from './components/UI/PageTurner'
export { default as PlotManager } from './components/UI/PlotManager'

// Layout Components
export { default as Layout } from './components/Layout/Layout'
export { default as Sidebar } from './components/Layout/Sidebar'
export type { SidebarProps, NavigationItem } from './components/Layout/Sidebar'
export { default as Footer } from './components/Layout/Footer'
export type { FooterProps } from './components/Layout/Footer'
export { default as Grid } from './components/Layout/Grid'
export { default as PageContainer } from './components/Layout/PageContainer'
export { default as PageHeader } from './components/Layout/PageHeader'

// Form Components
export { default as AdvancedForm } from './components/Forms/AdvancedForm'
export { default as FormField } from './components/Forms/FormField'
export { default as FormSection } from './components/Forms/FormSection'

// Data Components
export { default as DataTable } from './components/Data/DataTable'
export { default as ProgressBar } from './components/Data/ProgressBar'
export { default as StatCard } from './components/Data/StatCard'
export { default as Timeline } from './components/Data/Timeline'
export { default as AdvancedChart } from './components/Data/AdvancedChart'

// Animation Components
export { default as FadeIn } from './components/Animations/FadeIn'
export { default as LoadingAnimation } from './components/Animations/LoadingAnimation'
export { default as StaggeredList } from './components/Animations/StaggeredList'
export { default as Wave } from './components/Animations/Wave'
export { default as MagneticButton } from './components/Animations/MagneticButton'
export * from './components/Animations/AdvancedAnimations'
export { default as OnboardingGuide } from './components/Animations/PremiumOnboarding'

// Auth Components
// NOTE: 以下组件包含业务逻辑和 API 调用，已移除导出
// export { default as AuthModal } from './components/Auth/AuthModal'
// export { default as CaptchaInput } from './components/Auth/CaptchaInput'
// export { default as CaptchaModal } from './components/Auth/CaptchaModal'
export { default as PasswordStrength } from './components/Auth/PasswordStrength'
// export { default as ProtectedRoute } from './components/Auth/ProtectedRoute'

// Accessibility Components
export { default as Announcer } from './components/Accessibility/Announcer'
export { default as FocusTrap } from './components/Accessibility/FocusTrap'
export { default as SkipLink } from './components/Accessibility/SkipLink'

// Error Boundary
// NOTE: ErrorBoundary 已移除
// export { default as ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary'

// Effects Components
export { default as BackgroundEffects } from './components/Effects/BackgroundEffects'
export { default as GlobalEffects } from './components/Effects/GlobalEffects'

// Voice Components
// NOTE: 以下 Voice 组件包含大量业务逻辑和 API 调用，已移除导出
// 如需使用，请自行清理业务逻辑
// export { default as VoicePlayer } from './components/Voice/VoicePlayer'
// export { default as VoiceRecorder } from './components/Voice/VoiceRecorder'

// Other Components
// NOTE: PWAInstaller 已移除
// export { default as PWAInstaller } from './components/PWA/PWAInstaller'
// NOTE: QuotaModal 依赖业务逻辑，已移除导出
// export { default as QuotaModal } from './components/Quota/QuotaModal'
// NOTE: UsageCharts 依赖业务 API，已移除导出
// export { default as UsageCharts } from './components/Billing/UsageCharts'
// NOTE: GraphVisualization 依赖业务 API，已移除导出
// export { default as GraphVisualization } from './components/Graph/GraphVisualization'
// NOTE: Terminal 已移除
// export { default as Terminal } from './components/Workflow/Terminal'
// NOTE: DocumentRenderer 已移除
// export { default as DocumentRenderer } from './components/Documentation/DocumentRenderer'
// MicroInteractions - 拆分为独立组件
export { 
  Typewriter, 
  HoverCard, 
  Skeleton, 
  ProgressIndicator, 
  Pulse, 
  ScrollReveal, 
  Magnetic, 
  Ripple, 
  ParticleBackground 
} from './components/UI'

// Utils
export { cn } from './utils/cn'
export * from './utils/themeAdapter'
export * from './utils/audioEffects'

// Types
export type { ButtonProps } from './components/UI/Button'
export type { CardProps } from './components/UI/Card'
export type { InputProps } from './components/UI/Input'
export * from './types/overview'

