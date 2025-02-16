function foo(a, b) {
  if (a === null || b === null) {
    return null; //This line is problematic
  }
  return a + b;
}
console.log(foo(null, 1)); // null
console.log(foo(1, null)); // null
console.log(foo(1, 2)); // 3