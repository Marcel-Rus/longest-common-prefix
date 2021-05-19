/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // initialize variables
    let prefix = strs[0], match = 1;

    // set the prefix equal to the smallest string
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < prefix.length) {
            prefix = strs[i];
        }
    }

    // loop until the prefix is length 1
    for (; prefix.length >= 1;) {

        // loop through the strings
        for (let j = 0; j < strs.length; j++) {

            // if the prefix is not in the current string
            // then there isn't a match, break the loop
            if (strs[j].indexOf(prefix) !== 0) {
                match = 0;
                break;
            }

        }

        // if there is a match
        // then return the prefix
        if (match === 1) {
            return prefix;
        }

        // else the prefix is longer than 1 character
        // then remove the last character in the prefix
        else {
            prefix = prefix.slice(0, -1);
            match = 1;
        }
    }

    // return the prefix
    return prefix;
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]));