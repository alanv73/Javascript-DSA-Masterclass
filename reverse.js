// function accepts a string and returns a new string that is the reverse of the input
//
// reverse('awesome'); // emosewa
// reverse('rithmschool'); // loohcsmhtir

function reverse(str){
    return str.length <= 1 ? str : reverse(str.slice(1)) + str[0];
}

reverse('awesome');
