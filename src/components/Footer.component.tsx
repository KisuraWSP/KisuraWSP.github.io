import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { linkedin, github, itch_io } from "../@export/module";
import github_img from "../assets/images/github.png";
import linkedin_img from "../assets/images/linkedin.png";
import itch_io_img from "../assets/images/itch_io.png";
import { CSSProperties } from "react";

const img_size : CSSProperties= {
    width: "3rem", 
    height: "3rem"
};

const KFoot : React.FC = () => {
    return(
        <>
            <Card style={{marginTop:"5.5rem"}}>
                <Card.Header style={{textAlign:"center"}}>© KISURA W.S.P 2024</Card.Header>
                <Card.Body>
                    <Card.Title><h1>Get In Touch</h1></Card.Title>
                    <Container style={{padding: "1rem"}}>
                        <Row>
                            <Col>
                                <Image src={linkedin_img}
                                roundedCircle style={img_size} onClick={linkedin}/>
                            </Col>
                            <Col>
                                <Image src={github_img}
                                roundedCircle style={img_size} onClick={github}/>
                            </Col>
                            <Col>
                                <Image src={itch_io_img} 
                                roundedCircle style={img_size} onClick={itch_io}/>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    );
};

export default KFoot;