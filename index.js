const myVar = "Foo";


function second() {
    function first() {
        console.log("Inside first()");
      
        console.log("myVar is currently equal to:", myVar);
    }
    const myVar = "Bar";

    first();
}

second();