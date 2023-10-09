window.onload = function () {
  const elements = document.querySelectorAll('.sticky')
  Stickyfill.add(elements)
}

function menuShow() {
  const hamburgMenu = document.querySelector('#hamburg-menu')
  const hamburgMenuEl = document.querySelector('#menu')

  hamburgMenuEl.classList.toggle('show')
}

function formShow() {
  const form = document.getElementById('form')
  const closeBtn = document.getElementById('closeBtn')

  form.classList.add('show')

  closeBtn.addEventListener('click', function (e) {
    form.classList.remove('show')
  })
}

const scroller = scrollama()

scroller
  .setup({
    step: '.scrollama', //the class name in html. This is the only option must be included in the setup
  })
  .onStepEnter((response) => {
    response.element.classList.remove('inactive')
    response.element.classList.add('active')
  })
