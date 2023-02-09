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
