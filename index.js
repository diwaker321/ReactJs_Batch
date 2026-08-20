// callback
// test case

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

// const getpayment = new Promise((resolve, reject) => {
//     //logic
// //   let success = true;
// //   if (success) {
// //     resolve("Payment done");
// //   } else {
// //     reject("Got an error, please try again later");
// //   }
//     setTimeout(()=>{
//         resolve("payment has been done")
//     },3000)
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

// promise chaining and callback hell diff. 
//hooks
