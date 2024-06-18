const h1Elements = document.querySelectorAll('#h1-container h1');
h1Elements.forEach((h1, index) => {
    if (index % 2 === 0) {
        h1.classList.add('up');
    } else {
        h1.classList.add('down');
    }
});