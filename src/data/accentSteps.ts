export interface AccentStep {
    number: number;
    label: string;
    /** '' renders a plain empty square; otherwise 'f' for filled or 'e' for empty. */
    squares: string[];
    /** Faded icon background used once a step is no longer the highlighted "current" ones. */
    dimmedIcon: boolean;
}

// Edit this list to change the AMERICAN ACCENT MASTERY steps — the component renders straight from it.
export const accentSteps: AccentStep[] = [
    { number: 1, label: 'Mumbling, Articulators', squares: Array(12).fill('f'), dimmedIcon: false },
    { number: 2, label: 'Classifications of Sounds', squares: Array(12).fill('f'), dimmedIcon: false },
    { number: 3, label: 'IPA Chart and Passive S.', squares: Array(12).fill('f'), dimmedIcon: false },
    { number: 4, label: 'Monophthon and Diph. Sounds', squares: [...Array(1).fill('f'), ...Array(11).fill('e')], dimmedIcon: true },
    { number: 5, label: 'Long and Short Vowel S.', squares: [...Array(1).fill('f'), ...Array(11).fill('e')], dimmedIcon: true },
    { number: 6, label: 'Main Different S. of A', squares: [...Array(1).fill('f'), ...Array(11).fill('e')], dimmedIcon: true },
    { number: 7, label: 'Past tense ending', squares: [...Array(1).fill('f'), ...Array(11).fill('e')], dimmedIcon: true },
    { number: 8, label: 'Consonant Blends', squares: [...Array(1).fill('f'), ...Array(11).fill('e')], dimmedIcon: true },
    { number: 9, label: 'US Professional Accent', squares: [...Array(1).fill('f'), ...Array(11).fill('e')], dimmedIcon: true },
    { number: 10, label: 'Content Words and Structure', squares: [...Array(1).fill('f'), ...Array(11).fill('e')], dimmedIcon: true },
    { number: 11, label: 'Word Stress for Meanings', squares: [...Array(1).fill('f'), ...Array(11).fill('e')], dimmedIcon: true },
];
