const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("in_section");
    if (li.classList.contains(current)) {
      li.classList.add("in_section");
    }
  });
});

const hamburger=document.getElementById("hamburger");
const navicon=document.getElementById("nav_icon");
const menu=document.getElementById("list");
const home=document.getElementById("to_home");
const about=document.getElementById("to_about");
const services=document.getElementById("to_services");
const gallery=document.getElementById("to_gallery");
const contact=document.getElementById("to_contact");

hamburger.addEventListener("click", function(){
	if(menu.classList.contains('menu_iactive'))
		menu.classList.remove('menu_iactive');
	
	menu.classList.toggle('menu_active');
	navicon.classList.toggle('open');
});


home.addEventListener("click", function(){
	
	if(menu.classList.contains('menu_active'))
		menu.classList.remove('menu_active');
	
	menu.classList.toggle('menu_iactive');
	navicon.classList.toggle('open');

});

about.addEventListener("click", function(){
	
	if(menu.classList.contains('menu_active'))
		menu.classList.remove('menu_active');
	
	menu.classList.toggle('menu_iactive');
	navicon.classList.toggle('open');

});

services.addEventListener("click", function(){
	
	if(menu.classList.contains('menu_active'))
		menu.classList.remove('menu_active');
	
	menu.classList.toggle('menu_iactive');
	navicon.classList.toggle('open');
});

gallery.addEventListener("click", function(){
	
	if(menu.classList.contains('menu_active'))
		menu.classList.remove('menu_active');
	
	menu.classList.toggle('menu_iactive');
	navicon.classList.toggle('open');
});

contact.addEventListener("click", function(){
	
	if(menu.classList.contains('menu_active'))
		menu.classList.remove('menu_active');
	
	menu.classList.toggle('menu_iactive');
	navicon.classList.toggle('open');
});

