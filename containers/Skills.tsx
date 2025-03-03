import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

const Skills = () => {
  return (
    skillsSection && (
      <Fade bottom duration={2000}>
        <Container className="text-center my-5 section section-lg">
          <h1 className="h1">{skillsSection.title}</h1>
          <p className="lead">{skillsSection.subTitle}</p>
          {/* <div style={{ height: "300px", overflow: "hidden" }}>
            
            <DisplayLottie animationPath="/lottie/skills/fullstack.json" />
          </div> */}

          <Row className="my-5 justify-content-center">
            {skillsSection.data.map((section, index) => (
              <Col lg="5" md="6" sm="12" key={index} className="mb-4 d-flex justify-content-center">
                <div className="text-center w-100">
                  <h3 className="h3 mb-2">{section.title}</h3>
                  <div className="d-flex justify-content-center flex-wrap mb-2">
                    {section.softwareSkills.map((skill, i) => (
                      <Fragment key={i}>
                        <div
                          className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                          id={skill.skillName.replace(/\s/g, "")}
                        >
                          <Icon icon={skill.iconifyTag} data-inline="false" />
                        </div>
                        <UncontrolledTooltip delay={0} placement="bottom" target={skill.skillName.replace(/\s/g, "")}>
                          {skill.skillName}
                        </UncontrolledTooltip>
                      </Fragment>
                    ))}
                  </div>
                  <div>
                    {section.skills.map((skill, i) => (
                      <p key={i}>{skill}</p>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Fade>
    )
  );
};

export default Skills;
