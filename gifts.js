function submitGifts() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var thankYouMessage = document.getElementById('thank-you-message');
    var image = document.getElementById('cat-image');
    if (checkboxes.length > 0) {
        // Unmark checkboxes
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
        // Display thank you message
        if (thankYouMessage) {
            var selectedItems = '';
            for (var i = 0; i < checkboxes.length; i++) {
                selectedItems += checkboxes[i].value;
                if (i < checkboxes.length - 1) {
                    selectedItems += ', ';
                }
            }
            thankYouMessage.textContent = "Thank you for the ".concat(selectedItems, "!");
        }
        // Clear thank you message after 3 seconds
        setTimeout(function () {
            thankYouMessage.textContent = '';
        }, 3000);
    }
    // Change image temporarily
    if (image) {
        var previousImageSrc_1 = image.src;
        var temporaryImageSrc = 'temporary_image.png';
        // Set temporary image
        image.src = temporaryImageSrc;
        // Change back to previous image after 3 seconds
        setTimeout(function () {
            image.src = previousImageSrc_1;
        }, 3000);
    }
}
