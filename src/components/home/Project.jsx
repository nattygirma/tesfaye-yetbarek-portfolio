import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";


const Project = ({ projectsArray }) => {



  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">Projects</h2>
        <Row>
          {projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))
          }
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
