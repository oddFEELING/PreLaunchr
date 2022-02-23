import AOS from 'aos';
import { useEffect } from 'react';

const useAOS = () => {
  // effect to initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      once: true,
    });
  });
};

export default useAOS;
