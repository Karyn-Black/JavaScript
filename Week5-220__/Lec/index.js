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


// 3D Arrays - Array of Arrays of Arrays, 
//             0, 1, 2 Columns
let aar_3d = [
                [
                    [1, 2], [3, 4]      // treat this like a 2D array
                ]                       // 0 Row
                [
                    [4, 5], [6, 7]      // 1 Row
                ]
                [
                    [7, 8], [9, 10]
                ]
             ];                         // 2 Row
console.log(aar_3d);
console.log(aar_3d[0][0][0]);
console.log(aar_3d[1][2]);
console.log(aar_3d[0][5]);


// Object - Collection of key-value pairs
let person = {
    name: "Alex",
    age: 21,

};
