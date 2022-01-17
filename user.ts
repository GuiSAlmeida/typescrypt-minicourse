// accountInfo
// charInfo
// playerInfo

type AccountInfo = {
  // UNION - usa um tipo ou outro (|)
  id: number | string,
  name: string,
  // ? marca como optional (undefined)
  email?: string 
}

type CharInfo = {
  nick: string,
  level: number
}

// INTERSECTION - interseção dos dois tipos
type PlayerInfo = AccountInfo & CharInfo 

const account: AccountInfo = {
  id: 123,
  name: 'Gui'
}

const char: CharInfo = {
  nick: 'Gui',
  level: 100
}

const player: PlayerInfo = {
  id: '123',
  name: 'andreia',
  nick: 'Deia',
  level: 10
}