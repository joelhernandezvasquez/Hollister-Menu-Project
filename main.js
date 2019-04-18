function OpenMenuCanvas(e)
{
    const menuContainer = document.querySelector(".menu-container");
    menuContainer.classList.add("openMenu");
}
function closeMenu(e)
{
    const menuContainer = document.querySelector(".menu-container");
    menuContainer.classList.remove("openMenu");

}

function openPanel(e)
{
    if(e.target.closest("div").classList.contains("panel"))
    {
       const iconArrow = e.target.children[1];

       e.target.classList.toggle("open-panel");
       iconArrow.classList.toggle("animate-arrow");
     
    }
}