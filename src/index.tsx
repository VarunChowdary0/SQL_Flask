import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <div className=' text-white min-h-screen select-none bg-[#1f1f1f]'>
      <App />
      {(window.location.pathname!=='/') && 
      <a href='/' className=' text-2xl fixed top-5 right-5 
      hover:opacity-60 transition-all'>
                Home
      </a>}
    </div>
);
reportWebVitals();
