import React from 'react'

export interface FooterProps {
  teamName?: string
  teamDesc?: string
  icpNumber?: string
  icpUrl?: string
  className?: string
}

const Footer: React.FC<FooterProps> = ({
  teamName = 'Team',
  teamDesc = 'Development Team',
  icpNumber,
  icpUrl = 'https://beian.miit.gov.cn/',
  className = ''
}) => {
  // 如果没有设置ICP备案号，不显示Footer
  if (!icpNumber) {
    return null
  }

  return (
    <footer className={`w-full py-4 px-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 mt-auto ${className}`}>
      <div className="flex flex-col items-center justify-center gap-2">
        {/* 团队信息 */}
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <span>{teamName}：</span>
          <span className="font-medium">{teamDesc}</span>
        </div>
        
        {/* ICP备案号 */}
        <div className="flex items-center justify-center">
          <a
            href={icpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors flex items-center gap-1"
          >
            <span>ICP：</span>
            <span className="underline">{icpNumber}</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
