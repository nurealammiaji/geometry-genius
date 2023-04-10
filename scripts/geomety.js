function areaCalculatorWithConstant(objectName, constant, valueOne, valueTwo) {

    // Object Value One
    let objectValueOne = document.getElementById(valueOne);
    let objectValueOneString = objectValueOne.value;
    let objectValueOneNumber = parseFloat(objectValueOneString);

    // Object Value Two
    let objectValueTwo = document.getElementById(valueTwo);
    let objectValueTwoString = objectValueTwo.value;
    let objectValueTwoNumber = parseFloat(objectValueTwoString);

    if (isNaN(objectValueOneNumber)) {
        alert("Please enter a valid number to the " + objectName + "'s first input field !!");
        return;
    }

    else if (isNaN(objectValueTwoNumber)) {
        alert("Please enter a valid number to the " + objectName + "'s second input field !!");
        return;
    }

    else {
    // Object Calculation
    let objectArea = constant * objectValueOneNumber * objectValueTwoNumber;
    
    // Creating List
    let list = document.createElement('li');
    let listText = document.createTextNode(objectName + ' ' + objectArea.toFixed(2) + 'cm');
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
        alert("Please enter a valid number to the " + objectName + "'s first input field !!");
        return;
    }

    else if (isNaN(objectValueTwoNumber)) {
        alert("Please enter a valid number to the " + objectName + "'s second input field !!");
        return;
    }

    else {

    // Object Calculation
    let objectArea = objectValueOneNumber * objectValueTwoNumber;

    // Creating List
    let list = document.createElement('li');
    let listText = document.createTextNode(objectName + ' ' + objectArea.toFixed(2) + 'cm');
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

// Blog Button
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html';
})

// document.getElementById('bg-random').addEventListener('mouseover', function(){
//     var randomString = Math.round(Math.random()*16777215).toString(16);
//     let randomBgColor = '#' + randomString;
//     let card = document.getElementById('bg-random');
//     card.style.background = randomBgColor;
//     card.style.color = 'white';
//     card.style.fontWeight = '700';
// })

// Random Color
function randomBg(elementID) {

    // Color Generator
    var randomString = Math.round(Math.random()*16777215).toString(16);
    let randomBgColor = '#' + randomString;

    // Card Random Background
    let card = document.getElementById(elementID);
    card.style.background = randomBgColor;
    card.style.color = 'white';
    card.style.fontWeight = '700';
}

// Triangle Card
document.getElementById('triangle-card').addEventListener('mouseover', function(){
    randomBg('triangle-card');
})

// Rectangle Card
document.getElementById('rectangle-card').addEventListener('mouseover', function(){
    randomBg('rectangle-card');
})

// Parallelogram Card
document.getElementById('parallelogram-card').addEventListener('mouseover', function(){
    randomBg('parallelogram-card');
})

// Rhombus Card
document.getElementById('rhombus-card').addEventListener('mouseover', function(){
    randomBg('rhombus-card');
})

// Pentagon Card
document.getElementById('pentagon-card').addEventListener('mouseover', function(){
    randomBg('pentagon-card');
})

// Ellipse Card
document.getElementById('ellipse-card').addEventListener('mouseover', function(){
    randomBg('ellipse-card');
})

// Triangle Button
document.getElementById('calculate-btn-triangle').addEventListener('click', function(){
    areaCalculatorWithConstant("Triangle", 0.5, 'triangle-b', 'triangle-h');
})

// Rectangle Button
document.getElementById('calculate-btn-rectangle').addEventListener('click', function(){
    areaCalculator("Rectangle", 'rectangle-w', 'rectangle-l');
})

// Parallelogram Button
document.getElementById('calculate-btn-parallelogram').addEventListener('click', function(){
    areaCalculator("Parallelogram", 'parallelogram-b', 'parallelogram-h');
})

// Rhombus Button
document.getElementById('calculate-btn-rhombus').addEventListener('click', function(){
    areaCalculatorWithConstant("Rhombus", 0.5, 'rhombus-d1', 'rhombus-d2');
})

// Pentagon Button
document.getElementById('calculate-btn-pentagon').addEventListener('click', function(){
    areaCalculatorWithConstant("Pentagon", 0.5, 'pentagon-p', 'pentagon-b');
})

// Ellipse Button
document.getElementById('calculate-btn-ellipse').addEventListener('click', function(){
    areaCalculatorWithConstant("Ellipse", 3.14, 'ellipse-a', 'ellipse-b');
})