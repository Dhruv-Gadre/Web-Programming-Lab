var n1;
var n2;
var opr;
function button1() {
    n1 = parseInt(prompt("Enter the number 1: "));
}

function button2() {
    n2 = parseInt(prompt("Enter the number 2: "));
}
function button3() {
    opr = prompt("Enter the operation +, - , *, / : ");
    var ans;
    switch (opr) {
        case '+':
            ans = n1 + n2;
            break;
        case '-':
            ans = n1 - n2;
            break;
        case '*':
            ans = n1 * n2;
            break;
        case "/":
            ans = n1 / n2;
            break;
    }
    alert("The answer is : " + " " + ans);
}


