import '../styles/Home.css';
import home_img from "../image/img1.webp"
import match1 from '../image/k1.png'
const matches = [
    {
      image: './src/image/p1.jpg', 
      title: 'Fortune Barishal vs Sylhet Strikers, BPL, Today Match Prediction – Reddy Anna...',
    },
    {
      image: './src/image/k2.png', 
      title: 'Rangpur Riders vs Dhaka Capitals, BPL, Today Match Prediction – Reddy Anna...',
    },
    {
      image: './src/image/k3.png', 
      title: 'Perth Scorchers vs Melbourne Renegades, BBLT20, Today Match Prediction – Reddy Anna...',
    },
    
  ];
const Home = () =>
{
    return(
        <>
        <section className="homepage">
        <div className='home_main_content'>
        <div className='welcome_content_container'>
        <div className="welcome-content">
        <h1>Welcome to Reddy Anna Book</h1>
        <h2>India's No.1 sports ID provider since 2010</h2>
        <p>
          Do you want to open your cricket ID online but can't find a trustworthy betting platform? Here's a Reddy Anna Book for you.
          This is India's most famous and trusted cricket demo ID platform. Reddy Anna Book is India's largest exchange platform,
          offering fantastic online sports betting with a 24-hour withdrawal service.
        </p>
        <div className="contact-buttons">
          <a href="tel:7777857777" className="button">WhatsApp Us @ 7797277777</a><br/>
          <a href="https://wa.me/7797277777" className="button">WhatsApp Us @ 7797277777</a><br/>
          <a href="https://wa.me/7777757777" className="button">WhatsApp Us @ 7777757777</a>
        </div>
      </div>
      <div className="welcome-image">
        <img src={home_img} alt="Players celebrating" />
      </div>
      </div>
      </div>
      <div className='support_content'>
        <center><h1> Reddy Anna Book Support</h1></center>
          <center>
            <p>
                Do you want to open your cricket ID online but can't find a trustworthy betting platform? Here's a Reddy Anna Book for you.
                This is India's most famous and trusted cricket demo ID platform. Reddy Anna Book is India's largest exchange platform,
                offering fantastic online sports betting with a 24-hour withdrawal service.
            </p>
          </center>

          <center>
            <div className="contact-buttons">
              <a href="tel:7777857777" className="button">Contact us @ 7777857777</a>
            </div>  
          </center>

        <center><h1> Reddy Anna Blog </h1></center>
        <center><p>Read our blog for betting tips, tricks and Reddy Anna Match Predictions here.</p></center>
        <center>
          <div className="contact-buttons">
            <a href="tel:7777857777" className="button">Reddy Anna blog</a>
          </div>
        </center>

        <div className="match-cards">
          {matches.map((match, index) => (
            <div className="card" key={index}>
              <img src={match.image} alt={match.title} className="card-image" />
              <div className="card-title">{match.title}</div>
            </div>
          ))}
        </div>
      </div>


        </section>
        
        </>
    )
};
export default Home;