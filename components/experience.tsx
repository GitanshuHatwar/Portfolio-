"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "AI Developer",
    company: "Code Relay 3.0 Hackathon, IIT Bhubaneswar",
    location: "Bhubaneswar, India",
    period: " Jan 2025",
    description: [
      "Created an Edutech platform: A centralized web-based platform to organize and manage notes for students",
      "Developed an admin panel to create classes and add students to classes",
      "Integrated an interactive RAG (Retrieval-Augmented Generation) model for student engagement and intelligent note summarization",
      "Implemented real-time student-teacher interaction features to enhance learning experiences",
    ],
    technologies: ["React", "Node.js", "MongoDB", "LangChain", "OpenAI API"],
  },
   {
    title: "Independent Developer",
    company: "Personal Project",
    location: "Remote",
    period: "2024",
    description: [
      "Created a news summarizer web application to generate concise summaries of news articles",
      "Built the backend in Python for natural language processing and summarization logic",
      "Developed a user-friendly frontend in JavaScript for article submission and summary presentation",
      "Integrated APIs for fetching real-time news and delivering summaries to end-users",
    ],
    technologies: ["JavaScript", "Python", "Flask", "NLP APIs"],
  },
  {
    title: "Developer",
    company: "AI Hackathon, VNIT Nagpur",
    location: "Nagpur, India",
    period: "March 25",
    description: [
      "Developed a Smart Traffic Management System that dynamically adjusts traffic signal duration based on real-time vehicle counts",
      "Implemented vehicle detection and counting using OpenCV to determine congestion at intersections",
      "Designed an intelligent traffic light control algorithm to reduce waiting times and improve flow",
      "Collaborated in a team to deliver a fully functional prototype within the hackathon duration",
    ],
    technologies: ["Python", "OpenCV", "Flask", "NumPy"],
  },
 
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title + experience.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{experience.title}</h3>
                      <h4 className="text-lg text-purple-400 mb-2">{experience.company}</h4>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-gray-400">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {experience.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <ul className="text-gray-300 mb-6 space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-purple-400 mr-2 mt-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
