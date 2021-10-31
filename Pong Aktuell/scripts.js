
function namenList() {

    var array1 = localStorage.getItem("storage");
    var namen1 = document.getElementById("namen1").value;
    var namen2 = document.getElementById("namen2").value;
    var arrayNew;

      arrayNew = namen1 + " / " + namen2;
      localStorage.setItem("storage", arrayNew);
      var name1 = document.createElement("li");
      name1.innerHTML = localStorage.getItem("storage");
      document.getElementById("li").appendChild(name1);

    document.getElementById("button1").disabled = true
}
function leeren() {
    localStorage.clear();
}
function loschen() {
    var ulElem = document.getElementById("li");
    ulElem.removeChild(ulElem.childNodes[0]);
}


function success() {
	 if(document.getElementById("namen1").value==="" || document.getElementById("namen2").value==="")  {
            document.getElementById("button1").disabled = true;
        } else {
            document.getElementById("button1").disabled = false;
        }
    }




// Script Navbar//
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
