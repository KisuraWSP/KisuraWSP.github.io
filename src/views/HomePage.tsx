import { CSSProperties, memo } from "react";
import { useScroll, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import KNavBar from "../components/Nav.component";
import KFoot from "../components/Footer.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profile from "../assets/images/profile.jpg";
import SocialMedia from "../components/SocialMedia.component";
import Skills from "../components/Skills.component";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import portfolio_intro from "../assets/images/portfolio_intro.png";
import webserve_intro from "../assets/images/webserve_intro.png";
import booklist_intro from "../assets/images/book_list_intro.png";
import blog_intro from "../assets/images/blog_intro.png";
import courseweb_intro from "../assets/images/coursweb_student.png";

interface LinkProps {
    url : string
}

export const Link : React.FC<LinkProps> = ({url}) => {
    return(
        <Button style={{backgroundColor: "#8642F6", borderColor:"transparent"}}href={url} >View</Button>
    );
};

function Home() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const { scrollYProgress } = useScroll();

    const profile_logo: CSSProperties = {
        width: isMobile ? "18rem" : "26rem",
        height: isMobile ? "18rem" : "26rem",
        marginBottom: isMobile ? "1rem" : "0",
    };

    const containerStyle: CSSProperties = {
        maxWidth: "100%",
        paddingLeft: isMobile ? "1rem" : "2rem",
        paddingRight: isMobile ? "1rem" : "2rem",
        overflow: "hidden",
        marginBottom: "5rem"
    };

    const headerStyle: CSSProperties = {
        textAlign: isMobile ? "center" : "left",
        fontWeight:"bold"
    };

    const textStyle: CSSProperties = {
        textAlign: isMobile ? "center" : "left",
        margin: isMobile ? "1 3rem" : "1rem",
    };
    
    const textStyle2: CSSProperties = {
        textAlign: isMobile ? "center" : "left",
        margin: isMobile ? "1 3rem" : "1rem",
        fontWeight: "bold"
    };
    

    const cardStyle : CSSProperties = {
        width: isMobile ? "25rem" : "30rem", 
        height: isMobile ? "25rem" : "30rem"
    };

    const cardMargin : CSSProperties = {
        marginBottom: isMobile ? "2rem" : "5rem",
        paddingLeft: isMobile ? "0.35rem" : "0rem"
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
                        <Image src={profile} roundedCircle style={profile_logo} loading="lazy" />
                        <h1 style={headerStyle}>Hello</h1>
                        <h2 style={{ color: "#8642F6", textAlign: isMobile ? "center" : "left", 
                            fontWeight:"bold"
                         }}>I'm Kisura W.S.P</h2>
                        <h6 style={textStyle2}>Web Developer/ Game Designer/ Software Engineer&nbsp;</h6>
                    </Col>
                    <Col xs={12} md={6}>
                        <h1 style={{fontSize: "3rem", fontWeight:"bold"}}>About Me</h1>
                        <h4 style={textStyle}>
                            I am a passionate and adaptable Interactive Media student with strong programming skills.
                            I excel in dynamic environments, solve problems efficiently, and pay close attention to detail.
                            My creativity enhances my work quality. As a quick learner, I eagerly embrace new challenges and technologies.
                            I am confident in my ability to thrive in a professional setting and seek opportunities to expand my knowledge.
                        </h4>
                        <div style={{ textAlign: isMobile ? "center" : "left" }}>
                            <SocialMedia />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container style={containerStyle}>
                <h1 style={{fontSize: "3rem", fontWeight:"bold"}}>Skills</h1>
                {/* Note to Self in conditional rendering we using one parent component */}
                {!isMobile && (
                    <motion.div 
                        className="progress-bar"
                        style={{ scaleX: scrollYProgress }}
                    />
                )
                }
                <Skills isMobile={isMobile} />
            </Container>
            <Container>
                <h1 style={{fontSize: "3rem", fontWeight:"bold"}}>Projects</h1>
                <Row style={cardMargin}>
                    <Col>
                        <Card style={cardStyle}>
                            <Card.Img variant="top" src={portfolio_intro} />
                            <Card.Body>
                                <Card.Title>Portfolio</Card.Title>
                                <Card.Text>
                                    My Developer Portfolio WebSite.<br/>
                                    Technologies Used: Vite, TypeScript, BootStrap, Framer-Motion, React
                                </Card.Text>
                                <Link url="https://github.com/KisuraWSP/KisuraWSP.github.io"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={cardStyle}>
                            <Card.Img variant="top" src={webserve_intro} />
                            <Card.Body>
                                <Card.Title>Web Serve (Work in Progress)</Card.Title>
                                <Card.Text>
                                    A CLI program that will let u host your HTML Page using Local Host.<br/>
                                    Technologies Used: Rust (Programming Language)
                                </Card.Text>
                                <Link url="https://github.com/KisuraWSP/webServe"/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={cardMargin}>
                    <Col>
                        <Card style={cardStyle}>
                            <Card.Img variant="top" src={booklist_intro} />
                            <Card.Body>
                                <Card.Title>Book List (Work in Progress)</Card.Title>
                                <Card.Text>
                                    A Simple Todo List like site based on books.<br/>
                                    Technologies Used: Golang, HTMX, Bootstrap
                                </Card.Text>
                                <Link url="https://github.com/devgithub-sl/book-list"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={cardStyle}>
                            <Card.Img variant="top" src={blog_intro} />
                            <Card.Body>
                                <Card.Title>BLOG CRUD</Card.Title>
                                <Card.Text>
                                    This is a basic CRUD application.<br/>
                                    Technologies Used: MERN Stack, Vite, TypeScript, Material UI
                                </Card.Text>
                                <Link url="https://github.com/devgithub-sl/blog"/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={cardMargin}>
                    <Col>
                        <Card style={cardStyle}>
                            <Card.Img variant="top" src={courseweb_intro} />
                            <Card.Body>
                                <Card.Title>CourseWeb Student (Work in Progress)</Card.Title>
                                <Card.Text>
                                    A Mobile Application Prototype to be based on a University Moodle Website.<br/>
                                    Technologies Used: Kotlin
                                </Card.Text>
                                <Link url="https://github.com/KisuraWSP/courseweb_student"/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <KFoot />
        </div>
    );
}

export default memo(Home);
