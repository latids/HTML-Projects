// document.getElementById("change").addEventListener("click",change);

// function change(){

//     const xhr = new XMLHttpRequest();

//     xhr.open("GET","https://v6.exchangerate-api.com/v6/4d567e0779dd954335e241b7/latest/USD");

//     xhr.onload = function() {
//         if (this.status === 200) {
//             const response = JSON.parse(this.responseText);
//             if (response.rates && response.rates.EUR) {
//                 const rate = response.rates.TRY;
//                 const amount = Number(document.getElementById("amount").value);
//                 document.getElementById("tl").value = amount * rate;
//             } else {
//                 console.log("TRY rate not found in the response.");
//             }
//         }
//     };
//     xhr.send();
// }

// const things = ["thing 1","thing2","thing 3"];

// things.forEach(function(things){
//     console.log(things);
// })

// document.getElementById("btn").addEventListener("click",function(){
//     console.log("click here");
// });

// function process1(callback){
//     setTimeout(function(){
//         console.log("process 1");
//         callback();
//     },2500);
// }
// function process2(){
//     setTimeout(function(){
//         console.log("process 2");
//     },2000);
// }
// process1(process2);

// const things = ["thing 1","thing2","thing 3"];

// function addThing(thing,callback){

//     setTimeout(function(){
//         things.push(thing);
//         console.log("added");
//     callback();
//     },2000);
// }
// function getAllThings(){
//     setTimeout(function(){
//         things.forEach(function(thing){
//             console.log(thing);
//         },1000)
//     })
// }
// addThing("thing 4",getAllThings)

// let i = 0;
// let value = setInterval(function(){
//     i++;
//     console.log("numbr:",i);

// },555);
// document.getElementById("btn").addEventListener("click",function(){
//     clearInterval(value);

// });

// function getData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof data === "string") {
//         resolve(data);
//       } else {
//         reject(new Error("use a string value"));
//       }
//     }, 4000);
//   });
// }

// getData("hehe")
//   .then((response) => console.log("added value " + response))
//   .catch((err) => console.log(err));

// function addSum(number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof number === "number") {
//         resolve(number + 5);
//       } else {
//         reject(new Error("add a number"));
//       }
//     }, 2500);
//   });
// }
// addSum(500).then((response) => console.log("added num " + response)).catch((err) => console.log(err));

// function getTextFile(){ // Text Dosyası

//     fetch("example.txt")
//     .then(response => response.text())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// }
// function getJsonFile(){

//     fetch("example.json")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// }
// function getExternalAPI(){
//     fetch("https://api.exchangeratesapi.io/latest")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.rates.USD);
//     })
//     .catch(err => console.log(err));
// }
// // getTextFile();
// // getJsonFile();
// getExternalAPI();

// class Request {
//   get(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((err) => reject(err));
//     });
//   }

//   post(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       })
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((err) => reject(err));
//     });
//   }

//   put(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: "PUT",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       })
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((err) => reject(err));
//     });
//   }
//   delete(url) {
//     return new Promise((resolve, reject) => {
//       fetch("https://jsonplaceholder.typicode.com/albums/1", {
//         method: "DELETE",
//       })
//         .then((response) => resolve("data deleted"))
//         .catch((err) => reject(err));
//     });
//   }
// }
// const request = new Request();

// request
//   .get("https://jsonplaceholder.typicode.com/albums")
//   .then((albums) => {
//     console.log(albums);
//   })
//   .catch((err) => console.log(err));

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:52,title:"sup"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err));

// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:35,title:"john does downfall"})
// .then(album => console.log(album))
// .catch(err => console.log(err));

// request.delete("https://jsonplaceholder.typicode.com/albums/79")
// .then(message => console.log(message) )
// .catch(err => console.log(err));

// async function test (data){
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("a data");
//         },3500)
//     })
//     let response = await promise;
//     return response;
// }

// test("hallo").then(response => console.log(response));

// async function testData(data){
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(typeof data === "string"){
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("pls add a string type data"));
//             }
//         },3000);
//     });
//     const response = await promise;
//     return response;
// }
// testData(12).then(data => console.log(data)).catch(err => console.log(err));

// async function getCurrency(url){
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

// getCurrency("https://api.exchangeratesapi.io/latest").then((hehehe) => console.log(hehehe));

// async
class Request {
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const responsedata = await response.json();

    return responsedata;
  }

  async delete(url) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1",
      {
        method: "DELETE",
      }
    );
    return "data deleted";
  }
}
const request = new Request();

request.get(  "https://v6.exchangerate-api.com/v6/3f9fa32b79ec351408b6aa9f/latest/").then(currency => {
    console.log(currency);
}).catch(err => console.log(err));

// request.post("https://jsonplaceholder.typicode.com/albums", {userId:3,title:"helo"}).then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err));

// request.put("https://jsonplaceholder.typicode.com/albums/19", {userId:19,title:"hello my"})
// .then(album => console.log(album)).catch(err => console.log(err));

// request
//   .delete("https://jsonplaceholder.typicode.com/albums/1")
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err));




