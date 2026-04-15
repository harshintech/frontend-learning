//Original Interface
interface Car {
  brand: string;
  start(): void;
}

//Declaration Merging (interface extension)
interface Car {
  model: string;
  stop(): void;
}

const myCarr: Car = {
  brand: "BMW",
  model: "M5",
  start() {
    console.log("I am start");
  },
  stop() {
    console.log("stop");
  },
};

myCarr.start();