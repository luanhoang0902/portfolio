/* ====== toggle style switcher ===== */
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
console.log(styleSwitcherToggle)
styleSwitcherToggle.addEventListener('click', () => {
    console.log(styleSwitcherToggle)
    document.querySelector('.style-switcher').classList.toggle('open');
})
// hide style switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector('.style-switcher').classList.contains("open"))
    {
        document.querySelector('.style-switcher').classList.remove  ('open');
    }
})
/* ====== theme colors ===== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach(style => {
        if(color === style.getAttribute('title'))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");  
        }
    })
}
/* ====== theme light and dark ===== */
const dayNight = document.querySelector(".day-night");
window.addEventListener("load", () => {
    if(document.body.classList.contains('dark'))
    {
        dayNight.querySelector('i').classList.add('fa-sun')
    }
    else
    {
        dayNight.querySelector('i').classList.add('fa-moom')
    }
})