class GoodGreeter {
    a: number = 2;
    private b: number = 4;
    protected c: number = 6;

   
    Display() {
      console.log(this.a);
      console.log(this.b);
      console.log(this.c);
    }
  }

// class B extends GoodGreeter{

//     Display() {
//         console.log(this.a);
//         console.log(this.b);
//         console.log(this.c);
//       }
//   } 

const a = new GoodGreeter();
a.Display();
