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

const img_size : CSSProperties = {
    width: "5rem", 
    height: "3rem"
};

const INFO = styled.h1`
    position: relative;
    color: blue;
    padding: 1rem;
`;

const DETAILS = styled.p`
    justify-content: center;
    font-size: 1rem;
`;

const Home : React.FC = () => {
    return(
        <>
            <KNavBar/>
            <Container>
                <Row>
                    <Col style={{padding: "1rem"}}>
                        <Image src={favicon} roundedCircle />
                    </Col>
                    <Col>
                        <Row>
                            <INFO>ABOUT ME</INFO>
                        </Row>
                        <Row>
                            <DETAILS>
                                I am an enthusiastic and adaptable individual with a strong passion for
                                programming. My ability to thrive in dynamic environments is
                                complemented by my problem-solving skills, attention to detail, and
                                commitment to delivering high-quality solutions. As an Interactive Media
                                student, I leverage my creativity to continually enhance the quality of my
                                work. A quick learner, I am eager to embrace new challenges and
                                technologies. I am confident that my skill set will thrive in a professional
                                environment, and I am keen to seek new opportunities to expand my
                                knowledge.
                            </DETAILS>
                        </Row>
                        <Row>
                            <Image src={linkedin_img} 
                                roundedCircle style={img_size} onClick={linkedin}/>
                            <Image src={github_img}
                                roundedCircle style={img_size} onClick={github}/>
                            <Image src={itch_io_img}
                                roundedCircle style={img_size} onClick={itch_io}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;