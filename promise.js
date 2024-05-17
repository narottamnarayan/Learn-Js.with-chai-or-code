// fetch("http://something.com").then().catch().finally()

const promiseone = new Promise(function (resolve, reject) {
    // do  an async task
    //DB call, cryptography, network
    setTimeout(function () {
      console.log("Async task is done");
    }, 1000);
  });
  
  promiseone.then(function () {
    console.log("promise consumed");
  });
  