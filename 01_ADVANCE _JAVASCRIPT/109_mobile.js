// //Default Export Class
// export default class Nokia
// {
//     volumeup()
//     {
//         console.log("High Volume..");
//     }
// }

// // export default Nokia; //you can also export like this 

//default export Function
// export default function show()
// {
//     console.log("This is function export Module..")
// }

//default export variable
// const a = "OBAID";
// export default a;

//=================Named Export===================================//

// export named class

// export class Nokia
// {
//     volumup()
//     {
//         console.log("High Volume");
//     }
// }
// export {Nokia};  //you can also export class like this

//Named export Function
// export  function show()
// {
//     console.log("This is function naemd export Module..")
// }

//Named Export variable
//  var a = "OBAID";
//  export var a;

//============================Multiple named export=================================//


//  class Nokia
// {
//     volumup()
//     {
//         console.log("High Volume");
//     }
// }


//  function show()
// {
//     console.log("This is function naemd export Module..")
// }

//  export var a = "OBAID";

//  export {Nokia,show};   //export class and function


//=========Default and Named export ========================//
class Nokia
{
    volumeup()
    {
        console.log("High Volume")
    }
}

function show()
{
    console.log("This is show function");
}

export var a = 100;

export default Nokia;
export {show};