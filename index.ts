class Person
{
    private name: string;

    constructor(n: string)
    {
        this.name = n;
    }

    getName():string
    {
        return this.name;
    }

    setName(name:string):void{
        this.name = name;
    }

    static print():void
    {
        alert("static print func");
    }
}

class Web extends Person
{
    constructor(name:string)
    {
        super(name);
    }

    setName(name:string):void
    {
        super.setName("haha");
    }

    work():void
    {
        alert(`${this.getName()} is working.`);
    }
}

// let p = new Person("Jerry");
// alert(p.getName());

// let w: Web = new Web("Jerry");
// w.setName("");
// alert(w.getName());
// w.work();

// Person.print();


interface FullName
{
    firstName: string;
    secondName: string;
}

function printname(name: FullName): void
{
    alert(name.firstName + name.secondName);
}

let me: FullName = {firstName: "Tan", secondName: "Jerry"};

printname(me);


interface encrypt
{
    (key:string, value:string):string;
}

let md5:encrypt = function(key:string, value:string):string
{
    return key+value;
}

console.log(md5("name", "Jerry"));



interface UserArr{
    [index:number]:string;
}
let arr: number[]=[123, 456];



function getData<T>(value: T): T
{
    return value;
}

class myMin<T>
{

}



// function logClass(params:any)
// {
//     console.log(params);

//     params.prototype.apiUrl = "xxx";

//     params.prototype.run=function(){
//         console.log("I am a run func");
//     }
// }

// @logClass
// class HttpClient
// {
//     constructor()
//     {

//     }

//     getData(): void
//     {

//     }
// }

// let http:any = new HttpClient();
// console.log(http.apiUrl);


// function logClass(params: string){
//     return function(target:any){
//         console.log(target);
//         console.log(params);

//         target.prototype.apiUrl = params;
//     }
// }

// @logClass("http://www.baidu.com")
// class HttpClient
// {
//     constructor()
//     {

//     }

//     getData(): void
//     {

//     }
// }

// let http:any = new HttpClient();

// console.log(http.apiUrl);



function logClass(target:any)
{
    console.log(target);

    return class extends target{
        apiUrl: any = "I am in logClass";

        getData()
        {
            this.apiUrl = this.apiUrl + "----";
            console.log(this.apiUrl);
        }
    }
}

function logProperty(params: any)
{
    return function(target:any, attr: any)
    {
        console.log(target);
        console.log(attr);
    }
}

@logClass
class HttpClient
{
    @logProperty("http://www.baidu.com")
    public apiUrl:string | undefined;
    constructor()
    {
        this.apiUrl = "I am in constructor";
    }

    getData(): void
    {
        console.log(this.apiUrl);
    }
}

let http=new HttpClient();
http.getData();