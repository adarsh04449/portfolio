import { motion } from "framer-motion";
import { FlipWords } from "../ui/flip-words";
import profilePhoto from "../../assets/adarsh.png"
import { services } from "../../constants"
import Tilt from "react-parallax-tilt";
import { fadeIn, textVariant } from '../../utils/motion';

const ServiceCard = ({index, title, icon}) => {
    return(
      <p> 
        <Tilt className="xs:w-[250px] w-[230px]"> 
          <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="w-full bg-gradient-to-r from-gray-950  to-gray-950 via-indigo-950 p-[1px] rounded-[20px] border border-[#4a3a5a]"
          >
            <div
              options={{
                max:45,
                scale: 1,
                speed: 450
              }}
              className="bg-tertiary rounded-[20px] py-5 px-12 
              min-h-[250px] flex justify-evenly items-center flex-col"
              >
                <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
              </div>
          </motion.div>    
        </Tilt>
      </p>
    )
}

const About = () => {
    const words = ["web development.", "machine learning.","software projects."];
    return (
        <>
            <section id="about" className="bg-black text-white max-w-screen mx-auto p-10 ">
            <p className="text-xl text-gray-400">Introduction</p>
            <h1 className="text-5xl font-bold">Overview</h1>
            <p className="mt-4 text-white text-secondary text-xl max-w-4xl leading-[30px]">
                    A dedicated Computer Science student with hands-on experience in  <span className="inline-block align-baseline min-w-[100px]"><FlipWords words={words}/> </span>
                    Skilled in data structures, algorithms, and leveraging diverse technologies to create efficient solutions. I am active in leadership roles, club participation, and community initiatives.
            </p>
            <div className='mt-10 flex flex-wrap gap-10 w-full h-full justify-center md:justify-start'>
                {services.map((service, index) => (<ServiceCard key={service.title} 
                index = {index} {...service} />))}
            </div>
            </section>          
        </>
    )
}

export default About;