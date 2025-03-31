import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link, image, gitlab }: ProjectType) => {
  return (
    // <Col>
    // <Card className="shadow-lg--hover shadow mt-4">
    <div className="my-div">
      <CardBody>
        <div className="d-flex px-3">
          <div>
            {image ? (
              <div className="w-full">
                <img
                  src={image}
                  style={{
                    objectFit: "cover",
                    //   left: 0,
                    //   right: 0,
                    top: "7rem",
                    //   marginLeft: "auto",
                    //   marginRight: "auto",
                    width: "100%",
                    height: "20rem",
                    // borderRadius: "50%",
                  }}
                  className="shadow mb-3"
                  alt={image}
                />
              </div>
            ) : null}
            <h3>{name}</h3>
            <p className="description mt-3">{desc}</p>
            {github ? (
              <Button
                className="btn-icon"
                color="github"
                href={github}
                target="_blank"
                rel="noopener"
                aria-label="Github"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-github" />
                </span>
              </Button>
            ) : null}
            {gitlab ? (
              <Button
                className="btn-icon"
                style={{ backgroundColor: "#FC6D26", borderColor: "#FC6D26", color: "white" }}
                href={gitlab}
                target="_blank"
                rel="noopener"
                aria-label="Gitlab"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-gitlab" />
                </span>
              </Button>
            ) : null}

            {link ? (
              <Button
                className="btn-icon"
                color="success"
                href={link}
                target="_blank"
                rel="noopener"
                aria-label="Twitter"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-arrow-right mr-2" />
                </span>
                <span className="nav-link-inner--text ml-1">Demo</span>
              </Button>
            ) : null}
          </div>
        </div>
      </CardBody>
    </div>
    // </Card>
    // </Col>
  );
};

export default ProjectsCard;
