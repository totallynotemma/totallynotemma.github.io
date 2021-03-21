function openTab(tabName, e) {
  var tabName = document.getElementById(tabName)
  var tab = document.getElementsByClassName('tab')
  var tabMenuItem = document.getElementsByClassName('nav_item')

  for (i = 0; i < tabMenuItem.length; i++) {
    tabMenuItem[i].classList.remove('nav_active')
  }

  for (i=0;i<tab.length;i++) {
    tab[i].style.display = 'none'
  }

  tabName.style.display = 'block'
  e.currentTarget.classList.add('nav_active')
}

document.getElementById('scroll').onscroll = function () {
  var scrollElement = document.getElementById('scroll')
  var nav = document.getElementsByTagName('nav')[0]

  if (document.getElementById('scroll').scrollTop > 0) {
    nav.classList.add('isScrolled')
  } else (
    nav.classList.remove('isScrolled')
  )
}