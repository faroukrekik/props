import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Card } from "react-bootstrap";

const Cardplayers = ({ el }) => {
  return (
    <div>
      <Card style={{ margin: "15px" }}>
        <Card.Img style={{ height: "300px" }} variant="top" src={el.imgURL} />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            <p> Age:{el.age}</p>
            <p>Nationnality:{el.nationality}</p>
            <p> TEAM:{el.team}</p>
            <p>Jerseynumber: {el.jerseynumber}</p>
          </Card.Text>
          <Button variant="primary">MORE DETAILLS</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cardplayers;
