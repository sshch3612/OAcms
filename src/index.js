import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
// import createLoading from 'dva-loading';
import './index.css';
import * as a from 'dva';
console.log(a,333);

// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
