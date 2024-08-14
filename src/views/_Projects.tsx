import { useScroll, motion } from "framer-motion";
import { memo } from "react";
import { useMediaQuery } from "react-responsive";
import KNavBar from "../components/Nav.component";
import KFoot from "../components/Footer.component";
import KCard from "../components/KCard.component";

import portfolio_intro from "../assets/images/portfolio_intro.png";
import webserve_intro from "../assets/images/webserve_intro.png";
import booklist_intro from "../assets/images/book_list_intro.png";
import blog_intro from "../assets/images/blog_intro.png";

function _Projects() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const { scrollYProgress } = useScroll();
    
    return (
        <>
            {!isMobile && (
                <motion.div 
                    className="progress-bar"
                    style={{ scaleX: scrollYProgress }}
                />
            )}
            <KNavBar />
                <KCard 
                    content="This is my portfolio site written using Vite + TS + React" 
                    image={portfolio_intro} 
                    title={<a href="https://github.com/KisuraWSP/KisuraWSP.github.io">Portfolio</a>}
                    isMobile={isMobile}
                />

                <KCard 
                    content="This project that is made using rust (programming language), this project is a
                                        simple web server that hosts a HTML page locally. The goal of this project is to
                                        make this a CLI application that will allow you to host any HTML page using a
                                        configuration system that will host your page in locally" 
                    image={webserve_intro} 
                    title={<a href="https://github.com/KisuraWSP/webServe">WebServe</a>}
                    isMobile={isMobile}
                />

                <KCard 
                    content="This project is used to learn the Nest.js framework." 
                    title={<a href="https://github.com/KisuraWSP/book-api">Book API</a>}
                    isMobile={isMobile}
                />

                <KCard 
                    content="This project is made using HTMX + GO + Bootstrap. It is a simple web application
                                    that showcases the power of HTMX." 
                    image={booklist_intro} 
                    title={<a href="https://github.com/devgithub-sl/book-list">Book List</a>}
                    isMobile={isMobile}
                />

                <KCard 
                    content="This project is made using React + Vite + Typescript as the basic application
                                    skeleton, this application uses the MERN stack and Material UI as the component
                                    Library, the premise of this application is just a basic CRUD application." 
                    image={blog_intro} 
                    title={<a href="https://github.com/devgithub-sl/blog">Blog</a>}
                    isMobile={isMobile}
                />
            <KFoot />
        </>
    );
}

export default memo(_Projects);
