import { ThemeToggle } from "../Components/ThemeToggle";
import { StarsBackground } from "../Components/StarsBackground";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectSection } from "../Components/ProjectSection";
import { ContactSection } from "../Components/ContactSection";
import { Footer } from "../Components/Footer";
const Home = () => {
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Thewe Toggle */}
            <ThemeToggle />
            {/* Background Effect*/}
            <StarsBackground />
            {/* Navbar */}
            <Navbar />
            {/* Main Content*/}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectSection />
                <ContactSection />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home;