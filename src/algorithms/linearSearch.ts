export function linearSearch(haystack: number[], needle: number): boolean {
    for (let i = 0; i < haystack.length; i += 1) {
        const item = haystack[i];
        if (item === needle) return true;
    }

    return false;
}
