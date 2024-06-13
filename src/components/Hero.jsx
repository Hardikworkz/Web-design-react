const HeroSection = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
  
          <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>
  
          <div className="shopping">
            <p>Also Available On</p>
  
            <div className="brand-icons">
              <img  src="https://th.bing.com/th/id/OIP.beEwpbQJp3IOva1FnY9DuAAAAA?w=324&h=216&rs=1&pid=ImgDetMain" alt="amazon-logo" />
              <img  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-64.png" alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img id="image" src="https://th.bing.com/th?id=OIP.tJQjxbLRRaEt9B4OB546kAHaHw&w=244&h=255&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="hero-image" />
        </div>
      </main>
    );
  };
  
  export default HeroSection;