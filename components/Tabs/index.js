// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// Add tabs function to parent
const topics = document.querySelector('.topics')
console.log('These are the topics', topics) 

// create axios
axios.get ('https://lambda-times-backend.herokuapp.com/topics')
    .then (response => {
        console.log('Response from site:', response)
        const topicSubject = response.data.topics
        console.log(topics)
        topicSubject.forEach(subject => {
            const topic = tabComponent(subject)
            topics.appendChild(topic)
        })
    })
    .catch (error => {
        console.log('Somithing went wrong:', error)
    })



// data from topic variable above is what is passed in as a parameter to tabComponent so I named it topic as well for my understanding

// create tab component
function tabComponent (topicCB) {
    // create elements
    const tab = document.createElement('div')
    // give structure

    // add classes
    tab.classList.add('tab')
    // add content
    tab.textContent = topicCB

    return tab
}