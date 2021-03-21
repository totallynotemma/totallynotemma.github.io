function openTab(tabName) {
  var tabName = document.getElementById(tabName)
  var tab = document.getElementsByClassName('tab')

  for (i=0;i<tab.length;i++) {
    tab[i].style.display = 'none'
  }

  tabName.style.display = 'block'
}