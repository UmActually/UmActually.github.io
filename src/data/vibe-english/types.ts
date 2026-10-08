export type DerivationStep =
    | "chop"
    | "literal"
    | "vowel"
    | "existing"
    | "derivation"
    | "phonotactic"
    | "domain";

export interface VibeEnglishWord {
    translation: string;
    derivedBy: (DerivationStep | string)[];
    author?: string;
}

export interface Word {
    spanish: string;
    english: string;
    vibeEnglish: VibeEnglishWord[];
    isLegendary: boolean;
    examples?: string[];
}
