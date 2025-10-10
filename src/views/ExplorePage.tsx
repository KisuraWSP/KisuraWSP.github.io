import { CSSProperties, memo } from "react";
import KNavBar from "../components/Nav.component";
import KFoot from "../components/Footer.component";
import Card from "react-bootstrap/Card";
import nest_intro from "../assets/images/nest-js.png";
import pyvox from "../assets/images/pyvox.png";
import sokoban_demo from "../assets/images/sokoban_demo.png";
import { Link } from "./HomePage";
import { useMediaQuery } from "react-responsive";
import Row from "react-bootstrap/Row";
import { motion, useScroll } from "framer-motion";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Explore() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { scrollYProgress } = useScroll();

  const cardStyle: CSSProperties = {
    width: isMobile ? "27rem" : "30rem",
    height: isMobile ? "29rem" : "30rem",
    marginBottom: isMobile ? "2rem" : "0rem"
  };

  const cardStyleTall: CSSProperties = {
    width: isMobile ? "27rem" : "30rem",
    height: isMobile ? "39rem" : "40rem",
    marginBottom: isMobile ? "2rem" : "0rem"
  };

  const cardMargin: CSSProperties = {
    marginBottom: isMobile ? "1.5rem" : "3.5rem",
    paddingLeft: isMobile ? "0.35rem" : "0rem"
  };

  const header: CSSProperties = {
    padding: isMobile ? "" : "0.5rem",
    textAlign: isMobile ? "center" : "left",
    fontWeight: "bold"
  };
  const sub: CSSProperties = {
    textAlign: isMobile ? "center" : "left",
    margin: isMobile ? "1rem 1rem" : "1rem",
    color: "var(--muted)"
  };
  const link: CSSProperties = { textDecoration: "none", color: "var(--primary)" };

  return (
    <div className="bg-liquid">
      {!isMobile && <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />}
      <KNavBar />

      <section className="k-shell glass section">
        <h1 style={header}>Learning Projects</h1>
        <p style={sub}>Projects I built to learn how specific technologies work.</p>

        <Container fluid="md" className="px-3">
          <Row style={cardMargin}>
            <Col>
              <Card style={cardStyle} className="glass">
                <Card.Img
                  variant="top"
                  src={nest_intro}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width:768px) 420px, 560px"
                  alt="Nest.js book API preview"
                />
                <Card.Body>
                  <Card.Title>Book API</Card.Title>
                  <Card.Text>
                    A project to learn Nest.js.<br />
                    Tech: Nest.js, TypeScript
                  </Card.Text>
                  <Link url="https://github.com/devgithub-sl/book-api" />
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={cardStyle} className="glass">
                <Card.Img
                  variant="top"
                  src={pyvox}
                  style={{ height: "15rem", objectFit: "cover" }}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width:768px) 420px, 560px"
                  alt="pyVox voxel engine preview"
                />
                <Card.Body>
                  <Card.Title>pyVox</Card.Title>
                  <Card.Text>
                    Learning how voxel engines work.<br />
                    Tech: Python, OpenGL, NumPy, Numba
                  </Card.Text>
                  <Link url="https://github.com/redstonemc2003/pyvox" />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row style={cardMargin}>
            <Col>
              <Card style={cardStyle} className="glass">
                <Card.Img
                  variant="top"
                  src={sokoban_demo}
                  style={{ height: "15rem", objectFit: "cover" }}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width:768px) 420px, 560px"
                  alt="Sokoban demo preview"
                />
                <Card.Body>
                  <Card.Title>Sokoban Demo</Card.Title>
                  <Card.Text>
                    Simple game to learn Sokoban mechanics.<br />
                    Tech: ODIN, Raylib
                  </Card.Text>
                  <Link url="https://github.com/redstonemc2003/sokoban-demo" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="k-shell glass section">
        <h1 style={header}>Collaborated Projects</h1>
        <p style={sub}>Group projects from university modules.</p>

        <Container fluid="md" className="px-3">
          <Row style={cardMargin}>
            <Col>
              <Card style={cardStyleTall} className="glass">
                <Card.Body>
                  <h2>Medical Center Management System</h2>
                  <Card.Text>
                    Built for the Information Technology Project module.<br />
                    Tech: React, MongoDB, Express, Node.js, Material UI
                  </Card.Text>

                  <h3 style={{ marginTop: "1rem" }}>Group Members</h3>
                  <a href="https://www.linkedin.com/in/malshan-rathnayake/" style={link}>Malshan Rathnayake</a><br />
                  <a href="https://www.linkedin.com/in/ravindu-kavishka-bab850211/" style={link}>Ravindu Kavishka</a><br />
                  <a href="https://www.linkedin.com/in/kaveesha-karunarathna/" style={link}>Kaveesha Karunarathne</a><br />
                  <a href="https://www.linkedin.com/in/jehan-silva-aa9a141ba/" style={link}>Jehan Silva</a><br />
                  <a href="https://www.linkedin.com/in/hansanie-neththasinghe/" style={link}>Hansanie Nethasinghe</a><br />
                  <a href="https://www.linkedin.com/in/santhushie-nallaperuma/" style={link}>Santhushie Nalluperuma</a><br />
                  <a href="https://www.linkedin.com/in/himaya-uwangi-327537265/" style={link}>Himaya Uwangi</a><br />

                  <div style={{ marginTop: "1rem" }}>
                    <Link url="https://github.com/KisuraWSP/medical-center-management-system" />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <KFoot />
    </div>
  );
}

export default memo(Explore);
