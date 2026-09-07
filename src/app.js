const lectures = [...document.querySelectorAll('[data-lecture-toggle]')];
const lectureCount = document.querySelector('[data-lecture-count]');

const updateLectureCount = () => {
    const completed = lectures.filter((lecture) => lecture.querySelector('.dot-on')).length;
    lectureCount.textContent = `${completed} / ${lectures.length}`;
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
