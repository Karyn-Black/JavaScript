console.log("Heyllo!");

// Arrays
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

let fruits = ["Apple", "Orange", "Banana", "Strawberry", "Mango"];
console.log(fruits);
console.log(fruits.length);

console.log(fruits[fruits.length-1]);

let boolarr = [true, false, true, false];
console.log(boolarr);

let thought_1 = ["How to do homework", "My prof is great", "I am learning JS"];
console.log(thought_1);
console.log(thought_1[1]);

console.log(fruits[3]);


// Length of Array
console.log(numbers.length);

numbers.length = 2;
console.log(numbers);


// Operations

// Push - Add an element at the end
let number_push_example = [10, 20, 30, 40];
console.log(number_push_example);

let number_push_store = number_push_example.push(50, [60, 70]);

console.log(number_push_example); // Updates the actual array to also include 50
console.log(number_push_store); // Updates the number of items in the Array from 4 to 5


// Pop - Remove an element from the end
let number_pop_example = [10, 20, 30, 40];
let number_pop_store = number_pop_example.pop();

console.log(number_pop_example); // Updates the actual array to NOT include 40
console.log(number_pop_store); // Updates the number of items in the Array from 4 to 3

let again_number_pop_example = [10];
let again_number_pop_store = again_number_pop_example.pop();
// let again_number_pop_store1 = again_number_pop_example.pop();

console.log(number_pop_example); // Updates the actual array to NOT include 40
console.log(number_pop_store); // Updates the number of items in the Array from 4 to 3
// console.log(number_pop_store1); // Uncaught ReferenceError because it is removing ALL of the objects in the array


// Unshift - Add an element at the beginning
let number_unshift_example = [10, 20, 30, 40];
let number_unshift_example_store = number_unshift_example.unshift(5, 6, 7,);

console.log(number_unshift_example);
console.log(number_unshift_example_store);


// Shift - Remove an element at the beginning
let number_shift_example = [10, 20, 30, 40];
console.log(number_shift_example);
let number_shift_example_store = number_shift_example.shift();

console.log(number_shift_example);
console.log(number_shift_example_store);


// When removing an object the console shows the object that got removed
// When adding an object the console shows the new length of the array


// Slice - Extract (Removes) a portion of an array
// (Start object at Index number, Beginning of End Index that should NOT be included)
let number_slice_example = [10, 20, 30, 40, 50];
console.log(number_slice_example);
let number_slice_example_store = number_slice_example.slice(1,3);

console.log(number_slice_example);
console.log(number_slice_example_store);


// Splice - Extract (Removes) a portion of an array AND add new element(s)
// (Start object at Index number, Number of elements to delete, Elements to add in those position(s))
let number_splice_example = [10, 20, 30, 40, 50];
console.log(number_splice_example);
let number_splice_example_store = number_splice_example.splice(1, 2, 100, 200);

console.log(number_splice_example);
console.log(number_splice_example_store);
// When removing an object the console shows the object that got removed


// Index Of - Search for the index of an element (seat number)
let number_indexOf_example = [10, 20, 30, 40, 50];
console.log(number_indexOf_example);
console.log(number_indexOf_example.indexOf(30));
console.log(number_indexOf_example.indexOf(100));


// Includes - Search if an array contains an element or not (present or not)
// Returns a boolean vale of true or false
let number_includes_example = [10, 20, 30, 40, 50];
console.log(number_indexOf_example.includes(30));
console.log(number_indexOf_example.includes(100));


// Sort - Converts the values into MULTIPLE stings, then orders these strings alphabetically
let number_sort_example = [5, 2, 1, 3, 9];
let number_sort_example_store = number_sort_example.sort();
console.log(number_sort_example);
console.log(number_sort_example_store);


// Reverse - Changes the order of the objects in the array to be reversed
let reserveda = number_sort_example.reverse();
console.log(reserveda);


// Join - Convert all the values into one SINGLE sting
let fruit_1 = ["Apple", "Orange", "Banana", "Strawberry", "Mango"];
let joined = fruit_1.join();
console.log(joined);

let joined1 = fruit_1.join("-");
console.log(joined1);

let joined2 = fruit_1.join(";");
console.log(joined2);

let joined3 = fruit_1.join(" ");
console.log(joined3);


// Concat - Merge two arrays
let number_to_concat = [10, 20, 30, 40];
let fruits_to_concat = ["Apple", "Orange", "Banana", "Strawberry", "Mango"];

let concat_arr = number_to_concat.concat(fruits_to_concat);
console.log(concat_arr);

let concat_arr1 = fruits_to_concat.concat(number_to_concat);
console.log(concat_arr1);


// 2D Arrays - Array of Arrays, Use Row number first then Columns number
//             0, 1, 2 Columns
let aar_2d = [[1, 2, 3] ,   // 0 Row
              [4, 5, 6] ,   // 1 Row
              [7, 8, 9]];   // 2 Row
console.log(aar_2d);
console.log(aar_2d[0][0]);
console.log(aar_2d[1][2]);
console.log(aar_2d[0][5]);


// 3D Arrays - Array of Arrays of Arrays, use [], arrays are stored in unicode (alphabetical order)
            // 0, 1, 2 Columns
let aar_3d = [
                [
                    [1, 2], [3, 4]      // treat this like a 2D array
                ],                       // 0 Row
                [
                    [5, 6], [7, 8]      // 1 Row
                ],
             ];                         // 2 Row
console.log(aar_3d);
console.log(aar_3d[0][0][0]);
console.log(aar_3d[1][2]);
console.log(aar_3d[0][5]);


// Object - Collection of key-value pairs, use {}, objects are not stored in 1 specific order
let person = {
    name: "Alex",
    age: 30,
    city: "Indy"
};
console.log(person);

let studentObj1 = {
    name: "William",
    age: 30,
    isEnrolled: true
};
console.log("Student Details: ", studentObj1);
console.log("Student Details: ", studentObj1.name); // Dot Notation is the Industry Standard

let arr = [10, 20, 30];
console.log(arr.length); // length is property of array
console.log(arr);
console.log("Student age: ", studentObj1["age"]); // Bracket Notation is NOT Industry Standard but does the same thing as line 196

// Update info
studentObj1.age = 100;
console.log("Updated age: ", studentObj1.age);

// Add New Property
studentObj1.grade = "A+++"
console.log("Added New Property of Grade: ", studentObj1.grade);

// Delete Property
delete studentObj1.isEnrolled;
console.log("Deleted isEnrolled Property: ", studentObj1);

// Nested Object - something BETWEEN something else
let classroomObj1 = {
    roomNumber: 252,
    students: {
        student1: {name: "Abe", age: 45},
        student2: {name: "Buzz", age: 40}
    }
};
console.log("Classroom details: ", classroomObj1);
console.log("Student details: ", classroomObj1.students);
console.log("Student1 details: ", classroomObj1.students.student1);
console.log("Student2 age: ", classroomObj1.students.student2.age);



// Loops
console.log("------------------ For Loop Section ------------------");

for(let i=0; i<10; i++) { // Start Condition; Stop Condition; Update Condition
    console.log("iteration: ", i);
}

for(let i=0; i<10; i++) {
    console.log("New iteration: ", i++);
}

// i = 0
// i+1+1 = 2
// i+1+1 = 4
// i+1+1 = 6
// i+1+1 = 8

// Add the numbers 0 to 9 together
let total = 0

for(let i=0; i<10; i++) {
    total = total + i;
    console.log("Newest iteration: ", total);
}
console.log("total: ", total);


console.log("------------------ For Loop Section with J ------------------");
let j = 1;
for(j=1; j<=10; j++){
    console.log("J iteration", j++);
}

// Nested Loop
console.log("------------------ For Loop Section with I*J ------------------");
for(let i=1; i<10; i++) {
    for(j=1; j<=10; j++) {
        console.log(i, "*", j, "=", i*j);
    }
    console.log("------ End of Inner J Loop Number", i, "------")
}


// While Loop, if condition is not met will NOT be done even once
console.log("------------------ While Loop Section ------------------");

let k = 1;
while(k < 3){
    console.log("K while iteration", k);
    k++;
}

let l = 10;
while(l%10 == 0 && l <= 100){
    console.log("L while iteration", l);
    l+=10;
}


// Do White Loop, will always be done once
console.log("------------------ Do While Loop Section ------------------");
let m = 0;
do{
    console.log("M do while iteration", m);
    m++;
}while(m<10);


// Conditional Statements:
console.log("------------------ if-else Conditional Statement Section ------------------");
// if-else Conditional Statement
let score = 80;

if(score >= 90){
    console.log("Grade A");
} else {
    console.log("Grade B");
}

score =65;
if(score >= 90){
    console.log("Grade A");
} else if(score >= 80){
    console.log("Grade B");
} else if(score >= 70){
    console.log("Grade C");
} else {
    console.log("Grade D");
};


// switch-case Conditional Statements
console.log("------------------ switch-case Conditional Statement Section ------------------");

let day = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}

// Multiple Choice section is 20 questions in 30 minutes
// Debugging section 10 question in 25 minutes
// Problem Solving section is 1 question in 15 minutes
// Create You section is 2 questions in 20 minutes
