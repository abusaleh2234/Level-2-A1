// filterEvenNumbers
const filterEvenNumbers = (numbers: number[]): number[] => {
    const result = numbers.filter((number: number) => number % 2 === 0)
    return result;
}
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));


// reverseString
const reverseString = (text: string): string => {
    const reversed = text.split("").reverse().join("")
    return reversed;
}
// console.log(reverseString("typescript"));


// checkType
type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): string => {
    if (typeof input === "number") {
        return "Number";
    } else {
        return "String";
    }
}
// console.log(checkType(23));


// getProperty
const getProperty = <T, X extends keyof T>(obj: T, key: X): T[X] => {
    return obj[key];
};
// const user = { id: 1, name: "John Doe", age: 21 };
// console.log(getProperty(user, "age"));


// toggleReadStatus
interface Book {
    title: string;
    author: string;
    publishedYear: number
    isRead?: boolean
}
const toggleReadStatus = (book: Book): Book => {
    return { ...book, isRead: true }
}
// const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// console.log(toggleReadStatus(myBook));


// Student.getDetails
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
class Student extends Person {
    grade: string
    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}
// const student = new Student("Alice", 20, "A");
// console.log(student.getDetails());


// getIntersection
const getIntersection = (
    arrayOfX: number[],
    arrayOfY: number[]):
    number[] => {
    return arrayOfX.filter(num => arrayOfY.includes(num));
};
// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

