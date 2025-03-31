import React from "react";
import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    projects && (
      <main>
        <Fade bottom duration={2000}>
          <section className="section section-lg bg-gradient-info">
            {/* <Container> */}
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="d-flex p-4">
                <div>
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                    <i className="ni ni-laptop text-info" />
                  </div>
                </div>
                <div className="pl-4">
                  <h4 className="display-3 text-white"> Projects</h4>
                </div>
              </div>

              <div className="projects-container">
                {projects.map((data, i) => (
                  <ProjectsCard key={i} {...data} />
                ))}
              </div>

              {/* </Container> */}
            </div>
          </section>
        </Fade>
      </main>
    )
  );
};

export default Projects;
