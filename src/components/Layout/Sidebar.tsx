import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Component, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Bot,
  User as UserIcon,
  LogOut,
  Bell,
  BookOpen,
  Key,
  FileText,
  Users,
  AlertTriangle,
  Database,
  Smartphone,
  Library,
  GitBranch,
  LayoutDashboard,
} from 'lucide-react'
import Button from '../UI/Button'

export interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export interface SidebarProps {
  logo?: React.ReactNode
  logoText?: string
  navigation?: NavigationItem[]
  isAuthenticated?: boolean
  user?: {
    displayName?: string
    avatar?: string
  }
  groups?: Array<{ id: number | string; name: string; avatar?: string }>
  currentOrganizationId?: number | string | null
  onOrganizationChange?: (id: number | string) => void
  onLogin?: () => void
  onLogout?: () => void
  onNavigate?: (path: string) => void
  currentPath?: string
  className?: string
}

const Sidebar = ({
  logo,
  logoText = 'LingUI',
  navigation = [],
  isAuthenticated = false,
  user,
  groups = [],
  currentOrganizationId = null,
  onOrganizationChange,
  onLogin,
  onLogout,
  onNavigate,
  currentPath = '/',
  className = ''
}: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownContainerRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // 默认导航项
  const defaultNavigation: NavigationItem[] = [
    { name: 'Overview', href: '/overview', icon: LayoutDashboard },
    { name: 'Smart Assistant', href: '/voice-assistant', icon: Bot },
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Knowledge Base', href: '/knowledge', icon: Library },
    { name: 'Workflow', href: '/workflows', icon: GitBranch },
    { name: 'Notifications', href: '/notification', icon: Bell },
    { name: 'Alerts', href: '/alerts', icon: AlertTriangle },
    { name: 'Components', href: '/components', icon: Component },
    { name: 'Billing', href: '/billing', icon: FileText },
    { name: 'Groups', href: '/groups', icon: Users },
    { name: 'Devices', href: '/devices', icon: Smartphone },
    { name: 'Docs', href: '/docs', icon: BookOpen },
  ]

  const navItems = navigation.length > 0 ? navigation : defaultNavigation

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    if (showDropdown) {
      const timer = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside)
      }, 100)
      return () => {
        clearTimeout(timer)
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [showDropdown])

  const handleNavClick = (href: string) => {
    if (onNavigate) {
      onNavigate(href)
    }
  }

  const isActive = (path: string) => currentPath === path || currentPath.startsWith(path + '/')

  // 桌面端侧边栏内容
  const desktopSidebarContent = (
    <>
      {/* 顶部 LOGO 区域 */}
      <div className="h-14 flex items-center border-b border-border px-3 relative">
        {!isCollapsed && (
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('/')}>
            {logo || (
              <div className="w-6 h-8 rounded bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">L</span>
              </div>
            )}
            <span className="relative inline-block text-sm font-extrabold tracking-wider">
              <span className="block">{logoText}</span>
              <span className="absolute inset-0 bg-gradient-to-r via-violet-400 bg-clip-text text-transparent pointer-events-none select-none">
                {logoText}
              </span>
            </span>
          </div>
        )}
        {/* 桌面端折叠/展开按钮 */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute right-2 top-3 inline-flex items-center justify-center w-7 h-7 rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
          title={isCollapsed ? 'Expand' : 'Collapse'}
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* 导航 */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map(item => {
          const Icon = item.icon
          return (
            <div
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`group relative flex items-center rounded-md font-medium transition-colors cursor-pointer ${
                isActive(item.href)
                  ? 'text-foreground bg-accent'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              } ${isCollapsed ? 'justify-center px-2 py-3 hover:bg-accent/50' : 'px-3 py-2'}`}
              title={isCollapsed ? item.name : ''}
            >
              <Icon
                className={`${
                  isCollapsed 
                    ? 'w-5 h-5' 
                    : 'w-4 h-4 mr-3'
                } ${
                  isActive(item.href)
                    ? 'text-foreground'
                    : isCollapsed
                      ? 'text-foreground group-hover:text-foreground'
                      : 'text-muted-foreground group-hover:text-foreground'
                } flex-shrink-0`}
              />
              {!isCollapsed && (
                <motion.span
                  initial={false}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs whitespace-nowrap"
                >
                  {item.name}
                </motion.span>
              )}
              {(isActive(item.href)) && !isCollapsed && (
                <motion.div
                  layoutId="activeSidebarItem"
                  className="absolute right-0 w-1 h-6 bg-primary rounded-l-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
                />
              )}
            </div>
          )
        })}
      </nav>
      
      {/* 底部功能区 */}
      <div className="mt-auto p-2 flex flex-col gap-2 relative">
        <div>
          {isAuthenticated && user ? (
            <div 
              className="relative"
              ref={dropdownContainerRef}
              onMouseEnter={() => {
                if (hoverTimeoutRef.current) {
                  clearTimeout(hoverTimeoutRef.current)
                  hoverTimeoutRef.current = null
                }
                if (!isCollapsed) {
                  setShowDropdown(true)
                }
              }}
              onMouseLeave={() => {
                if (hoverTimeoutRef.current) {
                  clearTimeout(hoverTimeoutRef.current)
                }
                hoverTimeoutRef.current = setTimeout(() => {
                  setShowDropdown(false)
                  hoverTimeoutRef.current = null
                }, 150)
              }}
            >
              <button
                ref={buttonRef}
                className={`flex items-center w-full p-1 rounded hover:bg-accent transition-colors group text-muted-foreground hover:text-foreground ${isCollapsed ? 'justify-center' : ''}`}
                onClick={() => setShowDropdown((open) => !open)}
              >
                <div className={`rounded-full bg-primary text-primary-foreground flex items-center justify-center ${isCollapsed ? 'w-9 h-9' : 'w-8 h-8 mr-2'}`}>
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.displayName || 'User'}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-xs font-semibold">
                      {(user.displayName || 'U').charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                {!isCollapsed && (
                  <span className="text-sm font-medium truncate max-w-[80px]">{user.displayName || 'User'}</span>
                )}
              </button>
              {showDropdown && !isCollapsed && (
                <div 
                  ref={dropdownRef}
                  className="absolute right-0 bottom-full mb-2 w-40 bg-popover rounded-md shadow-lg border z-50"
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current)
                      hoverTimeoutRef.current = null
                    }
                    setShowDropdown(true)
                  }}
                  onMouseLeave={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current)
                    }
                    hoverTimeoutRef.current = setTimeout(() => {
                      setShowDropdown(false)
                      hoverTimeoutRef.current = null
                    }, 150)
                  }}
                >
                  <div className="flex flex-col p-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 w-full justify-start text-sm px-3 py-2"
                      onClick={() => { setShowDropdown(false); handleNavClick('/profile') }}
                      leftIcon={<UserIcon className="w-4 h-4" />}
                    >
                      Profile
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 w-full justify-start text-sm px-3 py-2"
                      onClick={() => { setShowDropdown(false); handleNavClick('/credential') }}
                      leftIcon={<Key className="w-4 h-4" />}
                    >
                      Credentials
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 w-full justify-start text-sm px-3 py-2"
                      onClick={() => { setShowDropdown(false); handleNavClick('/quotas') }}
                      leftIcon={<Database className="w-4 h-4" />}
                    >
                      Quotas
                    </Button>
                    {onLogout && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-2 w-full justify-start text-sm px-3 py-2"
                        onClick={() => { setShowDropdown(false); onLogout() }}
                        leftIcon={<LogOut className="w-4 h-4" />}
                      >
                        Logout
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Button
              variant="primary"
              className="w-full justify-center"
              onClick={onLogin}
              leftIcon={<UserIcon className="w-4 h-4" />}
            >
              {!isCollapsed && 'Login'}
            </Button>
          )}
        </div>
        
        {/* 组织选择器 */}
        {isAuthenticated && groups.length > 0 && (
          <div className="mt-1 pt-1 border-t border-border">
            {!isCollapsed ? (
              <div 
                className="flex items-center gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {groups.map((group) => {
                  const isSelected = currentOrganizationId === group.id
                  const groupInitial = group.name.charAt(0).toUpperCase()
                  
                  return (
                    <motion.button
                      key={group.id}
                      onClick={() => onOrganizationChange?.(group.id)}
                      className={`
                        relative flex-shrink-0 w-6 h-6 rounded-lg overflow-hidden
                        transition-all duration-200
                        ${isSelected 
                          ? 'ring-2 ring-blue-400/40 ring-offset-1 ring-offset-background' 
                          : 'hover:ring-2 hover:ring-muted'
                        }
                      `}
                      title={group.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {group.avatar ? (
                        <img
                          src={group.avatar}
                          alt={group.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                            const parent = target.parentElement
                            if (parent && !parent.querySelector('.fallback-avatar')) {
                              const fallback = document.createElement('div')
                              fallback.className = 'fallback-avatar w-full h-full flex items-center justify-center bg-primary text-primary-foreground text-xs font-semibold'
                              fallback.textContent = groupInitial
                              parent.appendChild(fallback)
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary text-primary-foreground text-xs font-semibold">
                          {groupInitial}
                        </div>
                      )}
                      {isSelected && (
                        <motion.div
                          className="absolute inset-0 bg-primary/20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      {isSelected && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400/40"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.button>
                  )
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1.5">
                {groups.slice(0, 3).map((group) => {
                  const isSelected = currentOrganizationId === group.id
                  const groupInitial = group.name.charAt(0).toUpperCase()
                  
                  return (
                    <motion.button
                      key={group.id}
                      onClick={() => onOrganizationChange?.(group.id)}
                      className={`
                        relative w-7 h-7 rounded-lg overflow-hidden
                        transition-all duration-200
                        ${isSelected 
                          ? 'ring-2 ring-blue-400/40' 
                          : 'hover:ring-2 hover:ring-muted'
                        }
                      `}
                      title={group.name}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {group.avatar ? (
                        <img
                          src={group.avatar}
                          alt={group.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                            const parent = target.parentElement
                            if (parent && !parent.querySelector('.fallback-avatar')) {
                              const fallback = document.createElement('div')
                              fallback.className = 'fallback-avatar w-full h-full flex items-center justify-center bg-primary text-primary-foreground text-[10px] font-semibold'
                              fallback.textContent = groupInitial
                              parent.appendChild(fallback)
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary text-primary-foreground text-[10px] font-semibold">
                          {groupInitial}
                        </div>
                      )}
                      {isSelected && (
                        <motion.div
                          className="absolute inset-0 bg-primary/20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        />
                      )}
                    </motion.button>
                  )
                })}
                {groups.length > 3 && (
                  <div className="text-[10px] text-muted-foreground">+{groups.length - 3}</div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )

  return (
    <>
      {/* 桌面端侧边栏 */}
      <motion.aside
        initial={false}
        animate={{ width: isCollapsed ? 72 : 192 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`hidden lg:flex flex-col bg-background border-r border-border relative ${className}`}
      >
        {desktopSidebarContent}
      </motion.aside>

      {/* 移动端顶部 Header */}
      <header className={`lg:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border ${className}`}>
        {/* LOGO 和用户信息行 */}
        <div className="h-14 flex items-center justify-between px-4 border-b border-border">
          <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('/')}>
            {logo || (
              <div className="w-6 h-8 rounded bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">L</span>
              </div>
            )}
            <span className="text-sm font-extrabold tracking-wider">
              {logoText}
            </span>
          </div>
          
          {/* 用户信息 */}
          <div className="flex items-center gap-2">
            {isAuthenticated && groups.length > 0 && (
              <div className="flex items-center gap-1.5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-w-[120px]">
                {groups.map((group) => {
                  const isSelected = currentOrganizationId === group.id
                  const groupInitial = group.name.charAt(0).toUpperCase()
                  
                  return (
                    <button
                      key={group.id}
                      onClick={() => onOrganizationChange?.(group.id)}
                      className={`relative flex-shrink-0 w-6 h-6 rounded-lg overflow-hidden transition-all ${
                        isSelected ? 'ring-2 ring-primary' : ''
                      }`}
                      title={group.name}
                    >
                      {group.avatar ? (
                        <img
                          src={group.avatar}
                          alt={group.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary text-primary-foreground text-xs font-semibold">
                          {groupInitial}
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            )}
            
            {isAuthenticated && user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 p-1 rounded hover:bg-accent transition-colors"
                >
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.displayName || 'User'}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <span className="text-xs font-semibold">
                        {(user.displayName || 'U').charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </button>
                {showDropdown && (
                  <div className="absolute right-0 top-full mt-2 w-40 bg-popover rounded-md shadow-lg border z-50">
                    <div className="flex flex-col p-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-2 w-full justify-start text-sm px-3 py-2"
                        onClick={() => { setShowDropdown(false); handleNavClick('/profile') }}
                        leftIcon={<UserIcon className="w-4 h-4" />}
                      >
                        Profile
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-2 w-full justify-start text-sm px-3 py-2"
                        onClick={() => { setShowDropdown(false); handleNavClick('/credential') }}
                        leftIcon={<Key className="w-4 h-4" />}
                      >
                        Credentials
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-2 w-full justify-start text-sm px-3 py-2"
                        onClick={() => { setShowDropdown(false); handleNavClick('/quotas') }}
                        leftIcon={<Database className="w-4 h-4" />}
                      >
                        Quotas
                      </Button>
                      {onLogout && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-2 w-full justify-start text-sm px-3 py-2"
                          onClick={() => { setShowDropdown(false); onLogout() }}
                          leftIcon={<LogOut className="w-4 h-4" />}
                        >
                          Logout
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Button
                variant="primary"
                size="sm"
                onClick={onLogin}
                leftIcon={<UserIcon className="w-4 h-4" />}
              >
                Login
              </Button>
            )}
          </div>
        </div>

        {/* 导航项横向滚动 */}
        <div className="h-12 flex items-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-background border-b border-border">
          <nav className="flex items-center gap-1 px-2 min-w-max">
            {navItems.map(item => {
              const Icon = item.icon
              const active = isActive(item.href)
              return (
                <div
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`group relative flex items-center gap-2 px-3 py-2 rounded-md font-medium text-xs whitespace-nowrap transition-colors cursor-pointer ${
                    active
                      ? 'text-foreground bg-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{item.name}</span>
                  {active && (
                    <motion.div
                      layoutId="activeMobileNavItem"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
                    />
                  )}
                </div>
              )
            })}
          </nav>
        </div>
      </header>
    </>
  )
}

export default Sidebar
