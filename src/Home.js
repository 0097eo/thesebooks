import React from 'react';


const Home = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to DeezBUUKS</h1>
      </header>
      <section className="featured-books">
        <h2>Featured Books</h2>
        <div className="book-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMVTGRLESLPi6Y7uMlee6ytpCiB2DtHa46RTTHk23vw&s" alt="Book Cover" />
          <h3>Made Familiar</h3>
          <p>Ruto</p>
        </div>
        <div className="book-card">
          <img src="https://klbbooks.com/wp-content/uploads/2020/09/Maths-F1-pb.png" alt="Book Cover" />
          <h3>KLB</h3>
          <p>Tiktok</p>
        </div>
        <div className="book-card">
          <img src="https://textbookcentre.com/media/products/394.jpg" alt="Book Cover" />
          <h3>Get It right</h3>
          <p>Breeder Lw</p>
        </div>
      </section>
      <footer className="contact">
        <h2>Contact Us</h2>
        <p>Email: deezbuuks@gmail.com</p>
        <p>Phone: +1234567899</p>
      </footer>
    </div>
  );
};

export default Home;
