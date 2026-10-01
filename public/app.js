const lectures = [...document.querySelectorAll('[data-lecture-toggle]')];
const lectureCount = document.querySelector('[data-lecture-count]');
const progressRing = document.querySelector('[data-progress-ring]');
const progressCircumference = Number(progressRing.dataset.progressCircumference);

const updateLectureCount = () => {
    const completed = lectures.filter((lecture) => lecture.querySelector('.dot-on')).length;
    lectureCount.textContent = `${completed} / ${lectures.length}`;

    const progressLength = (completed / lectures.length) * progressCircumference;
    progressRing.style.strokeDasharray = `${progressLength} ${progressCircumference - progressLength}`;

    lectures.forEach((lecture) => {
        const number = lecture.querySelector('.w-7');
        const isActive = lecture.querySelector('.dot-on') !== null;
        number.classList.toggle('text-white', isActive);
        number.classList.toggle('text-slate-500', !isActive);
    });
};

lectures.forEach((lecture) => {
    lecture.addEventListener('click', () => {
        const dot = lecture.querySelector('.dot');
        const isActive = lecture.classList.toggle('text-slate-400');

        lecture.classList.toggle('text-slate-200', !isActive);
        dot.classList.toggle('dot-on', !isActive);
        updateLectureCount();
    });
});

// Handle project card squares
const projectCardSquares = [...document.querySelectorAll('[data-project-card-squares] .sq')];

projectCardSquares.forEach((square) => {
    square.addEventListener('click', () => {
        const containerDiv = square.closest('[data-project-card-squares]');
        const cardDiv = containerDiv.parentElement;
        const accentLetter = getAccentLetterFromCard(cardDiv);

        const isCurrentlyFilled = square.dataset.squareState === 'filled';

        if (isCurrentlyFilled) {
            // Toggle from filled to empty
            square.dataset.squareState = 'empty';
            // Remove all f-* classes and add e-* class
            square.classList.remove(`f-${accentLetter}`);
            square.classList.add(`e-${accentLetter}`);
        } else {
            // Toggle from empty to filled
            square.dataset.squareState = 'filled';
            // Remove e-* class and add f-* class
            square.classList.remove(`e-${accentLetter}`);
            square.classList.add(`f-${accentLetter}`);
        }

        // Update the counter
        updateProjectCardCounter(cardDiv);
    });
});

const getAccentLetterFromCard = (cardDiv) => {
    // Determine accent letter from the card's classes or border
    if (cardDiv.classList.contains('border-cyan-400/70')) {
        return 'c';
    } else if (cardDiv.querySelector('text')) {
        const svgText = cardDiv.querySelector('text');
        const color = svgText.getAttribute('fill');
        if (color === '#c084fc') return 'p';
        if (color === '#868D9D') return 'gray';
        return 'c';
    }
    return 'c'; // default
};

const updateProjectCardCounter = (cardDiv) => {
    const squares = [...cardDiv.querySelectorAll('[data-project-card-squares] .sq')];
    const filledCount = squares.filter((sq) => sq.dataset.squareState === 'filled').length;
    const totalCount = squares.length;

    const counterText = cardDiv.querySelector('[data-counter-text]');
    if (counterText) {
        counterText.textContent = `${filledCount} / ${totalCount}`;
    }
};

updateLectureCount();
