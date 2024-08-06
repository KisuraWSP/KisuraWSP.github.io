import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { linkedin, github, itch_io } from "../@export/module";

import github_img from "../assets/images/github.png";
import linkedin_img from "../assets/images/linkedin.png";
import itch_io_img from "../assets/images/itch_io.png";
import { CSSProperties } from "react";


import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from "react-bootstrap/Button";

const img_size: CSSProperties = {
    width: "3rem", 
    height: "3rem",
    margin: "0.5rem"
};

const SocialMedia : React.FC = () => {
    return(
        <>
            <Row style={{padding: "1rem"}}>
                <Col>
                    <h4>You can find me at</h4>
                    <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2">Linkedin</Tooltip>}>
                        {({ ref, ...triggerHandler }) => (
                            <Button
                            variant="link"
                            {...triggerHandler}
                            className="d-inline-flex align-items-center"
                            >
                            <Image
                                ref={ref}
                                rounded
                                src={linkedin_img}
                                style={img_size} 
                                onClick={linkedin}
                            />                          
                            </Button>
                        )}
                    </OverlayTrigger>
                    <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2">GitHub</Tooltip>}>
                        {({ ref, ...triggerHandler }) => (
                            <Button
                            variant="link"
                            {...triggerHandler}
                            className="d-inline-flex align-items-center"
                            >
                            <Image
                                ref={ref}
                                src={github_img}
                                rounded style={img_size} 
                                onClick={github}
                            />                          
                            </Button>
                        )}
                    </OverlayTrigger>
                    <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2">Itch.io</Tooltip>}>
                        {({ ref, ...triggerHandler }) => (
                            <Button
                            variant="link"
                            {...triggerHandler}
                            className="d-inline-flex align-items-center"
                            >
                            <Image
                                ref={ref}
                                rounded 
                                style={img_size} 
                                onClick={itch_io}
                                src={itch_io_img}
                            />                          
                            </Button>
                        )}
                    </OverlayTrigger>
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
        </>
    );
};

export default SocialMedia;