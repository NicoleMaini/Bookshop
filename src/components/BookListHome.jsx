import { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookCardHome from "./BookCardHome";
import booksFantasy from "../data/fantasy.json";
import booksHistory from "../data/history.json";
import booksHorror from "../data/horror.json";
import booksRomance from "../data/romance.json";
import booksScifi from "../data/scifi.json";
import CommentArea from "./CommentArea";

class BookListHome extends Component {
  state = {
    singleBook: booksFantasy,
    asin: "",
  };

  changeBookCardState = value => {
    this.setState({ asin: value });
  };

  render() {
    return (
      <Container style={{ marginTop: 60, marginBottom: 90 }}>
        <Nav variant="tabs" defaultActiveKey="/home" className="my-5 justify-content-center">
          <Nav.Item>
            <Nav.Link href="#" onClick={() => this.setState({ singleBook: booksFantasy })}>
              Fantasy
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={() => this.setState({ singleBook: booksHistory })}>
              History
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={() => this.setState({ singleBook: booksHorror })}>
              Horror
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" onClick={() => this.setState({ singleBook: booksRomance })}>
              Romance
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4" onClick={() => this.setState({ singleBook: booksScifi })}>
              Scifi
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <h2 className="text-center mb-5">Category: Romanzi Fantasy</h2>
        <Row>
          <Col md={8}>
            <Row>
              {/* {console.log(this.state.singleBook)} */}
              {this.state.singleBook.map(book => {
                return (
                  <BookCardHome
                    book={book}
                    key={book.asin}
                    asin={this.state.asin}
                    // selected={this.state.selected}
                    changeBookCardState={this.changeBookCardState}
                    // onClick={this.setState({ selected: !this.state.selected })}
                  />
                );
              })}
            </Row>
          </Col>
          <Col md={4}>
            <CommentArea selected={this.state.selected} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BookListHome;
