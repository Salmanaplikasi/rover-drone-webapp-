import React from "react";
import "./Footer.css";
import Wave from "../../imgs/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer" id="contact"> {/* ← ID ditambahkan di sini */}
      <img src={Wave} alt="" style={{ width: "103%" }} />
      <div className="f-content">
        <span>Tim Universitas Lampung</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
