function objectCalculatorWithHalf(valueOne, valueTwo) {

    // Object Value One
    let ObjectValueOne = document.getElementById(valueOne);
    let ObjectValueOneString = ObjectValueOne.value;
    let ObjectValueOneNumber = parseInt(ObjectValueOneString);

    // Object Value Two
    let ObjectValueTwo = document.getElementById(valueTwo);
    let ObjectValueTwoString = ObjectValueTwo.value;
    let ObjectValueTwoNumber = parseInt(ObjectValueTwoString);

    // Object Calculation
    let objectArea = 0.5 * ObjectValueOneNumber * ObjectValueTwoNumber;

    // Creating List
    let node = document.createElement('li');
    let textNode = document.createTextNode(objectArea);
    node.appendChild(textNode);

    // Object Area Display
    let displayList = document.getElementById('display-list');
    displayList.appendChild(node);
}

// Triangle
document.getElementById('calculate-btn-triangle').addEventListener('click', function(){
    objectCalculatorWithHalf('triangle-breadth', 'triangle-height');
})

// Rhombus
document.getElementById('calculate-btn-rhombus').addEventListener('click', function(){
    objectCalculatorWithHalf('rhombus-d1', 'rhombus-d2');
})

// Pentagon
document.getElementById('calculate-btn-triangle').addEventListener('click', function(){
    objectCalculatorWithHalf('triangle-breadth', 'triangle-height');
})