

// setTimeout(displayMessage, 5000)


// setTimeout(function displayMessage(){
//     console.log('time up!!!!!')
// }, 5000)


// setInterval(function(){
//     console.log('a second has passed')
// }, 3000)

//countdown timer
// let time = 10;

// let id = setInterval(function() {
//     time -= 1
//     console.log(time)
//     if (time ==0){
//         console.log('time up!!!!')
//         clearInterval(id)
//     }
// }, 1000);



// function transact(transactionID, time,callback){
//     setTimeout(()=>{
//         console.log('transaction id is : ' + transactionID + ' is complete')
//         callback()
//     },time)


// }

// function allTrans(){
//     transact('1', 4000)
//     transact('2', 1000)
//     transact('3', 2000)
       
// }

// function transact(transactionID, time){
   
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('transaction id is : ' + transactionID + ' is complete')
//            resolve()
//             },time)
//     })

// }



// function allTrans(){
//    transact(1,3000)
//    .then(()=>transact(2,1000))
//    .then(()=>transact(3,2000))
// }

// allTrans()


//Bank Transaction

// let balance = 1000


// function validate(){
//     let username = 'admin'
//     let password = 'admin'

//     return new Promise((resolve ,reject) =>{
//        if (username === 'admin'  && password === 'admin' ){
//         resolve(balance)
//     }
//     else{
//         reject('invalid credentials')
//     }
// })
// }

// function withdraw(){
//     let withdrawAmount = 9200

//     return new Promise((resolve,reject) =>{
//         if(balance>withdrawAmount){
//             balance-=withdrawAmount
//             resolve(balance)
//         }else{
//             reject('Insuffient funds')
//         }
//     })
// }

// validate()
// .then((balance)=>{
//     withdraw()
//     .then((balance) => console.log('the new balance is: ' + balance))
//     .catch((message) => console.log(message))
// })
// .catch((message)=> console.log(message))
   