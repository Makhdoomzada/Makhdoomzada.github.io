import React from 'react'
import landingPage from "./landingpage";
import contactme from './contactme';
import projects from './projects';
import {Switch,Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path ="/" component={landingPage}/>
        <Route path = "/contactme" component = {contactme}/>
        <Route path = "/projects" component = {projects}/>
    </Switch>
)

export default Main;