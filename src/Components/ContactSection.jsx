import { Facebook, FactoryIcon, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import { cn } from "../lib/utils"
import { useToast } from "@/Hooks/use-toast"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { use } from "react"
export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmiting, setIsSubmiting] = useState();

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = "service_n9i4zts";
        const templateID = "template_vhhzhia";
        const publicID = "zvubO5c6_-0IuKo5L";

        const templateParams = {
            name: name,
            email: email,
            message: message,
        };

        emailjs.send(serviceID, templateID, templateParams, publicID)
        .then((response)=> {
            console.log("Message sent successfully!", response);
            setName("");
            setEmail("");
            setMessage("");
        },
        (error) => {
      console.log('FAILED...', error);
     },
    )
        
        

        setIsSubmiting(true);
        
        setTimeout(() => {
                toast({
                title: "Message Sent",
                description: "Thank you for reaching out. I'll get back to you soon!",
                variant: "default",
                })
                setIsSubmiting(false);
        },1500)
    }
    return (
        <section 
        id="contact"
        className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center  ">
                    Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or just want to say hi? My inbox is always open. Whether you have a question, a collaboration idea, or just want to chat about tech, feel free to reach out. I look forward to connecting with you!
                </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                              <Mail className="h-6 w-6 text-primary"/> 
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:keninoir03@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">keninoir03@gmail.com</a>
                            </div>
                       </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10"> 
                        <Phone className="h-6 w-6 text-primary"/> 
                        </div>
                        <div>
                            <h4 className="font-medium">Phone</h4>
                            <a href="tel:09033931108" className="text-muted-foreground hover:text-primary transition-colors">+234 (0) 9033931108</a>
                        </div>
                    </div>
                     <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10"> 
                        <MapPin className="h-6 w-6 text-primary"/> 
                        </div>
                        <div>
                            <h4 className="font-medium">Address</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">Nigeria,Lagos</a>
                        </div>
                    </div>
                    <div className="pt-8">
                    <h4 className="font-medium mb-4 ">Connect With Me</h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.linkedin.com/in/goodness-ajayi-a6a0b1382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                            <Linkedin />
                        </a>
                        <a href="https://www.instagram.com/kunle.oa?igsh=MWpqejJpeDEwcWk5cQ==" target="_blank">
                            <Instagram />
                        </a>
                        <a href="https://x.com/Keninior?t=6ItUuFJzG05LQ1ic31EsWA&s=09" target="_blank">
                            <Twitter />
                        </a>
                        <a href="#" target="_blank">
                            <Facebook />
                        </a>
                    </div>
                  </div>
                  </div>
                  <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6 ">Send a Messages</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm mb-2 font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    required
                                    placeholder="Goodness"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm mb-2 font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    required
                                    placeholder="abc123@gmail.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm mb-2 font-medium">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    required
                                    placeholder="Type message here..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmiting}
                                className={cn("w-full cosmic-button flex items-center justify-center gap-2")}
                            >
                                {isSubmiting ? "Sending..." : "Send Message"} <Send />
                            </button>
                        </form>

                  </div>
               </div>
            </div>      
       </section>
    )
}