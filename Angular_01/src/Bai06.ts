
function logger() {
    return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
        console.log("hello")
    }
}

class Demo {
    @logger()
    hello() {
        
    }
}

const demo = new Demo()
demo.hello()