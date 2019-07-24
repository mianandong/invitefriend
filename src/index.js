import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/App/index.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Download from './page/ReceiveSuccess';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <Router>
        <Route exact path='/' component={App}/>
        <Route exact path='/download' component={Download}/>
    </Router>
), document.getElementById('root'));

serviceWorker.unregister();
