"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { FloatingCode } from "@/components/floating-code"
import { RoboAnimation } from "@/components/robo-animation"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen flex items-center pt-20">
      {/* Floating code elements background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingCode count={8} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hi, I'm
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                Gitanshu Hatwar
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">Game Development & ML Enthusiast</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
            A dedicated student exploring game development and machine learning. Currently honing skills in Unity 3D,
            AI/ML (PyTorch, TensorFlow, scikit-learn). Proficient in DSA with C++, eager to contribute to innovative
            projects blending these technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-purple-500 hover:bg-purple-500/20"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-center gap-6"
          >
            <SocialLink href="https://github.com/GitanshuHatwar" icon={<Github className="w-6 h-6" />} />
            <SocialLink href="https://www.linkedin.com/in/gitanshu-hatwar/" icon={<Linkedin className="w-6 h-6" />} />
            <SocialLink
              href="https://drive.google.com/file/d/1SvtF0VnQ1CB9N-4KzHc_YHOiagGQFQ7-/view?usp=sharing"
              icon={<Download className="w-6 h-6" />}
            />
          </motion.div>
        </div>
      </div>

      {/* Animated developer illustration */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <RoboAnimation />
      </div>
    </div>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-full hover:bg-purple-500/10"
    >
      {icon}
    </a>
  )
}
