// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'

function repeatStr(num, string) {
    var str = "";
    for (i = 1; i <= num; i++) {
        str = str + string;
    }
    return str;
}