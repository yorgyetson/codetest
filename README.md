# engineering-tests-node

## Instructions
Use the contents of `data.js` to complete this test. 

1. Initialize a node application.
1. In your main entry point (index.js or otherwise) import or require the contents of `data.js`.
1. Write a function that satisfies the below criteria:
    1. Assume the elements in the first array (firstNames) correspond to the elements in the second array (personnel) and share the same order. 
    1. Write a function that takes the imported arrays as arguments and merges them together, producing two new arrays. The output arrays should consist of objects containing first names from the first input array merged with their corresponding objects in the second array. The first output array should be of students and the second output array should be of non-students. 
    1. In the case of missing or incompatible data, substitute the string "pardon?" as the value. 
    1. The students array should be sorted alphabetically by first name in ascending order. 
    1. The non-students array should be sorted alphabetically by last name in descending order.
    1. Your code should both export your function and print its result to the console.
    1. See `example_output.json` for what's expected. This is just an example of the structure expected. You do not need to convert your output to valid json.
    1. You are free to use (or not use) any external dependencies via npm or otherwise to complete this test.
1. Install a testing framework and write unit tests to sufficiently test your function. You are free to use whatever testing framework you like but you are required to demonstrate 100% code coverage. We recommend using `jest` as it has built in code coverage functionality. Note - although we recognize code coverage as one tool among many and generally discourage its fetishization, this test is straight forward enough to make 100% coverage a reasonable requirement.
1. Push your code to a public git repo and send us the link.

## Additional Requirements
+ The function should be able to handle unexpected data without error.
+ No matter what is given (or not given) as input, the function should at the very least output an array
of two arrays.
+ All sorting and grouping should be case-insensitive.
