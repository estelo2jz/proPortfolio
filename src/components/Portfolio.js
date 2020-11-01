import React, { Component } from 'react';
import {PortfolioItems} from "./PortfolioItems";
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import Logo from "../logo/logo3.png";
import Back from "../images/back.jpeg";
import Pv1 from "../logo/pv1.png";
import Pv2 from "../logo/pv2.png";
import Pv3 from "../logo/pv3.png";

// company images
// import Topcomp from "../images/company/top.jpeg";
// import Bad from "../images/company/bad.jpeg";
// import Barber from "../images/company/barder.jpeg";
// import Budget from "../images/company/budget.webp";
// import Chinese from "../images/company/chinese.jpeg";
// import Crypto from "../images/company/crypto.jpeg";
// import Diamond from "../images/company/diamond.jpeg";
// import Expense from "../images/company/expense.jpeg";
// import Grass from "../images/company/grass.jpeg";
// import Gucci from "../images/company/gucci.jpeg";

// company logo
import Barberlogo from "../images/companylogo/barber.png";
import Grasslogo from "../images/companylogo/grass.png";
import Razorlogo from "../images/companylogo/razor.png";
import Stickerlogo from "../images/companylogo/sticker.png";

import Cryptologo from "../images/companylogo/crypto.png";
import Diamondlogo from "../images/companylogo/diamond.png";
import Expenselogo from "../images/companylogo/expense.png";
import Guccilogo from "../images/companylogo/gucci.png";
import Jmdlogo from "../images/companylogo/jdm.png";
import Lyricslogo from "../images/companylogo/lyrics.png";
import Onlinelogo from "../images/companylogo/online.png";
import Shoeslogo from "../images/companylogo/shoes.png";
import Sveltebudgetlogo from "../images/companylogo/sveltbudget.png";
import Todologo from "../images/companylogo/todo.png";
import Companylogo from "../images/companylogo/company.png";
import Breaklogo from "../images/companylogo/break.png";
import Chineselogo from "../images/companylogo/chinese.png";


export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio" id="portfolio">
        <div className="portfolio__container">
          <div className="portfolio__portfolio__container">
            <div>
              <h1>Portfolio's</h1>
            </div>
            <div className="portfolio__projects">
              <div className="portfolio__items">
                <a href="https://estelo.net/" target="_blank">
                  <img className="portfolio__image" src={Pv1} />
                </a>
              </div>
              <div className="portfolio__items">
                <a href="https://esteloportfoliov2.netlify.app/#project" target="_blank">
                <img className="portfolio__image" src={Pv2} />
                </a>
              </div>
              <div className="portfolio__items">
                <a href="https://esteloportfoliov3.netlify.app/" target="_blank">
                  <img className="portfolio__image" src={Pv3} />
                </a>
              </div>
          </div>
          </div>
          <h2>Project</h2>
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
                      </div>
                    )
                  })}
                </div>
                {/* <div className="portfolio__project">
                  <div className="portfolio__link__container">
                    <a href="https://topcompanyv2.netlify.app/" target="_blank">
                      Top Company Cultures
                    </a>
                  </div>
                  <div className="portfolio__image__container">
                    <img src={Companylogo} alt="dashboard" className="portfolio__img" />
                  </div>
                </div>
                <div className="portfolio__project">
                  <a href="https://icydiamond.netlify.app/" target="_blank">
                    Ice Ice Diamond Drip
                  </a>
                  <img src={Diamondlogo} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://barberclonev2.netlify.app/" target="_blank">
                    Barber Landing Page
                  </a>
                  <img src={Barberlogo} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://lawnpro.netlify.app/" target="_blank">
                    Grass Pro LandingPage
                  </a>
                  <img src={Grasslogo} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://reacttodoappv2.netlify.app/" target="_blank">
                    React Todo
                  </a>
                  <img src={Todologo} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://cryptostockstracker.netlify.app/" target="_blank">
                    Crypto Currency API
                  </a>
                  <img src={Cryptologo} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://breakedbad-api.netlify.app/" target="_blank">
                    Breaking Bad API
                  </a>
                  <img src={Breaklogo} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://topengines.netlify.app/mitsubishi4" target="_blank">
                    Top 10 JDM
                  </a>
                  <img src={Jmdlogo} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://shoe-library.netlify.app/" target="_blank">
                    Shoe Storage
                  </a>
                  <img src={Shoeslogo} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://react-expense.netlify.app/" target="_blank">
                    Expense Tracker
                  </a>
                  <img src={Expenselogo} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://react-lyricsss.netlify.app/" target="_blank">
                    Lyrics Finder API
                  </a>
                  <img src={Lyricslogo} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://svelte-budget-app.netlify.app/" target="_blank">
                    Svelte Budget Calc
                  </a>
                  <img src={Sveltebudgetlogo} alt="dashboard" className="portfolio__img" />
                </div>


                <div className="portfolio__project">
                  <a href="https://ministore.netlify.app/" target="_blank">
                    Online Shopping
                  </a>
                  <img src={Onlinelogo} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://chinesefood.netlify.app/" target="_blank">
                    Chinese Menu 
                  </a>
                  <img src={Chineselogo} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://fakegucci.netlify.app/" target="_blank">
                    Fake GUCCI
                  </a>
                  <img src={Guccilogo} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://gummy-stickers.netlify.app/" target="_blank">
                    Gummi Code
                  </a>
                  <img src={Stickerlogo} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://svelte-razors-store.netlify.app/" target="_blank">
                    Svelte Razor
                  </a>
                  <img src={Razorlogo} alt="dashboard" className="portfolio__img" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
