import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3"> Copyright &copy; <a href='https://www.freelancer.com/u/shivasaimereddy' target='_blank'>Shivasai</a> </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
