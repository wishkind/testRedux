import {Provider} from 'react-redux';
import ChildRedux from './TestChildRedux';
import store from './store/store';

const TestProvider  = () => {
  return (
    <div>
      <h2>ComponentUseReactRedux</h2>
      <Provider store={store}>
        <ChildRedux />
      </Provider>
    </div>
  )
}

export default TestProvider;
