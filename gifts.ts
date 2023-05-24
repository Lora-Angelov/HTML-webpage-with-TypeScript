function submitGifts(): void {
    const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked');
    const thankYouMessage = document.getElementById('thank-you-message');
    const image = document.getElementById('cat-image') as HTMLImageElement;

    if (checkboxes.length > 0) {
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });

        if (thankYouMessage) {
            let selectedItems = '';
            for (let i = 0; i < checkboxes.length; i++) {
                selectedItems += checkboxes[i].value;
                if (i < checkboxes.length - 1) {
                    selectedItems += ', ';
                }
            }
            thankYouMessage.textContent = `Thank you for the ${selectedItems}!`;
        }

            setTimeout(() => {
                thankYouMessage.textContent = '';
            }, 3000);
        }

        if (image) {
            const previousImageSrc = image.src;
            const temporaryImageSrc = 'temporary_image.png';

            image.src = temporaryImageSrc;

            setTimeout(() => {
                image.src = previousImageSrc;
            }, 3000);
        }
    }

