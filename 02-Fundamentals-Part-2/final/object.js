///////////////////////////////////////
// Introduction to Objects
/*
  
  ///////////////////////////////////////
  // Dot vs. Bracket Notation
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };
  
  

  jonas.location = 'Portugal';
  jonas['twitter'] = '@jonasschmedtman';
  const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
  
  if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
  } else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
  }
  
  
  console.log(jonas);
  /*
  // Challenge
  // "Jonas has 3 friends, and his best friend is called Michael"
  console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
  
  
  ///////////////////////////////////////
  // Object Methods
  
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
  
    calcAge: function () {
        this.age =2037 - this.birthYeah;
      return this.age;
     },
    
    getSummary: function () {
      return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
  };
  
  console.log(jonas.age);

  console.log(jonas.getSummary());
  
  // Challenge
  // "Jonas is a 46-year old teacher, and he has a driver's license"
  console.log(jonas.getSummary());
  
  
  ///////////////////////////////////////
  // Coding Challenge #3
  
  
  Let's go back to Mark and John comparing their BMIs! 
  This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
  
  1. For each of them, create an object with properties for their full name, mass, and height 
  (Mark Miller and John Smith)
  2. Create a 'calcBMI' method on each object to calculate the BMI 
  (the same method on both objects). Store the BMI value to a property, and also return it from the method.
  3. Log to the console who has the higher BMI, together with the full name and the respective BMI.
   Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
  
  TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
  
  GOOD LUCK 😀
  */
  
  const person1 = {
    name : "John",
    mass : 92,
    height : 1.95,
    calcBMI : function(){
        this.BMI = this.mass/(this.height**2);
        return this.BMI ;
    }

  }

  const person2 = {
    name : "Mark",
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        this.BMI = this.mass/(this.height**2);
        return this.BMI ;
    }

  }

  person1.calcBMI();
  person2.calcBMI();
 console.log(person1.BMI, person2.BMI);

 if(person1.BMI>person2.BMI){
  
    console.log(`John Smith's BMI ${person1.BMI} is higher than Mark Miller's (${person2.BMI}!`);
 } else{
    console.log(`Mark's BMI ${person2.BMI} is higher than John's (${person1.BMI}!`);
 }
 













  /*
  const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    }
  };
  
  const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    }
  };
  
  mark.calcBMI();
  john.calcBMI();
  
  console.log(mark.bmi, john.bmi);
  
  // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
  
  if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
  }
  
  
  ///////////////////////////////////////
  // Iteration: The for Loop
  
  // console.log('Lifting weights repetition 1 🏋️‍♀️');
  // console.log('Lifting weights repetition 2 🏋️‍♀️');
  // console.log('Lifting weights repetition 3 🏋️‍♀️');
  // console.log('Lifting weights repetition 4 🏋️‍♀️');
  // console.log('Lifting weights repetition 5 🏋️‍♀️');
  // console.log('Lifting weights repetition 6 🏋️‍♀️');
  // console.log('Lifting weights repetition 7 🏋️‍♀️');
  // console.log('Lifting weights repetition 8 🏋️‍♀️');
  // console.log('Lifting weights repetition 9 🏋️‍♀️');
  // console.log('Lifting weights repetition 10 🏋️‍♀️');
  
  // for loop keeps running while condition is TRUE
  for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
  }
  

  */