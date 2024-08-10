import React, { memo } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const KFoot: React.FC = memo(() => {
  return (
    <>
      <Container fluid style={{ marginTop: "90px" }}>
        <hr />
        <Row className="mx-auto" style={{ width: "450px", margin: "10px 10px" }}>
          <h1>© KISURA W.S.P 2024</h1>
        </Row>
      </Container>
    </>
  );
});

export default KFoot;
