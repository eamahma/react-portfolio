import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Amir Ahmadi</h2>
          <ul>
            <li>
            Electrical Engineer and Wireless telecommunication professional;
            passionate about coding, hardware, firmware, and IoT.
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/amir-ahmadi-858110190/">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQGDp7Mv0t20Cg/profile-displayphoto-shrink_200_200/0/1631995886344?e=1640217600&v=beta&t=dDM3KNQZwRNOO6AwDrgue1at56pin9tz1Ns0Zt4kO5Q"
                alt="LinkedIn"/>
            </a>
          </p>

          <a
            href="https://github.com/eamahma/react-portfolio/blob/main/src/assets/amir_ahmadi_resume.pdf"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Qualifications</h2>
          <ul>
            <li>
            Highly accomplished Wireless Network and Telecommunication professional with experience in Radio Cell Planning, Optimization, and Network Engineering. Member of Professional Engineers and Geoscientists of British Columbia (P.Eng.). Hands-on cellular networks expertise includes cellular network design for Macro, Micro, in-building DAS and Small Cell, link budget analysis, site selection, RF Safety.Passionate about coding, hardware, firmware, and IoT
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
