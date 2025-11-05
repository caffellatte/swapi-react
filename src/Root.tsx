import App from './App';
import ReactQueryProvider from './lib/ReactQueryProvider';

const Root = () => (
  <ReactQueryProvider>
    <App />
  </ReactQueryProvider>
);

export default Root;
