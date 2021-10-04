// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const likeGlyphs = document.querySelectorAll('.like-glyph');
console.log(likeGlyphs);
likeGlyphs.forEach(item => {
  item.addEventListener('click', e => {
    const glyph = e.target;
    mimicServerCall()
    .then(() => {
      if (glyph.textContent === EMPTY_HEART) {
        glyph.textContent = FULL_HEART;
        glyph.classList.add('activated-heart'); 
      } else {
        glyph.textContent = EMPTY_HEART;
        glyph.classList.remove('activated-heart'); 
      }
  })
  .catch(() => {
    const modal = document.querySelector('#modal');
    modal.className = "";
    setTimeout(() => {
      modal.className = "hidden";
    }, 3000)

    })
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
