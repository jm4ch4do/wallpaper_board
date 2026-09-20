export interface RoadmapStep {
    number: number;
    label: string;
    colorState: 'green' | 'cyan' | 'purple' | 'slate';
    /** '' renders a plain empty square; otherwise a fill/tint variant class like 'f-p' or 'e-p'. */
    squares: string[];
}

// Edit this list to change the TAILWIND COURSE ROADMAP steps — the component renders straight from it.
export const roadmapSteps: RoadmapStep[] = [
    { number: 1, label: 'Introduction', colorState: 'green', squares: Array(10).fill('f-g') },
    { number: 2, label: 'Fundamentals Part 1', colorState: 'cyan', squares: Array(10).fill('f-c') },
    { number: 3, label: 'Fundamentals Part 2', colorState: 'purple', squares: Array(10).fill('f-p') },
    { number: 4, label: 'Development Environment', colorState: 'purple', squares: Array(10).fill('f-p') },
    { number: 5, label: 'Mini Project', colorState: 'purple', squares: [...Array(4).fill('f-p'), ...Array(6).fill('e-p')] },
    { number: 6, label: 'Clipboard Website', colorState: 'purple', squares: Array(10).fill('f-p') },
    { number: 7, label: 'Loopstudios Website', colorState: 'purple', squares: Array(10).fill('f-p') },
    { number: 8, label: 'Shortly Website', colorState: 'purple', squares: Array(10).fill('f-p') },
    { number: 9, label: 'Testimonial Grid Website', colorState: 'purple', squares: Array(10).fill('f-p') },
    { number: 10, label: 'Design of VMPlatforms', colorState: 'slate', squares: Array(10).fill('e-p') },
];
