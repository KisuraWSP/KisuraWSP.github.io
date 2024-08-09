//import KFoot from "../components/Footer.component";
import Container from "react-bootstrap/Container";
import KNavBar from "../components/Nav.component";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import styled from "styled-components";

import profile from "../assets/images/profile.jpeg";
import SocialMedia from "../components/SocialMedia.component";
import KFoot from "../components/Footer.component";


const DETAILS = styled.p`
    padding: 2rem;
    justify-content: center;
    font-size: 1.3rem;
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
// @fix: Page is stuttering when i hover over the social buttons

const Home: React.FC = () => {
    return (
        <>
            <KNavBar />
            <Container>
                <Row>
                    <ImageCol xs={12} md={4} style={{ padding: "2rem"}}>
                        <Image src={profile} thumbnail style={{height: "30vh"}}/>
                        <Col style={{paddingTop: "1rem"}}>
                            <h2>Hello</h2>
                        </Col>
                        <Col>
                            <h1 style={{color: "#8642F6"}}>I'm Kisura W.S.P</h1>
                        </Col>
                        <Col>
                            <h6 style={{fontSize: "75%"}}>Web Developer/ Game Designer/ Software Engineer</h6>
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
                        <SocialMedia/>
                    </TextCol>
                </Row>
            </Container>
            <KFoot/>
        </>
    );
};

export default Home;
