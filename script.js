
// ABOUT ME SECTION
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

// EVENT LISTENER FOR ABOUT ME TABS
function showTab(tabName) {
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }

  for (let i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
  }

  document.getElementById(tabName).classList.add("active-tab");
  event.currentTarget.classList.add("active-link");
}


// 
let sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}