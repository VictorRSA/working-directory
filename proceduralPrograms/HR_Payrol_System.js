//Calculate base salary:


let baseSalary =30000; 
let overTime = 10 ;//in hours
let rate_per_Hour = 20; //in rands currency

function getWage(baseSalarys,overTime,rate_per_Hour) {
    return baseSalary + (overTime *rate_per_Hour)
}