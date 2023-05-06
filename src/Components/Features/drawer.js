// import React, { useState } from 'react';
// import { useSpring, animated } from '@react-spring/web';
// import { StyledDrawer } from '../Header/styles';

// function AnimatedDrawer({ open, onClose, children }) {
//   const [isMounted, setIsMounted] = useState(false);

//   const drawerAnimation = useSpring({
//     transform: isMounted ? 'translateX(0)' : 'translateX(-100%)',
//     config: { duration: 250 },
//   });

//   const handleOnClose = () => {
//     setIsMounted(false);
//     setTimeout(() => {
//       onClose();
//     }, 250);
//   };

//   return (
//     <StyledDrawer open={open} onClose={handleOnClose}>
//       <animated.div style={drawerAnimation} onRest={() => setIsMounted(true)}>
//         {children}
//       </animated.div>
//     </StyledDrawer>
//   );
// }

// export default AnimatedDrawer;
