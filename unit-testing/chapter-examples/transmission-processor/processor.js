function processor(transmission){
    if (transmission.indexOf("::") < 0) {
        // Data invalid
        return -1;
    }
    let parts = transmission.split("::");
    let id = Number(parts[0]);
    let rawData = parts[1];
    if (rawData[0] !== '<' || rawData[rawData.length-1] !== '>') {
        rawData = -1;
    }
    return {
        id,  // same as id: id
        rawData  // same as rawData: rawData
    };
    // returns empty object
    return {};
}

// test 5 pass
// function processor(transmission){
//     if (transmission.indexOf("::") < 0) {
//         // Data invalid
//         return -1;
//     }
//     let parts = transmission.split("::");
//     let id = Number(parts[0]);
//     let rawData = parts[1];

//     return {
//         id,  // same as id: id
//         rawData  // same as rawData: rawData
//     };
//     // returns empty object
//     return {};
// }

// test 4 pass
// function processor(transmission){
//     if (transmission.indexOf("::") < 0) {
//         // Data invalid
//         return -1;
//     }
//     let parts = transmission.split("::");
//     return {
//         id: Number(parts[0])
//     };
//     // returns empty object
//     return {};
// }

// test 3 pass
// function processor(transmission){
//     if (transmission.indexOf("::") < 0) {
//         // Data invalid
//         return -1;
//     }
//     let parts = transmission.split("::");
//     return {
//         id: parts[0]
//     };
//     // returns empty object
//     return {};
// }

// test 2 pass
// function processor(transmission){
//     if (transmission.indexOf("::") < 0) {
//         // Data invalid
//         return -1;
//     }
//     // returns empty object
//     return {};
// }

// test 1 pass
// function processor(transmission){
//     // returns empty object
//     return {};
// }

// processor("1410::<932829840830053761>")

module.exports = processor;