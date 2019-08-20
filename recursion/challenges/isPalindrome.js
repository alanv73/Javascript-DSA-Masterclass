// function accepts a string and returns boolean, true if string is a palindrome (reads the
// same forwards and backwards). Otherwise returns false.
//
// isPalindrome('awesome'); // false
// isPalindrome('foobar'); // false
// isPalindrome('tacocat'); // true
// isPalindrome('amanaplanacanalpanama'); // true
// isPalindrome('amanaplanacanalpandemonium'); // false

function isPalindrome(text){
    function helper(str){
        return str.length <= 1 ? str : helper(str.slice(1)) + str[0];
    }

    return text === helper(text);
}

isPalindrome('amanaplanacanalpandemonium'); // true
