import { useState } from "react"
import { cn } from "../lib/utils"

const skills = [
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "Javascript", level: 70, category: "Frontend" },
  { name: "TailwindCss", level: 50, category: "Frontend" },
  { name: "React", level: 60, category: "Frontend" },

  { name: "Git/Github", level: 90, category: "tools" },
  { name: "Figma", level: 30, category: "tools" },
  { name: "VS Code", level: 60, category: "tools" },
  { name: "CapCut", level: 90, category: "tools" },
]

const Category = ["all", "Frontend", "tools"]

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  )

  return (
    <section
      id="skill"
      className="py-16 px-6 sm:px-12 md:px-24 relative bg-secondary/30"
    >
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {Category.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm sm:text-base transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 lg:gap-12">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 sm:p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-3">
                <h3 className="font-semibold text-base sm:text-lg">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
