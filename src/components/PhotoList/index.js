import React, { useState } from 'react';
import Projects from '../Projects';

const PhotoList = ({ category }) => {


  const [photos] = useState([
      {
      name: 'project_1',
      category: 'projects',
      description:
        'A web app for helping people find nearby breweries.',
        github:'https://github.com/dawsontilley/who-brew/',
        live:'https://dawsontilley.github.io/who-brew/'

    },
    {
      name: 'quotes',
      category: 'projects',
      description:
        'A social media site for people who want to share their favourite qutoes',
        github:'https://github.com/Moshe-jpg/inspirational-quotes-db',
        live:'https://inspirational-quote-app.herokuapp.com/'
    },
    {
      name:'guess-master',
      category:'projects',
      description:'An android application game that lets you guess famouse peoples birthdays.',
      github:'https://github.com/dawsontilley/GuessMaster'
    },{
      name:'weather-dashboard',
      category: 'projects',
      description: 'a dashboard that can retrieve the weather for any city in the world that you would like.',
      github:'https://github.com/dawsontilley/weather-dash',
      live:'https://dawsontilley.github.io/weather-dash/'
    },
    {
      name:'working title game',
      category:'projects',
      description:'An interactive game made in python that lets users fly thorugh the sky while avoiding flaming skulls.',
      github:'https://github.com/dawsontilley/working-title-game'
    },{
      name:"tradeway",
      category:"projects",
      description:"An app for buying and selling your things.",
      github:"https://github.com/Beca-d/Make-A-Deal",
      live:'https://make-a-deal2.herokuapp.com/'
    }
    ,
    
    {
      name:'resume',
      category:'resume',
      description:'My resume featuring my work experience and extracurriculars.'
    },
    {name:'headshot',
    category:'about me',
    description:'My name is Dawson Tilley and I am a twenty three year old Electrical Engineer. I am from Halifax, Nova Scotia. While studying electrical engineering at Queens University, I found my passion laid within the realm of computing. After taking on software development tasks with work, I wish to change my focus to full-time software development.Having taken courses in data structures, object oriented programming, machine learning I have a diverse knowledge background that can contribute to any team.'},
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);
  const currentCategory=category;
  

  return (
    <div>
      <div className="">
        {currentPhotos.map((image, i) => (
          <><img
            src={require(`../../assets/small/${category}/${i}.PNG`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name} />
            {image.category=== 'projects' &&
            <><a href={image.github}><p class="link">GitHub Link</p></a>
            <a href={image.live}><p class="link">Live Link (if deployable)</p></a></>}
            {image.category === 'resume' &&
            <><p><a class='dark' href="https://github.com/dawsontilley/SWE-Resume" download="dawson_tilley_resume">Download my resume.</a></p>
            <h3>Proficiencies:</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>JS</li>
              <li>Python</li>
              <li>SQL</li>
              <li>Mongo</li>
              <li>Java</li>
            </ul>
            </>}

            {currentCategory==='about me' &&
            <p>IT WORKS</p>}
            <p>{image.description}</p></>

        ))}
      </div>
      
    </div>
  );
};

export default PhotoList;
