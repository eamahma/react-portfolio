
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Individual Cards 
// function ProjectCards(props) {
//     return (
//       <div className="card"> 
//         <div className="img-container">
//           <img alt={props.name} src={props.image}/>
//         </div>
//         <div className="content">
//               <p className="card-title">{props.name}</p>
//               <p class="proj-icons-container">
//               <a href={props.github}><img class="project-icon" src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub Repo" /></a> 
//               <a href={props.deploy}><img class="project-icon" src="https://img.icons8.com/fluent/48/000000/domain.png" alt="Live Application" /></a> 
       
             
//              </p>
//               <p class="topics">
//                     ({props.topics})
//               </p>
//         </div>
//       </div>
//     );
// }

function ProjectCards(props) {
    return (
      <div class="card bg-light text-dark">
        <img class="card-img" src={props.image} alt={props.name}/>
        <div class="card-img-overlay">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.github}.</p>
          <p class="card-text">{props.deploy}</p>
        </div>
      </div>
    );
}
  
  export default ProjectCards;