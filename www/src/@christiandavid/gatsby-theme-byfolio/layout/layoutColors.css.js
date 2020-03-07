import { css } from "@emotion/core"
import lineSvg from "../../../../static/assets/line.svg"

const styles = css`
  .e404.layout-wrapper .layout-inner {
    background: #fff;
  }
  .e404 .data-section {
    color: #000;
  }
  .aboutme.layout-wrapper .layout-inner {
    background: #fff;
  }
  .aboutme .data-section {
    color: #000;
  }
  .aboutme .hamburgercolr::before,
  .aboutme .hamburgercolr::after,
  .e404 .hamburgercolr::before,
  .e404 .hamburgercolr::after {
    background-color: #000;
  }
  .home.layout-wrapper .layout-inner {
    background: #080c1c;
    background: #080c1c url(${lineSvg}) center center fixed;
    background-size: contain;
  }
  .home.layout-wrapper h1,
  .home.layout-wrapper h2 {
    color: #fff;
  }
  .skill.layout-wrapper .layout-inner {
    color: #fff;
    background: #173493;
    background: url(${lineSvg}) center center fixed,
      linear-gradient(#9d316e, #bfd7ea);
    background-size: cover;
  }
  .experience.layout-wrapper .layout-inner {
    background: #080c1c;
    background: url(${lineSvg}) center center fixed,
      linear-gradient(45deg, #95a2cd, #080c1c);
    background-size: cover;
  }
  .home .hamburgercolr::before,
  .home .hamburgercolr::after,
  .skill .hamburgercolr::before,
  .skill .hamburgercolr::after,
  .experience .hamburgercolr::before,
  .experience .hamburgercolr::after {
    background-color: #fff;
  }
  .home .btn-contact-color,
  .experience .btn-contact-color {
    color: #fff;
  }
  .aboutme .btn-contact-color,
  .e404 .btn-contact-color {
    color: #000;
  }
  .aboutme.layout-wrapper .layout-inner {
    background: #f3ffff;
  }
`

export default styles
