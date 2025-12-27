import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface ProgressIndicatorProps {
  current: number
  total: number
  className?: string
  showPercentage?: boolean
  animated?: boolean
}

export const ProgressIndicator = ({
  current,
  total,
  className = "",
  showPercentage = true,
  animated = true
}: ProgressIndicatorProps) => {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className={cn('w-full', className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">
          进度
        </span>
        {showPercentage && (
          <span className="text-sm text-gray-500">
            {percentage}%
          </span>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: animated ? 0.8 : 0, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

