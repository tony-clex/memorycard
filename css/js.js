const emojis = ['😊', '😊', '😂', '😂', '😎', '😎', '😁', '😁', '🤣', '🤣', '😃', '😃', '😆', '😆', '👀', '👀']
const shufEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1)
const message = document.querySelector('.cards')
for (let i = 0; i < emojis.length; i++) {
  const box = document.createElement('div')
  box.className = 'item'
  box.innerHTML = shufEmojis[i]

  box.onclick = function () {
    this.classList.add('boxopen')
    setTimeout(function () {
      if (document.querySelectorAll('.boxopen').length > 1) {
        if (document.querySelectorAll('.boxopen')[0].innerHTML === document.querySelectorAll('.boxopen')[1].innerHTML) {
          document.querySelectorAll('.boxopen')[0].classList.add('boxmatch')
          document.querySelectorAll('.boxopen')[1].classList.add('boxmatch')

          document.querySelectorAll('.boxopen')[1].classList.remove('boxopen')
          document.querySelectorAll('.boxopen')[0].classList.remove('boxopen')

          if (document.querySelectorAll('.boxmatch').length === emojis.length) {
            message.textContent = 'Congratulaitions🎈🎉 Winner thanks for playing'
          }
        } else {
          document.querySelectorAll('.boxopen')[1].classList.remove('boxopen')
          document.querySelectorAll('.boxopen')[0].classList.remove('boxopen')
        }
      }
    }, 500)
  }

  document.querySelector('.game').appendChild(box)
}
const button = document.getElementById('resetb')
button.addEventListener('click', () => {
  window.location.reload()
})