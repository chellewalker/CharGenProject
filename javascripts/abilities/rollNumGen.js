export function rolledStats() {
    var str = rollGetNumber();
    var dex = rollGetNumber();
    var con = rollGetNumber();
    var int = rollGetNumber();
    var wis = rollGetNumber();
    var cha = rollGetNumber();

    return [str,dex,con,int,wis,cha];
}

export function rollGetNumber() {
    var minNumber = 1; // The minimum number you want
    var maxNumber = 6; // The maximum number you want
    var num1 = Math.floor((Math.random() * (maxNumber) + minNumber));
    var num2 = Math.floor((Math.random() * (maxNumber) + minNumber));
    var num3 = Math.floor((Math.random() * (maxNumber) + minNumber));
    var num4 = Math.floor((Math.random() * (maxNumber) + minNumber));
    var drop = Math.min(num1,num2,num3,num4);
    var randomnumber = num1 + num2 + num3 + num4 - drop; // Generates random number
    return randomnumber;
}