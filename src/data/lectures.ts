export interface Lecture {
    number: number;
    label: string;
    active: boolean;
}

// Edit this list to change the CURRENT MISSION bullets — components render straight from it.
export const lectures: Lecture[] = [
    { number: 1, label: 'Introduction', active: true },
    { number: 2, label: 'Fundamentals P1', active: true },
    { number: 3, label: 'Fundamentals P2', active: true },
    { number: 4, label: 'Dev Environment', active: true },
    { number: 5, label: 'Mini-Projects', active: false },
    { number: 6, label: 'P1 - Clipboard Website', active: false },
    { number: 7, label: 'P2 - Loopstudios Website', active: false },
    { number: 8, label: 'P3 - Shortly Website', active: false },
    { number: 9, label: 'P4 - Testimonial Grid Project', active: false },
    { number: 10, label: 'P5 - Fylo Website + Color Picker', active: false },
    { number: 11, label: 'P5 - Bookmark Manager Website', active: false },
];

// Visual split between the mission's two bullet columns.
export const lectureColumns = [lectures.slice(0, 5), lectures.slice(5)];
