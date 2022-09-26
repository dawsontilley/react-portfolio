import React from 'react';
import coverImage from '../../assets/cover/headshot_CIRQUE.png';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Dawson Tilley</h1>
      <img src={coverImage} className="my-2 coverimg" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        My name is Dawson Tilley and I am a twenty three year old Electrical Engineer. I am from Halifax, Nova Scotia. 
        While studying electrical engineering at Queen's Univesrity, I found my passion laid within the realm of computing.
        After taking on software development tasks with work, I wish to change my focus to full-time software development.
        Having taken courses in data structures, object oriented programming, machine learning I have a diverse knowledge background that can contribute to any team.
        </p>
      </div>
    </section>
  );
}

export default About;
