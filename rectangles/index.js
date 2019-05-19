/* 
Rectangles are defined by 2 coordinates:
    RectA = {
        left: 1, // X1
        top: 1, // Y1
        bottom: 3, // Y2
        right: 3 // X2
    }
*/

/*
    Examples: 
    let A = {left: 1, top: 1, right: 6, bottom: 5}
    let B = {left: 4, top: 3, right: 8, bottom: 7}
    intersect(A, B) // returns true

    let C = {left: 0, top: 0, right: 2, bottom: 2}
    let D = {left: 3, top: 2, right: 5, bottom: 4}
    intersect(C, D) // returns false

    let E = {left: 0, top: 0, right: 3, bottom: 3}
    let F = {left: 1, top: 1, right: 2, bottom: 2}
    intersect(E, F) // returns true
*/

const intersect = (RectA, RectB) => 
            RectA.left < RectB.right &&
            RectA.right > RectB.left &&
            RectA.top < RectB.bottom &&
            RectA.bottom > RectB.top;
