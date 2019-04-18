var div = document.getElementById('commentsdiv');

function getComments () {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then((res) => {
      return res.json();
    })
    .then((post) => {
      div.innerHTML += `
        <h3>Comments</h3>
        <p data-comments="body">${post[1].body}</p>
          <address data-comments="name">
              <a data-comments="email" href="${post[1].email}">${post[1].name}</a>
          </address>
        `;
    })
    .catch((error) => {
      console.log(error);
    });
}

(function (window) {
  'use strict';

  const BUTTON_SELECTOR = '[data-posts="id"]';

  let buttons = document.querySelectorAll(BUTTON_SELECTOR);

  buttons.forEach(function (button) {
    'use strict';

    let sectionSelector = `#comments-${button.value}`;
    let commentSection = document.querySelector(sectionSelector);

    button.addEventListener('click', getComments);
    button.addEventListener('click', function (event) {
      if (commentSection.hidden) {
        commentSection.hidden = false;
        button.textContent = 'Hide comments';
      } else {
        commentSection.hidden = true;
        button.textContent = 'Show comments';
      }

      event.preventDefault();
    });
  });
})(window);
