 const initial = { y: 100, opacity: 0 };

 const animate = {
   y: 0,
   opacity: 1,
   transition: {
      duration: 0.8,
      delay: 0,
      type: "spring",
      stiffness: 200,
   },
};


export const animate2 = {
   opacity: 1,
   x: 0,
   y: 0,
   transition: {
      duration: 0.8,
      delay: 0,
      type: "spring",
      stiffness: 200,
   },
};
