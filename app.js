"use strict";
const myArr = [];
// function combineData<D extends object, E extends object>(data1: D, data2: E) {
//   return { ...data1, ...data2 };
// }
// const combineData = <D, E>(data1: D, data2: E) => {
//   return { ...data1, ...data2 };
// };
// const combinedData = combineData({ name: "SD" }, { id: "123" });
// console.log(combinedData.name);
// const getValueFromObj = <T extends object, U extends keyof T>(obj: T, key: U) => {
//   return obj[key];
// };
// const value = getValueFromObj({ name: "SD" }, "name");
class MyClass {
    constructor() {
        this.itemsArr = [];
    }
    addItems(value) {
        this.itemsArr.push(value);
    }
}
const myValueArr = new MyClass();
const myValueArr1 = new MyClass();
myValueArr1.addItems(12);
console.log(myValueArr.itemsArr[0]);
