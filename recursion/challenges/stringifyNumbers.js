// function takes an object and finds all of the values which are numbers and converts them to strings.
//
//     let obj = {
//         num: 1,
//         test: [],
//         data: {
//             val: 4,
//             info: {
//                 isRight: true,
//                 random: 66
//             }
//         }
//     }
// stringifyNumbers(obj);
//
//     {
//         num: "1",
//         test: [],
//         data: {
//             val: "4",
//             info: {
//                 isRight: true,
//                 random: "66"
//             }
//         }
//     }

function stringifyNumbers(obj){
    let newObj = {};
    Object.keys(obj).forEach((key) => {
        if(typeof obj[key] === 'object' && Object.prototype.toString.call(obj[key]) !== '[object Array]'){
            newObj[key] = stringifyNumbers(obj[key]);
        } else if(typeof obj[key] === 'number'){
            newObj[key] = String(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    });
    return newObj;
}

{
    let obj = {
        num: 1,
        test: [],
        data: {
            val: 4,
            info: {
                isRight: true,
                random: 66
            }
        }
    }

    stringifyNumbers(obj);

//     {
//         num: "1",
//         test: [],
//         data: {
//             val: "4",
//             info: {
//                 isRight: true,
//                 random: "66"
//             }
//         }
//     }
}