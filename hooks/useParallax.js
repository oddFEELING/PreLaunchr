import { useEffect } from 'react';

/**
 * useParallax
 * @param {Array} RefArray Array of refs to animate
 * @return {void} no return value
 */
const useParallax = (RefArray) => {
  useEffect(() => {
    function Parallax(event) {
      // loop through refs
      RefArray.forEach((curRef) => {
        // get element
        const Node = curRef?.current;
        // get element speeed
        const speed = Node && Node.attributes['data-speed']?.nodeValue;
        // calculate the animation speed
        const x = (window.innerWidth - event.pageX * speed) / 180;
        const y = (window.innerHeight - event.pageY * speed) / 180;
        if (Node) {
          // add the animation to the element
          Node.style.transform = `translateX(${x}px) `;
          // remove easing
          Node.style.transition = 'none';
        }
      });
    }

    // window event
    window.addEventListener('mousemove', Parallax);

    // cleanup
    return () => {
      window.removeEventListener('mousemove', Parallax);
    };
  }, []);
};

export default useParallax;
