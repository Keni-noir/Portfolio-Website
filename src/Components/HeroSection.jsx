import { ArrowDown } from "lucide-react"


export const HeroSection = () =>{
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 ">
            <div className="container max-w-5xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ">
                        <div className="space-y-4  mt-30 justify-center">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
                                <span className="opacity-0 animate-fade-in">Hi, i'm </span>
                                <span className="text-primary opacity-0 animate-fade-in-delay-1">Ajayi</span>
                                <span className="text-gradient opacity-0 animate-fade-in-delay-2 ml-2">Goodness</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-forground max-w-2xl opacity-0 animate-fade-in-delay-3">
                                i am a Frontend Developer currently aiming at Full-Stack Developer and WEB3 Enthusiat. Business Owner, Grace Footwears. Video Editor. A Graduate of Computer Science. </p>
                        </div>
                        <div className="w-108 h-108 mx-auto justify-end rounded-xl border-2 overflow-hidden opacity-0 animate-fade-in-delay-3">
                            <img src="/Professional Image.jpg" alt="Goodness-Picture" className=""/>
                        </div>
                    </div>

                    <div className="pt-4 opaacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">View my Works</a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-md text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    )
}