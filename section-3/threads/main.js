const { Worker } = require('worker_threads');

new Worker('./thread_1.js')
new Worker('./thread_2.js')
new Worker('./thread_3.js')
