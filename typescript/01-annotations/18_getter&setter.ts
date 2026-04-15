class MyClass {
  private _myProperty: number = 0;

  get myProperty(): number {
    return this._myProperty;
  }

  set myProperty(value: number) {
    this._myProperty = value;
  }
}

const myInstance = new MyClass();
console.log(`Current Value : ${myInstance.myProperty}`)
myInstance.myProperty = 15;
console.log(`Current Value : ${myInstance.myProperty}`)
