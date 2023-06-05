import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bds07 from "../../Assets/Projects/bds07.png";
import bds08 from "../../Assets/Projects/bds08.png";
import bds09 from "../../Assets/Projects/bds09.png";
import DSMovie from "../../Assets/Projects/dsmovie.png";
import DSVendas from "../../Assets/Projects/dsvendas.png";
import DSMeta from "../../Assets/Projects/dsmeta.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bds07}
              isBlog={false}
              title="Bds07"
              description="A website developed in React to present a company's products, developing the following skills: Responsiveness and Bootstrap in the project"
              ghLink="https://github.com/felipeschirmann/bds07"
              demoLink="https://bds07.felipeschirmann.dev.br"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bds08}
              isBlog={false}
              title="Bds08"
              description="A website developed in React with the objective of demonstrating how to consume the github api."
              ghLink="https://github.com/felipeschirmann/bds08"
              demoLink="https://bds08.felipeschirmann.dev.br"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bds09}
              isBlog={false}
              title="Bds09"
              description="Project Movieflix: Layout responsive, Routes, Request for Backend and LocalStorage, Context API in Button Login, Communicate components for rendering when new review is posting using events. User role member: ana@gmail.com password: 123456 User role visitor: bob@gmail.com password: 123456"
              ghLink="https://github.com/felipeschirmann/bds09"
              demoLink="https://bds09.felipeschirmann.dev.br/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DSMovie}
              isBlog={false}
              title="DSMovie"
              description=""
              ghLink="https://github.com/felipeschirmann/DSMovie"
              demoLink="https://site.dsmovie.felipeschirmann.dev.br"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DSVendas}
              isBlog={false}
              title="DSVendas"
              description=""
              ghLink="https://github.com/felipeschirmann/DSVendas"
              demoLink="https://site.dsvendas.felipeschirmann.dev.br"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DSMeta}
              isBlog={false}
              title="DSMeta"
              description=""
              ghLink="https://github.com/felipeschirmann/DSMeta"
              demoLink="https://site.dsmeta.felipeschirmann.dev.br/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
