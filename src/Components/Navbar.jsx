import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react";

const  navItmes = [

        {name: "Home",href:"#hero"},
        {name: "About",href:"#about"},
        {name: "Skill",href:"#skill"},
        {name: "Project",href:"#projects"},
        {name: "Contact",href:"#contact"},

]

export const Navbar = () =>{
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>

            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Keni-Noir</span> Portfolio
                    </span>
                </a>
                {/* Desktop Navbar */}
                <div className="hidden md:flex space-x-8">
                    {navItmes.map((item, key) => (
                        <a href={item.href} key={key} className="text-foreground/80 hover:text-primary transition-colors duration-300 ">
                            {item.name}
                        </a>
                    ) )}
                </div>
                {/* mobile Navbar */}
                <button onClick={() => setMenuOpen((prev) => !prev)} className="md:hidden z-50 p-2 text-foreground">
                   {isMenuOpen ? <X size={24}/> : <Menu size={24} />}
                </button>
                    <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}>
                        <div className="flex flex-col space-y-8 text-xl">
                        {navItmes.map((item, key) => (
                            <a href={item.href} 
                            key={key} 
                            className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                            onClick={() => setMenuOpen(false)}>
                                {item.name}
                            </a>
                        ) )}
                                        </div>
                    </div>
            </div>
        </div>
    );
}