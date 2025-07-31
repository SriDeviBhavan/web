import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Specials from './components/Specials';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import CustomerQuotes from './components/CustomerQuotes';
import Footer from './components/Footer';
import OrderForm from './components/OrderForm';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'order':
        return <OrderForm />;
      default:
        return (
          <>
            <Hero />
            <About />
            <Specials />
            <WhyChooseUs />
            <Gallery />
            <CustomerQuotes />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header 
        onOrderClick={() => setCurrentPage('order')} 
        currentPage={currentPage}
        onBackToHome={() => setCurrentPage('home')}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
