import React from "react";
import Head from "next/head";
import { Button, Container } from "reactstrap";

const ResumePage = () => {
  const resumeUrl = "/resume.pdf"; // Ensure Devops1.pdf is in the /public folder

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf"; // Set download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Head>
        <title>My Resume</title>
      </Head>
      <Container className="text-center py-5">
        <h1 className="mb-4">My Resume</h1>
        <iframe src={resumeUrl} width="100%" height="600px" style={{ border: "none" }}></iframe>
        <div className="mt-4">
          <Button color="primary" onClick={handleDownload}>
            <i className="fa fa-download mr-2"></i> Download Resume
          </Button>
        </div>
      </Container>
    </>
  );
};

export default ResumePage;
