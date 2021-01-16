import React from "react";
import Home from "./Components/Home";
import { Link } from "react-router-dom";


class App extends React.Component{
  render(){
    return(
      <div>
      <body id="page-top">
          <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
              <div class="container">
                  <div class="collapse navbar-collapse" id="navbarResponsive">
                      <ul class="navbar-nav text-uppercase ml-auto">
                          <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/">Beranda</Link></li>
                          <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/Gallery">Gallery</Link></li>
                          <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/Hari">Hari Besar</Link></li>
                      </ul>
                  </div>
              </div>
          </nav>
      < Home/>
      </body>
      </div>
    );
  }
}

export default App;