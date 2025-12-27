import { motion } from 'framer-motion'

interface PulseProps {
  children: React.ReactNode
  className?: string
  intensity?: 'low' | 'medium' | 'high'
  duration?: number
}

export const Pulse = ({ 
  children, 
  className = "",
  intensity = 'medium',
  duration = 2
}: PulseProps) => {
  const intensityMap = {
    low: 1.05,
    medium: 1.1,
    high: 1.15
  }

  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, intensityMap[intensity], 1]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

