import React, { Component } from 'react';
import {PortfolioItems} from "./PortfolioItems";
import { FaExternalLinkSquareAlt } from 'react-icons/fa';


export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio" id="portfolio">
        <div className="portfolio__container">
          <div className="portfolio__portfolio__container">
            <div>
              <h1>Personal Projects</h1>
            </div>
          </div>
          {/* <h2>Project</h2> */}
          <div className="portfolio__main">
            <div className="portfolio__left">
              <div className="portfolio__project__container">
                <div className="portfolio__project">
                  {PortfolioItems.map((item, index, props) => {
                    return (
                      <div className="portfolioitems__container">
                        <div key={index} className="portfolio__url-container">
                          <a className={item.cName} href={item.url} target="_blank">
                            {item.title}
                          </a>
                          <p>
                            <a className={item.cName} href={item.url} target="_blank">
                              <FaExternalLinkSquareAlt />
                            </a>
                          </p>
                        </div>
                        <div className="portfolio__image__container">
                          <div className="portfolio__image__self">
                            <img src={item.portfolioImage} />
                          </div>
                        </div>
                        <div className="portfolio__desc__container">
                          <div className="portfolio__desc__heading">
                            <p>Technologies</p>
                          </div>
                          <div className="portfolio__desc__items">
                            <p className="portfolio__desc__items__line">{item.description[0]}</p>
                            <p className="portfolio__desc__items__line">{item.description[1]}</p>
                            <p className="portfolio__desc__items__line">{item.description[2]}</p>
                            <p className="portfolio__desc__items__line">{item.description[3]}</p>
                            <p className="portfolio__desc__items__line">{item.description[4]}</p>
                            <p className="portfolio__desc__items__line">{item.description[5]}</p>
                            <p className="portfolio__desc__items__line">{item.description[6]}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
