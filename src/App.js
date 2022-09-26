import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
  

    {name: 'projects',description:'A compilation of personal and group projects that display my experience in web development.'},
    {name: 'resume',description:'A link to my resume to be downloaded. '}
    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            <Footer></Footer>
          </>
        ) : (
          <>
          <ContactForm></ContactForm>
          <Footer></Footer>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
