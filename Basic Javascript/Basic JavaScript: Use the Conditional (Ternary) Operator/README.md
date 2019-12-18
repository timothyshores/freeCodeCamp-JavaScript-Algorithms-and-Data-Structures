# Basic JavaScript: Use the Conditional (Ternary) Operator

The _conditional operator_, also called the _ternary operator_, can be used as a one line if-else expression.

The syntax is:

`condition ? statement-if-true : statement-if-false;`

The following function uses an if-else statement to check a condition:

```
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

This can be re-written using the `conditional operator`:

```
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
```
