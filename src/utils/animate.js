// import { useEffect } from 'react';
// import { useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// export const animate = () => {
//   const { inView } = useInView({
//     threshold: 0.3
//   });
//   const animation = useAnimation();

//   useEffect(() => {
//     if (inView) {
//       animation.start({
//         x: 0,
//         transition: {
//           type: 'spring',
//           duration: 1,
//           bounce: 0.3
//         }
//       });
//     }
//     if (!inView) {
//       animation.start({
//         x: '-100vw'
//       });
//     }
//   }, [inView]);
// };
