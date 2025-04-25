function getPointValue(point, key) {
    return point[key];
}
var myPoint = { x: 10, y: 20 };
console.log(getPointValue(myPoint, "x"));
console.log(getPointValue(myPoint, "y"));
// console.log(getPointValue(myPoint, "z"))
