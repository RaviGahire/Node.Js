const buffer = require('node:buffer');

console.time('Buffer.alloc');
for (let i = 0; i < 100000; i++) {
  const buffer1 = buffer.Buffer.alloc(1024); // 1KB
}
console.timeEnd('Buffer.alloc');

console.time('Buffer.allocUnsafe');
for (let i = 0; i < 100000; i++) {
  const buffer1 = buffer.Buffer.allocUnsafe(1024); // 1KB
}
console.timeEnd('Buffer.allocUnsafe');
