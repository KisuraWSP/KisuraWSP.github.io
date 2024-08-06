import Card from "react-bootstrap/Card";
import KNavBar from "../components/Nav.component";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import cpp from "../assets/images/cpp_logo.jpg";
// <Card.Img variant="top" src={cpp} />
import { CSSProperties } from "react";

const box : CSSProperties = { 
    width: "20rem",
    margin: "1rem" 
};

const Projects : React.FC = () => {
    return(
        <>
            <KNavBar/>
            <Container>
                <Row>
                    <Col>
                    <Card style={box}>
                        <Card.Body>
                            <Card.Title><a href="https://github.com/KisuraWSP/KisuraWSP.github.io">Portfolio</a></Card.Title>
                            <Card.Text>
                                This is my portfolio site written using Vite + TS + React 
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        <Card style={box}>
                            <Card.Body>
                                <Card.Title><a href="https://github.com/KisuraWSP/webServe">WebServe</a></Card.Title>
                                <Card.Text>
                                    This project that is made using rust (programming language), this project is a
                                    simple web server that hosts a HTML page locally. The goal of this project is to
                                    make this a CLI application that will allow you to host any HTML page using a
                                    configuration system that will host your page in locally
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={box}>
                            <Card.Body>
                                <Card.Title><a href="https://github.com/KisuraWSP/book-api">Book API</a></Card.Title>
                                <Card.Text>
                                    This project is used to learn the Nest.js framework.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={box}>
                            <Card.Body>
                                <Card.Title><a href="https://github.com/devgithub-sl/book-list">Book List</a></Card.Title>
                                <Card.Text>
                                    This project is made using HTMX + GO + Bootstrap. It is a simple web application
                                    that showcases the power of HTMX. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={box}>
                            <Card.Body>
                                <Card.Title><a href="https://github.com/devgithub-sl/blog">Blog</a></Card.Title>
                                <Card.Text>
                                    This project is made using React + Vite + Typescript as the basic application
                                    skeleton, this application uses the MERN stack and Material UI as the component
                                    Library, the premise of this application is just a basic CRUD application.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>    
            </Container>
        </>
    );
};

export default Projects;