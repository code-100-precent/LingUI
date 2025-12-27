// UI Components
export { default as Button } from './components/UI/Button'
export { default as Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/UI/Card'
export { default as Input } from './components/UI/Input'
export { default as Select } from './components/UI/Select'
export { default as SimpleSelect } from './components/UI/SimpleSelect'
export { default as Modal } from './components/UI/Modal'
export { default as Badge } from './components/UI/Badge'
export { default as Avatar } from './components/UI/Avatar'
// NOTE: AvatarUpload 依赖 stores，已移除导出
// export { default as AvatarUpload } from './components/UI/AvatarUpload'
export { default as Tabs } from './components/UI/Tabs'
export { default as SimpleTabs } from './components/UI/SimpleTabs'
export { default as Tooltip } from './components/UI/Tooltip'
export { default as Popover } from './components/UI/Popover'
export { default as Switch } from './components/UI/Switch'
export { default as Slider } from './components/UI/Slider'
export { default as Stepper } from './components/UI/Stepper'
export { default as DatePicker } from './components/UI/DatePicker'
export { default as FileUpload } from './components/UI/FileUpload'
export { default as DragDrop } from './components/UI/DragDrop'
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
export { default as WordCounter } from './components/UI/WordCounter'
export { default as WritingAssistant } from './components/UI/WritingAssistant'

// Layout Components
export { default as Layout } from './components/Layout/Layout'
// NOTE: Sidebar 和 Footer 包含业务逻辑，已移除导出
// export { default as Sidebar } from './components/Layout/Sidebar'
// export { default as Footer } from './components/Layout/Footer'
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
export { default as ParticleEffect } from './components/Animations/ParticleEffect'
export { default as EnhancedParticleEffect } from './components/Animations/EnhancedParticleEffect'
export { default as PageTransition } from './components/Animations/PageTransition'
export { default as EnhancedPageTransition } from './components/Animations/EnhancedPageTransition'
export { default as ParallaxScroll } from './components/Animations/ParallaxScroll'
export { default as StaggeredList } from './components/Animations/StaggeredList'
export { default as Typewriter } from './components/Animations/Typewriter'
export { default as WaterRipple } from './components/Animations/WaterRipple'
export { default as SimpleWaterRipple } from './components/Animations/SimpleWaterRipple'
export { default as RealWaterRipple } from './components/Animations/RealWaterRipple'
export { default as CanvasWaterRipple } from './components/Animations/CanvasWaterRipple'
export { default as Wave } from './components/Animations/Wave'
export { default as GlitchEffect } from './components/Animations/GlitchEffect'
export { default as Card3D } from './components/Animations/Card3D'
export { default as MagneticButton } from './components/Animations/MagneticButton'
export { default as LottieAnimation } from './components/Animations/LottieAnimation'
export { default as AdvancedAnimations } from './components/Animations/AdvancedAnimations'
export { default as OnboardingGuide } from './components/Animations/OnboardingGuide'
export { default as SimpleOnboarding } from './components/Animations/SimpleOnboarding'
export { default as FixedOnboarding } from './components/Animations/FixedOnboarding'
export { default as PremiumOnboarding } from './components/Animations/PremiumOnboarding'

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
export { default as ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary'

// Performance Components
export { default as PerformanceMonitor } from './components/Performance/PerformanceMonitor'
export { default as AdvancedPerformanceMonitor } from './components/Performance/AdvancedPerformanceMonitor'
export { default as PerformanceOptimizer } from './components/Performance/PerformanceOptimizer'
export { default as LazyImage } from './components/Performance/LazyImage'
export { default as ImageOptimizer } from './components/Performance/ImageOptimizer'
export { default as PerformanceInfiniteScroll } from './components/Performance/InfiniteScroll'
export { default as PerformanceVirtualList } from './components/Performance/VirtualList'
export { default as PerformanceDataTable } from './components/Performance/DataTable'
export { default as HeavyChart } from './components/Performance/HeavyChart'
export { default as AdvancedMonitor } from './components/Performance/AdvancedMonitor'

// Effects Components
export { default as BackgroundEffects } from './components/Effects/BackgroundEffects'
export { default as GlobalEffects } from './components/Effects/GlobalEffects'
export { default as LiquidCrystalBackground } from './components/Effects/LiquidCrystalBackground'
export { default as EffectsPageTransition } from './components/Effects/PageTransition'

// Voice Components
// NOTE: 以下 Voice 组件包含大量业务逻辑和 API 调用，已移除导出
// 如需使用，请自行清理业务逻辑
// export { default as VoicePlayer } from './components/Voice/VoicePlayer'
// export { default as VoiceRecorder } from './components/Voice/VoiceRecorder'

// Other Components
export { default as PWAInstaller } from './components/PWA/PWAInstaller'
// NOTE: QuotaModal 依赖业务逻辑，已移除导出
// export { default as QuotaModal } from './components/Quota/QuotaModal'
// NOTE: UsageCharts 依赖业务 API，已移除导出
// export { default as UsageCharts } from './components/Billing/UsageCharts'
// NOTE: GraphVisualization 依赖业务 API，已移除导出
// export { default as GraphVisualization } from './components/Graph/GraphVisualization'
export { default as GestureDetector } from './components/Interaction/GestureDetector'
export { default as Terminal } from './components/Workflow/Terminal'
export { default as DocumentRenderer } from './components/Documentation/DocumentRenderer'
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
export { ProviderConfigForm } from './components/Credential'

// Utils
export { cn } from './utils/cn'
export * from './utils/themeAdapter'
export * from './utils/audioEffects'

// Types
export type { ButtonProps } from './components/UI/Button'
export type { CardProps } from './components/UI/Card'
export type { InputProps } from './components/UI/Input'
export * from './types/overview'

