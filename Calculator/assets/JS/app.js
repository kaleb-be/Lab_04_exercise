// function calc() {
//     var n1 = parseFloat(document.getElementById('n1').value);
//     var n2 = parseFloat(document.getElementById('n2').value);

//     var oper = document.getElementById('operators').value;
//     if (oper === '+') {
//         document.getElementById('result').value = n1 + n2;
//     }

//     if (oper === '-') {
//         document.getElementById('result').value = n1 - n2;
//     }

//     if (oper === '/') {
//         document.getElementById('result').value = n1 / n2;
//     }

//     if (oper === 'X') {
//         document.getElementById('result').value = n1 * n2;
//     }
// }



(function() {
    let operation = prompt("Which operation :\n  1. Addition\n  2. Subtraction\n  3. Multiplication\n  4. Division\n  5. Maximum\n  6. Minimum\n  7. Square"); //\n  8. Average");

    if (operation == "1" || operation == "3" || operation == "6" || operation == "5" || operation == "8") {
        var number = prompt("How many numbers do you have?");
        var arr = [];
        for (let i = 0; i < parseInt(number); i++) {
            arr[i] = parseInt(prompt("Enter number @ #" + (i + 1)));
        }
        if (operation == "1") {
            console.log("The result is: " + add(arr));
        } else if (operation == "3") {
            console.log("The result is: " + mul(arr));
        } else if (operation == "5") {
            console.log("The result is: " + max(arr));
        } else if (operation == "6") {
            console.log("The result is: " + min(arr));
        }
        //  else if (operation == "8") {
        //     console.log("The result is: " + average(arr));
        // }

    } else if (operation == "2") {
        var num1 = prompt("please enter number 1: ");
        var num2 = prompt("please enter number 2: ");
        console.log("the result is : " + sub(num1, num2));
    } else if (operation == "4") {
        var num1 = prompt("please enter number 1: ");
        var num2 = prompt("please enter number 2: ");
        console.log("the result is: " + div(num1, num2));
    } else {
        var num = prompt("please enter number to be squared: ");
        console.log("the result is: " + square(num));
    }
})()






function add(array) {
    let sum = 0;
    array.forEach(function(member, ) {
        sum += member;
    });
    return sum;
}

function mul(array) {
    let product = 1;
    array.forEach(function(member, ) {
        product *= member;
    });
    return product;
}

function sub(num1, num2) {
    return num1 - num2;
}

function div(num1, num2) {
    if (num2 != 0) { return num1 / num2; } else { return "undefined"; }
}


function max(array) {
    var maxNum = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxNum) { maxNum = array[i]; }
    }
    return maxNum;
}


function min(array) {
    var minNum = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minNum) { minNum = array[i]; }
    }
    return minNum;
}

// function average(array) {
//     let sum = 0;

//     array.forEach(myFun);

//     function myFun(index) {
//         sum = add(sum, array[index]);
//     }
//     return sum / array.length;
// }

function square(num) {
    return num * num;
}