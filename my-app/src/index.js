import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import MainSec from './Page01/MainSec';
import ProductFeature from './Page01/ProductFeature';
import FeatureModal from './Page01/FeatureModal';
import Cart from './Page01/Cart';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Cart />
    <MainSec />
    <ProductFeature />
    <FeatureModal />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
