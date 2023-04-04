class Person {
  constructor(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
  }

  introduceMyself() {
    console.log(
      `안녕하세요, ${this.name}입니다. 나이는 ${this.age}살이고 전공은 ${this.major}입니다.`
    );
  }
}

const person1 = new Person("유채원", 22, "시각디자인");
person1.introduceMyself();
