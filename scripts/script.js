function areaCalculatorWithHalf(valueOne, valueTwo) {

    // Object Value One
    let objectValueOne = document.getElementById(valueOne);
    let objectValueOneString = objectValueOne.value;
    let objectValueOneNumber = parseInt(objectValueOneString);

    // Object Value Two
    let objectValueTwo = document.getElementById(valueTwo);
    let objectValueTwoString = objectValueTwo.value;
    let objectValueTwoNumber = parseInt(objectValueTwoString);

    // Object Calculation
    let objectArea = 0.5 * objectValueOneNumber * objectValueTwoNumber;

    // Creating List
    let list = document.createElement('li');
    let listText = document.createTextNode(objectArea);
    list.appendChild(listText);

    // Creating Button
    let button = document.createElement('button');
    button.innerText = "Convert to m2";
    button.style.margin = '3px';
    button.style.marginLeft = '8px'
    button.style.padding = '5px'
    button.style.paddingLeft = '8px';
    button.style.paddingRight = '8px';
    button.style.color = 'white';
    button.style.fontWeight = '700';
    button.style.background = 'blue';
    button.style.borderRadius = '4px';
    list.appendChild(button);

    // Object Area Display
    let displayList = document.getElementById('display-list');
    displayList.appendChild(list);
}

function areaCalculator(valueOne, valueTwo) {

    // Object Value One
    let objectValueOne = document.getElementById(valueOne);
    let objectValueOneString = objectValueOne.value;
    let objectValueOneNumber = parseInt(objectValueOneString);

    // Object Value Two
    let objectValueTwo = document.getElementById(valueTwo);
    let objectValueTwoString = objectValueTwo.value;
    let objectValueTwoNumber = parseInt(objectValueTwoString);

    // Object Calculation
    let objectArea = objectValueOneNumber * objectValueTwoNumber;

    // Creating List
    let list = document.createElement('li');
    let listText = document.createTextNode(objectArea);
    list.appendChild(listText);

    // Creating Button
    let button = document.createElement('button');
    button.innerText = "Convert to m2";
    button.style.margin = '3px';
    button.style.marginLeft = '8px'
    button.style.padding = '5px'
    button.style.paddingLeft = '8px';
    button.style.paddingRight = '8px';
    button.style.color = 'white';
    button.style.fontWeight = '700';
    button.style.background = 'blue';
    button.style.borderRadius = '4px';
    list.appendChild(button);

    // Object Area Display
    let displayList = document.getElementById('display-list');
    displayList.appendChild(list);
}

// Triangle
document.getElementById('calculate-btn-triangle').addEventListener('click', function(){
    areaCalculatorWithHalf('triangle-b', 'triangle-h');
})

// Rhombus
document.getElementById('calculate-btn-rhombus').addEventListener('click', function(){
    areaCalculatorWithHalf('rhombus-d1', 'rhombus-d2');
})

// Pentagon
document.getElementById('calculate-btn-pentagon').addEventListener('click', function(){
    areaCalculatorWithHalf('pentagon-p', 'pentagon-b');
})

// Rectangle
document.getElementById('calculate-btn-rectangle').addEventListener('click', function(){
    areaCalculator('rectangle-w', 'rectangle-l');
})

// Parallelogram
document.getElementById('calculate-btn-parallelogram').addEventListener('click', function(){
    areaCalculator('parallelogram-b', 'parallelogram-h');
})