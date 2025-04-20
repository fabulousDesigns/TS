var point = { x: 10, y: 20 };
function calculateDistance(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
}
calculateDistance({ x: 10, y: 20 }, { x: 30, y: 35 });
