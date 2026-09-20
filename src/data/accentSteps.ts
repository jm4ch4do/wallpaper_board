export interface AccentStep {
    number: number;
    label: string;
    /** Out of 12 squares total. */
    filledCount: number;
    /** Faded icon background used once a step is no longer the highlighted "current" ones. */
    dimmedIcon: boolean;
}

// Edit this list to change the AMERICAN ACCENT MASTERY steps — the component renders straight from it.
export const accentSteps: AccentStep[] = [
    { number: 1, label: 'Mumbling, Articulators', filledCount: 12, dimmedIcon: false },
    { number: 2, label: 'Classifications of Sounds', filledCount: 12, dimmedIcon: false },
    { number: 3, label: 'IPA Chart and Passive S.', filledCount: 12, dimmedIcon: false },
    { number: 4, label: 'Monophthon and Diph. Sounds', filledCount: 1, dimmedIcon: true },
    { number: 5, label: 'Long and Short Vowel S.', filledCount: 1, dimmedIcon: true },
    { number: 6, label: 'Main Different S. of A', filledCount: 1, dimmedIcon: true },
    { number: 7, label: 'Past tense ending', filledCount: 1, dimmedIcon: true },
    { number: 8, label: 'Consonant Blends', filledCount: 1, dimmedIcon: true },
    { number: 9, label: 'US Professional Accent', filledCount: 1, dimmedIcon: true },
    { number: 10, label: 'Content Words and Structure', filledCount: 1, dimmedIcon: true },
    { number: 11, label: 'Word Stress for Meanings', filledCount: 1, dimmedIcon: true },
];
