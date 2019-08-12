import React, { Fragment } from "react";

const styles = {
  display: "block",
  margin: "auto",
  width: "160px",
  height: "160px",
  overflow: "hidden",
  borderRadius: "50%"
};
const image = {
  width: "100%",
  filter: "grayscale(100%)",
  transition: "all 0.4s"
};
const section = {
  width: "600px",
  height: "0",
  margin: "auto",
  fontSize: "20px",
  color: "white",
  textAlign: "justify",
  overflow: "visible"
};
const border = {
  display: "block",
  margin: "auto",
  width: "160px",
  height: "3px",
  backgroundColor: "#3498db",
  marginBottom: "40px"
};
const team = {
  display: "block",
  overflow: "hidden",
  textAlign: "center",
  padding: "100px",
  backgroundColor: "grey",
  marginTop: "9%",
  width: "100%",
  height: "50rem"
};
const name = {
  marginBottom: "30px",
  textAlign: "center",
  textTransform: "uppercase",
  fontSize: "22px",
  color: "white"
};

const font = {
  color: "white",
  display: "felx"
};
const about = () => {
  return (
    <div style={team}>
      <h1 style={font}>Our Team</h1>
      <span style={border} />
      <div style={font}>
        <div>
          <a style={styles} href="#p1">
            <img style={image} src={require("./img/06.png")} alt="Mwafak" />
          </a>
          <div
            className="about-top   p-2 text-primary"
            style={{ display: "flex" }}
          >
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x p-1" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x p-1" />
            </a>
            <a
              href="https://www.linkedin.com/in/mwafak-arbash-5355b9167/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin fa-2x p-2" />
            </a>
            <a
              href="https://github.com/mwafaka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github fa-2x p-1" />
            </a>
          </div>
          <span style={name}>Mwafak Abrash</span>
          <span style={border} />
        </div>
        <div>
          <a style={styles} href="#p2">
            <img style={image} src={require("./img/04.jpg")} alt="Nasseb" />
          </a>
          <div
            className="about-top   p-2 text-primary"
            style={{ display: "flex" }}
          >
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x p-1" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x p-1" />
            </a>
            <a href="" rel="noopener noreferrer">
              <i class="fab fa-linkedin fa-2x p-2" />
            </a>
            <a
              href="https://redtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github fa-2x p-1" />
            </a>
          </div>
          <span style={name}>Naseeb Rahrouh</span>
          <span style={border} />
        </div>
      </div>
      {/* <div style={section} id="p1">
         <span style={name}>Mwafak Abrash</span>
         <span style={border}></span>
         <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus pariatur, minima autem mollitia iste quisquam laboriosam provident harum adipisci consectetur.
         </p>
     </div>
     <div style={section} id="p2">
         <span style={name}>Naseeb Rahrouh</span>
         <span style={border}></span>
         <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
             Accusamus pariatur, minima autem mollitia iste quisquam laboriosam provident harum adipisci consectetur.
         </p>
     </div> */}
    </div>
  );
};

export default about;
