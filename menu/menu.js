let mainMenu = document.querySelectorAll(".main_menu")
const  menuDropDown = (event) => {
  event.target.parentNode.getElementsByClassName('sub_menu')[0].classList.toggle("show");
  
}
// Close the dropdown menu if the user clicks outside of it
onmouseover = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("sub_menu");
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
	  }
	
  }
}

}
