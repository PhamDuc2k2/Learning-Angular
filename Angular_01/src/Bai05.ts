class Rectangle{
    constructor(private length: number,private  width : number) {}
    dientich(): number {
        return this.length * this.width;
    }
}

let rectangle : Rectangle = new Rectangle(3, 4)
console.log(rectangle.dientich());

