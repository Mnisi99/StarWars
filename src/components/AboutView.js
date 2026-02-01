import React from "react";
import Hero from './Hero';


class AboutView extends React.Component {
  render() {
    return <>
        <Hero text="About Us page"/>
        <div className="container border border-warning p-4 mb-4">
            <div className="border border-primary p-3 mb-4">
              <h3 className="">Our Mission</h3>  
              <p className="lead">At MovieApp, our mission is to bring the magic of cinema closer to everyone. We aim to create a platform where movie lovers can discover, explore, and celebrate films from around the world. Whether it’s the latest blockbuster or a hidden indie gem, we want to make every story accessible and every viewing experience unforgettable.
              </p>
            </div>
            <div className="border border-info p-3">
              <h3 className="">Our Values</h3>
              <ul>
                <li className="lead"><span className="fw-bold">Passion for Storytelling</span> – We believe movies are more than entertainment; they’re powerful stories that connect people across cultures.</li>
                <li className="lead"><span className="fw-bold">Accessibility</span> – Everyone deserves easy access to films, regardless of location or background.</li>
                <li className="lead"><span className="fw-bold">Community</span> – We foster a welcoming space where fans can share reviews, recommendations, and conversations.</li>
                <li className="lead"><span className="fw-bold">Innovation</span> – We embrace technology to enhance how people discover and enjoy movies.</li>
                <li className="lead"><span className="fw-bold">Integrity</span> – We respect creators, audiences, and the art of filmmaking by promoting authentic and ethical practices.</li>
              </ul>
            </div>
            <div className="border border-light"></div>
        </div>
    </>;
  }
}

export default AboutView;