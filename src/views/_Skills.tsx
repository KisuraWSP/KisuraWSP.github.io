import { useScroll, motion } from "framer-motion";
import { memo } from "react";
import { useMediaQuery } from "react-responsive";
import KNavBar from "../components/Nav.component";
import KFoot from "../components/Footer.component";
import Skills from "../components/Skills.component";

function _Skills() {
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
            <Skills isMobile={isMobile} />
            <KFoot />
        </>
    );
}

export default memo(_Skills);