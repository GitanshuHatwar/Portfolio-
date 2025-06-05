"use client"

import { Button } from "@/components/ui/button"
import { Code, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import type React from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Code className="w-8 h-8 text-purple-500" />
        <span className="text-white font-medium text-xl">Portfolio</span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink onClick={() => scrollToSection("about")}>About</NavLink>
        <NavLink onClick={() => scrollToSection("projects")}>Projects</NavLink>
        <NavLink onClick={() => scrollToSection("skills")}>Skills</NavLink>
        <NavLink onClick={() => scrollToSection("contact")}>Contact</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button
          variant="outline"
          className="text-white border-purple-500 hover:bg-purple-500/20"
          onClick={() => scrollToSection("contact")}
        >
          Get In Touch
        </Button>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-white/10 md:hidden"
        >
          <div className="flex flex-col space-y-4 px-6 py-4">
            <MobileNavLink onClick={() => scrollToSection("about")}>About</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("projects")}>Projects</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("skills")}>Skills</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("contact")}>Contact</MobileNavLink>
            <Button
              variant="outline"
              className="text-white border-purple-500 hover:bg-purple-500/20 mt-4"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

function NavLink({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </button>
  )
}

function MobileNavLink({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="text-gray-300 hover:text-white transition-colors text-left">
      {children}
    </button>
  )
}
