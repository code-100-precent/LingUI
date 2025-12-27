import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
}

export const ScrollReveal = ({
  children,
  className = "",
  direction = 'up',
  delay = 0,
  duration = 0.6
}: ScrollRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  const directionMap = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 }
  }

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      })
    }
  }, [isInView, controls, duration, delay])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={directionMap[direction]}
      animate={controls}
    >
      {children}
    </motion.div>
  )
}

