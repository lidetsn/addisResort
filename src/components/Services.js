import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum, detail coming soon?"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
        "Lorem ipsum, detail coming soon?"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
        "Lorem ipsum, detail coming soon?"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
        "Lorem ipsum, detail coming soon?"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
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
