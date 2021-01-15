import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  const card = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgDiv = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('span');

  card.classList = 'card';
  headlineDiv.classList = 'headline';
  authorDiv.classList = 'author';
  imgDiv.classList = 'img-container';

  headlineDiv.textContent = article.headline;
  authorDiv.textContent = article.authorName;
  image.setAttribute('src', article.authorPhoto);
  name.textContent = `by ${article.authorName}`;

  card.appendChild(headlineDiv);
  card.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(name);
  imgDiv.appendChild(image);

  card.addEventListener('click', () => console.log(article.headline));
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  return card
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const appendLocation = document.querySelector(selector);

  axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(call => {
        const articlesData = call.data.articles;
        const articlesDataArray = Object.keys(articlesData)
        for(let i = 0; i<articlesDataArray.length;i++){
          articlesDataArray.forEach(key=>{
            articlesData[key].forEach(obj => {
              appendLocation.appendChild(Card(obj))
            })
        })}
      })
    .catch(err => {
      // console.log(err);
    })


  // axios.get('https://lambda-times-api.herokuapp.com/articles')
  //   .then(call => {
  //     console.log(call.data.articles);
  //     let articlesData = call.data.articles;
  //     for(let i=0; i < articlesData.length; i++){
  //         Object.keys(articlesData).forEach(key => {
  //         key.forEach(obj => {
  //           const newCard = Card(obj);
  //           appendLocation.appendChild(newCard);
  //         })
  //         })
  //       }
  //     })
  //   .catch(err => {
  //     console.log(err);
  //   })

  //   const appendLocation = document.querySelector(selector);
  // axios.get('https://lambda-times-api.herokuapp.com/articles')
  //   .then(call => {
  //     console.log(call.data.articles);
  //     let dataArrays = Object.keys(call.data.articles);
  //     console.log(`dataArrays: ${dataArrays}`);
  //     dataArrays.forEach(array => {
  //       array.forEach(obj => {
  //         const product = Card(obj);
  //         appendLocation.appendChild(product);
  //       })
  //     })
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })

}

export { Card, cardAppender }
