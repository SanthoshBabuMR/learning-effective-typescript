function add(a, b) {
  return a + b;
}
add(10, null);
/*
 * ./node_modules/.bin/tsc ./src/add.ts --noEmit
 * - compiles without errors
 *
 * ./node_modules/.bin/tsc --noImplicitAny ./src/add.ts --noEmit
 * - errors
 *
 * with tsc,
 * use --allowJs, to work '.js' extension
 * use --noEmit, to skip tsc from producing '.js' compiled file
 **/
