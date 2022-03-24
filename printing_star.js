#!/usr/bin/env node
let inputArr = process.argv.slice(2);
const { execFileSync } = require("child_process");
const { count } = require("console");
let fs = require("fs");
//console.log(inputArr)

//help
let isHelp = inputArr.includes("Help")
if(isHelp==true)
{
    console.log(
        `All commands are:
            1. -LoveDrop
            2.-abc or -ABC
            3.-BhaiyaJiSmile`
    )
}

let isLoveDroppresent = inputArr.includes("-LoveDrop");
if (isLoveDroppresent == true) {
        n = 8;
        m = 8;
        str = "";
        for (let i = 0; i < n; ++i) {
            for (let j = 0; j < m; j++) {
                if (j >= n - i && j <= n + i)
                    str = str.concat(" ❤️ ");
                else
                    str = str.concat(" ");

            }
            str = str.concat("\n");
        }
        console.log(str);
}

let isABCpresent = inputArr.includes("-ABC") || inputArr.includes("-abc") ;
if (isABCpresent == true) {
        n = 8;
        m = 8;
        str = "";
        for (let i = 0; i < n; ++i) {
            counter = 65;
            for (let j = 0; j < m; j++) {
                if (j >= 0 && j <= i)
                {
                    str = str.concat(String.fromCharCode(counter));
                    counter++;
                }
                else
                    str = str.concat(" ");

            }
            str = str.concat("\n");
        }
        console.log(str);
}

let isBhaiyaJiSmilePresent = inputArr.includes("-BhaiyaJiSmile");
if (isBhaiyaJiSmilePresent == true) {
        n = 8;
        m = 8;
        str = "";
        for (let i = 0; i < n; ++i) {
            counter = 65;
            for (let j = 0; j < m; j++) {
            if (j >= 0 && j <= m - 1 - i)
                {
                    str = str.concat(" 😒");
                    counter++;
                }
                else
                    str = str.concat(" ");

            }
            str = str.concat("\n");
        }
        console.log(str);
}



