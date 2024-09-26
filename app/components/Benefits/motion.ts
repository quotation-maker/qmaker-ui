export const outVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

export const inVariants = {
  hidden: {
    y: '50vh',
  },
  show: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      mass: 0.3,
    },
  },
};
