import { memo } from "react";
import { useScroll, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import KNavBar from "../components/Nav.component";
import KFoot from "../components/Footer.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profile from "../assets/images/profile.jpg";
import SocialMedia from "../components/SocialMedia.component";
import Skills from "../components/Skills.component";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import portfolio_intro from "../assets/images/portfolio_intro.png";
import webserve_intro from "../assets/images/webserve_intro.png";
import booklist_intro from "../assets/images/book_list_intro.png";
import blog_intro from "../assets/images/blog_intro.png";
import courseweb_intro from "../assets/images/coursweb_student.png";

interface LinkProps { url: string }
export const Link: React.FC<LinkProps> = ({ url }) => (
  <Button className="btn-primary" href={url}>View</Button>
);

function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-liquid">
      {!isMobile && <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />}
      <KNavBar />

      {/* Hero / About */}
      <section className="k-shell glass section">
        <div className="center-grid">
          <div className="d-flex flex-column align-items-center">
            <Image
              src={profile}
              className="profile-img"
              roundedCircle
              loading="lazy"
              decoding="async"
              alt="Profile"
            />
            <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Hello</h1>
            <h2 style={{ color: "var(--primary)", textAlign: "center", fontWeight: "bold" }}>
              I'm Kisura W.S.P
            </h2>
            <h6 style={{ textAlign: "center", fontWeight: "bold", color: "var(--muted)" }}>
              Web Developer / Game Designer / Software Engineer
            </h6>
          </div>

          <div>
            <h1 style={{ fontWeight: "bold" }}>About Me</h1>
            <p style={{ color: "var(--muted)" }}>
              I am a passionate and adaptable Interactive Media student with strong programming skills.
              I excel in dynamic environments, solve problems efficiently, and pay close attention to detail.
              My creativity enhances my work quality. As a quick learner, I eagerly embrace new challenges and technologies.
              I seek opportunities to expand my knowledge.
            </p>
            <div style={{ textAlign: isMobile ? "center" : "left" }}>
              <SocialMedia />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="k-shell glass section">
        <h1 style={{ fontWeight: "bold" }}>Projects</h1>

        <Container className="px-0">
          <Row>
            <Col>
              <Card className="glass card-resp">
                <Card.Img
                  variant="top"
                  src={portfolio_intro}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width:768px) 92vw, 560px"
                  alt="Portfolio project preview"
                />
                <Card.Body>
                  <Card.Title>Portfolio</Card.Title>
                  <Card.Text>
                    Developer portfolio website.<br />
                    Tech: Vite, TypeScript, Bootstrap, Framer Motion, React
                  </Card.Text>
                  <Link url="https://github.com/KisuraWSP/KisuraWSP.github.io" />
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="glass card-resp">
                <Card.Img
                  variant="top"
                  src={webserve_intro}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width:768px) 92vw, 560px"
                  alt="Web Serve CLI preview"
                />
                <Card.Body>
                  <Card.Title>Web Serve (WIP)</Card.Title>
                  <Card.Text>
                    CLI to host HTML via localhost.<br />
                    Tech: Rust
                  </Card.Text>
                  <Link url="https://github.com/KisuraWSP/webServe" />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card className="glass card-resp">
                <Card.Img
                  variant="top"
                  src={booklist_intro}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width:768px) 92vw, 560px"
                  alt="Book List preview"
                />
                <Card.Body>
                  <Card.Title>Book List (WIP)</Card.Title>
                  <Card.Text>
                    Todo-like app for books.<br />
                    Tech: Go, HTMX, Bootstrap
                  </Card.Text>
                  <Link url="https://github.com/devgithub-sl/book-list" />
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="glass card-resp">
                <Card.Img
                  variant="top"
                  src={blog_intro}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width:768px) 92vw, 560px"
                  alt="Blog CRUD preview"
                />
                <Card.Body>
                  <Card.Title>BLOG CRUD</Card.Title>
                  <Card.Text>
                    Basic CRUD app.<br />
                    Tech: MERN, Vite, TS, MUI
                  </Card.Text>
                  <Link url="https://github.com/devgithub-sl/blog" />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card className="glass card-resp">
                <Card.Img
                  variant="top"
                  src={courseweb_intro}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width:768px) 92vw, 560px"
                  alt="CourseWeb Student preview"
                />
                <Card.Body>
                  <Card.Title>CourseWeb Student (WIP)</Card.Title>
                  <Card.Text>
                    Mobile prototype for Moodle.<br />
                    Tech: Kotlin
                  </Card.Text>
                  <Link url="https://github.com/KisuraWSP/courseweb_student" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills */}
      <section className="k-shell glass section">
        <h1 style={{ fontWeight: "bold" }}>Skills</h1>
        {!isMobile && <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />}
        <Skills isMobile={isMobile} />
      </section>

      <KFoot />
    </div>
  );
}

export default memo(Home);
