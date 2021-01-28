//Calculate base salary using procedural spaggethi code:


let baseSalary =30000; 
let overTime = 10 ;//in hours
let rate_per_Hour = 20; //in rands currency

function getWage(baseSalarys,overTime,rate_per_Hour) {
    return baseSalary + (overTime *rate_per_Hour)
}




/*Calculate base salary using the object oriented technique,
model this business requirements,problem using an  objects with...
  properties and methods culture==symboling,mental construct */


let Employee = {
    base_salary :30000,
    over_time:10,
    rate_hourly :20
    get_wage () => {
        return this.base_salary +(this.over_time*this.rate_hourly)
    }
};

Employee.get_wage();