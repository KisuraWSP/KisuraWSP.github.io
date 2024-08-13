import { useScroll, motion } from "framer-motion";
import { CSSProperties, memo } from "react";
import KNavBar from "../components/Nav.component";
import KFoot from "../components/Footer.component";

function _Projects() {
    const { scrollYProgress } = useScroll();
    
    return(
        <>
            <motion.div 
                className="progress-bar"
                style={{ scaleX: scrollYProgress}}
            />
            <KNavBar/>
                
            <KFoot/>
        </>
    );
}

export default memo(_Projects);