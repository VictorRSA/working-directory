const language ={
    set current(name) {
        /*the set syntax binds an object property to a function to be called,
        thats when  there an attempt to 'SET' that property 
        current=Function prototype
        syntax of SET ---> {set prop(val) {...}} */
        this.log.push(name);
    }, 
    log:[]
};
language.current = "EN-ZAR";
language.current="FA";

// console.log(language.current.log)



let user ={
    Name:"Given",
    Surname:"NKuna",
    get FullName () {
        return '${this.Name} ${this.Surname}';
    }
};
console.log(user.fullName); //Given Nkuna,is should give this  fullName,but is giving me an undefined

/*now we have an Object called user,
and we want to make another property called Fullname,we implement an 
accessors,also called a getters */






























































