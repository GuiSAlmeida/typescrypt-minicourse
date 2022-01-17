// Class decarator
function setApiVersion(apiVersion: string) {
  return (constructor) => {
    return class extends constructor {
      version = apiVersion
    }
  }
}
@setApiVersion('1.0.0')
class API {}
// console.log(new API());


// Property decorator
function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key]

    const getter = () => val;
    const setter = (value: string) => {
      if(value.length < length) {
        console.log(`Error: ${key} não deve ter menos de ${length} letras`);
      } else {
        val = value
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    })
  }
}
class Movie {
  @minLength(5)
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const movie = new Movie('Interstellar');
// console.log(movie.title);


// Method decorator
function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args) {
      console.log(`Esperando ${ms}...`);
      setTimeout(() => {
        originalMethod.apply(this, args)
      }, ms);

      return descriptor;
    }
  }
}

class Gretter {
  gretting: string;

  constructor(g: string) {
    this.gretting = g;
  }
  // Decorator que espera um tempo e roda
  @delay(2000)
  greet() {
    console.log(`Hello! ${this.gretting}`);
  }
}

const pessoa = new Gretter('Pessoinha!')
pessoa.greet();