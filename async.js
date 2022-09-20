// copy each sample in js sandbox and then run:
// sample 1

setTimeout(function(){
    console.log('执行了回调函数');
}, 3000)
console.log('主函数');

// 我们必须这样操作才能保证顺序正确
// 生成一个回调地狱

// sample 2
setTimeout(function() {
    console.log('first');
    setTimeout(function(){
        console.log('second');
        setTimeout(function(){
            console.log('three');
        }, 1000)
    }, 1000)
}, 1000)

// sample 3
let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
  });
  
  promise.then(function() {
    console.log('resolved.');
  });
  
  console.log('Hi!');
  
  // Promise
  // Hi!
  // resolved

// sample 4
function timeout(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms, 'done');
    });
  }
  
  timeout(100).then((value) => {
    console.log(value);
  });

// sample 5
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
// resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

// Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。

function fn(str) {
    var p = new Promise((resolve, reject) => {
        var flag = true;
        if(flag) {
            resolve(str) //返回str给p赋值
        }else {
            reject('操作失败') //返回error给p赋值
        }
    })
    return p;
}

async function test() {
    var res1 = await fn('first'); 
    var res2 = await fn('senond');
    var res3 = await fn('threee');

    console.log(res1, res2, res3);
}

test()

//输出
// first senond threee
  
