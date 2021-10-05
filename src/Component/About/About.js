import React from 'react'
import './About.css';
export default function About() {
    return (
        <div>
           <div className="about-section">
  <h1>About Us</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 className="text-align:center">Our Team</h2>

 <div className="row">
    <div className="col-lg-4">
        <div>
        <div className="card">
      <img  className="img-about" src="https://www.miamibreezehomes.com/wp-content/uploads/2016/02/agent-2-350x350.jpg" alt="Jane" />
      <div className="about-container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
        </div>
    </div>
    <div className="col-lg-4">
        <div>
        <div className="card">
      <img className="img-about" src="https://pbs.twimg.com/media/ESrC6ZBX0AAXhdF.jpg" alt="Mike"/>
      <div className="about-container">
        <h2>Jessica Brody</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jessicabrody@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
        
        </div>
    </div>
    <div className="col-lg-4">
        <div>
        <div className="card">
      <img className="img-about" src="https://www.w3schools.com/w3images/team2.jpg" alt="Mike"/>
      <div className="about-container">
        <h2>Mike Ross</h2>
        <p className="title">Software Enginner</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mikeross@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
        
        </div>
    </div>
    <div className="col-lg-4">
        <div>
        <div className="card">
      <img className="img-about" src="https://enablemarketing.com/wp-content/uploads/2017/12/michael-dam-258165-1-1080x675.jpeg" alt="Mike"/>
      <div className="about-container">
        <h2>Alexandra Cote</h2>
        <p className="title">Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>alexandracote@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
        
        </div>
    </div>
    <div className="col-lg-4">
        <div>
        <div className="card">
      <img className="img-about" src="https://m.media-amazon.com/images/I/61lxIeUAZcL._SL1296_.jpg" alt="Mike"/>
      <div className="about-container">
        <h2>Krista King</h2>
        <p className="title">Project Manager</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>kristaking@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
        
        </div>
    </div>
    <div className="col-lg-4">
        <div>
        <div className="card">
      <img className="img-about" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwc21pbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="John"/>
      <div className="about-container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
        
        </div>
    </div>

</div>
        </div>
    )
}
