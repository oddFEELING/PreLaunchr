import { useEffect, useState } from 'react';

/**
 *  useScroll
 * @param {Array} RefArray Array of refs to track upon scroll
 * @returns {void}
 */
const useScroll = (RefArray) => {
  const [ScrollValue, setScrollValue] = useState(0);

  //-- scroll value effect ------------------/
  useEffect(() => {
    const setScroll = () => setScrollValue(window.scrollY);
    window.addEventListener('scroll', setScroll);

    // cleanup
    return () => {
      window.removeEventListener('scroll', setScroll);
    };
  }, []);

  //-- scroll parallax effect ------------------/
  useEffect(() => {
    function parallax(event) {
      // loop through refs
      RefArray.forEach((curRef) => {
        // get element
        const Node = curRef?.current;
         //   get element speed
        const speed = Math.abs(Node?.attributes['data-speed']?.nodeValue)
        //   calculate scroll speed
        const y = (ScrollValue * speed) / 10;
          
        if (Node) {
        //   Add effect to element
             Node?.style?.transform = `translateY(${-y}px)`
        //   remove easing (already removed in useParallax hook)
            Node?.style?.transition = 'none'
          }
      });
      }
      
      window.addEventListener('scroll', parallax)

    //   cleanup
      return () => {
          window.removeEventListener('scroll', parallax)
      }
  }, [ScrollValue]);

  return ScrollValue;
};

export default useScroll;
