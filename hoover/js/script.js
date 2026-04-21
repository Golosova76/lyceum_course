'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');

    if (slider) {
        const viewport = slider.querySelector('.slider__viewport');
        const track = slider.querySelector('.slider__track');
        const prevButton = slider.querySelector('.slider__button.slider__button_prev');
        const nextButton = slider.querySelector('.slider__button.slider__button_next');
        const slides =  Array.from(slider.querySelectorAll('.slider__slide'));

        const gap = 16;
        let slideHeightWithGap = slides[0].offsetHeight + gap;
        let currentSlideIndex = 0;
        const visibleSlidesCount = Math.floor((viewport.clientHeight + gap) / slideHeightWithGap);
        const maxSlideIndex = Math.max(0, slides.length - visibleSlidesCount);

        function getSlideOffset(index) {
            return -(index * slideHeightWithGap);
        }

        function updateSlider() {
            const offset = getSlideOffset(currentSlideIndex);
            track.style.transform = `translateY(${offset}px)`;

            prevButton.disabled = currentSlideIndex === 0;
            nextButton.disabled = currentSlideIndex === maxSlideIndex;
        }

        function moveNext() {
            if (currentSlideIndex < maxSlideIndex) {
                currentSlideIndex += 1;
                updateSlider();
            }
        }

        function movePrev() {
            if (currentSlideIndex > 0) {
                currentSlideIndex -= 1;
                updateSlider();
            }
        }

        prevButton.addEventListener('click', movePrev);
        nextButton.addEventListener('click', moveNext);

        window.addEventListener('resize', updateSlider);

        updateSlider();
    }
});
