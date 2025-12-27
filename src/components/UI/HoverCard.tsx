import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface HoverCardProps {
  children: React.ReactNode
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export const HoverCard = ({ 
  children, 
  className = "",
  intensity = 'medium' 
}: HoverCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const intensityMap = {
    low: { scale: 1.02, shadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)' },
    medium: { scale: 1.05, shadow: '0 20px 40px -4px rgba(0, 0, 0, 0.15)' },
    high: { scale: 1.08, shadow: '0 25px 50px -5px rgba(0, 0, 0, 0.2)' }
  }

  const { scale, shadow } = intensityMap[intensity]

  return (
    <motion.div
      ref={cardRef}
      className={cn('transition-all duration-300', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? scale : 1,
        boxShadow: isHovered ? shadow : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        y: isHovered ? -8 : 0
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

