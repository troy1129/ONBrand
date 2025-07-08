import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';

const totalPages = 5;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollTimeout = useRef(null);

  const goToPage = (pageNumber) => {
    if (isTransitioning || pageNumber < 1 || pageNumber > totalPages || pageNumber === currentPage) {
      return;
    }
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setIsTransitioning(false);
    }, 500);
  };

  const nextPage = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };
  const previousPage = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (isTransitioning || window.modalOpen) {
        event.preventDefault();
        return;
      }

      // Get the current active page element
      const activePage = document.querySelector('.page.active');
      if (!activePage) {
        event.preventDefault();
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = activePage;
      const isAtTop = scrollTop === 0;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;
      
      // Check scroll direction
      const scrollingDown = event.deltaY > 0;
      const scrollingUp = event.deltaY < 0;

      // Only prevent default and navigate when at boundaries
      if ((scrollingDown && isAtBottom && currentPage < totalPages) || 
          (scrollingUp && isAtTop && currentPage > 1)) {
        event.preventDefault();
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          if (scrollingDown && isAtBottom) nextPage();
          else if (scrollingUp && isAtTop) previousPage();
        }, 100);
      }
      // Otherwise, allow natural scrolling within the page
    };
    const handleKeydown = (event) => {
      if (window.modalOpen) {
        return; // Don't prevent default, allow normal behavior in modal
      }
      
      switch(event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          event.preventDefault();
          nextPage();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          event.preventDefault();
          previousPage();
          break;
        case 'Home':
          event.preventDefault();
          goToPage(1);
          break;
        case 'End':
          event.preventDefault();
          goToPage(totalPages);
          break;
        default:
          break;
      }
    };
    let touchStartY = 0;
    let touchEndY = 0;
    const handleTouchStart = (event) => {
      touchStartY = event.touches[0].clientY;
    };
    const handleTouchEnd = (event) => {
      if (isTransitioning || window.modalOpen) return;
      
      touchEndY = event.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      
      if (Math.abs(diff) > 50) {
        const activePage = document.querySelector('.page.active');
        if (!activePage) return;

        const { scrollTop, scrollHeight, clientHeight } = activePage;
        const isAtTop = scrollTop === 0;
        const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;
        
        const swipingUp = diff > 0; // swiping up (next page)
        const swipingDown = diff < 0; // swiping down (previous page)

        // Only navigate when at boundaries
        if ((swipingUp && isAtBottom && currentPage < totalPages) || 
            (swipingDown && isAtTop && currentPage > 1)) {
          event.preventDefault();
          if (swipingUp && isAtBottom) nextPage();
          else if (swipingDown && isAtTop) previousPage();
        }
      }
    };
    document.addEventListener('wheel', handleScroll, { passive: false });
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      document.removeEventListener('wheel', handleScroll);
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentPage, isTransitioning]);

  const pageProps = {
    currentPage,
    goToPage,
    nextPage,
    previousPage,
    totalPages,
  };

  return (
    <div className="page-container">
      <Page1 {...pageProps} isActive={currentPage === 1} />
      <Page2 {...pageProps} isActive={currentPage === 2} />
      <Page3 {...pageProps} isActive={currentPage === 3} />
      <Page4 {...pageProps} isActive={currentPage === 4} />
      <Page5 {...pageProps} isActive={currentPage === 5} />
      <div className="scroll-hint">Scroll to navigate</div>
    </div>
  );
}

export default App;
