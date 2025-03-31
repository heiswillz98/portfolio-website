import React from "react";
import { otherProjects, projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import Fade from "react-reveal/Fade";
import OtherProjectsCard from "../components/OtherProjectsCard";

const OtherProjects = () => {
  return (
    projects && (
      <main>
        <Fade bottom duration={2000}>
          <section className="section section-lg bg-gradient-info">
            {/* <Container> */}
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-laptop text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-white">Other Projects</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {otherProjects.map((data, i) => {
                return <OtherProjectsCard key={i} {...data} />;
              })}
            </Row>
            {/* </Container> */}
          </section>
        </Fade>
      </main>
    )
  );
};

export default OtherProjects;
