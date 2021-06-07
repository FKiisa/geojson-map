export function menuToggle() {
    let menuContent = document.getElementById('menuContent');
    menuContent.style.display === "none" ? menuContent.style.display = "block" : menuContent.style.display = "none";
}