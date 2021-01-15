const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  const headerDiv = document.createElement('div');
  headerDiv.classList = 'header';
  const dateSpan = document.createElement('span');
  dateSpan.classList = 'date';
  dateSpan.textContent = date;
  const h1title = document.createElement('h1');
  h1title.textContent = title;
  const tempSpan = document.createElement('span');
  tempSpan.textContent=temp;
  tempSpan.classList = 'temp';

  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(h1title);
  headerDiv.appendChild(tempSpan);
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  return headerDiv;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const place = document.querySelector(selector);
  place.appendChild(Header('test', '1/1/2020', '73'))
}

export { Header, headerAppender }
