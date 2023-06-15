


//nav-bar
let navBar=document.querySelector(".nav-bar");
let hamMenuIcon=document.querySelector(".fa-bars");
// let headCont=document.querySelector("#header-contshow");
let navLi=document.querySelectorAll("li");

hamMenuIcon.addEventListener("click",showNav ) 
function showNav() {
	console.log("dgsg");
  navBar.classList.toggle("active");
  // headCont.classList.toggle("active-content");
  // hamMenuIcon.classList.toggle("fa-xmark");
};

navLi.forEach(function(nav){
	nav.addEventListener("click",hideNav)
	function hideNav()
	{
		//  hamMenuIcon.classList.remove("fa-xmark");
		console.log("ddd");
		  navBar.classList.remove("active");
		  //  headCont.classList.remove("active-content");
		  
		   
	}
})


//back-to-top
let btp=document.querySelector(".back-to-top");
window.onscroll=function() {scrollFun()};

function scrollFun() {
	
	if ( document.documentElement.scrollTop > 20) 
	 {
    btp.style.display = "block";
  } 
  else
	  {
    btp.style.display = "none";
  }
}

	
	
//parallax





// var navMenu=document.querySelector(".navmenu");
// let navMenuClss=document.querySelector("ul");
// var navIcon=document.querySelector(".fa-bars");
// navIcon.addEventListener("click",showNav);
//navIcon.style.color="green";
// function showNav() {
	// navMenuClss.classList.toggle(".active");
	// if(navMenu.style.display==="none")
	// {
		// navMenu.style.display="block";
	// }
	// else{
		// navMenu.style.display="none";
	// }
	// console.log("fgfg");
// }