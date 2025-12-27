// 简单的 UI Store 实现
// 用于 NotificationContainer 等组件

import React from 'react'

export type ToastPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'bottom-center'

export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  duration?: number
  position?: ToastPosition
  scrollToPosition?: {
    x: number
    y: number
    behavior?: 'smooth' | 'instant' | 'auto'
  }
}

interface UIStoreState {
  notifications: Notification[]
}

class UIStore {
  private state: UIStoreState = {
    notifications: []
  }

  private listeners: Set<() => void> = new Set()

  getState(): UIStoreState {
    return this.state
  }

  subscribe(listener: () => void) {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }

  private notify() {
    this.listeners.forEach(listener => listener())
  }

  addNotification(notification: Omit<Notification, 'id'>) {
    const id = `notification-${Date.now()}-${Math.random()}`
    const newNotification: Notification = {
      id,
      ...notification
    }

    this.state.notifications.push(newNotification)
    this.notify()

    // 自动移除
    if (newNotification.duration !== 0) {
      const duration = newNotification.duration || 5000
      setTimeout(() => {
        this.removeNotification(id)
      }, duration)
    }

    return id
  }

  removeNotification(id: string) {
    this.state.notifications = this.state.notifications.filter(n => n.id !== id)
    this.notify()
  }

  clearNotifications() {
    this.state.notifications = []
    this.notify()
  }
}

// 创建单例
const uiStore = new UIStore()

// React Hook
export const useUIStore = () => {
  const [, forceUpdate] = React.useReducer(x => x + 1, 0)

  React.useEffect(() => {
    const unsubscribe = uiStore.subscribe(() => {
      forceUpdate()
    })
    return unsubscribe
  }, [])

  return {
    notifications: uiStore.getState().notifications,
    addNotification: (notification: Omit<Notification, 'id'>) => {
      return uiStore.addNotification(notification)
    },
    removeNotification: (id: string) => {
      uiStore.removeNotification(id)
    },
    clearNotifications: () => {
      uiStore.clearNotifications()
    }
  }
}

// 导出 store 实例（用于非 React 环境）
export { uiStore }

