"use strict";

const $ = selector => document.querySelector(selector);



const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const calculateMPG = (miles, gallons) => (miles / gallons).toFixed(1);

const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles) || miles <= 0) {
        console.log("test1");
        document.getElementById("span1").innerHTML= "must be a valid number greater than zero.";

        // alert("Miles driven must be a valid number greater than zero");
        focusAndSelect("#miles");
    } if (isNaN(gallons) || gallons <= 0) {
        console.log("test2");
        document.getElementById("span2").innerHTML= "must be a valid number greater than zero.";
        // alert("Gallons of gas used must be a valid number greater than zero.");
        focusAndSelect("#gallons");
    } else {
        document.getElementById("span1").innerHTML="";
        document.getElementById("span2").innerHTML="";
        $("#mpg").value = calculateMPG(miles, gallons);
    }
};

const clearEntries = () => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";
    document.getElementById("span1").innerHTML="";
        document.getElementById("span2").innerHTML="";
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#miles").focus();
});