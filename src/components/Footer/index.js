import React from 'react';
import linkedIn from '../../assets/socials/LI-Logo.png'
import github from '../../assets/socials/GitHub_Logo.png'
import stackOver from '../../assets/socials/logo-stackoverflow.png'
function Footer() {
  return (
    <section className="my-5">
      <h1 id="footer">More Information</h1>
      
      <div id= 'social-pictures' className="my-2 ">
        <a className='socials' href='https://stackoverflow.com/users/20074588/dawson-t'><img src={stackOver} alt='stack overflow logo'></img></a>
        <a className='socials' href='https://github.com/dawsontilley'><img src={github} alt='github logo'></img></a>
        <a className='socials' href='https://www.linkedin.com/in/dawson-tilley-105b091a0/'><img src={linkedIn} alt='linkedin logo'></img></a>
      </div>
    </section>
  );
}

export default Footer;
