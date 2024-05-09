import React from 'react';
import './About.css'
import AuthDetails from './AuthDetails';

const About = () => {
  return (
    <div className='about'>
        <AuthDetails/>
        <h1>About DeezBUUKS</h1>
        <h2>Who Are We</h2>
        <p>DeezBUUKS is a cutting-edge online platform for book enthusiasts, offering a unique blend of exploration, discovery, and community engagement. We're a team of avid readers and writers who are passionate about sharing the joy of reading and fostering a vibrant community around books.</p>
        <h2>A Few Things You Can Do On DeezBUUKS</h2>
        <ol>
          <li>Explore a vast library of books across all genres and formats.</li>
          <li>Search for books by title, to find your next great read.</li>
          <li>Add books to the collection.</li>
          <li>Delete books from the collection .</li>
          <li>Rate books to share your thoughts and experiences.</li>
          <li>Navigate to an external link to read the book.</li>
        </ol>
        <h3>A Message From The Team</h3>
        <p>At DeezBUUKS, we believe in the transformative power of books. We're committed to creating a space where every book lover can find a home, discover new favorites, and connect with others who share their passion. Join us on this journey, and let's explore the world of books together!</p>
        <footer className="about-contact">
            <h2>Contact Us</h2>
            <p>Email: deezbuuks@gmail.com</p>
            <p>Phone: +1234567899</p>
        </footer>
    </div>
  )
}

export default About;
