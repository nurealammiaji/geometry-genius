function areaCalculatorWithValue(objectName, constant, valueOne, valueTwo) {

    // Object Value One
    let objectValueOne = document.getElementById(valueOne);
    let objectValueOneString = objectValueOne.value;
    let objectValueOneNumber = parseFloat(objectValueOneString);

    // Object Value Two
    let objectValueTwo = document.getElementById(valueTwo);
    let objectValueTwoString = objectValueTwo.value;
    let objectValueTwoNumber = parseFloat(objectValueTwoString);

    if (isNaN(objectValueOneNumber)) {
        alert('Please enter a valid number to the input field !!');
        return;
    }

    else if (isNaN(objectValueTwoNumber)) {
        alert('Please enter a valid number to the input field !!');
        return;
    }

    else {
    // Object Calculation
    let objectArea = constant * objectValueOneNumber * objectValueTwoNumber;
    
    // Creating List
    let list = document.createElement('li');
    let listText = document.createTextNode(objectName + ' ' + objectArea.toFixed(2) + ' cm');
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
    button.style.fontWeight = '500';
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
}

function areaCalculator(objectName, valueOne, valueTwo) {

    // Object Value One
    let objectValueOne = document.getElementById(valueOne);
    let objectValueOneString = objectValueOne.value;
    let objectValueOneNumber = parseFloat(objectValueOneString);

    // Object Value Two
    let objectValueTwo = document.getElementById(valueTwo);
    let objectValueTwoString = objectValueTwo.value;
    let objectValueTwoNumber = parseFloat(objectValueTwoString);

    if (isNaN(objectValueOneNumber)) {
        alert('Please enter a valid number to the input field !!');
        return;
    }

    else if (isNaN(objectValueTwoNumber)) {
        alert('Please enter a valid number to the input field !!');
        return;
    }

    else {
    
    // Object Calculation
    let objectArea = objectValueOneNumber * objectValueTwoNumber;

    // Creating List
    let list = document.createElement('li');
    let listText = document.createTextNode(objectName + ' ' + objectArea.toFixed(2) + ' cm');
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
    button.style.fontWeight = '500';
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
}

// Blog
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html';
})

// Triangle
document.getElementById('calculate-btn-triangle').addEventListener('click', function(){
    areaCalculatorWithValue("Triangle:", 0.5, 'triangle-b', 'triangle-h');
})

// Rectangle
document.getElementById('calculate-btn-rectangle').addEventListener('click', function(){
    areaCalculator("Rectangle:", 'rectangle-w', 'rectangle-l');
})

// Parallelogram
document.getElementById('calculate-btn-parallelogram').addEventListener('click', function(){
    areaCalculator("Parallelogram:", 'parallelogram-b', 'parallelogram-h');
})

// Rhombus
document.getElementById('calculate-btn-rhombus').addEventListener('click', function(){
    areaCalculatorWithValue("Rhombus:", 0.5, 'rhombus-d1', 'rhombus-d2');
})

// Pentagon
document.getElementById('calculate-btn-pentagon').addEventListener('click', function(){
    areaCalculatorWithValue("Pentagon:", 0.5, 'pentagon-p', 'pentagon-b');
})

// Ellipse
document.getElementById('calculate-btn-ellipse').addEventListener('click', function(){
    areaCalculatorWithValue("Ellipse:", 3.14, 'ellipse-a', 'ellipse-b');
})