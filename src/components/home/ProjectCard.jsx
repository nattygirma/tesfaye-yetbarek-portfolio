import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ProjectCard = ({ value }) => {
  const {
    name,
    description,

  } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
          {/* {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />} */}
          {/* <hr />
          {languages_url ? (
            <Language languages_url={languages_url} repo_url={svn_url} />
          ) : (
            <Skeleton count={3} />
          )}
          {value ? (
            <CardFooter star_count={stargazers_count} repo_url={svn_url} pushed_at={pushed_at} />
          ) : (
            <Skeleton />
          )} */}
        </Card.Body>
      </Card>
    </Col>
  );
};


export default ProjectCard;
