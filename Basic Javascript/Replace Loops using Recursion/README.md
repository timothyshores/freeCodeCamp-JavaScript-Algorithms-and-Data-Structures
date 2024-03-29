Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the elements from `0` to `n` inclusive in an array to create the product of those elements. Using a `for` loop, you could do this:

```
  function multiply(arr, n) {
    var product = arr[0];
    for (var i = 1; i <= n; i++) {
        product *= arr[i];
    }
    return product;
  }
```

However, notice that `multiply(arr, n) == multiply(arr, n - 1) * arr[n]`. That means you can rewrite `multiply` in terms of itself and never need to use a loop.

```
  function multiply(arr, n) {
    if (n <= 0) {
      return arr[0];
    } else {
      return multiply(arr, n - 1) * arr[n];
    }
  }
```

The recursive version of `multiply` breaks down like this. In the base case, where `n <= 0`, it returns the result, `arr[0]`. For larger values of `n`, it calls itself, but with `n - 1`. That function call is evaluated in the same way, calling `multiply` again until `n = 0`. At this point, all the functions can return and the original `multiply` returns the answer.

**Note:** Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.