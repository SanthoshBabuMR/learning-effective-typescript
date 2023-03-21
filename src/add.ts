// ./node_modules/.bin/tsc ./src/add.ts  -> compiles without errors
// ./node_modules/.bin/tsc --noImplicitAny ./src/add.ts --allowJs  -> errors
// with tsc, use --allowJs, to work '.js' extension
function add(a, b) {
  return a + b;
}
add(10, null);
