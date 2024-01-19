import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Enjoy complimentary cocktails at our hotel, a perfect blend of luxury and hospitality, adding a touch of elegance to your stay. Cheers!",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Embark on endless hiking adventures surrounded by nature's beauty. Discover breathtaking trails and serenity that rejuvenate your spirit.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Explore hassle-free with our free shuttle service, offering convenience and easy access to local attractions during your stay with us.",
      },
      {
        icon: <FaBeer />,
        title: "wellness oasis",
        info:
          "Indulge in our Wellness Escape featuring complimentary yoga, spa access, and rejuvenating activities for a perfect retreat into tranquility.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
