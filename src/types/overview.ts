export type WidgetType = 
  | 'stat-card'
  | 'hero-banner'
  | 'chart-line'
  | 'chart-bar'
  | 'chart-pie'
  | 'chart-area'
  | 'chart-radar'
  | 'activity-feed'
  | 'table'
  | 'feature-grid'
  | 'testimonial'
  | 'timeline'
  | 'progress-ring'
  | 'metric-comparison'
  | 'image'
  | 'video'
  | 'iframe'
  | 'markdown'
  | 'custom-html'

export type WidgetSize = 'small' | 'medium' | 'large'

export interface WidgetPosition {
  x: number
  y: number
  w: number
  h: number
}

export interface WidgetConfig {
  id: string
  type: WidgetType
  title: string
  size: WidgetSize
  position: WidgetPosition
  props: Record<string, any>
  visible: boolean
}

export interface OverviewConfig {
  widgets: WidgetConfig[]
  theme?: PageTheme
  layout?: {
    columns?: number
    gap?: number
  }
}

export interface ThemeStyle {
  primaryColor?: string
  secondaryColor?: string
  backgroundColor?: string
  textColor?: string
  borderRadius?: string
  spacing?: string
}

export interface PageTheme {
  name: string
  styles: ThemeStyle
}

export const widgetSizeMap = {
  small: 4,
  medium: 6,
  large: 12
}

export const widgetHeightMap: Record<WidgetType, number> = {
  'stat-card': 4,
  'hero-banner': 6,
  'chart-line': 6,
  'chart-bar': 6,
  'chart-pie': 6,
  'chart-area': 6,
  'chart-radar': 6,
  'activity-feed': 8,
  'table': 8,
  'feature-grid': 6,
  'testimonial': 4,
  'timeline': 8,
  'progress-ring': 4,
  'metric-comparison': 6,
  'image': 6,
  'video': 6,
  'iframe': 8,
  'markdown': 6,
  'custom-html': 6
}

export const themePresets: Record<string, PageTheme> = {
  default: {
    name: '默认',
    styles: {
      primaryColor: '#3b82f6',
      secondaryColor: '#64748b',
      backgroundColor: '#ffffff',
      textColor: '#1e293b',
      borderRadius: '0.5rem',
      spacing: '1rem'
    }
  },
  dark: {
    name: '深色',
    styles: {
      primaryColor: '#60a5fa',
      secondaryColor: '#94a3b8',
      backgroundColor: '#1e293b',
      textColor: '#f1f5f9',
      borderRadius: '0.5rem',
      spacing: '1rem'
    }
  }
}

