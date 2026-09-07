const lectures = [...document.querySelectorAll('[data-lecture-toggle]')];
const lectureCount = document.querySelector('[data-lecture-count]');
const progressRing = document.querySelector('[data-progress-ring]');
const progressCircumference = 2 * Math.PI * 70;

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

updateLectureCount();
