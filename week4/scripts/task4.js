/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

let josephInfo = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string

josephInfo["name"] = "joseph";

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

josephInfo["photo"] = "images/josephpic.jpg";

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

josephInfo["favoriteFoods"] = ["Pizza Rolls", "Wheaties", "Soup"];

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

josephInfo["hobbies"] = ["Pickleball", "Making youtube videos", "Reading"];

// Step 6: Add another property named placesLived with a value of an empty array

josephInfo["placesLived"] = [];

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

josephInfo.placesLived.push({"place": "", "length": ""});

// Step 8: For each property, add appropriate values as strings

josephInfo.placesLived[0].place = "Rexburg";
josephInfo.placesLived[0].length = "3 years";

// Step 9: Add additional objects with the same properties for each place you've lived

josephInfo.placesLived.push({"place": "Pullman", "length": "20 years"});


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name

document.querySelector('#name').innerHTML = josephInfo.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

document.querySelector('#photo').src = josephInfo.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

document.querySelector('#photo').alt = josephInfo.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element


josephInfo.favoriteFoods.forEach(function (string) {
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(string));

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

    document.querySelector('#favorite-foods').appendChild(node);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property

josephInfo.hobbies.forEach(function (string) {
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(string));

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

    document.querySelector('#hobbies').appendChild(node);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

josephInfo.placesLived.forEach(function (placeLived) {
    var node1 = document.createElement('dt');
    node1.appendChild(document.createTextNode(placeLived.place));

    var node2 = document.createElement('dd');
    node2.appendChild(document.createTextNode(placeLived.length));

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

    document.querySelector('#places-lived').appendChild(node1);
    document.querySelector('#places-lived').appendChild(node2);
});


