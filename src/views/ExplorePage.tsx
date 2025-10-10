import { memo } from "react";
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

  return (
    <div className="bg-liquid">
      {!isMobile && <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />}
      <KNavBar />

      <section className="k-shell glass section">
        <h1 style={{ fontWeight: "bold" }}>Learning Projects</h1>
        <p style={{ color: "var(--muted)" }}>Projects I built to learn how specific technologies work.</p>

        <Container className="px-0">
          <Row>
            <Col>
              <Card className="glass card-resp">
                <Card.Img
                  variant="top"
                  src={nest_intro}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width:768px) 92vw, 560px"
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
              <Card className="glass card-resp">
                <Card.Img
                  variant="top"
                  src={pyvox}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width:768px) 92vw, 560px"
                  alt="pyVox voxel engine preview"
                  style={{ objectFit: "cover" }}
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

          <Row>
            <Col>
              <Card className="glass card-resp">
                <Card.Img
                  variant="top"
                  src={sokoban_demo}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width:768px) 92vw, 560px"
                  alt="Sokoban demo preview"
                  style={{ objectFit: "cover" }}
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
        <h1 style={{ fontWeight: "bold" }}>Collaborated Projects</h1>
        <p style={{ color: "var(--muted)" }}>Group projects from university modules.</p>

        <Container className="px-0">
          <Row>
            <Col>
              <Card className="glass card-resp">
                <Card.Body>
                  <h2>Medical Center Management System</h2>
                  <Card.Text>
                    Built for the Information Technology Project module.<br />
                    Tech: React, MongoDB, Express, Node.js, Material UI
                  </Card.Text>

                  <h3 style={{ marginTop: "1rem" }}>Group Members</h3>
                  <a href="https://www.linkedin.com/in/malshan-rathnayake/" style={{ color: "var(--primary)" }}>Malshan Rathnayake</a><br />
                  <a href="https://www.linkedin.com/in/ravindu-kavishka-bab850211/" style={{ color: "var(--primary)" }}>Ravindu Kavishka</a><br />
                  <a href="https://www.linkedin.com/in/kaveesha-karunarathna/" style={{ color: "var(--primary)" }}>Kaveesha Karunarathne</a><br />
                  <a href="https://www.linkedin.com/in/jehan-silva-aa9a141ba/" style={{ color: "var(--primary)" }}>Jehan Silva</a><br />
                  <a href="https://www.linkedin.com/in/hansanie-neththasinghe/" style={{ color: "var(--primary)" }}>Hansanie Nethasinghe</a><br />
                  <a href="https://www.linkedin.com/in/santhushie-nallaperuma/" style={{ color: "var(--primary)" }}>Santhushie Nalluperuma</a><br />
                  <a href="https://www.linkedin.com/in/himaya-uwangi-327537265/" style={{ color: "var(--primary)" }}>Himaya Uwangi</a><br />

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
