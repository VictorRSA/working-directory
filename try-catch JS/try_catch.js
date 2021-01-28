const person ={
    FirstName:"Mosh",
    LastName :"Haedani",
    set FullName (value) {
        if (typeof value !=="string")
        throw new Error("Value is not a string.");
        const parts =value.split(""); //assume the value of the setter passed is a string what if is not?

        this.FirstName =parts[0];
        this.LastName =parts[1];
       

    }
};

try {
    person.FullName ="John Smith";
    person.FullName = null;

}
catch (e) {
    console.log(e)

}
console.log(person);


