var checkbox = document.getElementById('switch-theme');
var clickbuttonG = document.getElementById('git');
var clickbuttonI = document.getElementById('insta');
var clickbuttonL = document.getElementById('linkedin');

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


document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');

    menuIcon.addEventListener('click', function(){
        menuIcon.classList.toggle('active');
    })
})

function mobileMenu() {

    if (menuMobile.style.display == 'block'){
        menuMobile.style.display = 'none';
    }else{
        menuMobile.style.display = 'block';
    }
};
