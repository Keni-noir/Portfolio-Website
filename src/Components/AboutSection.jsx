import { Code, User, Video } from "lucide-react"
import CV from "../assets/GoodnessCV.pdf"

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 sm:px-12 md:px-24 relative">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="space-y-6 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold">
              I'm a Passionate Frontend Web Developer
            </h3>
            <p className="text-muted-foreground">
              I am a passionate web developer with a focus on creating dynamic
              and responsive web applications. My journey in web development
              began with a fascination for how websites work and the
              technologies behind them.
            </p>
            <p className="text-muted-foreground">
              I am a passionate web developer with a focus on creating dynamic
              and responsive web applications. My journey in web development
              began with a fascination for how websites work and the
              technologies behind them.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center ">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a href={CV} download className="cosmic-button">
                Download CV
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-left">Web Development</h4>
                  <p className="text-muted-foreground text-left">
                    Cuurently a Frontend Developer, aiming to be a Full-Stack Developer and WEB3 Enthusiast. Currently learning nextjs and nodejs.I ahve one year experinece building responsive and dynamic websites.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-left">Video Editing</h4>
                  <p className="text-muted-foreground text-left">
                    I also do video editing, Where i edit videos for social media contents. i use CapCut and for my editing.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-left">UI/UX</h4>
                  <p className="text-muted-foreground text-left">
                    I have a basic knowledge of UI/UX design, i can design simple and basic website using figma. i am currently learning more about UI/UX design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
