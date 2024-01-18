var checkbox = document.getElementById('switch-theme');

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
        root.style.setProperty('--sun-visible', 'visible');
        root.style.setProperty('--moon-visible', 'hidden');
        root.style.setProperty('--trilho-color', '#b1b1b1');
        root.style.setProperty('--bar-color', '#d6d6d6');
        root.style.setProperty('--other-bg-color', '#e0e0e0');
        
    }else{
        root.style.setProperty('--bg-color', '#3F3F3F');
        root.style.setProperty('--str-color', '#fff');
        root.style.setProperty('--sun-visible', 'hidden');
        root.style.setProperty('--moon-visible', 'visible');
        root.style.setProperty('--trilho-color', '#353535');
        root.style.setProperty('--bar-color', '#474747');
        root.style.setProperty('--other-bg-color', '#313131');
    }
}