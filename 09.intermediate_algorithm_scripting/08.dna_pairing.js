// Pairs of DNA strands consist of protein base pairs. Base pairs are represented by the 
// characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base 
// pairs for the provided DNA strand. For each character in the provided string, find the base 
// pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into 
// one encapsulating array.

// G => C ; C => G ; A => T ; T => A
function pairElement(str) {
    let pair = {
        G: 'C',
        C: 'G',
        A: 'T',
        T: 'A',
    }
    /* TODO: do this with Array.prototype.map */
    return str.split('').reduce((a, item) => [...a, [item, pair[item]] ], []);
}

console.log(pairElement("GCG"));