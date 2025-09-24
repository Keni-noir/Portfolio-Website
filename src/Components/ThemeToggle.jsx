import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "../lib/utils";

export const ThemeToggle = () =>{
    const [isDarkMode, setISDarkMode] = useState(false);

    useEffect(() =>{
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark")  {
            setISDarkMode(true);
            document.documentElement.classList.add("dark")
        } else{
            localStorage.setItem("theme", "light");
            setISDarkMode(false);
        }
    }, [])

    const toggleTheme =() =>{
        if (isDarkMode){
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light");
            setISDarkMode(false);
        } else{
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark");
            setISDarkMode(true);
        }
    }
    return(
        <button onClick={toggleTheme} className={cn("fixed top-5 right-20 md:right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
        )} >
            {""}
            {isDarkMode ? 
            (<Sun className="text-yellow-300 h-6 w-6" /> ) 
            :
             (<Moon className="text-blue-900 h-6 w-6"/>)}
             </button>
    )
}
