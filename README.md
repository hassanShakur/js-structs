# Data Structs JavaScript

## Big O Notaion

Relationships between inputs to a function and its runtime, rep `O(f(n))` and is worst case scenario. `f(n)`could be linear`n`, quadratic `n^2`, constant `1` etc.

### Time Complexity

#### Big O Rules

1. Reduce constants to `1`.
2. Exclude smaller terms in the expression.
3. Arithmetic ops are constant.
4. Accessing elements in `array` or `object` by `index` or `key` is constant.
5. Complexity of a loop is its length times whatever's happening inside it.

### Space Complexity

Main focus is on `auxilliary space complexity` which is space required by the algorithm only, not including the inputs to the program.

Some rules:

1. `Primitives` are constant space (`bools`, `null`, `undefined`, `nums`).
2. `String` of lengh `n` requires `O(n)` space.
3. `Reference` types where `n` is length for `arrays` or keys for `objects`, `O(n)` space is used.

### Performance of Arrays & Objects

In objects, `insertion`, `removal` and `access` follow `O(1)`. `Searching` uses `O(n)` - that is searching for a value and not the key. Objects are best when ordering isn't important.

For object `methods`, ([Object.method]), `.keys`, `.values`, `.entries` have a `O(n)`. `.hasOwnProperty` has a `O(1)`.

In arrays, `access` is `O(1)`, `search` `O(n)`. `Insertion` and `deletion` depends on the location to do the operation. Adding & removing to the end is `O(1)`, and to the beginning is `O(n)` due to re-indexing of the rest of elements. Therefore `push` & `pop` are faster than `shift` & `unshift`.

`Concat`, `slice` & `splice` use `O(n)`, and `sort` uses `O(nlogn)`. All array methods use `O(n)`.

## Common Problem Solving Patterns

### 1. Frequency Counter

Makes use of `objects` or `set` to collect values or frequencies of occurance of values in 2 items or arrays to be compared eg anagrams. Helps avoid `O(n^2)` when dealing with arrays and strings by offering `O(n)`.

[Frequency counter example](./02-Solving-Patterns/FrequencyCounter/anagram.js)

### 2. Multiple Pointers

2 or more pointers from either sides of say an array to find a patters. Eg given a sorted array with negatives and positives and the 2 that sums up to 0 is needed. Therefore if sum of pointers is -ve, add 1 to the leftmost. Add 1 to the rightmost otherwise & if 0 return true.

[Multiple pointers example](./02-Solving-Patterns/MultiplePointers/uniqueVals.js)

### 3. Sliding Window

Let the window slide. Instead of redoing similar calculations, find out what is changing in a sequence and do only that calculation. Example is finding the largest sum from a sequence of n consecutive digits in an array.

[Sliding window example](./02-Solving-Patterns/slidingWindow.js)

#### 4. Divide & Conquer

We'll see about this :)

## Searching Algorithms

1. Linear Search
   Similar to the ones used in `indexOf()`, `includes()` and the likes. Takes in sorted or unsorted array and loops item to item to find the target.

   [Sample](./04-Search-Algos/linearSearch.js)

2. Binary Search
   Takes a `sorted` array & divides & conquers by picking a pivot - mostly the middle - and determining where the target falls in the 2 arrays. Recursion takes over.

   [Sample](./04-Search-Algos/binarySearch.js)

## Sorting Algorithms

Starting with the inbuilt `sort()`, Passing any array - of numbers or strings - will return the sorted array based on the unicodes. To sort numbers, pass a callback as a parameter. If the callback returns `positive`, the sorting will be in `ascending`. For strings, you can order by length by comparing the lengths and returning as you need.

Check out an [Example](./05-Sorting-Algos/Basics/inbuiltSort.js)

### 1. Elementary / Quadratic Sorting Algorithms

Are the basics with worst and average time complexities of `O(n^2)`. `Insertion` & `Bubble` sorting has a best case of `O(n)` while `Selection` is at `O(n^2)`. They all take constant space.

#### Bubble Sort

Works by swapping adjacent digits if the left is greater than the right. In the first round, the largest digit is taken to the end. The algorithm repeats this until the entire array is sorted or no swaps are made if that is being checked.

Check out an [Example](./05-Sorting-Algos/Basics/bubbleSort.js)

#### Selection Sort

A variable keeps track of the index of the minimum value in the array. This min starts off as the first array element and whenever a new minimum is found while parsing the array, the index of the minimum var is updated. On reaching the end of the array, the `minimum` one is `swapped` with the `first element` in the array.
Then the cycle continues this time starting at the second array element. This might only be superior to `bubble sort` when the number of swaps is of importance and should be minimized.

Check out an [Example](./05-Sorting-Algos/Basics/selectionSort.js)

#### Insertion Sort

Divides the array into 2 parts - the sorted and the unsorted - then loops over the unsorted section and picks each element placing it in its correct position in the sorted part of the array. It therefore starts by taking the `second` element and compares it with the one before and insert where necessary then moves on to the next element. This is repeated until the array is sorted.
This algorithm is best in cases of `online algorithms` where there are new incoming values that were unknown of when the sorting began. They can just be `inserted` where needed.

Check out an [Example](./05-Sorting-Algos/Basics/insertionSort.js)

### 2. Intermediate Sorting Algorithms

Elementaries are not so good with large data sets and therefore these can improve the Big O from `O(n^2)` to `O(n log n)`.

#### Merge Sort

The concept is that an array of 0 or 1 element is already sorted. This therefore decomposes an array to smaller arrays of length 0 or 1 the `merge` them to form a new sorted array.
Recursion is of most importance in this. The code flow has the `recursive` part and the `merging function`. An array is split into `left` and `right` at the middle recursively into arrays of 1s and 0s then merged recursively again.

Check out an [Example](./05-Sorting-Algos/Intermediate/mergeSort.js)

Its Big O is `O(n log n)`. `log n` is from decomposition, i.e, decomposing an array of `8` elements to will take 3 steps, `16` will take 4 steps and so on. Therefore `2 ^ 4 = 16` (log base 2 of 16 is 4). Simple 😅. As for the `n`, in the merging function, comparison is approximately once for every item in both of the arrays being merged.
Space complexity is at `O(n)` - space to store the small arrays increases as the length of the array increases.

#### Quick Sort

Ok, the concept is similar. Divide the array to 1s but in a bit different way. Start by picking a `pivot` - doesn't matter its location - so just go with the first array element. Then go through the entire array keeping track of how many elements are smaller than this pivot. These when encountered are brought to the immediate right of the pivot. On reaching the end of the array, and having a variable holding the number of elements smaller than the pivot, the pivot is swapped that number of places such that it is in its correct position even after sorting - All smaller values are to its left.
Another pivot is choses but this time to the left of the last pivot so the left is sorted then move to the right.

Check out an [Example](./05-Sorting-Algos/Intermediate/quickSort.js)

The Big O is `O(n log n)` but can got to worst case of `O(n^2)` when the pivot is the minimum or maximum value each time. This can be avoided by not picking the first or last element as pivot and try to pick the middle or just a random one. Space complexity is `O(log n)`.
