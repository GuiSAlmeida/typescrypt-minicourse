interface Game {
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilars: (title: string) => void
}

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const tlou: Game = {
  title: 'The last of us',
  description: 'The best game.',
  genre: 'Action',
  platform: ['PS3', 'PS4'],
  getSimilars: (title: string) => {
    console.log(`Similars to ${title}: Uncharted.`);
  }
}

const leftBehind: DLC = {
  title: 'The last of us - Left Behind',
  description: 'You play as Ellie.',
  genre: 'Action',
  platform: ['PS4'],
  originalGame: tlou,
  newContent: ['3 hours story', 'New characters'],
  getSimilars: (title: string) => {
    console.log(`Similars to ${title}: Uncharted.`);
  }
}

tlou.getSimilars(tlou.title);

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;
  
  constructor(title: string, description: string, genre: string){
    this.title = title;
    this.description = description;
    this.genre = genre;
  }
  
  getSimilars(): void {
    console.log(`Similars to ${title}: Uncharted.`);
  }
}