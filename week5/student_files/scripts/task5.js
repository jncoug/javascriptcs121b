/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date

var date = new Date();

// Step 2: Declare another variable to hold the day of the week

var day;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )

day = date.getDay();

// Step 4: Declare a variable to hold a message that will be displayed

var message;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'

if (0 < day && day < 5) {
    message = "Hang in there!"
}

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'

else {
    message = "Woohoo!  It is the weekend!"
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message

var message2;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

var dayString
switch (day) {
    case 0:
        dayString = "Sunday";
        break;
  case 1:
        dayString = "Monday";
        break;
  case 2:
        dayString = "Tuesday";
        break;
  case 3:
        dayString = "Wednesday";
        break;
  case 4:
        dayString = "Thursday";
        break;
  case 5:
        dayString = "Friday";
        break;
  case 6:
        dayString = "Saturday";
}

message2 = dayString;

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

document.querySelector('#message1').innerHTML = message;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2

document.querySelector('#message2').innerHTML = message2;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples

var temples = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:

function listTemples (temples) {
// - Creates an HTML <article> element
    var articleNode = document.createElement('article');

    temples.forEach(function (value) {
        
        // - Creates an HTML <h3> element and add the temple's templeName property to it
        var nameNode = document.createElement('h3');
        nameNode.appendChild(document.createTextNode(value.templeName));
        articleNode.appendChild(nameNode);

        // - Creates an HTML <h4> element and add the temple's location property to it
        var locationNode = document.createElement('h4');
        locationNode.appendChild(document.createTextNode(value.location));
        articleNode.appendChild(locationNode);
    
        // - Creates an HTML <h4> element and add the temple's dedicated property to it
        var dedicatedNode = document.createElement('h4');

        dedicatedNode.appendChild(document.createTextNode(value.dedicated));
        articleNode.appendChild(dedicatedNode);

        // - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
        var imgNode = document.createElement('img');
        imgNode.src = value.imgUrl;
        imgNode.alt = value.templeName;
        articleNode.appendChild(imgNode);
        
    });

    // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
    
    
    
    

    // - Appends the <article> element to the HTML element with an ID of temples
    document.querySelector('#temples').appendChild(articleNode);
}

// Step 3: Create another function called getTemples. Make it an async function.

const url = "https://byui-cse.github.io/cse121b-course/week05/temples.json";
let results = null;

async function getTemples() {

// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

    const response = await fetch(url);

    if (response.ok) {
        
        temples = await response.json();
        
    }
    listTemples(temples);
    
}

getTemples();




// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

function reset() {
    document.querySelector('#temples').innerHTML = '';
}


// Step 8: Declare a function named sortBy that does the following:

var previousStyle = "templeNameAscending"

function sortBy() {

    // - Calls the reset function
    reset();

    // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
    
    let sortStyle = document.querySelector('#sortBy').value;
    if (sortStyle === previousStyle) {
        newTemples = temples.sort();
    }
    else {
        
        newTemples = temples.sort().reverse();
        previousStyle = sortStyle;
    }


    // - Calls the output function passing in the sorted list of temples
    listTemples(newTemples);
}



// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

document.querySelector('#sortBy').addEventListener('change', sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
