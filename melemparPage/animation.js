var path = anime.path(".bascomPath path");

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

  anime({
    targets: ".bascom ",
    translateX: path("x"),
    translateY: path("y"),
    rotate: {
      value: 2440,
    },
    duration: 5000,
    easing: "linear",
  });
});
