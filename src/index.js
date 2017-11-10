import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import finalCreateStore from './store/configureStore';
import reducer from './reducers';
import routes from './routes';
import './index.css';

import '../public/libs/semantic-ui/dist/semantic.min.css'
import '../public/libs/bootstrap/dist/css/bootstrap.min.css'
const store = finalCreateStore(reducer)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
      <div>
          <Router history={history} routes={routes} />
      </div>
  </Provider>,
  document.getElementById('root')
);
