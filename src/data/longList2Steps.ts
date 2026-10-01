import { parseSquares } from '../utils';

export interface AccentStep {
    number: number;
    label: string;
    /** Pattern string where X = filled and O = empty (e.g., "XXXX OOOOOO") */
    squares: string[];
}

// Edit this list to change the AMERICAN ACCENT MASTERY steps — the component renders straight from it.
export const accentSteps: AccentStep[] = [
    { number: 1, label: 'Mumbling, Articulators', squares: parseSquares('XXXXXXXXXXXX') },
    { number: 2, label: 'Classifications of Sounds', squares: parseSquares('XXXXXXXXXXXX') },
    { number: 3, label: 'IPA Chart and Passive S.', squares: parseSquares('XXXXXXXXXXXX') },
    { number: 4, label: 'Monophthon and Diph. Sounds', squares: parseSquares('X OOOOOOOOOOO') },
    { number: 5, label: 'Long and Short Vowel S.', squares: parseSquares('X OOOOOOOOOOO') },
    { number: 6, label: 'Main Different S. of A', squares: parseSquares('X OOOOOOOOOOO') },
    { number: 7, label: 'Past tense ending', squares: parseSquares('X OOOOOOOOOOO') },
    { number: 8, label: 'Consonant Blends', squares: parseSquares('X OOOOOOOOOOO') },
    { number: 9, label: 'US Professional Accent', squares: parseSquares('X OOOOOOOOOOO') },
    { number: 10, label: 'Content Words and Structure', squares: parseSquares('X OOOOOOOOOOO') },
    { number: 11, label: 'Word Stress for Meanings', squares: parseSquares('X OOOOOOOOOOO') },
];
