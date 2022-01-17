abstract class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  readonly level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }

  get getAge() {
    return this.age;
  }

  set setAge(age: number) {
    this.age = age
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} is ${this.age} has the char ${this.nickname} at level ${this.level}.`);
  }
}

// const will = new UserAccount('Gui', 34);
// will.logDetails();


const john = new CharAccount('John', 40, 'johnmaster', 80)
// john.nickname = 'johnhacker'
console.log(john.level);
john.logCharDetails();

john.setAge = 22;
console.log(john.getAge);
