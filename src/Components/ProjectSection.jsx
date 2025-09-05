import Projects from "@/Components/Projects";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

export const ProjectSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl md:4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent prpjects, Each projects was carefully crafted with attention to details to ease user experience and interaction.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Projects.map((project,key) => (
                        <div key={key.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden"> 
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transistion-transform duration-500 group-hover:scale-110"/>
                            </div>
                            
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tags) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tags}</span>
                                    ))}
                                </div>
                            
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoURL}
                                    target="_blank" 
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.GithubRepo} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
               </div>
               <div className="text-center mt-12">
                <a href="#"
                className="cosmic-button w-fit flex mx-auto gap-2 items-center">
                    View All Projects <ArrowRight size={16}/>
                </a>
               </div>
            </div>
        </section>
    )
}