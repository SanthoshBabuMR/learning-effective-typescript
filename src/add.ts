// ./node_modules/.bin/tsc ./src/add.js -> compiles without errors
// ./node_modules/.bin/tsc --noImplicitAny ./src/add.js -> errors
function add(a, b) {
  return a + b;
}
add(10, null);
