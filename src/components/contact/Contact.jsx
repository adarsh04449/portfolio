import { Linkedin, Github, Mail, Phone } from "lucide-react"
import ContactForm from "./Contactform";


const Contact = () => {
    return (
        <section id="contact" className="mt-15 p-10">
            <div className="flex flex-col justify-center mb-5">
                <p className="text-xl text-gray-400">Get in Touch</p>
                <h1 className="text-5xl font-bold text-white">Contact</h1>
            </div>
            <div className="contact-container flex flex-col sm:flex-row ">
                <div className="contact-info flex flex-col items-center justify-evely gap-6 mb-10 sm:mb-0">
                    <p className="text-white max-w-3xl text-xl py-2">I'm always open to new opportunities, collaborations, and creative ideas. Feel free to reach out anytime—I'd love to be part of your vision</p>
                    <a href="https://www.linkedin.com/in/adarsh-shresth-890377298/" target="_blank" rel="noreferrer" class="block py-3 px-7 rounded-lg bg-[#00377e] text-white hover:bg-violet-400 transition-colors duration-300"><div className="inline-flex gap-2"><Linkedin className="text-white"/><span className="text-xl font-bold">LinkedIn</span></div></a>
                    <a href="https://github.com/adarsh04449" target="_blank" rel="noreferrer" class="block py-3 px-7 rounded-lg bg-[#00377e] text-white hover:bg-violet-400 transition-colors duration-300"><div className="inline-flex gap-2"><Github className="text-white"/><span className="text-xl font-bold">Github</span></div></a>
                    <a href="mailto:adars.shresth11@gmail.com" target="_blank" rel="noreferrer" class="block py-3 px-7 rounded-lg bg-[#00377e] text-white hover:bg-violet-400 transition-colors duration-300"><div className="inline-flex gap-2"><Mail className="text-white"/><span className="text-xl font-bold">Email</span></div></a>
                    <a href="tel:+14085815929" target="_blank" rel="noreferrer" class="block py-3 px-7 rounded-lg bg-[#00377e] text-white hover:bg-violet-400 transition-colors duration-300"><div className="inline-flex gap-2"><Phone className="text-white"/><span className="text-xl font-bold">Phone</span></div></a>
                </div>
                <div className="w-px bg-gray-600" />
                <ContactForm/>
            </div>
        </section>
    )
}

export default Contact;