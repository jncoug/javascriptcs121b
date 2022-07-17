/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

let name = 'Joseph';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())

document.querySelector('#name').textContent = name;

// Step 3: declare and instantiate a variable to hold the current year

let year = 2022;

// Step 4: place the value of the current year variable into the HTML file

document.querySelector('#year').textContent = year;

// Step 5: declare and instantiate a variable to hold the name of your picture

let my_img = 'images/me.jpg';

// Step 6: copy your image into the "images" folder

//done

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector('img').setAttribute('src', my_img);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

let fav_foods = ['Brownies'];


// Step 2: place the values of the favorite foods variable into the HTML file

document.querySelector('#food').textContent = fav_foods;

// Step 3: declare and instantiate a variable to hold another favorite food

let food1 = 'Pizza rolls';

// Step 4: add the variable holding another favorite food to the favorite food array

fav_foods.push(food1);

// Step 5: repeat Step 2

document.querySelector('#food').textContent = fav_foods;

// Step 6: remove the first element in the favorite foods array

fav_foods.shift();

// Step 7: repeat Step 2

document.querySelector('#food').textContent = fav_foods;

// Step 8: remove the last element in the favorite foods array

fav_foods.pop(-1);

// Step 7: repeat Step 2

document.querySelector('#food').textContent = fav_foods;

