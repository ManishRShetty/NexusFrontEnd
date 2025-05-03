import { LoadingProvider } from './contexts/LoadingContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);