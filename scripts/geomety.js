function areaCalculatorWithHalf(objectName, valueOne, valueTwo) {

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
    let listText = document.createTextNode(objectName + ' ' + objectArea + ' cm');
    list.appendChild(listText);

    // Creating Super Text
    let superCM = document.createElement('sup');
    let superTextCM = document.createTextNode('2');
    superCM.appendChild(superTextCM);
    list.appendChild(superCM);

    // Creating Button
    let button = document.createElement('button');
    button.innerText = "Convert to m";
    button.style.margin = '3px';
    button.style.marginLeft = '8px'
    button.style.padding = '5px'
    button.style.paddingLeft = '8px';
    button.style.paddingRight = '8px';
    button.style.color = 'white';
    button.style.fontWeight = '700';
    button.style.background = 'rgb(37 99 235)';
    button.style.borderRadius = '4px';
    list.appendChild(button);

    // Creating Super Text
    let superM = document.createElement('sup');
    let superTextM = document.createTextNode('2');
    superM.appendChild(superTextM);
    button.appendChild(superM);

    // Object Area Display
    let displayList = document.getElementById('display-list');
    displayList.appendChild(list);
}

function areaCalculator(objectName, valueOne, valueTwo) {

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
    let listText = document.createTextNode(objectName + ' ' + objectArea + ' cm');
    list.appendChild(listText);

    // Creating Super Text
    let superCM = document.createElement('sup');
    let superTextCM = document.createTextNode('2');
    superCM.appendChild(superTextCM);
    list.appendChild(superCM);

    // Creating Button
    let button = document.createElement('button');
    button.innerText = 'Convert to m';
    button.style.margin = '3px';
    button.style.marginLeft = '8px'
    button.style.padding = '5px'
    button.style.paddingLeft = '8px';
    button.style.paddingRight = '8px';
    button.style.color = 'white';
    button.style.fontWeight = '700';
    button.style.background = 'rgb(37 99 235)';
    button.style.borderRadius = '4px';
    list.appendChild(button);

    // Creating Super Text
    let superM = document.createElement('sup');
    let superTextM = document.createTextNode('2');
    superM.appendChild(superTextM);
    button.appendChild(superM);

    // Object Area Display
    let displayList = document.getElementById('display-list');
    displayList.appendChild(list);
}

// Blog
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html';
})

// Triangle
document.getElementById('calculate-btn-triangle').addEventListener('click', function(){
    areaCalculatorWithHalf("Triangle", 'triangle-b', 'triangle-h');
})

// Rectangle
document.getElementById('calculate-btn-rectangle').addEventListener('click', function(){
    areaCalculator("Rectangle", 'rectangle-w', 'rectangle-l');
})

// Parallelogram
document.getElementById('calculate-btn-parallelogram').addEventListener('click', function(){
    areaCalculator("Parallelogram", 'parallelogram-b', 'parallelogram-h');
})

// Rhombus
document.getElementById('calculate-btn-rhombus').addEventListener('click', function(){
    areaCalculatorWithHalf("Rhombus", 'rhombus-d1', 'rhombus-d2');
})

// Pentagon
document.getElementById('calculate-btn-pentagon').addEventListener('click', function(){
    areaCalculatorWithHalf("Pentagon", 'pentagon-p', 'pentagon-b');
})