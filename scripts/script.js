// Triangle

document.getElementById('calculate-btn-triangle').addEventListener('click', function(){
    
    // Triangle Breadth
    let triangleBreadth = document.getElementById('triangle-breadth');
    let triangleBreadthString = triangleBreadth.value;
    let triangleBreadthNumber = parseInt(triangleBreadthString);

    // Triangle Height
    let triangleHeight = document.getElementById('triangle-height');
    let triangleHeightString = triangleHeight.value;
    let triangleHeightNumber = parseInt(triangleHeightString);

    // Triangle Calculation
    let triangleArea = 0.5 * triangleBreadthNumber * triangleHeightNumber + " cm2";
    
    // Creating List
    let node = document.createElement('li');
    let textNode = document.createTextNode(triangleArea);
    node.appendChild(textNode);

    // Triangle Display
    let displayList = document.getElementById('display-list');
    displayList.appendChild(node);
})