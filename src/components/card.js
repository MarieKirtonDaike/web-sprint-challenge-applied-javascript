import axios from "axios"




const Card = (article) => {

  const divggparent = document.createElement("div")
  divggparent.classList.add("card")
  const divgparent = document.createElement("div")
  divgparent.classList.add("headline")
  divgparent.textContent = article.headline
  const divgparent2 = document.createElement("div")
  divgparent2.classList.add("author")
  const parent = document.createElement("div")
  parent.classList.add("img-container")
  const parentspan = document.createElement("span")
  parentspan.textContent = `By ${article.authorName}`
  const childimg = document.createElement("img")
  childimg.src = article.authorPhoto

  divggparent.appendChild(divgparent)
  divggparent.appendChild(divgparent2)
  divgparent2.appendChild(parent)
  parent.appendChild(childimg)
  divgparent2.appendChild(parentspan)


  return divggparent

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
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
}

const cardAppender = (selector) => {
  const parentcontainer = document.querySelector(selector)
  axios.get(`http://localhost:5001/api/articles`)
    .then(res => {
      const articles = res.data.articles;
      console.log(articles)
      for (let key in articles) {
        const value = articles[key];
        for (let article of value) {
          const card = Card(article);
          parentcontainer.appendChild(card)
        }
      }
    })




  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
