//--------------------------------------->
//-->  # HOOK TO CHECK WINDOW HEIGHT
//--------------------------------------->

import { useEffect, useState } from 'react';

const useVH = () => {
  const [VH, setVH] = useState(null);

  useEffect(() => {
    const setHeight = () => setVH(window.innerHeight);
    window.addEventListener('load', setHeight);
    window.addEventListener('resize', setHeight);
    window.addEventListener('focus', setHeight);

    //   cleanup
    return () => {
      window.removeEventListener('load', setHeight);
      window.removeEventListener('resize', setHeight);
      window.removeEventListener('focus', setHeight);
    };
  });
  return VH;
};

export default useVH;
