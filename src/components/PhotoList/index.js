import React, { useState } from 'react';

const PhotoList = ({ category }) => {


  const [photos] = useState([
      {
      name: 'project_1',
      category: 'projects',
      description:
        'A web app for helping people find nearby breweries.'
    },
    {
      name: 'quotes',
      category: 'projects',
      description:
        'A social media site for people who want to share their favourite qutoes'
    },
    {
      name: 'runbuddy-pic',
      category: 'projects',
      description:
        'An App for tracking running.'
    },
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
            {image.category === 'resume' &&
            <p><a class='dark'href="../../assets/resume/Dawson_Tilley_SWE.pdf" download="dawson_tilley_resume">Download my resume.</a></p>}

            {currentCategory==='about me' &&
            <p>IT WORKS</p>}
            <p>{image.description}</p></>

        ))}
      </div>
      
    </div>
  );
};

export default PhotoList;
