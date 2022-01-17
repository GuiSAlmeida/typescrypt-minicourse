// type alias
type GameT = {
  title: string;
}

type DLCT = {
  extra: string;
}

// Interface
interface GameI {
  title: string;
}

interface DLCI {
  extra: string;
}

// Intersection | extend
type GameCollectionT = Game & DLCT;
interface GameCollectionI extends GameI, DLCI {}

// Functions
type getSimilarsT = (title: string) => void;

interface getSimilarsI {
  (title: string): void;
}

// declarar primitivos
type IDT = string | number

interface IDI extends number {} // não funciona

// tuplas
type TupleT = [number, number]
[1, 2] as TupleT;

// não consigo definir tuplas na interface
interface TupleI {
  0: number;
  1: number;
}

[1,2,3,'4'] as TupleI;

// Alias apenas uma declaração por escopo
type JQueryT = { a: string }
type JQueryT = { b: string }

// Interface pode ter multiplas declarações e ele une de mesmo nome
// Monkey Path
interface JQueryI {
  a: string;
}
interface JQueryI {
  b: string;
}

const $: JQueryI = {
  a: 'bla',
  b: 'foo',
}