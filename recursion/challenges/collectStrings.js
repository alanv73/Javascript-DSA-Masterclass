// function accepts an object and returns an array of all the values
// in the object that have typeof string
//
// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }
//
// collectStrings(obj) // ["foo", "bar", "baz"]
//

function collectStrings(myObj){
    let tempArr = [];
    Object.keys(myObj).forEach((key) => {
        if(typeof myObj[key] === 'object' && Object.prototype.toString.call(myObj[key]) !== '[object Array]'){
            let temp = collectStrings(myObj[key]);
            tempArr = tempArr.concat(temp);
        } else if (typeof myObj[key] === 'string'){
            tempArr.push(myObj[key]);
        }
    });
    return tempArr;
}

{
    const obj = {
        stuff: "foo",
        data: {
            val: {
                thing: {
                    info: "bar",
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: "baz"
                        }
                    }
                }
            }
        }
    }

    collectStrings(obj) // ["foo", "bar", "baz"]
}