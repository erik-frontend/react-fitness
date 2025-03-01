export const fadeInTitle = (delay = 0) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, delay: delay, ease: "easeOut" },
    },
});

export const slideInFromTop = (delay = 0) => ({
    hidden: { y: -50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.9, delay: delay, ease: "easeOut" },
    },
});

export const slideIn = (delay = 0, index) => {
    return index % 2 === 0
        ? {
            hidden: { x: 100, opacity: 0 },
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.8,
                    delay: delay,
                    ease: "easeOut",
                },
            },
            } : {
         
            hidden: { x: -100, opacity: 0 },
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.8,
                    delay: delay,
                    ease: "easeOut",
                },
            },
          }

};

export const slideInReverse = (delay = 0, index) => {
    return index % 2 === 0
        ? {
         
            hidden: { x: -100, opacity: 0 },
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.8,
                    delay: delay,
                    ease: "easeOut",
                },
            },
          } : {
            hidden: { x: 100, opacity: 0 },
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.8,
                    delay: delay,
                    ease: "easeOut",
                },
            },
            }

};

export const slideInFromRight = (delay = 0) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: delay,
            ease: "easeOut",
        },
    },
});

export const programAnimate = (index) => ({
    hidden: {
        scale: 0.5,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: index * 0.2,
            duration: 0.5,
            ease: "easeOut",
        },
    },
});

