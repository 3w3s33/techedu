const btn=document.getElementById('menu-btn');
const Navigation=document.getElementById('Navigation');

if (btn) {
    btn.addEventListener('click' , () => {
        Navigation.classList.add('active');
    })
}