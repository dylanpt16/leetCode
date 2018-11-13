let lengthOfLongestSubstring = function(s) {
    let hashTable = {};
    let lastSeenCharIdx = -1;
    let longestSubstringLength = 0;


    for(let idx = 0; idx < s.length; idx++) {
        let currentChar = s[idx];
        if(hashTable[currentChar] != undefined) {
            lastSeenCharIdx = Math.max(hashTable[currentChar], lastSeenCharIdx);
        }
        hashTable[currentChar] = idx;
        longestSubstringLength = Math.max(longestSubstringLength, idx - lastSeenCharIdx);
    }
    return longestSubstringLength;
};