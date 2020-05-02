console.log("anime test");

document.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: ".super-large",
    translateY: [-100, 0],
    duration: 1000,
    easing: "spring(1, 80, 10, 0)",
  });

  anime({
    targets: ".link",
    translateX: [-100, 0],
    duration: 1000,
    easing: "spring(1, 30, 6, 0)",
  });

  anime({
    targets: ".icons",
    translateX: [100, 0],
    duration: 1000,
    easing: "spring(1, 30, 6, 0)",
  });
});
