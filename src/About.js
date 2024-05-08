import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <h1>About DeezBUUKS</h1>
        <h2>Who Are We</h2>
        <p>DeezBUUKS is a cutting-edge online platform for book enthusiasts, offering a unique blend of exploration, discovery, and community engagement. We're a team of avid readers and writers who are passionate about sharing the joy of reading and fostering a vibrant community around books.</p>
        <h2>A Few Things You Can Do On DeezBUUKS</h2>
        <ul>
          <li>Explore a vast library of books across all genres and formats.</li>
          <li>Search for books by title, author, or genre to find your next great read.</li>
          <li>Delete books from your collection to keep it organized and up-to-date.</li>
          <li>Review books to share your thoughts and experiences with the community.</li>
          <li>Add books to your collection to keep track of your favorites and upcoming reads.</li>
        </ul>
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
