import gsap from "gsap";
//Animate text
export const textIntro = (elem) => {
  gsap.from(elem, {
    opacity: 0,
    duration: 2,
    ease: "back",
    delay: 0.2,
  });
};

export const fromRight = (elem) => {
  gsap.from(elem, {
    xPercent: -50,
    opacity: 0,
    duration: 1,
    ease: "back",
  });
};
export const fromLeft = (elem) => {
  gsap.from(elem, {
    xPercent: 50,
    opacity: 0,
    duration: 1,
    ease: "back",
  });
};
export const fromTop = (elem) => {
  gsap.from(elem, {
    yPercent: -50,
    opacity: 0,
    duration: 1,
    ease: "back",
  });
};
export const fromBottom = (elem) => {
  gsap.from(elem, {
    yPercent: 50,
    opacity: 0,
    duration: 1,
    ease: "back",
  });
};
export const scaleBg = (elem) => {
  gsap.to(elem, {
    scale: 1.5,
    duration: 5,
  });
};
export const topLeftBox = (elem) => {
  gsap.to(elem, {
    width: 150,
    height: 150,
    duration: 2,
  });
};
export const bottomRightBox = (elem) => {
  gsap.to(elem, {
    width: 150,
    height: 150,
    duration: 2,
  });
};
export const mouseHover = (elem) => {
  gsap.from(elem, {
    yPercent: -100,
    opacity: 0,
    duration: 1,
    ease: "bounce.out",
  });
};
