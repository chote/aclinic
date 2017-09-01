
    class Greeter {
        greeting = "";
    constructor(message:string) {
        this.greeting = message
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
