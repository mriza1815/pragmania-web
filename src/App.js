import React from 'react';
import './App.css';
import Home from './containers/Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faGoogle, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faLaptop, faFacebook, faGoogle, faLinkedin, faTwitter, faGithub )

const App = () => <Home/>

export default App;
