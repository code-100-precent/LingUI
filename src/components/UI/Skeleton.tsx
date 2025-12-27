import { cn } from '../../utils/cn'

interface SkeletonProps {
  className?: string
  lines?: number
  animated?: boolean
}

export const Skeleton = ({ 
  className = "",
  lines = 1,
  animated = true 
}: SkeletonProps) => {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'h-4 bg-gray-200 rounded',
            animated && 'animate-pulse'
          )}
          style={{
            width: `${Math.random() * 40 + 60}%`
          }}
        />
      ))}
    </div>
  )
}

