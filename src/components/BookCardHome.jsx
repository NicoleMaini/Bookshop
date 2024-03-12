import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BookCardHome() {
  return (
    <Container style={{ marginTop: 60 }}>
      <h2 className="text-center mb-5">Category: Romanzi Fantasy</h2>
      <Row>
        <Col xs={6} md={4} lg={3} xl={2}>
          <Card style={{ width: "18rem" }} className="flex-row">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default BookCardHome;
