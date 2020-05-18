// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

// add Header to its parent so it can display
const headerContainer = document.querySelector('.header-container');
console.log('This is the header container:', headerContainer)
headerContainer.appendChild(Header());

function Header() {
    // creating elements
    const headerTop = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    // creating structure (attaching to parentals)
    headerTop.appendChild(date);
    headerTop.appendChild(title);
    headerTop.appendChild(temp);

    // adding classes
    headerTop.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp')

    // adding text
    date.textContent = 'March 17, 2020';
    title.textContent = 'Lambda Times';
    temp.textContent = '78°'

    // must return a function. Duh Brittany
    return headerTop
}
