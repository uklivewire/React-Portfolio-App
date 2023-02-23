// import React from "react";
// import "./style.css";
// import "../../assets/profile.png";

// function Home() {
//   return (
//     <div className="container-fluid mt-5">
//       <div className="row">
//         <div className="col-md-4 d-flex justify-content-center">
//           <img src={require("../../assets/profile.png")} alt="" className="profile-img" />
//         </div>
//         <div className="col-md-8 d-flex flex-column justify-content-center">
//           <div className="d-flex flex-column justify-content-center align-items-center">
//             <h1>Ricky Bryans</h1>
//             <h2 className="job-title">Front End Web Developer</h2>
//             <h3>Welcome to my portfolio</h3>
//             <br></br>
//             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import "./style.css";
import profilePic from "../../assets/profile.png";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4 mb-md-0">
          <img src={profilePic} alt="Profile" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h1 className="mb-4">Ricky Bryans</h1>
          <h2 className="mb-4">Front End Web Developer</h2>
          <h3>Welcome to my portfolio</h3>
          <b></b>
          <br></br>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;