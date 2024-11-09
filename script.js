

// 1 about functions


// function sum(a,b){  // the a,b are called fun parameters bcz they are used in parathese
//    return total = a + b;
// }

// sum(11,22); //the value inside parathese called arguments bcz these are used while calling the fun

// // putting this fun into varaible 
// let result = sum(11,22)
// console.log('the sum of two numbers is ' + result);

// anonymous function 

// let funexp = function(a,b){
//     return total = a + b;
// }

// let sum = funexp(12,122);

// console.log('the sum of two numbers is' + sum);



// 2 arrays we use them when we want to add multiple values in one variable 

// let freinds = ['hassnian', 33, 'kk', 'sfsdfsdf'];

// console.log(freinds.length);
// console.log(freinds[freinds.length -1]);

// using loop to navigate 


// let freinds = ['hassnian', 33, 'kk', 'sfsdfsdf'];


// // these are both same ways 

// for(let i = 0; i<freinds.length; i++){
//     console.log(freinds[i]);
// }

// for (options in freinds){ //in will give index of array
//     console.log(options);
// }

// for (options of freinds){ //of will give values of array
//     console.log(options);
// }

// now going to use forEach loop

// let freinds = ['hassnian', 33, 'kk', 'sfsdfsdf'];

// // by using forEach we can get value index whole array anything inside array 

// freinds.forEach(function(element, index , array){
//     console.log(element+ "index : " + index)
// })


// indexOf

// let freinds = ['hassnian', 33, 'kk', 'sfsdfsdf', 'iam here'];

// console.log(freinds.indexOf('kk',1)) //this , 4 means it will check after fourth index that is there any kk present or not if yes it will give that index if not it will return -1

// lastIndexOf 

// let freinds = ['hassnian', 33, 'kk ', 'sfsdfsdf', 'iam here', 'good'];

// console.log(freinds.lastIndexOf('kk', 3));

// the indexof and lastIndexOf both are same but indexof will go forward from 0 to forward and lastIndexOf will go backward from last to back 

// includes

// let freinds = ['hassnian', 33, 'kk', 'sfsdfsdf', 'iam here', 'good'];

// console.log(freinds.includes('kk', 3)); //it will check kk is present or not and it searches forward as indexof


// now for filteration 

// find method 

// let prices = [200,300,344, 366,500,600,800];

// let cost = prices.find( (currentval) =>{
//     return currentval < 500;
// } )

// console.log(cost);

// console.log( prices.find( (currentval) => currentval < 500)); //it will give the value and if not present then it will give undefined

// findindex 

// console.log( prices.findIndex( (currentval) => currentval < 500)); //it will return index if present if not  it will give -1


// filter method return all satisfied elements in a new array 


// let prices = [200,300,344, 366,500,600,800];

// let newprice = prices.filter((elm, index) =>{
//     return elm < 500;
// });   //if contdition won't satisfied it will give and empty array

// console.log(newprice);


// sort method 

// let months = ['jan', 'feb', 'aug', 'june'];

// console.log(months.sort()); //it will sort the array like this one by alphabets 

// using puch and unshit mehton 

// let animals = ['cat', 'lion', 'hen', 'sheep'];

// animals.push('chicken'); //push will add this in the end of array 
// console.log( animals);

// animals.unshift('chicken'); //and unshift will add this in the start of array 
// console.log(animals)

// console.log(animals);
// console.log(animals.pop()); //it will remove last element and return it
// console.log(animals)

// console.log(animals);
// console.log(animals.shift()); //it will remove first element and return it
// console.log(animals)

// splice method 

// let result = animals.splice(animals.length, 0 , 'girraffe'); it will add giraffe in the end
// console.log(animals);

// console.log(result) //it will return empty array


// find the index then delete it and then update the same index with new one 

// let animals = ['cat', 'lion', 'hen', 'sheep'];

// let indexofanimal = animals.indexOf('lion'); //this will find the index of lion

// // if(indexofanimal != -1){ //this will check if it is present or not = -1 
//     let update = animals.splice(indexofanimal,1,'Lionn'); //then start from that index e.g. indexofanimal , and delete that index , and then update that same index with Lionn
//     console.log(animals);
// }
// else{    
//     console.log('no such data found');
// }

// let month = ['jan', 'march', 'feb'];

// let indexof = month.indexOf('march');

// if(indexof != -1){
//     let newmonth = month.splice(indexof,1,'March')
//     console.log(month);
// }
// else{
//     console.log('such data not found');
// }

 

// deleting element 

// let animals = ['cat', 'lion', 'hen', 'sheep'];

// let indexofanimal = animals.indexOf('lion'); //this will find the index of lion

// if(indexofanimal != -1){ 
//     let update = animals.splice(indexofanimal,Infinity); //it will delete all element after cat 
//     console.log(animals);
//     console.log(update);
// }
// else{
//     console.log('no such data found');



// now map and reduce method

// let array1 = [2,5,8,10,23];

// map return a new array containing the result of a  calling function on each element 

// let newarray = array1.map((curelm, index, array) =>{
//     return curelm > 9;
// })
// console.log(array1);
// console.log(newarray);

// let newarray = array1.map((curelm,idnex,arr) =>{
//     return `the index no = ${idnex} and the value is ${curelm} belong to ${arr}`;
// });
// console.log(newarray);


// finding the square root 

// let array1 = [25,36,49,64];

// let sqrt = array1.map((curelm) => Math.sqrt(curelm));

// // both are same way 
// // let sqrt = array1.map(() =>{
// //     return Math.sqrt(curelm);
// // });

// console.log(sqrt);

// multiplying 2 by each element and return those are greater then 10
// // we will use chaining for it 

// let arr = [2,4,5,6,7];

// let newarray = arr.map((curelm) => curelm * 2).filter((curelm) => curelm > 10).reduce((accumulator, curelm) => accumulator += curelm);

// both way are same 

// let newarray = arr.map((curelm) =>{
//     return curelm * 2;
// }).filter((curelm) =>{
//     return curelm > 10
// }).reduce((accumulator, curelm) =>{
//     return accumulator += curelm;
// });


// console.log(newarray);


// reduce method 


// it is used to convert 3d or 2d array into a single dimendional array 

// the reduce method execute a reducer function ( that you provide)
// on eack element of array resulting in a single output value 

// the reducer function takes four arguments

// accumulater it used as to store the elements like container
// current value;
// current index;
// source  array;

// let arr = [3,4,5,6];

// let sum = arr.reduce(( accumulator,curelm) =>{
//     debugger;
//     return accumulator += curelm;
// },10);
// console.log(sum);


// flatting the array

// it is not working

// let arr = [
//     ['zone-1', 'zone-2'],
//     ['zone-3', 'zone-4'],
//     ['zone-5', 'zone-6']
// ];

// let flatarr = arr.reduce((accm, currval) =>{
//     return accm.concat(currval);
// })
// console.log(arr);



// now strings 

// a js string is zero or more charators written in qoutes

// javascript string used to manipulating and storing text 
// you can use single or double qoute

// strings can be created as primitive,
// from strings literal , or as object using string constructor

// let myname = 'Hasnain ali';
// let ytname = 'exploration of stoicism';

// console.log(myname);
// console.log(ytname);

// // to check the length

// console.log(ytname.length);


// escape sequence charactor 

// let str = 'as we know that we have to survive in \'pakistan\' untill we can move'
// let str = 'as we know that we have to survive in "pakistan" untill we can move'
// console.log(str);


// finding a string into a string 

// let str = "explorations of stoic";
// console.log(str.indexOf('s', 12));

// let str = "explorations of stoic";

// console.log(str.lastIndexOf('s', 18)); //it will give the s of stoic bcz it is moving backward from 18 stoic's s first but if it will be indexof then it will give exploration's bcz it will go forward and explorations's s is first

// now search method in string 

// the search() method searches a string specified value and return the position of the match 

// let str = "explorations of stoic";

// let result = str.search("of");
// console.log(result);

// the search method is giving the same as above indexof was but the search method can't get second argument like search('of', 4) it won't get 4 as second argument


// extracting string parts 


// for extracting string parts we there are 3 methods

// 1 is slice(start,end)
// 2 is substring(start,end)
// 3 is substr(start,length)

// the slice method extract the string and return the extracted part into new string 


// let str = 'apple, bananaa, mango';


// let result = str.slice(0,4)
// console.log(result);

// the slice method select the element from starting index and end at given end index but slice method don't indclude the end index like in above ex e of apple is not include
// note: original array won't change 


// nagetive slicing 

// let str = 'apple, bananaa, mango';


// let result = str.slice(7,-2)
// console.log(result);

// it will start from 7 index and will go till second last as we can say -2 it will cut two elements from the end index


// challenge time 11 

// // display 280 charactore of a givien twitte set limit not more then 280 can be used 

// let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum vel, ea quidem repellat quod maiores quo nobis commodi suscipit quia fugiat repudiandae, quis voluptate? Illum fugiat aliquam distinctio exercitatione mmodi suscipit quia fugiat repudiandae, quis voluptate? Illum fugiat aliquam distinctio exercitatione mmodi suscipit quia fugiat repudiandae, quis voluptate? Illum fugiat aliquam distinctio exercitatione'

// let result = str.slice(0,280);
// console.log(result);
// console.log(str.length);


// now the substring method 

// the substring is same as slice but this one cannot accept the nagetive slicing as slice do 
// and if we add negative index then it will start from 0 index and go forward

// let str = "apple, bananaa, mango"

// let result = str.substring(7,-2);
// console.log(result);

// bcz we are using -2 so it will start from 0 and will go forward as per rule 


// now the substr 

// the substr is same as slice  but the difference is that the second element represent the length 

// let str = "apple, bananaa, mango"

// let result = str.substr(-4); //we can get direct and element form backward position
// console.log(result);

// now replace string content 

// for replace(searchfor, replacewith)

// let str = "my name is hasnain ali khokhar";

// let res = str.indexOf("hasnain");
// console.log(res);

// let result = str.replace("hasnain", "HASNAIN");
// console.log(result);

// note:
// 1: the replace method does not change the string 
// it is called on it return a new string 
// 2: by default the replace method change the first match
// j3: by default the replace method is case sensitive e.g. it check like upper case 


// now extracting string parts 

// there are three methods to extract the character in a string 

// #1 is charAt(positionn)
// #2 is CodeAt(position)
// #3 is prperty access [ ]

// the charAt method returns the character at specified position or index in a string

// let str = ' HELLO WORLD';


// it will give the element which is on 3 index 

// let result = str.charAt(3);
// console.log(result);
// console.log(str.charAt(3));


// the charCodeAt() returns the unicode of specified index in a string 
// the method return a UTF-16 code 
// ( an inetger between 0 to 65535)


//  let str = ' HELLO WORLD';



// let result = str.charCodeAt(0);
// console.log(result);
// console.log(str.charCodeAt(3));

// 11: challenge 

// the unicode of last charcter of a stringn

// let str = 'HELLO WORLD';

// let lastchar = str.length -1;
// console.log(str.charCodeAt(lastchar));

// now property access 

// let str = 'HELLO WORLD';

// console.log(str[2]); it will work like array's index so it give the element on 2index

// let myname = 'hasnain';
// let hisname = 'his';

// console.log(myname.concat( ' ',hisname)
// );
// console.log(myname + hisname);
// console.log(` ${myname} here it is best method ${hisname}`);

// let str =  '             hello world                        ';

// // it will trim all the space from starting and ending 

// console.log(str.trim());


// conveting string into array 

// string can be converted into array by using split()

// let str = 'a,a, b,c,d,e, f'

// console.log(str.split(','));  //split by comma
// console.log(str.split(' '));  //split by ' '
// console.log(str.split('|'));  //split by |


// date and time 

// for creating date in js there are 4 ways to create date object in js 

// new date ()
// new date(year, month, day, hours, minutes, seconds, miliseconds)
// it takes maximum 7 arguments 
// new date(miliseconds)
// new date( date, string)

// new date ()
// date objects are created with the new date() constructor 

// let currentdate = new Date();
// console.log(currentdate);

// // console.log(new date());
// console.log(currentdate.toLocaleString()); //this will give exact time and date no more info 
// console.log(currentdate.toString());

// Date.now() it will give the time in miliseconds form january 1, 1970 

// now using 7 arguments in js in date 

// let currentdate = new Date(2024, 7, 22, 6, 52, );
// // month argument is compulsory to pass 
 
// console.log(currentdate.toLocaleString());

// new Date(datestring) it creates a new date object from a date strring 

// let d =  new Date('august 22, 2024 06:57:33');
// console.log(d.toLocaleString());

// new date (miliseconds) creates a new date object as zero time plus miliseconds

// let d =  new Date(0);
// // let d = new Date(2149043833509);

// console.log(d.toLocaleString());

// date method 

// let currentdate = new Date();

// // how to get individual date 

// console.log(currentdate.toLocaleString());
// console.log(currentdate.getFullYear());
// console.log(currentdate.getDate());
// console.log(currentdate.getDay());
// console.log(currentdate.getMonth());

// time method 

// let curtime = new Date();

// console.log(curtime.getTime());
// console.log(curtime.getHours());
// console.log(curtime.getMinutes());
// console.log(curtime.getSeconds());
// console.log(curtime.getMilliseconds());

// how to set individual time 

// let currtime = new Date();

// // console.log(currtime.setTime());
// console.log(currtime.setHours(12));
// console.log(currtime.setMinutes(32));
// console.log(currtime.setSeconds(33));

// showing time 

// function show(){
// setInterval(() => {
    
//         let d = new Date().toLocaleString();
    
//         document.getElementById('demo').innerHTML = d;
    
// }, 1000);
// }


// 13 challenge
// practice time 

// new Date().toLocaleTimeString(); for just time
// new Date().toLocaleDateString(); for just Date
// new Date().toLocaleString(); for both



// now math object in js 

// the js math object allows you to perform mathematical tasks on numbers

// console.log(Math.PI);

// math.round returns the valuse of x rounded to it's nearest integer 

// let num = 10.2345;

// console.log(Math.round(num));

// Math.pow( x,y) returns he valuse of x to the power y

// console.log(Math.pow(2,4));
// console.log(2**4);

// math.sqrt

// console.log(Math.sqrt(81))

// Math.abs(x) returns the absolute (positive) value of x 

// console.log(Math.abs(-55));

// Math.floor() it will give exact ineger not decimal values

// console.log(Math.floor(33.4));
// console.log(Math.floor(12.4));
//
//  console.log(Math.min(12,222,-1,4)); //it will give min number 
 
//  console.log(Math.max(12,222,-1,4)); //and it will give maximum

// Math.random() will give random number from 0 to inclusive

// console.log(Math.floor(Math.random()*10));



// let heading = document.querySelector(".demo");


// function change(){
//     heading.innerHTML = "changed"
// }



// event objects 


// let button = document.getElementById('fourthway');

// let checkit = () =>{
//     alert('here it is ')
//     console.log(event);
//     console.log(event.target);
//     console.log(event.type);
// }


// button.addEventListener('click', checkit);


// GET https://icanhazdadjoke.com/

let joke = document.querySelector('#joke');
let jokebtn = document.querySelector('#jokebtn');

// this is by using now PROMISES

let setHeader = {
    headers: {
        Accept: 'Application/json'
    }
};

// let generatejoke = () =>{
//     fetch('https://icanhazdadjoke.com', setHeader)
//     .then((res) => res.json() )
//     .then((data) =>{
//         joke.innerHTML = data.joke;
//     }).catch((error) =>{
//         console.log(error);
//     });
// };

async function generatejoke() {

    try{
    let res = await fetch('https://icanhazdadjoke.com', setHeader);
    let data = await res.json();
    joke.innerHTML = data.joke;
    }catch(err){
        console.log(`the error is ${err}`);
    };
};

jokebtn.addEventListener('click', generatejoke);
generatejoke();

// now same will do by using async es8 










 

