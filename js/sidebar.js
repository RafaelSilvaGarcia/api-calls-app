
export function loadSidebar()
{
    const mainContent = document.getElementById('main-content');
    const toggleButton = document.getElementById('toggle-button');
    const sidebar = document.getElementById('sidebar');
    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('collapsed');
    });
}