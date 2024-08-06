//import KFoot from "../components/Footer.component";
import Container from "react-bootstrap/Container";
import KNavBar from "../components/Nav.component";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { linkedin, github, itch_io } from "../@export/module";

import github_img from "../assets/images/github.png";
import linkedin_img from "../assets/images/linkedin.png";
import itch_io_img from "../assets/images/itch_io.png";
import favicon from "../assets/images/favicon.png";
import { CSSProperties } from "react";

const img_size: CSSProperties = {
    width: "3rem", 
    height: "3rem",
    margin: "0.5rem"
};

const DETAILS = styled.p`
    padding: 2rem;
    justify-content: center;
    font-size: 1rem;
    display: block;
`;

const ImageCol = styled(Col)`
    @media (max-width: 480px) {
        order: 1; 
    }
`;

const TextCol = styled(Col)`
    @media (max-width: 480px) {
        order: 2; 
        width: 85%;
        font-size: 5rem;
    }
`;

const Home: React.FC = () => {
    return (
        <>
            <KNavBar />
            <Container>
                <Row>
                    <ImageCol xs={12} md={4} style={{ padding: "2rem" }}>
                        <Image src={favicon} thumbnail style={{height: "20vh"}}/>
                        <Col style={{paddingTop: "1rem"}}>
                            <h2>Hello</h2>
                        </Col>
                        <Col>
                            <h1>I'm Kisura W.S.P</h1>
                        </Col>
                        <Col>
                            <h6 style={{fontSize: "95%"}}>Web Developer/ Game Designer/ Software Engineer</h6>
                        </Col>
                    </ImageCol>
                    <TextCol xs={12} md={8}>
                        <Row>
                            <DETAILS>
                                I am a passionate and adaptable Interactive Media student with strong programming skills. 
                                I excel in dynamic environments, solve problems efficiently, and pay close attention to detail. 
                                My creativity enhances my work quality. As a quick learner, I eagerly embrace new challenges and technologies. 
                                I am confident in my ability to thrive in a professional setting and seek opportunities to expand my knowledge.
                            </DETAILS>
                        </Row>
                        <Row style={{padding: "1rem"}}>
                            <Col>
                                <h4>You can find me at</h4>
                                <Image src={linkedin_img} 
                                    rounded style={img_size} onClick={linkedin} />
                                <Image src={github_img}
                                    rounded style={img_size} onClick={github} />
                                <Image src={itch_io_img}
                                    rounded style={img_size} onClick={itch_io} />
                            </Col>
                            {
                                /*
                                    <Col>
                                        <h4>Contact Me</h4>
                                        <h5>@gmail.com</h5>                           
                                    </Col>
                                */
                            }
                        </Row>
                    </TextCol>
                </Row>
            </Container>
        </>
    );
};

export default Home;
