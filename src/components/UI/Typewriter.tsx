import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface TypewriterProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  onComplete?: () => void
}

export const Typewriter = ({
  text,
  speed = 50,
  delay = 0,
  className = "",
  onComplete
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  // 确保text是字符串类型
  const safeText = text || ''

  // 当text改变时重置打字机状态
  useEffect(() => {
    setDisplayText('')
    setCurrentIndex(0)
    setIsComplete(false)
  }, [safeText])

  useEffect(() => {
    if (currentIndex < safeText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + safeText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, currentIndex === 0 ? delay + speed : speed)

      return () => clearTimeout(timeout)
    } else if (onComplete && !isComplete) {
      onComplete()
      setIsComplete(true)
    }
  }, [currentIndex, safeText, speed, delay, onComplete, isComplete])

  return (
    <span className={cn('inline-block text-inherit', className)}>
      {currentIndex < safeText.length ? (
        <>
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-1 text-inherit"
          >
            |
          </motion.span>
        </>
      ) : (
        <>
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-1 text-inherit"
          >
            |
          </motion.span>
        </>
      )}
    </span>
  )
}

