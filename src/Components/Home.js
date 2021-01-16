import React from "react";
import { Switch, Route } from "react-router-dom";

import Beranda from './Beranda';
import Gallery from './gallery';
import Hari from './hari';

const Home = () => (
    <Switch>
        <Route exact path="/" component={Beranda}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/hari" component={Hari}/>
    </Switch>
)

export default Home;