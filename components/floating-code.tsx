"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Globe, Smartphone } from "lucide-react"

const codeIcons = [Code, Database, Globe, Smartphone]

interface FloatingIcon {
  id: number
  x: number
  y: number
  targetX: number
  targetY: number
  icon: typeof Code
}

export function FloatingCode({ count = 5 }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [icons, setIcons] = useState<FloatingIcon[]>([])

  const minDistance = 120 // Minimum distance between icons

  const checkCollision = (x: number, y: number, existingIcons: FloatingIcon[], excludeId?: number) => {
    return existingIcons.some((icon) => {
      if (excludeId && icon.id === excludeId) return false
      const distance = Math.sqrt(Math.pow(x - icon.x, 2) + Math.pow(y - icon.y, 2))
      return distance < minDistance
    })
  }

  const generateSafePosition = (existingIcons: FloatingIcon[]) => {
    let attempts = 0
    let x, y

    do {
      x = Math.random() * (dimensions.width - 100) + 50
      y = Math.random() * (dimensions.height - 100) + 50
      attempts++
    } while (checkCollision(x, y, existingIcons) && attempts < 50)

    return { x, y }
  }

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const newIcons: FloatingIcon[] = []

    for (let i = 0; i < count; i++) {
      const position = generateSafePosition(newIcons)
      const targetPosition = generateSafePosition(newIcons)

      newIcons.push({
        id: i,
        x: position.x,
        y: position.y,
        targetX: targetPosition.x,
        targetY: targetPosition.y,
        icon: codeIcons[i % codeIcons.length],
      })
    }

    setIcons(newIcons)
  }, [count, dimensions])

  return (
    <div className="relative w-full h-full">
      {icons.map((iconData) => {
        const IconComponent = iconData.icon
        return (
          <motion.div
            key={iconData.id}
            className="absolute"
            initial={{
              x: iconData.x,
              y: iconData.y,
            }}
            animate={{
              x: [iconData.x, iconData.targetX, iconData.x],
              y: [iconData.y, iconData.targetY, iconData.y],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div className="relative w-16 h-16 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
              <IconComponent className="w-8 h-8 text-purple-400/50" />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
