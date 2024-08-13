import { useScroll, motion } from "framer-motion";
import { memo } from "react";
import KNavBar from "../components/Nav.component";
import KFoot from "../components/Footer.component";
import Skills from "../components/Skills.component";


function _Skills() {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.div 
                className="progress-bar"
                style={{ scaleX: scrollYProgress}}
            />
            <KNavBar/>
            <Skills/>
            <KFoot/>
        </>
    );
}

export default memo(_Skills);
