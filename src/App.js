import React from 'react';
import './App.css';

class App extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    return (
      <div>
        <header>
          <div className="top-bar animate-dropdown"></div>
          <div className="main-header">
            <div className="container">
              <h1 className="site-title">Currency React</h1>

            </div>
          </div>
          <div className="header-nav">
            <div className="container">
              <nav>
                <ul>
                  <li><a href="#">Головна</a></li>
                  <li><a href="#">Пункти обміну</a></li>
                  <li><a href="#">Контакти</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <div className="container">
          <main>
            <h3> Курс валют на </h3>
            <div className="flex-container">
              <div className="block flex-item">
                <div className="currency-name">USD</div>
                <div className="currency-in">1500 Kr</div>
                <div className="currency-out">1200 Kr</div>
              </div>
              <div className="block flex-item">
                <div className="currency-name">USD</div>
                <div className="currency-in">1500 Kr</div>
                <div className="currency-out">1200 Kr</div>
              </div>
              <div className="block flex-item">
                <div className="currency-name">USD</div>
                <div className="currency-in">1500 Kr</div>
                <div className="currency-out">1200 Kr</div>
              </div>
            </div>
            <h3> Калькулятор обміну</h3>
            <div className="block">
              <div>Я хочу</div>
              <div><label><input type="radio" name="radio" defaultValue="0"/>Купити</label></div>
              <div><label><input type="radio" name="radio" defaultValue="1"/>Продати</label></div>
                  <div>
                    <input type="number" defaultValue="150"/>
                      <select name="" id="">
                        <option value="USD">USD</option>
                        <option value="RUB">RUB</option>
                        <option value="EUR">EUR</option>
                      </select>
            </div>
                    <div>
                      <h4>Результат</h4>
                      <ul className="calc-res">
                        <li>EUR 150</li>
                        <li>EUR 150</li>
                        <li>EUR 150</li>
                        <li>EUR 150</li>
                      </ul>
                    </div>
                  </div>
    </main>
              </div>

              <div className="container" id="cookie_info">
                <div className="site-content">
                  <div className="well">На нашому сайти ми використовуємо cookie для збору інформації технічного характеру.<br/>Зокрема, 
                  для персоніфіцированої работи сайту ми обробляємо IP-адресу регіону вашого
            місця розташування.&nbsp;<a className="btn btn-primary btn-sm">OK</a></div>
                  </div>
                </div>


                <footer id="footer" className="footer">
                  <div className="footer-bottom">
                    <div className="container">
                      <div className="flex-container">
                        <div className="flex-item">
                         
                          <p>All Rights Reserved</p>

                        </div>
                    <div className="flex-item">
                          <div className="module-body">
                            <ul className="list-unstyled">
                              <li><a href="/sitemap/" tooltip="Карта сайта">Карта сайту</a></li>
                              <li><a href="/sitemaps.xml" target="_blank" tooltip="Google Sitemap">Google Sitemap</a></li>
                            </ul>
                          </div>
                    </div>
                        <div className="flex-item">
                          <div className="module-body">
                            <ul className="list-unstyled">
                              <li><a href="/contact/" tooltip="Контакты">Контакти</a></li>
                              <li><a href="/d">Гарантії</a></li>
                              <li><a href="/s">Про сервіс</a></li>
                              <li><a href="/o">Умови повернення</a></li>
                        <li><a href="/p">Угода про використання сервісу</a></li>
                            </ul>
                          </div>
                        </div>
                    </div>
                    </div>
                  </div>
      </footer>
    </div>
    );
  }
}

export default App;
