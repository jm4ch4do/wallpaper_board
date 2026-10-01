export interface ProjectCard {
    iconNumber: string;
    accent: 'cyan' | 'purple' | 'gray';
    title: string;
    meta: string;
    description: string;
    /** '' renders a plain empty square; otherwise a fill/tint variant class like 'f-c' or 'e-p'. */
    squares: string[];
    statLabel?: string; // Auto-calculated from squares if not provided
    highlighted?: boolean;
    active?: boolean;
}

// Helper to convert pattern string to squares array: X = filled, O = empty (spaces ignored)
// Example: "XXXX OOOOOO" → ['f','f','f','f','e','e','e','e','e','e']
const parseSquares = (pattern: string): string[] =>
    pattern.replace(/\s/g, '').split('').map(c => c === 'X' ? 'f' : 'e');

// Edit this list to change the project cards row — the component renders straight from it.
export const projectCards: ProjectCard[] = [
    {
        iconNumber: '1',
        accent: 'cyan',
        title: 'TAILWIND WALLPAPER',
        meta: '9 COMMITS\u00A0\u00A0~10 hours',
        description: 'Start putting your knowledge to practice with these tailwindcss mini-projects',
        squares: parseSquares('XXOOOOOOO'),
    },
    {
        iconNumber: '2',
        accent: 'cyan',
        title: 'VISIT LIBRARY & POOL',
        meta: '9 VISITS',
        description: 'Easy peacy',
        squares: parseSquares('XXXX OOOOO'),
        highlighted: true,
    },
    {
        iconNumber: '3',
        accent: 'purple',
        title: 'DESIGN VMPLATFORMS',
        meta: '20 commits',
        description: 'Health should be always your main concern.',
        squares: parseSquares('OOOOOOOOOO'),
    },
];

// Second card row: first card reuses the old ENGLISH EVERY DAY content; the rest are new.
export const extraCards: ProjectCard[] = [
    {
        iconNumber: '4',
        accent: 'purple',
        title: 'ENGLISH EVERY DAY',
        meta: '11 SECTIONS\u00A0\u00A0~10h',
        description: "Don't miss a single day without practicing english pronunciation",
        squares: parseSquares('XXXX OOOOOO'),
    },
    {
        iconNumber: '5',
        accent: 'cyan',
        title: 'TASK BOARD',
        meta: '5 TASKS\u00A0\u00A0~3 hours',
        description: 'Track and organize code tasks efficiently',
        squares: parseSquares('XXXX OOOOOO'),
        active: false,
    },
    {
        iconNumber: '6',
        accent: 'gray',
        title: 'GOAL NOT SET',
        meta: 'COMING SOON',
        description: 'Not active yet — Get comfortable with the Composition API and reactivity',
        squares: parseSquares('OOOOOO'),
        active: false,
    },

];
