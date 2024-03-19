import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommentList from "./CommentList";
import CommentAdd from "./CommentAdd";
import { useState, useEffect } from "react";

const CommentArea = function (props) {
  // imposto lo state come array vuoto pronto per ricevere come valore l'array di oggetti che mi rimanderà indietro la fetch
  // state = {
  //   comments: [],
  // };

  const [comments, setComments] = useState([]);

  const fetchCommentsBook = () => {
    console.log(props.asin);
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY4NWRhOWFiYWQyODAwMTliZDUyZTEiLCJpYXQiOjE3MTA3NzU3MjIsImV4cCI6MTcxMTk4NTMyMn0.jx4VoW-lw4C_9Ipk-C6pWWjmhEX9pWzgP1_BCsXeiqM",
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
        setComments(commentsBook);
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  useEffect(() => {
    fetchCommentsBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.asin !== props.asin) {
  //     fetchCommentsBook();
  //   }
  // }

  return (
    <Row>
      <Col xs={6} md={12}>
        {comments.map(comment => {
          return <CommentList comment={comment} key={comment._id} id={comment._id} fetch={fetchCommentsBook} />;
        })}
      </Col>
      <Col xs={6} md={12}>
        <CommentAdd asin={props.asin} fetch={fetchCommentsBook} />
      </Col>
    </Row>
  );
};

export default CommentArea;
