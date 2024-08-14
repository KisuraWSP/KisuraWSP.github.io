import React, { memo } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const KFoot: React.FC = memo(() => {
  return (
    <>
      <Container fluid style={{ marginTop: "90px" }}>
        <hr />
        <Row className="mx-auto" style={{ width: "28.125rem", margin: "0.625rem 0.625rem" }}>
          <h1>© KISURA W.S.P 2024</h1>
        </Row>
      </Container>
    </>
  );
});

export default KFoot;
