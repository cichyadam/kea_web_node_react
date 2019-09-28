function explainProblem(){
    console.log("Please help me, my phone does not work.");
}
const personalInfo = {
    "name" : "Adam",
    "phone" : 66600666
}

function helpDesk(personalInfo,explainProblem){
    console.log("Hi what is your personal info?");
    personalInfo;
    setTimeout(function () {  
        explainProblem();
    },3000)
    
    // callTheDB(); async function here

    // 1. execute this immediately

    // 2. wait for it and then execute this line 

}

// helpDesk(personalInfo, explainProblem)

// new Promise(function(resolve , reject){
//     try{
//         setTimeout(function(){
//             resolve("I resolved after 4 seconds.");
//         },4000)
//     } catch (error){
//         reject(error);
//     }
// }).then(function (message) {
//     console.log(message);

// });


(function myPromise() {

    new Promise(function (resolve , reject) {
        try {
            setTimeout(() => {
                resolve("I resolved after 5 seconds.");
            }, 5000);
        } catch (error) {
            reject(error);
        }
    }).then(function (message) {
        console.log(message);
    })

}());

