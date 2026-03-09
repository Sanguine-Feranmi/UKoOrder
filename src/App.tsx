import './App.css'
import { useState, useEffect } from 'react'
// @ts-ignore
import Home from './comps/home/home'
// @ts-ignore
import { NavigationMenuDemo } from './comps/shared/navbar/navbar'
// @ts-ignore
import Banner from './comps/shared/banner'
// @ts-ignore
import Footer from './comps/shared/footer/footer'
// @ts-ignore
import Restaurants from './comps/pages/Restaurants'
// @ts-ignore
import About from './comps/pages/About'
// @ts-ignore
import Contact from './comps/pages/Contact'
// @ts-ignore
import { CartProvider } from './context/CartContext'
// @ts-ignore
import ScrollToTop from './comps/shared/ScrollToTop'
// @ts-ignore
import Loading from './comps/shared/Loading'


function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
    }, 300);
  };

  const renderPage = () => {
    if (isLoading) return <Loading fullScreen />;
    
    switch(currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'restaurants':
        return <Restaurants />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  }

  return (
    <CartProvider>
      <NavigationMenuDemo onNavigate={handleNavigate} currentPage={currentPage} />
      {currentPage === 'home' && <Banner onNavigate={handleNavigate} />}
      <div className="min-h-screen">
        {renderPage()}
      </div>
      <Footer onNavigate={handleNavigate} />
      <ScrollToTop />
    </CartProvider>
  )
}

export default App
