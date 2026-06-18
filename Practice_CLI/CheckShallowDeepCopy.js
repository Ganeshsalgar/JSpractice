import data from "../Dataset/data.js";


// shallow copy

// const obj = {
//     name : "ganesh",
//     age : 23
// }

// const obj2 = obj;

// obj2.name = "Siddhi";

// console.log(obj);
// console.log(obj2);


// using spread operator make copy but shallow copy

// const obj = {
//     name : "Ganesh",
//     age : 24
// }

// const obj2 = {...obj};  // this is create only one lear of copy not nested object file copied
 
// obj2.name = "Sidhhi";

// console.log(obj);  // Ganesh
// console.log(obj2); // Siddhi



// make original copy

// const obj = {
//     name : "Ganesh",
//     age : 23
// }

// const obj2 = structuredClone(obj);

// obj2.name = "Siddhi"


// console.log(obj);
// console.log(obj2)



// let name = "Ganeshsalgar";

// console.log(name.slice(-5, -1));
// // console.log(name.substring(-2, -5));



// //console.log(globalThis);

// let a = 0;

// function outer(){

//     let count = 0;

//     const ans = function (){
//         count++;
//     }
//     return ans;
// }

// outer();



// const obj ={
//     obj1 : {
//         name : "ganesh",
//     },
//     obj2 : {
//         name : "abc",
//     },
//     obj3 : {
//         name : "def",
//     },
//     obj2 : {
//         name : "hig",
//     }
// }

// // for(const key of Object.keys())


const user = {
    id: 1,
    name: "Ganesh",
    age: 23,
    address: {
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        pincode: 411041
    },
    skills: ["JavaScript", "React", "Node.js"],
    education: {
        degree: "B.E",
        branch: "Computer Science",
        college: {
            name: "SKN Sinhgad Institute of Technology & Science",
            location: "Lonavala"
        }
    },
    projects: [
        {
            name: "Job Portal",
            tech: ["React", "Node.js", "MongoDB"]
        },
        {
            name: "Blog App",
            tech: ["React", "Appwrite"]
        }
    ]
};


// // function makeOwnDeepCopy(obj){
// //     if(typeof obj !== "object" || obj === null){ // is this not a object or null value
// //         return obj;
// //     }

// //     let copiedValue = (Array.isArray(obj)) ? [] : {} ;

// //     const keyValue = Object.keys(obj);

// //     for(let i = 0; i < keyValue.length; i++){
// //         copiedValue[keyValue[i]] = makeOwnDeepCopy(obj[keyValue[i]]);
// //     }

// //     return copiedValue;
// // }

// // const user_Change = makeOwnDeepCopy(user);


// // user_Change.id = 100;
// // user_Change.address.city = "mumbai";

// // console.log(user);
// // console.log(user_Change);


// // console.log(structuredClone(obj));
// // console.log(data);

// // console.log(typeof obj)



// function makeOwnDeepCopy(obj, visited = new WeakMap()){
//     if(typeof obj !== "object" || obj === null) {
//         return obj;
//     }

//     if(obj instanceof Date){
//         return new Date(obj);
//     }

//     if(obj instanceof Map){
//         let copyMap = new Map;

//         for(const [key ,value] of obj){
//             copyMap.set(
//                 makeOwnDeepCopy(key, visited),
//                 makeOwnDeepCopy(value , visited)
//             )
//         }

//         return copyMap;
//     }

//     if(obj instanceof Set){
//         let copySet = new Set;

//         for(const value of obj){
//             copySet.add(
//                 makeOwnDeepCopy(value , visited)
//             );
//         }


//         return copySet;
//     }


//     if(visited.has(obj)){
//         return visited.get(obj);
//     }

//     const copy = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));

//      visited.set(obj, copy);
//     for(const key of Reflect.ownKeys(obj)){
//         copy[key] = makeOwnDeepCopy(obj[key] , visited);
//     }

//     return copy;



// }


// console.log(user);
// const newUser = makeOwnDeepCopy(user);
// newUser.address.city = "Mumbai"

// console.log(newUser);




function deepCopy(obj , visited = new WeakMap()){

    if(typeof obj !== "object" || obj === null){
        return obj;
    }

    if(obj instanceof Date){
        return new Date(obj);
    }


    if(obj instanceof Map){
        const copyMap = new Map;

        for(const [key, value] of obj){
            copyMap.set(
                deepCopy(key, visited),
                deepCopy(value , visited)
            )
        }

        return copyMap;
    }

    if(obj instanceof Set){
        const copySet = new Set;

        for(const value of obj){
            copySet.add(deepCopy(value , visited));
        }

        return copySet;
    }

    if(visited.has(obj)){
        return visited.get(obj);
    }

    const copy = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));

    visited.set(obj, copy);


    for(const key of Reflect.ownKeys(obj)){
        copy[key] = deepCopy(obj[key] , visited);
    }


    return copy;
}


// console.log(user);
const newUser = deepCopy(user);
newUser.address.city = "Mumbai"

// console.log(newUser);


let name = 'Ganesh';


let name2 = name;
console.log(name);
console.log(name2);