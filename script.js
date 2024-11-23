// Get the modal and close button elements
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

// Get all shirt images with the class "shirt-image"
const shirtImages = document.querySelectorAll('.shirt-image');

// Add event listener for each image to open the modal
shirtImages.forEach(image => {
    image.addEventListener('click', function() {
        const fullSizeImage = this.getAttribute('data-fullsize'); // Get the full-size image URL from the data attribute
        modalImage.src = fullSizeImage; // Set the src of the modal image
        modal.style.display = 'flex'; // Show the modal
    });
});

// Add event listener to close the modal when clicking the close button
closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal
});

// Optional: Close the modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none'; // Close the modal if clicked outside
    }
});
