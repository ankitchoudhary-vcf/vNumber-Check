"use strict";

/**
 * Function check the input number is prefect number or not
 * @param {number} input the input number to apply check on - (can be of any length)
 * @returns {boolean} the output will be the boolean value if the input is prefect number the it will return true otherwise false
 * @summary This function check whether the input number is prefect number or not
 * @example 
 * - code 
 * const vnumber_check = require("vnumber-check")
 * const input = 12
 * const output = vnumber_check.isPerfect(12)
 * console.log(output)
 * 
 * *****
 * output : 
 * false
 * 
 * @author Ankit Choudhary
 * @license MIT
 */

function isPerfect(number) {
    
    let result = 0;

    for (let i =1; i < number; i++){
        if(number%i == 0) {
            result += i;

        }
    }

    if(result==number)
    {
        return true;
    }
    else{
        return false;
    }
}



/**
 * Function check the input number is armstrong number or not
 * @param {number} input the input number to apply check on - (can be of any length)
 * @returns {boolean} the output will be the boolean value if the input is armstrong number the it will return true otherwise false
 * @summary This function check whether the input number is armstrong number or not
 * @example 
 * - code 
 * const vnumber_check = require("vnumber-check")
 * const input = 153
 * const output = vnumber_check.isPerfect(153)
 * console.log(output)
 * 
 * *****
 * output : 
 * true
 * 
 * @author Ankit Choudhary
 * @license MIT
 */

 function isArmstrong(number) {
    
    const numberOfDigits = number.toString().length
    var sum = 0;

    let temp = number;

    while (temp>0){
        
        let reminder = temp % 10;
        sum += (reminder ** numberOfDigits);
        temp = parseInt(temp/10);
    }

    if(sum==number)
    {
        return true;
    }
    else{
        return false;
    }
}


/**
 * Function check the input number is palindrome number or not
 * @param {number} input the input number to apply check on - (can be of any length)
 * @returns {boolean} the output will be the boolean value if the input is palindrome number the it will return true otherwise false
 * @summary This function check whether the input number is palindrome number or not
 * @example 
 * - code 
 * const vnumber_check = require("vnumber-check")
 * const input = 121
 * const output = vnumber_check.isPerfect(121)
 * console.log(output)
 * 
 * *****
 * output : 
 * true
 * 
 * @author Ankit Choudhary
 * @license MIT
 */

 function isPalindrome(number) {
    
    if(number.toString() == number.toString().split("").reverse().join("")){
        return true;
    }

    return false;
}

module.exports = {isPerfect, isArmstrong, isPalindrome}