import "./HomePage.css";
import githubIcon from "../../assets/Html.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transiton: { duration: 0.5, delay: delay },
  },
});
function HomePage() {
  return (
    <div className="homepage_container">
      <div className="homepage_left">
        <motion.p
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="homepage_left_h1"
        >
        <span className="red_color top-padded"></span> 

        </motion.p>

        <motion.p
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="homepage_left_h2"
        >
          <span>Gaurav Prakash Singh</span>
        </motion.p>

        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="homepage_left_h3"
        >
          Aspiring <span className="red_color">Developer</span>
        </motion.p>

        <motion.p
          variants={container(1.5)}
          initial="hidden"
          animate="visible"
          className="homepage_left_description"
        >
          Focused and versatile, with a passion for creating innovative solutions. The continuous pursuit of knowledge and improvement has equipped a strong foundation in various technical skills. Proficiency in C++ and Java programming, coupled with the ability to apply Object-Oriented Programming (OOP) principles, has facilitated the development of dynamic websites. Expertise extends to front-end technologies such as HTML, CSS, and JavaScript, demonstrating adeptness in problem-solving, attention to detail, and effective communication.



        </motion.p>

        <motion.div
          variants={container(2.5)}
          initial="hidden"
          animate="visible"
        >
          <a href="#" target="_blank">
            {/* <img 
                            src={githubIcon}
                            alt='githubIconImage'
                        /> */}
            <FaGithub className="homepage_logo" />
          </a>
          <a href="#" target="_blank">
            {/* <img
              src={githubIcon}
              alt="githubIconImage"
              className="homepage_logo"
            /> */}

            <FaLinkedin className="homepage_logo" />
          </a>
        </motion.div>

        <a
      
          href="mailto:abc@gmail.com"
        >
          <motion.button
                 variants={container(3)}
                 initial="hidden"
                 animate="visible"
          className="homepage_left_button">Get in Touch</motion.button>
        </a>
      </div>

      <div className="homepage_right">
        <motion.img
               initial={{x:100, opacity:0}}
               animate={{x:0, opacity:1}}
               transition={{duration:1, delay:1}}
          src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif"
          alt="GIF"
        />
      </div>
    </div>
  );
}

export default HomePage;