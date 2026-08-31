let currentPage = 1;

const totalPages = 3;


const pageImage =
    document.getElementById("pageImage");

const pageNumber =
    document.getElementById("pageNumber");

const backButton =
    document.getElementById("backButton");

const nextButton =
    document.getElementById("nextButton");


function showPage() {

    pageImage.src =
        `pages/page${currentPage}.png`;

    pageNumber.textContent =
        `${currentPage} / ${totalPages}`;

    backButton.disabled =
        currentPage === 1;

    nextButton.disabled =
        currentPage === totalPages;
}


function nextPage() {

    if (currentPage < totalPages) {

        currentPage++;

        showPage();
    }
}


function previousPage() {

    if (currentPage > 1) {

        currentPage--;

        showPage();
    }
}


showPage();
