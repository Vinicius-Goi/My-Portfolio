var checkbox = document.getElementById('switch-theme');
var clickbuttonG = document.getElementById('git');
var clickbuttonI = document.getElementById('insta');
var clickbuttonL = document.getElementById('linkedin');
var clickbuttonL = document.getElementById('seta');

checkbox.addEventListener('change', function() {
    localStorage.setItem('checkboxState', checkbox.checked);
});

var savedCheckboxState = localStorage.getItem('checkboxState');

if (savedCheckboxState !== null) {
    checkbox.checked = savedCheckboxState === 'true';
    changeTheme();
}

function changeTheme(){
    var root = document.documentElement;
    var checkBox = document.getElementById('switch-theme');

    if(!checkBox.checked){
        root.style.setProperty('--bg-color', '#fff');
        root.style.setProperty('--str-color', '#000');
        root.style.setProperty('--nav-menu-color', '#DDD');
        root.style.setProperty('--github', 'url("../src/github.svg")');
        root.style.setProperty('--insta', 'url("../src/insta.svg")');
        root.style.setProperty('--linkedin', 'url("../src/linkedin.svg")');
        root.style.setProperty('--sun-visible', 'visible');
        root.style.setProperty('--moon-visible', 'hidden');
        root.style.setProperty('--trilho-color', '#b1b1b1');
        root.style.setProperty('--bar-color', '#d6d6d6');
        root.style.setProperty('--other-bg-color', '#e0e0e0');
        root.style.setProperty('--border-img-color', '#BDBDBD');
        root.style.setProperty('--arrow-down', 'url("../src/arrow_down.svg")');
        
    }else{
        root.style.setProperty('--bg-color', '#3F3F3F');
        root.style.setProperty('--str-color', '#fff');
        root.style.setProperty('--nav-menu-color', '#333333');
        root.style.setProperty('--github', 'url("../src/githubwhite.svg")');
        root.style.setProperty('--insta', 'url("../src/instawhite.svg")');
        root.style.setProperty('--linkedin', 'url("../src/linkedinwhite.svg")');
        root.style.setProperty('--sun-visible', 'hidden');
        root.style.setProperty('--moon-visible', 'visible');
        root.style.setProperty('--trilho-color', '#353535');
        root.style.setProperty('--bar-color', '#474747');
        root.style.setProperty('--other-bg-color', '#313131');
        root.style.setProperty('--border-img-color', '#4E4E4E');
        root.style.setProperty('--arrow-down', 'url("../src/arrow_down_white.svg")');
    }
}

clickbuttonG.addEventListener('click', function irGitHub(){
    window.open('https://github.com/Vinicius-Goi', '_blank');
});

clickbuttonI.addEventListener('click', function irInsta(){
    window.open('https://www.instagram.com/viniciusgs06/', '_blank');
});

clickbuttonL.addEventListener('click', function irLinkedin(){
    window.open('https://www.linkedin.com/in/vin%C3%ADcius-goi-sanchez-b33209296/', '_blank');
});

function irSeta() {
    var aboutSection = document.getElementById("about");
    
    aboutSection.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');

    menuIcon.addEventListener('click', function(){
        menuIcon.classList.toggle('active');
    })
})

document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('data-target');
            var targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({ behavior: "smooth" });

            menuMobile.style.display = 'none';
        });
    });
});

function mobileMenu() {
    var menuMobile = document.getElementById('menuMobile');
    var menuIcon = document.querySelector('.menu-icon');

    if (menuMobile.style.display === 'block' && menuIcon.classList.contains('active')){
        menuMobile.style.display = 'block';
    }else{
        menuMobile.style.display = 'none';
    }
};
