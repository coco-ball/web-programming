import * as josa from "./josa.mjs";

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
    this.rightJosa = josa.checkKorean(name);
  }

  speak() {
    console.log(`${this.name}${this.rightJosa} ${this.sound} 소리를 냅니다.`);
  }
}

const myCat = new Animal("치즈", "냐옹");
const myDog = new Animal("돌돌", "멍망");
myCat.speak();
myDog.speak();
