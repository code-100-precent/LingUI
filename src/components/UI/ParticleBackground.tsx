import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface ParticleBackgroundProps {
  className?: string
  particleCount?: number
  color?: string
  speed?: number
}

export const ParticleBackground = ({
  className = "",
  particleCount = 50,
  color = '#3b82f6',
  speed = 1
}: ParticleBackgroundProps) => {
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    vx: number
    vy: number
    size: number
  }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      size: Math.random() * 3 + 1
    }))
    setParticles(newParticles)
  }, [particleCount, speed])

  useEffect(() => {
    const animate = () => {
      setParticles(prev => prev.map(particle => {
        const newX = particle.x + particle.vx
        const newY = particle.y + particle.vy
        
        return {
          ...particle,
          x: newX > window.innerWidth ? 0 : newX < 0 ? window.innerWidth : newX,
          y: newY > window.innerHeight ? 0 : newY < 0 ? window.innerHeight : newY
        }
      }))
    }

    const interval = setInterval(animate, 16)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: color
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

