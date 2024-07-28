function add(a, b) {
  return a + b;
}
const person = {
  Name: "Trisha",
  Age: 22,
  message: function () {
    console.log(`Hello your name is: ${this.Name}`);
  },
};
module.exports = { add, person };
