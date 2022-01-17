// boolean (true | false)
let isOpen: boolean = true

// string
const message: string = 'foo'

// number (int, float, hex, binary)
let total: number = 22

// array (type[])
const letters: string[] = ['a', 'b', 'c']
const numbers: Array<number> = [1, 2, 3]

// tuple
const title: [number, string, boolean] = [1, 'two', true]

// enum
enum colors {
  white = '#fff',
  black = '#000'
}

// any (não é legal)
let thing: any = 'dkfjkjfajkdfjlk'

// void
function logger(): void {
  console.log('foo')
}

// null | undefined
type Bla = string | undefined

// never
function error(): never {
  throw new Error('error');
}

// object
let cart: object = { key: 'value'}

// type inference
let msg = 'mensagem'
// msg = 1

