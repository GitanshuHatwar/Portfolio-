"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "EduTech Platform",
    description:
      "A Web based centralized platform to organize and manage notes provided to the students . The admin can create a class and add students in the class where students can interact with the RAG model",
    image:"https://infohub.delltechnologies.com/static/media/9198938f-8c47-5a0e-82d9-6db6a62cd3f7/DAM-44487bbd-6b53-448e-9316-1dfa795f1691/out/5185.007.png",
    tech: ["Python(Flask,Lang Chain,Gemini AI(LLM)","HTML","CSS","JS"],
    github: "https://github.com/GitanshuHatwar/Code-Relay-Hackathon-Project",
  },
  {
    title: "Traffic Management System",
    description:
      "Developed a Smart Traffic Management System Which Dnyamically Changes the Duration of Signal after determining the number of vehicals waiting on the singal using OpenCv .",
    image: "https://cdn.prod.website-files.com/628905bae461d31c437ea344/649550b93e2fa8199ffba8c8_intersection.webp",
    tech: ["Python","Object Detection Framework(Yolo-V8)","React","PostgreSQL"],
    github: "https://github.com/GitanshuHatwar/Traffic-Management-System-",
   
  },
  {
    title: "News Summarizer",
    description: [
  "Developed a web-based news summarizer using HTML, CSS, JavaScript, and Python",
  "Created a responsive interface for inputting articles and displaying concise summaries",
  "Focused on fast performance and user-friendly design",
],

    image: "https://uizard.io/static/e8319ba10f3535db2e20f21a0138eab9/a8e47/ea8f40ebb64f5a2eaf2aa185528eaef044ab7410-1440x835.png",
    tech: ["HTML","CSS","Js","Python"],
    github: "https://github.com/GitanshuHatwar/News-Center-Platform",
    
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-white mb-2">{project.title}</CardTitle>
        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700" asChild>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
