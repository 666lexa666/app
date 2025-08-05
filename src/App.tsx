import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { OrderPage } from './pages/OrderPage';
import { PaymentPage } from './pages/PaymentPage';
import { AdminPage } from './pages/AdminPage';
import { OfferPage } from './pages/OfferPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ConsentPage } from './pages/ConsentPage';
import { OrderProvider } from './contexts/OrderContext';

function App() {
  return (
    <OrderProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/offer" element={<OfferPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/consent" element={<ConsentPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </OrderProvider>
  );
}

export default App;