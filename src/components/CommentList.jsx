import { Component } from "react";
import Button from "react-bootstrap/Button";

class CommentList extends Component {
  removeComment = () => {
    console.log(this.props.id);
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.id, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY4NWRhOWFiYWQyODAwMTliZDUyZTEiLCJpYXQiOjE3MTA3NzU3MjIsImV4cCI6MTcxMTk4NTMyMn0.jx4VoW-lw4C_9Ipk-C6pWWjmhEX9pWzgP1_BCsXeiqM",
        "Content-Type": "application/json",
      },
    })
      .then(resp => resp.json())
      .then(comment => {
        window.alert(`Il commento è stato eliminato`);
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  render() {
    return (
      <div className="card m-3 p-3">
        <h6>Commenti</h6>
        <div>
          <div className="small m-1">Autore: {this.props.comment.author}</div>
          <div className="border-top border-bottom p-1">{this.props.comment.comment}</div>
          <div className="small m-1">Voto: {this.props.comment.rate}</div>
          <Button
            className="m-3 mt-0 d-flex justify-content-center w-50 mx-auto"
            variant="warning"
            type="button"
            onClick={this.removeComment}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default CommentList;
