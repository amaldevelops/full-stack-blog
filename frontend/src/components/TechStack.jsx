import logoReact from "../assets/react.svg";
import logoJs from "../assets/logo-js.svg";
import logoCSS from "../assets/logo-css.svg";
import logoHtml from "../assets/logo-html.svg";
import logoNodejs from "../assets/logo-nodejs.svg";
import logoPostgresql from "../assets/logo-postgressql.svg";
import logoPostman from "../assets/logo-postman.svg";
import logoPrisma from "../assets/logo-prisma.svg";
import logoVite from "../assets/logo-vite.svg";

import TechnicalInfo from "./TechnicalInfo";

function TechStack() {
  return (
    <div>
      <TechnicalInfo/>
      <h3>Front End Stack</h3>
      <img src={logoJs} className="Logos" alt="JavaScript Logo" />
      <img src={logoReact} className="Logos" alt="React logo" />
      <img src={logoCSS} className="Logos" alt="CSS logo" />
      <img src={logoHtml} className="Logos" alt="HTML logo" />
      <img src={logoVite} className="Logos" alt="Vite logo" />

      <h3>Back End Stack</h3>
      <img src={logoNodejs} className="Logos" alt="NodeJs logo" />
      <img src={logoPostgresql} className="Logos" alt="PostgreSQL logo" />
      <img src={logoPrisma} className="Logos" alt="Prisma logo" />
      <img src={logoPostman} className="Logos" alt="Postman logo" />
    </div>
  );
}

export default TechStack;
