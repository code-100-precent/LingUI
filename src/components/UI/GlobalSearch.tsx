import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  X, 
  ArrowRight, 
  Bell, 
  User, 
  Layout, 
  Zap, 
  Square, 
  AlertCircle, 
  Info,
  FileText,
  Settings,
  Home
} from 'lucide-react'
// NOTE: 此组件已重构为接受 props，不再依赖 stores 和路由

import Card, { CardContent } from './Card'

// 搜索结果类型
export type SearchResult = {
  id: string
  title: string
  description?: string
  url?: string
  type: string
  icon?: string
  fragments?: Record<string, any>
}

export interface GlobalSearchProps {
  isOpen?: boolean
  query?: string
  results?: SearchResult[]
  isLoading?: boolean
  selectedIndex?: number
  searchEnabled?: boolean
  onOpen?: () => void
  onClose?: () => void
 onSelect?: (result: SearchResult) => void
  onQueryChange?: (query: string) => void
}

const GlobalSearch = ({
  isOpen = false,
  query = '',
  results = [],
  isLoading = false,
  selectedIndex = 0,
  searchEnabled = true,
  onOpen,
  onClose,
  onSelect,
  onQueryChange
}: GlobalSearchProps) => {
  // NOTE: 业务逻辑已移除，请通过 props 传入状态和回调

  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  // 点击外部关闭搜索
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        if (isOpen && onClose) {
          onClose()
        }
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  // 键盘快捷键监听
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K 打开搜索
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen && onClose) {
          onClose()
        } else if (!isOpen && onOpen) {
          onOpen()
        }
      }

      // ESC 关闭搜索
      if (e.key === 'Escape' && isOpen && onClose) {
        onClose()
      }

      // 在搜索框中的键盘操作
      if (isOpen) {
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault()
            // NOTE: 需要外部处理选中索引
            break
          case 'ArrowUp':
            e.preventDefault()
            // NOTE: 需要外部处理选中索引
            break
          case 'Enter':
            e.preventDefault()
            if (results[selectedIndex]) {
              handleSelectResult(results[selectedIndex])
            }
            break
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex, onOpen, onClose])

  // 输入框聚焦
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // 同步输入框值和搜索查询
  useEffect(() => {
    setInputValue(query)
  }, [query])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    if (onQueryChange) {
      onQueryChange(value)
    }
  }

  const handleSelectResult = (result: SearchResult) => {
    if (onSelect) {
      onSelect(result)
    } else if (result.url) {
      // 如果没有提供回调，使用默认行为（跳转）
      window.location.href = result.url
    }
    if (onClose) {
      onClose()
    }
  }

  const getResultIcon = (type: string, iconName?: string) => {
    const iconProps = { className: "w-4 h-4" }
    
    if (iconName) {
      switch (iconName) {
        case 'Bell': return <Bell {...iconProps} />
        case 'User': return <User {...iconProps} />
        case 'Layout': return <Layout {...iconProps} />
        case 'Zap': return <Zap {...iconProps} />
        case 'Square': return <Square {...iconProps} />
        case 'AlertCircle': return <AlertCircle {...iconProps} />
        case 'Info': return <Info {...iconProps} />
        case 'FileText': return <FileText {...iconProps} />
        case 'Settings': return <Settings {...iconProps} />
        case 'Home': return <Home {...iconProps} />
      }
    }

    switch (type) {
      case 'page': return <FileText {...iconProps} />
      case 'component': return <Square {...iconProps} />
      case 'notification': return <Bell {...iconProps} />
      case 'user': return <User {...iconProps} />
      default: return <Search {...iconProps} />
    }
  }

  const getResultTypeLabel = (type: string) => {
    switch (type) {
      case 'page': return '页面'
      case 'component': return '组件'
      case 'notification': return '通知'
      case 'user': return '用户'
      case 'content': return '内容'
      default: return '其他'
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        >
          <div className="flex items-start justify-center pt-20 px-4">
            <motion.div
              ref={searchRef}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="w-full max-w-2xl"
            >
              <Card className="border-0 shadow-2xl bg-card">
                <CardContent className="p-0">
                  {/* 搜索输入框 */}
                  <div className="flex items-center px-4 py-3 border-b border-border">
                    <Search className="w-5 h-5 text-muted-foreground mr-3" />
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="搜索页面、组件、通知..."
                      value={inputValue}
                      onChange={handleInputChange}
                      className="flex-1 bg-transparent border-0 outline-none text-foreground placeholder:text-muted-foreground text-lg"
                    />
                    <div className="flex items-center space-x-2 ml-3">
                      <kbd className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded border">
                        ESC
                      </kbd>
                      <button
                        onClick={onClose}
                        className="p-1 text-muted-foreground hover:text-foreground rounded hover:bg-accent transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* 搜索结果 */}
                  <div className="max-h-96 overflow-y-auto">
                    {isLoading ? (
                      <div className="flex items-center justify-center py-8">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                        <span className="ml-2 text-muted-foreground">搜索中...</span>
                      </div>
                    ) : query.trim() === '' ? (
                      <div className="px-4 py-8 text-center">
                        <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-2">开始输入以搜索</p>
                        <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <kbd className="px-2 py-1 bg-muted rounded border text-xs">⌘</kbd>
                            <kbd className="px-2 py-1 bg-muted rounded border text-xs">K</kbd>
                            <span>打开搜索</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <kbd className="px-2 py-1 bg-muted rounded border text-xs">↑</kbd>
                            <kbd className="px-2 py-1 bg-muted rounded border text-xs">↓</kbd>
                            <span>导航</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <kbd className="px-2 py-1 bg-muted rounded border text-xs">↵</kbd>
                            <span>选择</span>
                          </div>
                        </div>
                      </div>
                    ) : searchEnabled === false ? (
                      <div className="px-4 py-8 text-center">
                        <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-2">搜索功能未启用</p>
                        <p className="text-sm text-muted-foreground mb-4">请先启用搜索功能以使用全局搜索</p>
                        <button
                          onClick={() => {
                            // NOTE: 需要外部处理启用搜索
                            console.warn('Enable search functionality needs to be implemented')
                          }}
                          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          启用搜索功能
                        </button>
                      </div>
                    ) : results.length === 0 ? (
                      <div className="px-4 py-8 text-center">
                        <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">未找到相关结果</p>
                        <p className="text-sm text-muted-foreground mt-1">尝试使用不同的关键词</p>
                      </div>
                    ) : (
                      <div className="py-2">
                        {results.map((result, index) => (
                          <motion.div
                            key={result.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <button
                              onClick={() => handleSelectResult(result)}
                              className={`w-full flex items-center px-4 py-3 text-left hover:bg-accent transition-colors ${
                                index === selectedIndex ? 'bg-accent' : ''
                              }`}
                            >
                              <div className="flex items-center space-x-3 flex-1 min-w-0">
                                <div className="flex-shrink-0 text-muted-foreground">
                                  {getResultIcon(result.type, result.icon)}
                                </div>
                                
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <h3 className="font-medium text-foreground truncate">
                                      {result.title}
                                    </h3>
                                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                                      {getResultTypeLabel(result.type)}
                                    </span>
                                  </div>
                                  {result.description && (
                                    <p 
                                      className="text-sm text-muted-foreground truncate"
                                      dangerouslySetInnerHTML={{ 
                                        __html: result.description.replace(
                                          /<em>(.*?)<\/em>/g, 
                                          '<mark class="bg-yellow-200 dark:bg-yellow-800 px-0.5 rounded">$1</mark>'
                                        )
                                      }}
                                    />
                                  )}
                                </div>
                              </div>
                              
                              <div className="flex-shrink-0 text-muted-foreground">
                                <ArrowRight className="w-4 h-4" />
                              </div>
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 底部提示 */}
                  {results.length > 0 && (
                    <div className="px-4 py-2 border-t border-border bg-muted/50">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{results.length} 个结果</span>
                        <div className="flex items-center space-x-4">
                          <span>使用 ↑↓ 导航，↵ 选择</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default GlobalSearch
