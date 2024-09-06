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
    width: "3.5rem", 
    height: "3.5rem",
    margin: "0.5rem"
};

const SocialMedia: React.FC = () => {
    return (
        <Row style={{ padding: "1rem" }}>
            <Col>
                <h4>You can find me at</h4>

                {/* LinkedIn Button */}
                <OverlayTrigger placement="bottom" overlay={
                    <Tooltip id="linkedin-tooltip">LinkedIn</Tooltip>
                }>
                    <Button variant="link" className="d-inline-flex align-items-center">
                        <Image
                            rounded
                            src={linkedin_img}
                            style={img_size}
                            onClick={linkedin}
                        />
                    </Button>
                </OverlayTrigger>

                {/* GitHub Button */}
                <OverlayTrigger placement="bottom" overlay={
                    <Tooltip id="github-tooltip">GitHub</Tooltip>
                }>
                    <Button variant="link" className="d-inline-flex align-items-center">
                        <Image
                            src={github_img}
                            rounded
                            style={img_size}
                            onClick={github}
                        />
                    </Button>
                </OverlayTrigger>

                {/* Itch.io Button */}
                <OverlayTrigger placement="bottom" overlay={
                    <Tooltip id="itch-io-tooltip">Itch.io</Tooltip>
                }>
                    <Button variant="link" className="d-inline-flex align-items-center">
                        <Image
                            rounded
                            style={img_size}
                            onClick={itch_io}
                            src={itch_io_img}
                        />
                    </Button>
                </OverlayTrigger>
            </Col>
        </Row>
    );
};

export default SocialMedia;
