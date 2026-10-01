// Helper to convert pattern string to squares array: X = filled, O = empty (spaces ignored)
// Example: "XXXX OOOOOO" → ['f','f','f','f','e','e','e','e','e','e']
export const parseSquares = (pattern: string): string[] =>
    pattern.replace(/\s/g, '').split('').map(c => c === 'X' ? 'f' : 'e');
