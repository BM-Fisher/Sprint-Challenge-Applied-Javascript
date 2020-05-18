// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

// parent element cardComponent will be atached to
const cardsContainer = document.querySelector('.cards-container');
console.log('Card Container:', cardsContainer)

// promise
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log('This is the card response:', response)
    // going in order of trending topics
    const JSArt = response.data.articles.javascript
    console.log(JSArt)
    const bootstrapArt = response.data.articles.bootstrap
    const techArt = response.data.articles.technology
    const jqueryArt = response.data.articles.jquery
    const nodeArt = response.data.articles.node

    JSArt.forEach (article => {
        console.log('A JS article:', article)
        const cardArticle = cardComponent(article.headline, article.authorPhoto, article.authorName)
        cardsContainer.appendChild(cardArticle)
    })

    bootstrapArt.forEach(article => {
        console.log('A Bootstrap article:', article)
        const cardArticle = cardComponent(article.headline, article.authorPhoto, article.authorName)
        cardsContainer.appendChild(cardArticle)
    })

    techArt.forEach(article => {
        console.log('A Technology article:', article)
        const cardArticle = cardComponent(article.headline, article.authorPhoto, article.authorName)
        cardsContainer.appendChild(cardArticle)
    })
})
.catch(error => {
    console.log('Card response error', error)
})

// card component

function cardComponent (artHeadline, authorPhoto, authorName){
    // create elements
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('span')

    // structure elements
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(name)

    // add classes
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    // add content
    headline.textContent = artHeadline
    img.src = authorPhoto
    name.textContent = authorName

    return card
}
