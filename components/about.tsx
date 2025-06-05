"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Rocket, Users } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          I'm a student pursuing a Diploma in Information Technology and a tech enthusiast who loves exploring new concepts, tools, and technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg mb-6">
              With a background in information technology and a passion for innovation, I specialize in exploring and leveraging modern technologies to build impactful digital solutions
            </p>
            <p className="text-gray-300 text-lg mb-6">
              I love exploring new features, tools, and technologies. My strong communication skills help me collaborate with diverse teams to build practical, innovative projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <FeatureCard
              icon={<Code className="w-8 h-8 text-purple-400" />}
              title="Problem Solving"
              description="Good at solving Logica Problems"
            />
            <FeatureCard
              icon={<Palette className="w-8 h-8 text-pink-400" />}
              title="UI/UX"
              description="Creating beautiful user interfaces"
            />
            <FeatureCard
              icon={<Rocket className="w-8 h-8 text-blue-400" />}
              title="AI & ML "
              description="ML in Game Devleopment Enthusiast "
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-green-400" />}
              title="Communication Skills"
              description="Working effectively in teams"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
