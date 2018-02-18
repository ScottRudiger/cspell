
export interface GrammarDefinition {
    name: string;
    scopeName: string;
    fileTypes: string[];
    patterns: Pattern[];
    repository?: Repository;
}

export type Pattern = PatternMatch | PatternBeginEnd | PatternInclude | PatternPatterns | PatternName;

export interface PatternMatch extends PatternBase {
    name?: string;
    comment?: string;
    match: RegexOrString;
    captures?: Capture;
}

export interface PatternBeginEnd extends PatternBase {
    name: string;
    comment?: string;
    begin: RegexOrString;
    end: RegexOrString;
    captures?: Capture;
    beginCaptures?: Capture;
    endCaptures?: Capture;
    contentName?: string;
    patterns?: Pattern[];
}

export interface PatternInclude extends PatternBase {
    /**
     * Include a named pattern or grammar
     * Example: "#comment" -- include the "comment" pattern from the repository.
     * Example: "$self" -- to include this same pattern again.
     * Example: "source.json" -- to include the rules for .json files
     */
    include: string;
    comment?: string;
}

export interface PatternPatterns extends PatternBase {
    patterns: Pattern[];
    comment?: string;
    scopeName?: string;
}

export interface PatternName extends PatternBase {
    name: string;
}

export interface PatternBase {
    name?: string;
    comment?: string;
}

export type RegexOrString = RegExp | string;

export interface Capture {
    [index: string]: Pattern;
    [index: number]: Pattern;
}

export interface Repository {
    [index: string]: Pattern;
}
