//Default Import Class
// import Nokia from "./109_mobile.js";
// const n = new Nokia();
// n.volumeup();

//defult import function

// import  show  from "./109_mobile.js";
// show();

//default import variable
// import a from "./109_mobile.js";
// console.log(a);

//========Name Import=======================//

//named import class

// import { Nokia } from "./109_mobile.js";
// const n =new Nokia();
// n.volumup();

//Named import Function

// import { show } from "./109_mobile.js";
// show();

//Named Export Variable
// import { a } from   "./109_mobile.js"
// console.log(a);

//================Multiple Named Import=====================//

// import { Nokia,show,a } from "./109_mobile.js";
// var n =new Nokia();
// n.volumup();

// show();

// console.log(a);


//==============Mlutiple Named Import with * ====================//

// import * as device from "./109_mobile.js";  //where device is alias name
// var n =new device.Nokia();
// n.volumup();

// device.show();

// console.log(device.a)

//==========Default and Named Import======================//

import Nokia , {show,a} from "./109_mobile.js";
var n =new Nokia();
n.volumeup();

show();

console.log(a);