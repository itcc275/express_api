// pallindrome function

const isPalindrome = require('./index')

describe('isPalindrome', () => {
    it('should return true for a simple palindrome', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });

    it('should return false for a non-palindrome', () => {
        expect(isPalindrome('hello')).toBe(false);
    });

    it('should return true for a palindrome with spaces', () => {
        expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    });

    it('should return null for no input', () => {
        expect(isPalindrome()).toBe(null);
    });

    it('should return null for empty string', () => {
        expect(isPalindrome('')).toBe(null);
    });

    it('should ignore multiple arguments and just focus on first element', () => {
        expect(isPalindrome('racecar', 'hello')).toBe(true);
    });

    it('should handle mixed case palindromes', () => {
        expect(isPalindrome('Able was I ere I saw Elba')).toBe(true);
    });

    it('should handle numeric palindromes', () => {
        expect(isPalindrome('12321')).toBe(true);
    });

    it('should handle array input', () => {
        expect(isPalindrome(['A man, a plan, a canal: Panama'])).toBe(false);
    });
});
