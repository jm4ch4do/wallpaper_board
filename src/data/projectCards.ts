export interface ProjectCard {
    iconNumber: string;
    accent: 'cyan' | 'purple';
    title: string;
    meta: string;
    description: string;
    /** '' renders a plain empty square; otherwise a fill/tint variant class like 'f-c' or 'e-p'. */
    squares: string[];
    statLabel: string;
    highlighted?: boolean;
}

// Edit this list to change the project cards row — the component renders straight from it.
export const projectCards: ProjectCard[] = [
    {
        iconNumber: '1',
        accent: 'cyan',
        title: 'TAILWIND WALLPAPER',
        meta: '9 COMMITS\u00A0\u00A0~10 hours',
        description: 'Start putting your knowledge to practice with these tailwindcss mini-projects',
        squares: Array(7).fill('e-p'),
        statLabel: '0 / 9',
    },
    {
        iconNumber: '2',
        accent: 'cyan',
        title: 'VISIT LIBRARY & POOL',
        meta: '9 VISITS',
        description: 'Easy peacy',
        squares: [...Array(4).fill('f-c'), ...Array(5).fill('e-c')],
        statLabel: '4 / 9',
        highlighted: true,
    },
    {
        iconNumber: '3',
        accent: 'purple',
        title: 'DESIGN VMPLATFORMS',
        meta: '20 commits',
        description: 'Health should be always your main concern.',
        squares: Array(10).fill(''),
        statLabel: '0 / 20',
    },
];
