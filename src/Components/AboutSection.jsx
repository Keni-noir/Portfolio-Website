import { Code, User, Video } from "lucide-react"
import CV from "../assets/GoodnessCV.pdf"

export const AboutSection = () =>{
    return (
        <section id="about" className="py-24 px-24 relative">
            <div className="container max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-semibold">
                            I'm a Passionate Frontend Web Developer
                        </h3>
                        <p className="text-muted-foreground">
                            I am a passionate web developer with a focus on creating dynamic and responsive web applications. My journey in web development began with a fascination for how websites work and the technologies behind them.
                        </p>
                        <p className="text-muted-foreground">
                            I am a passionate web developer with a focus on creating dynamic and responsive web applications. My journey in web development began with a fascination for how websites work and the technologies behind them.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center ">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
                            <a href="" download={CV}className="cosmic-button">Download CV</a>
                        </div>
                    </div>


                    <div className="grid gird-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="w-6 h-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">Web Development</h4>
                                    <p className="text-muted-foreground">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet porro, quo sit tempora mollitia id!</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Video className="w-6 h-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">Video Editing</h4>
                                    <p className="text-muted-foreground">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet porro, quo sit tempora mollitia id!</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="w-6 h-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">UI/UX</h4>
                                    <p className="text-muted-foreground">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet porro, quo sit tempora mollitia id!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}