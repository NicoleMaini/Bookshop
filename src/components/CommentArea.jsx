import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommentList from "./CommentList";
import CommentAdd from "./CommentAdd";

class CommentArea extends Component {
  // imposto lo state come array vuoto pronto per ricevere come valore l'array di oggetti che mi rimanderà indietro la fetch
  state = {
    comments: [],
  };
  // creao la fetch e la chiamo all'interno di ComponentDidMount

  fetchCommentsBook = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYjFiZDRjNTllYzAwMTk5MGQ3OWUiLCJpYXQiOjE3MDkyODk5MTgsImV4cCI6MTcxMDQ5OTUxOH0.Xetjs2pF9la9RUExay-929FxXJMdp812qWLuaQgmWwY",
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nella chiamata API");
        }
      })
      .then(commentsBook => {
        console.log(commentsBook);
        // dopo aver appurato che il json ci è stato fornito ecco che "settiamo il nuovo stato"
        this.setState({ comments: commentsBook });
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  componentDidMount() {
    this.fetchCommentsBook();
  }

  render() {
    return (
      <Row>
        <Col xs={6} md={12}>
          {this.state.comments.map(comment => {
            return <CommentList comment={comment} key={comment._id} id={comment._id} />;
          })}
        </Col>
        <Col xs={6} md={12}>
          <CommentAdd asin={this.props.asin} />
        </Col>
      </Row>
    );
  }
}

export default CommentArea;
