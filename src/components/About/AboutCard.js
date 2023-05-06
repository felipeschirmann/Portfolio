import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Felipe Schirmann </span>
            from <span className="purple"> Colatina, Brazil.</span>
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Xadrez
            </li>
            <li className="about-activity">
              <ImPointRight /> Unwavering enthusiast in pursuit of expanding horizons through learning in all areas.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A good developer writes for other programmers not just for himself!"{" "}
          </p>
          <footer className="blockquote-footer">felipeschirmann</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
