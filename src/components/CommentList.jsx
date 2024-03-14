// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";

function CommentList(props) {
  return (
    <div className="card m-3 p-3">
      <h6>Commenti</h6>
      <div>
        <div className="small m-1">Autore: {props.comment.author}</div>
        <div className="border-top border-bottom p-1">{props.comment.comment}</div>
        <div className="small m-1">Voto: {props.comment.rate}</div>
      </div>
    </div>
  );
}

export default CommentList;