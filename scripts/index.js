// image animation with cool effect



var samAvarar = document.querySelector('.avatar');

samAvarar.addEventListener('mouseover', animation);

function animation () {
    samAvarar.classList.add('jsImgAnime', 'shadow-lg', 'p-3', 'mb-5', 'rounded');

    setTimeout ( function () {
        samAvarar.classList.remove('jsImgAnime', 'shadow-lg', 'p-3', 'mb-5', 'rounded');
    }, 300)
}
