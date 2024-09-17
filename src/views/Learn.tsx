import {  CSSProperties, memo } from "react";
import KNavBar from "../components/Nav.component";
import KFoot from "../components/Footer.component";
import Card from "react-bootstrap/Card";
import nest_intro from "../assets/images/nest-js.png";
import pyvox from "../assets/images/pyvox.png";
import sokoban_demo from "../assets/images/sokoban_demo.png";
import { Link } from "./Home";
import { useMediaQuery } from "react-responsive";
import Row from "react-bootstrap/Row";
import { motion, useScroll } from "framer-motion";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";

function Learn() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const { scrollYProgress } = useScroll();

    const containerStyle: CSSProperties = {
        maxWidth: "100%",
        paddingLeft: isMobile ? "1rem" : "2rem",
        paddingRight: isMobile ? "1rem" : "2rem",
        overflow: "hidden",
        marginBottom: "5rem"
    };

    const headerStyle: CSSProperties = {
        padding: isMobile ? "" : "1rem",
        textAlign: isMobile ? "center" : "left",
        fontWeight:"bold"
    };

    const textStyle: CSSProperties = {
        textAlign: isMobile ? "center" : "left",
        margin: isMobile ? "1rem 3rem" : "2rem",
    };

    const cardStyle : CSSProperties = {
        width: isMobile ? "27rem" : "30rem", 
        height: isMobile ? "29rem" : "30rem",
        marginBottom: isMobile ? "5rem" : "0rem"
    };

    const cardMargin : CSSProperties = {
        marginBottom: isMobile ? "2rem" : "5rem",
        paddingLeft: isMobile ? "0.35rem" : "0rem"
    };
    
    return(
        <>
        <div style={{ overflowX: "hidden" }}>
            {!isMobile && (
                <motion.div
                    className="progress-bar"
                    style={{ scaleX: scrollYProgress }}
                />
            )}
            <KNavBar/>
            <h1 style={headerStyle}>Learning Projects</h1>
            <p style={textStyle}>
                These projects that are showcased within this page are used to learn
                and understand how the technologies work.
            </p>
            <Container style={containerStyle}>
                <Row style={cardMargin}>
                    <Col>
                        <Card style={cardStyle}>
                            <Card.Img variant="top" src={nest_intro} />
                            <Card.Body>
                                <Card.Title>Book API</Card.Title>
                                <Card.Text>
                                    A Project used to learn Nest.js<br/>
                                    Technologies Used: Nest.js, TypeScript
                                </Card.Text>
                                <Link url="https://github.com/KisuraWSP/book-api"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={cardStyle}>
                            <Card.Img variant="top" src={pyvox} style={{height: "15rem"}}/>
                            <Card.Body>
                                <Card.Title>pyVox</Card.Title>
                                <Card.Text>
                                    A Project used to learn how voxel engines work<br/>
                                    Technologies Used: Python, OpenGl, numpy, Numba
                                </Card.Text>
                                <Link url="https://github.com/redstonemc2003/pyvox"/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={cardMargin}>
                    <Col>
                        <Card style={cardStyle}>
                            <Card.Img variant="top" src={sokoban_demo} style={{height: "15rem"}}/>
                            <Card.Body>
                                <Card.Title>Sokoban Demo</Card.Title>
                                <Card.Text>
                                    This Project is a simple game used to learn how<br/>
                                    to implement sokoban Game Mechanics
                                </Card.Text>
                                <Link url="https://github.com/redstonemc2003/sokoban-demo"/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>  
            <KFoot/>
        </div>
        </>
    );
}

export default memo(Learn);