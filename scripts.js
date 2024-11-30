// Get the elements
const openBtn = document.getElementById('openSidebar');
const closeBtn = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');
const body = document.body;

// Open sidebar
openBtn.addEventListener('click', function() {
    sidebar.style.left = '0';
    body.style.marginLeft = '250px'; // Move content when sidebar opens
});

// Close sidebar
closeBtn.addEventListener('click', function() {
    sidebar.style.left = '-250px';
    body.style.marginLeft = '0'; // Reset content position
});
