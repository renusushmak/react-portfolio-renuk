import React from "react";
import MyResume from '../downloads/Renu-CV.pdf';

function Resume() {
    return(
      <div>
        <h1>Resume and LinkedIn</h1>
        <hr className="hr-line"></hr>
        <div className="App-link">
          <a href={MyResume}>Download My Resume</a><br></br>
          <br></br>
          <a href="https://www.linkedin.com/in/renu-k/">My LinkedIn</a>
        </div>
      </div>
    )
}

export default Resume;