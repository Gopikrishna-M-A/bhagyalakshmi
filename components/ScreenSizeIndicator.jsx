import React, { useState, useEffect } from 'react';

const ScreenSizeIndicator = () => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        setScreenSize('2xl');
      } else if (width >= 1280) {
        setScreenSize('xl');
      } else if (width >= 1024) {
        setScreenSize('lg');
      } else if (width >= 768) {
        setScreenSize('md');
      } else if (width >= 640) {
        setScreenSize('sm');
      } else {
        setScreenSize('xs');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full shadow-md text-sm font-semibold z-50">
      {screenSize}
    </div>
  );
};

export default ScreenSizeIndicator;