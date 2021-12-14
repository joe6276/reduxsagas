import { Fragment } from 'react';
import { Provider } from 'react-redux'
import configureStore from './Redux/Store';

const store= configureStore();

function App() {
  return (
   <Provider store={store}>
     <Fragment>
     <h1> HELLOs</h1>
     </Fragment>
   </Provider>
  );
}

export default App;
