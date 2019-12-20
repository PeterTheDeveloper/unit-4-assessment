# Unit 4 Assessment - Object-Oriented JavaScript
## Short Response Section

### Directions
Answer each of the questions below clearly and concisely. Include code snippets when appropriate to illustrate your responses. Write your solutions directly in this markdown file.

**1. What is `this`?**

  'this' is a keyword used to reference the current lexical or execution context when it is invoked. Due to this, it will have a different value based on how it is executed.
  When used within the global object it will return all the properties of the Window object. An example os its usefulness is when we utilize factory functions. 
  It allows us to return objects with already speicified properties. 'this' will refer to the object that about to be created and pass the parameters in to define the object's properties.

**2. What will the following code produce? Why?** 

  ```javascript
  let a = 10;
  let b = 10;
  let c = {
    a: -10,
    b: -10,
  };

  function add() {
    return this.a + b;
  }

  c.add = add;

  console.log(add());
  console.log(c.add());
  ```
  
  This will return NaN, first. This is becuase line 29 console logged add() when it references the global object.
  There is no 'a' property within the global object so this.a + b will only give you back undefined which will then become NaN because of the attempted math operation.
  Next, line 27 makes the function a method of the object c and executes it within that context. This will return 0 because -10 + 10 = 0. Thus, using 'this' in the intended context.


**3. What is a closure? How does it allow us to create private data?**

  A closure is the concept that an inner function has access to variable passed to the outer function/ outer scope. This is done to not make the global object too contaminated while accomplishing the task.

**4. What will the following code log to the console? Why?**

  ```javascript
  function createGreeting(greeting){
    return function(name){
      return `${greeting}, ${name}!`
    }
  }

  console.log( createGreeting("Hello") )
  console.log( createGreeting("Buona sera")("Reuben"))
  ```
  
  This code will return two things. First, it returns the function that is within the createGreeting function. It will not just return 'Hello' back to you.
  Now, on line 51 is where this is correctly executed for the expected results. This line correctly passing the parameters into both functions and returns the ouput 'Buona sera, Reuben!'

**5. What is encapsulation? How do constructors and prototypes in JavaScript help us write encapsulated programs?**

  Encapsulation is the concept of collecting information and creating object methods that have restrictive access to said data.
  A good example of this is the Math object. Math is an object with data that is held privately and cannot be accessed unless you use
  one of Math's object methods, like Math.Sqrt or Math.random. These methods execute code that we cannot see from the outside but have access to
  solely because we used the proper method to access it.

**6. What is the difference between an object's prototype and the prototype property of a function? What is the relationship between the two?**


**7. What is polymorphism? Illustrate using code.**

  Polymorphism a core concept that allwos us to perform a single action on different objects. It provides an ability to call the same method on different JavaScript objects.


function person(name, grade) {
  this.name = name;
  this.grade = grade;
}

function student(name, grade) {
  person.call(this, name, grade);
  this.gpa = 4.0;
}

console.log(new student('Peter', 12));
// outputs new student object called Peter, in grade 12 with default GPA 4.0.
// this.name and grade were not originally part of student function, but we bypass this by invoking .call.