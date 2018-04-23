import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';
import store from './redux/store';

import App from './component/App/App';
import Root from './component/Root/Root';

import getRouter from './router/router';

/*初始化*/
// renderWithHotReload(getRouter());
//
// if (module.hot) {
//   module.hot.accept('./router/router', () => {
//     const getRouter = require('./router/router').default;
//     renderWithHotReload(getRouter());
//   });
// }
//
// function renderWithHotReload(RootElement) {
//   ReactDom.render(
//     <AppContainer>
//       <Provider store={store}>
//         {RootElement}
//       </Provider>
//     </AppContainer>,
//     document.getElementById('app')
//   );
// }

ReactDom.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
);