function circleArea(radius) {
  console.log("Area is:", Math.PI * radius ** 2, "\n");
}

function circleCircumferance(radius) {
  console.log("Cirumferance is", 2 * Math.PI * radius, "\n");
}

module.exports = {
  circleArea,
  circleCircumferance,
};
