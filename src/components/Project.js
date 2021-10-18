
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaGithub} from 'react-icons/fa'

// Individual Cards 

function ProjectCards(props) {
    return (
      <div class="card bg-light text-dark">
        <img class="card-img" src={props.image} alt={props.name}/>
        <div class="card-img-overlay">
          <a href={props.deploy}><h4 class="card-title">{props.name}</h4></a>
          <a href={props.github}><h4 class="card-icon"><FaGithub /></h4></a>
        </div>
      </div>
    );
}
  
  export default ProjectCards;