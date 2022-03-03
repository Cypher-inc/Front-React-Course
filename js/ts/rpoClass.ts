class GoodGreeter {
    name: string = 'hi';
   
    Display() {
      console.log(this.name);
      
    }
  }

const a = new GoodGreeter();
a.Display();
