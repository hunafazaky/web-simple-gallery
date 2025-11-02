const smImgBox = document.querySelector('.sm-img-box');
const lgImg = document.querySelector('.lg-img');
const smImg = document.querySelectorAll('.sm-img');

smImgBox.addEventListener('click', element => {
  if (element.target.className == 'sm-img col') {
    lgImg.src = element.target.src;
    lgImg.classList.add('myfade');
    setTimeout(function() {
      lgImg.classList.remove('myfade');
    }, 800);

    smImg.forEach(element => {
        element.classList.remove('selected');
    });

    element.target.classList.add('selected');
  }
}); 