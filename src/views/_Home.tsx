import { CSSProperties, memo } from "react";
import { useScroll, motion } from "framer-motion";
import KNavBar from "../components/Nav.component";
import KFoot from "../components/Footer.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profile from "../assets/images/profile.jpeg";
import SocialMedia from "../components/SocialMedia.component";

function _Home() {
    const { scrollYProgress } = useScroll();

    const profile_logo : CSSProperties = {
        width: "25rem",
        height: "25rem",
    };

    return(
        <>
            <motion.div 
                className="progress-bar"
                style={{ scaleX: scrollYProgress}}
            />
            <KNavBar/>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Image src={profile} thumbnail style={profile_logo} loading="lazy" />
                            <h1>Hello</h1>
                            <h2 style={{ color: "#8642F6" }}>I'm Kisura W.S.P</h2>
                            <h4 style={{ fontSize: "97%" }}>Web Developer/ Game Designer/ Software Engineer</h4>
                        </Row>
                    </Col>
                    <Col>
                        <h3 style={{margin: "1rem", alignContent: "center"}}>
                            I am a passionate and adaptable Interactive Media student with strong programming skills.
                            I excel in dynamic environments, solve problems efficiently, and pay close attention to detail.
                            My creativity enhances my work quality. As a quick learner, I eagerly embrace new challenges and technologies.
                            I am confident in my ability to thrive in a professional setting and seek opportunities to expand my knowledge.
                        </h3>
                        <SocialMedia/>
                    </Col>
                </Row>
            </Container>
            <KFoot/>
        </>
    );
}


export default memo(_Home);