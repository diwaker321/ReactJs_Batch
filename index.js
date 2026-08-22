// callback
// test case

// import { useEffect, useState } from "react";

// login --> order ---> payment ---> invoice
// diwaker
//order id
//paymentdetials
//details

//callback hell
//maintain
//debug
//dom
//read
//chainbreak

//something in js
// getUser --> 2sec
// res--> success / failure

//getorder --> 3s

//checkpoints .. data .. controlled manner function

//promise ---> object---> represent eventual complition / failure -->function

// const getpayment = new Promise((resolve, reject , orderid) => {
//     console.log(orderid);

//     //logic
//   let success = true;
//   if (success) {
//     const paymentdetials = {
//         name:"diwaker",
//         items:["shoes" , "bags" , " phone"],
//         totalPrice :12000
//     }
//     resolve(paymentdetials)
//   } else {
//     reject("Got an error in payment method, please try again later");
//   }
//     // setTimeout(()=>{
//     //     resolve("payment has been done")
//     // },3000)
// });

//how to consume your promise

// .then() .catch()
// getpayment
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// promise 3 states
// pending
// rejected
// fullfilled

// getUser(function(user){
//     getorder(user ,function (orderid){
//         getpayment(orderid , function (paymentdetials){
//             getinvoice(paymentdetials , function(details){
//                 console.log(details);
//             })
//         } )
//     } )
// })

// getUser().then((user) => {
//     console.log(user);

//    return getorder(user)
// }).then((orderid)=>{
//     console.log(orderid);

//     return getpayment(orderid)
// }).then((paymentdetials)=>{
//     console.log(paymentdetials);

//     return getinvoice(paymentdetials)
// }).then(()=>{
//     console.log("finished");
// }).catch((error)=>{
//     console.log(error);
// })

// function getUser() {
// //   setTimeout(()=>{
// //       return Promise.resolve("Diwaker")
// //   },2000)
// //   return Promise.resolve("Diwaker");
// }

// function getorder() {
//   return Promise.resolve("bags");
// }

// function getpayment() {
//   return Promise.resolve("2000");
// }

// async function getData() {
//   try {
//     const username = await getUser();
//     const orderitems = await getorder();
//     const paymentamount = await getpayment();

//     console.log(username);
//     console.log(orderitems);
//     console.log(paymentamount);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getData();

// getUser()

// getUser().then((user)=>{
//     console.log(user);
//     return getorder()
// }).then((selectedOrder)=>{
//     console.log(selectedOrder);
//     return getpayment()
// }).then((payemntAmount)=>{
//     console.log(payemntAmount);
// })

// h.w
// Promise

//async and await keyword

// fetch  -->promise
// .then .catch
// api call
// data r

// promise chaining and callback hell diff.
//async and await
//api calling
//hooks
// useState and useEffect

async function getdata() {
  const data = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=k",
  );
  const res = await data.json();
  console.log(res);
}

getdata();
