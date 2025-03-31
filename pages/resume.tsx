import React from "react";
import Head from "next/head";
import { Button, Container } from "reactstrap";
import { useRouter } from "next/router";

const ResumePage = () => {
  const resumeUrl = "/Williams-Adebola-Resume.pdf";
  const router = useRouter();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Williams-Adebola-Resume.pdf";
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
          <Button color="secondary" onClick={() => router.back()} className="mr-2">
            <i className="fa fa-arrow-left mr-2"></i> Go Back
          </Button>
        </div>
      </Container>
    </>
  );
};

export default ResumePage;
