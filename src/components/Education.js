import { Container, Row, Col } from "react-bootstrap";


export const Education = () => {
  return (
    <div className="education my-5">
      <Container>
      <Row className="py-5">
          <Col size={12} sm={12} className="text-center">
            <h2>EDUCATION</h2>
          </Col>
        </Row>
        <div className="education-details1 pt-5">
            <h5>Daffodil International University</h5>
            <p>B.Sc Of Software Engineering </p>
            <span>Session: 2022 - 2025</span>
        </div>
        <div className="education-details2 py-5">
            <h5>Noubahini College, Dhaka</h5>
            <p>Higher Secondary</p>
            <span>Session: 2017 - 2019</span>
        </div>
      </Container>
    </div>
  )
}
