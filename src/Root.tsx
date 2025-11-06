import App from './App';
import ReactQueryProvider from './lib/ReactQueryProvider';
import { Provider } from 'jotai';

const Root = () => (
  <ReactQueryProvider>
    <Provider>
      <App />
    </Provider>
  </ReactQueryProvider>
);

export default Root;
