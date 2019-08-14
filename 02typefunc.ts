let oneString: any = "this is a string";
let stringLength: number = (oneString as string).length;
console.log(stringLength);

function hello<T>(arg: T): T{
    return arg;
}
console.log(hello<number>(33));