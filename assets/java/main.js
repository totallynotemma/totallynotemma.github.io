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