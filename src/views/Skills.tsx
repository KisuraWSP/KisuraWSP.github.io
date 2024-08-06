import KNavBar from "../components/Nav.component";
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";


import c from "../assets/images/c_logo.png";
import cpp from "../assets/images/cpp_logo.jpg";
import cs from "../assets/images/cs_logo.png";
import css from "../assets/images/css_logo.jpg";
import golang from "../assets/images/golang_logo.jpg";
import html from "../assets/images/html_logo.png";
import java from "../assets/images/java_logo.png";
import js from "../assets/images/js_logo.jpg";
import kotlin from "../assets/images/kotlin_logo.jpg";
import php from "../assets/images/php_logo.png";
import rust from "../assets/images/rust_logo.jpg";
import ts from "../assets/images/typescript_logo.png";

const Skills : React.FC = () => {
    return(
        <>
            <KNavBar/>
            <Container fluid>
                <Row>
                    <Col>
                        <Figure style={{margin: "1rem"}}>
                            <Figure.Image
                                width={120}
                                height={120}
                                alt="c"
                                src={c}
                            />        
                        </Figure>
                        <Figure style={{margin: "1rem"}}>
                            <Figure.Image
                                width={120}
                                height={120}
                                alt="c++"
                                src={cpp}
                            />        
                        </Figure>
                        <Figure style={{margin: "1rem"}}>
                            <Figure.Image
                                width={200}
                                height={200}
                                alt="c-sharp"
                                src={cs}
                            />        
                        </Figure>
                        <Figure style={{margin: "1rem"}}>
                            <Figure.Image
                                width={120}
                                height={120}
                                alt="css"
                                src={css}
                            />        
                        </Figure>
                        <Figure style={{margin: "1rem"}}>
                            <Figure.Image
                                width={200}
                                height={200}
                                alt="golang"
                                src={golang}
                            />        
                        </Figure>
                        <Figure style={{margin: "1rem"}}>
                            <Figure.Image
                                width={120}
                                height={120}
                                alt="typescript"
                                src={ts}
                            />        
                        </Figure>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Figure style={{margin: "1rem"}}>
                            <Figure.Image
                                width={120}
                                height={120}
                                alt="html"
                                src={html}
                            />        
                        </Figure>
                        <Figure style={{margin: "1rem"}}>
                            <Figure.Image
                                width={200}
                                height={200}
                                alt="java"
                                src={java}
                            />        
                        </Figure>
                        <Figure style={{margin: "1rem"}}>
                            <Figure.Image
                                width={120}
                                height={120}
                                alt="javascript"
                                src={js}
                            />        
                        </Figure>
                        <Figure style={{margin: "1rem"}}>
                            <Figure.Image
                                width={120}
                                height={120}
                                alt="kotlin"
                                src={kotlin}
                            />        
                        </Figure>
                        <Figure style={{margin: "1rem"}}>
                            <Figure.Image
                                width={120}
                                height={120}
                                alt="php"
                                src={php}
                            />        
                        </Figure>
                        <Figure style={{margin: "1rem"}}>
                            <Figure.Image
                                width={120}
                                height={120}
                                alt="rust"
                                src={rust}
                            />        
                        </Figure>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Skills;