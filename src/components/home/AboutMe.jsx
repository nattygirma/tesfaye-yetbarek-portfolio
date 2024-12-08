import React from "react";

import axios from "axios";
import { Jumbotron } from "./migration";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);



  return (
    <>
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <img
              className="border border-secondary rounded-circle"
              src={profilePicUrl}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-center">{message}</p>
        </div>
      </div>
 

      <div className="container row d-none ">
        <div className={`col-7 col-lg-${showPic ? "7" : "12"}  d-lg-block align-self-center`}>
        
          <p className="lead text-center mb-5 mt-5"></p>
        </div>
        <div className={`col-lg-${showPic ? "5" : "12"} align-self-center`}>
          
        <h2 className="display-5 mb-5  lead text-center">Leadership Philosophy</h2>
        </div>
      </div>
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">

        </div>
        <div className={`col-lg-12`}>
          <h2 className="display-4 mb-5 mt-5 text-center">Leadership Philosophy</h2>
          <p className="lead text-cente">I believe that leadership is about fostering growth, collaboration, and inclusivity within teams. Drawing on Peter Senge’s principles of "team learning," I prioritize creating an environment where diverse perspectives are valued, and team members feel empowered to contribute. In one project, I resolved conflicts by encouraging open communication and aligning individual goals with a shared vision, which led to improved collaboration and successful project outcomes. My leadership philosophy emphasizes empathy, adaptability, and a commitment to mutual success.</p>

        </div>
      </div>

      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">

        </div>
        <div className={`col-lg-12`}>
          <h2 className="display-4 mb-5 text-center"> Career Goals</h2>
          <h3 className="display-8 mb-2">Short-term Goals</h3>
          <p className="lead text-cente">Transition into an IT manager role where I can lead diverse teams and integrate innovative technologies.
          Develop expertise in systems thinking to manage complexity and drive sustainable growth.</p>
          <h3 className="display-8 mb-2 ">Long-term Goals</h3>
          <p className="lead text-cente">Earn certifications in IT management, such as ITIL or PMP, within the next year.
Gain hands-on experience managing IT projects that involve integrating emerging technologies.
Long-Term Goals:
Lead a department focused on sustainable and efficient IT solutions within five years.
Use systems thinking to implement innovative strategies that align with organizational goals and industry trends.</p>

        </div>
      </div>
    </Jumbotron>

    </>
  );
};

export default AboutMe;
