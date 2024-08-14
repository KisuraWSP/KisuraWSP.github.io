import { CSSProperties, memo } from "react";
import { useScroll, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import KNavBar from "../components/Nav.component";
import KFoot from "../components/Footer.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profile from "../assets/images/profile.jpeg";
import SocialMedia from "../components/SocialMedia.component";

function _Home() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const { scrollYProgress } = useScroll();

    const profile_logo: CSSProperties = {
        width: isMobile ? "12rem" : "20rem",
        height: isMobile ? "12rem" : "20rem",
        marginBottom: isMobile ? "1rem" : "0",
    };

    const containerStyle: CSSProperties = {
        maxWidth: "100%",
        paddingLeft: isMobile ? "1rem" : "2rem",
        paddingRight: isMobile ? "1rem" : "2rem",
        overflowX: "hidden",
    };

    const headerStyle: CSSProperties = {
        textAlign: isMobile ? "center" : "left",
    };

    const textStyle: CSSProperties = {
        fontSize: "100%",
        textAlign: isMobile ? "center" : "left",
        margin: isMobile ? "1 3rem" : "1rem",
    };

    return (
        <div style={{ overflowX: "hidden" }}>
            {!isMobile && (
                <motion.div
                    className="progress-bar"
                    style={{ scaleX: scrollYProgress }}
                />
            )}
            <KNavBar />
            <Container style={containerStyle}>
                <Row className="align-items-center">
                    <Col xs={12} md={6} className="d-flex flex-column align-items-center">
                        <Image src={profile} thumbnail style={profile_logo} loading="lazy" />
                        <h1 style={headerStyle}>Hello</h1>
                        <h2 style={{ color: "#8642F6", textAlign: isMobile ? "center" : "left" }}>I'm Kisura W.S.P</h2>
                        <h4 style={textStyle}>Web Developer/ Game Designer/ Software Engineer&nbsp;</h4>
                    </Col>
                    <Col xs={12} md={6}>
                        <h3 style={textStyle}>
                            I am a passionate and adaptable Interactive Media student with strong programming skills.
                            I excel in dynamic environments, solve problems efficiently, and pay close attention to detail.
                            My creativity enhances my work quality. As a quick learner, I eagerly embrace new challenges and technologies.
                            I am confident in my ability to thrive in a professional setting and seek opportunities to expand my knowledge.
                        </h3>
                        <div style={{ textAlign: isMobile ? "center" : "left" }}>
                            <SocialMedia />
                        </div>
                    </Col>
                </Row>
            </Container>
            <KFoot />
        </div>
    );
}

export default memo(_Home);
