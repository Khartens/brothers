let swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 7000,
        disableOnInteraction: true,
    },
    //Остановка при на ведении
    // on: {
    // init: function () {
    //     this.el.addEventListener('mouseover', function () {
    //     this.autoplay.stop();
    //     }.bind(this));
    //     this.el.addEventListener('mouseout', function () {
    //     this.autoplay.start();
    //     }.bind(this));
    // }
    // },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});
//button

let buttons = document.querySelector('.butt'),
    forEach = Array.prototype.forEach;

function addElement(e) {
    let addDiv  = document.createElement('div'),
        mValue  = Math.max(this.clientWidth, this.clientHeight),
        rect    = this.getBoundingClientRect();
        sDiv    = addDiv.style,
        px      = 'px';

    sDiv.width  = sDiv.height = mValue + px;
    sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
    sDiv.top   = e.clientY - rect.top - (mValue / 2) + px;

    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
}