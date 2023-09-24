/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Ricardo Brito';
let currentYear = 2023;
let profilePicture = 'images/profile_pic.png';
let favoriteFoods = ['Feijoada', 'pavê', 'hamburguer', 'Potatoes', 'Chocolate']
let popcorn = 'popcorn'

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile Picture of Ricardo Brito');

/* Step 5 - Array */
foodElement.innerHTML = `${favoriteFoods}`
favoriteFoods.push(popcorn)
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.shift()
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.pop()
foodElement.innerHTML += `<br>${favoriteFoods}`





