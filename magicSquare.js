const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const btn = document.getElementById("btn");
const sum = document.getElementById("sum");
const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");
const s4 = document.querySelector(".s4");
const s5 = document.querySelector(".s5");
const s6 = document.querySelector(".s6");
const s7 = document.querySelector(".s7");
const s8 = document.querySelector(".s8");
const s9 = document.querySelector(".s9");
const s10 = document.querySelector(".s10");
const s11 = document.querySelector(".s11");
const s12 = document.querySelector(".s12");
const s13 = document.querySelector(".s13");
const s14 = document.querySelector(".s14");
const s16 = document.querySelector(".s16");
const s15 = document.querySelector(".s15");

btn.addEventListener("click", () => {
    const yearSplit = year.value.split("");
    s1.value = day.value;
    s2.value = month.value;
    s3.value = yearSplit[0] + yearSplit[1];
    s4.value = yearSplit[2] + yearSplit[3];
    s5.value = parseInt(yearSplit[2] + yearSplit[3]) + 1;
    s6.value = parseInt(yearSplit[0] + yearSplit[1]) - 1;
    s7.value = parseInt(month.value) - 3;
    s8.value = parseInt(day.value) + 3;
    s9.value = parseInt(month.value) - 2;
    s10.value = parseInt(day.value) + 2;
    s11.value = parseInt(yearSplit[2] + yearSplit[3]) + 2;
    s12.value = parseInt(yearSplit[0] + yearSplit[1]) - 2;
    s13.value = parseInt(yearSplit[0] + yearSplit[1]) + 1;
    s14.value = parseInt(yearSplit[2] + yearSplit[3]) - 1;
    s15.value = parseInt(day.value) + 1;
    s16.value = parseInt(month.value) - 1;
    sum.classList.remove("hide");
    sum.innerHTML = `Sum: ${
        parseInt(s1.value) +
        parseInt(s2.value) +
        parseInt(s3.value) +
        parseInt(s4.value)
    }`;
});
