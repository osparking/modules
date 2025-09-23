function addNumber(x: number, y: number) : number {
  return x + y;
}

function pickRandElt<T>(elements: T[]): T {
  const index = Math.floor(Math.random()* elements.length);
  return elements[index];
}

const x = 2;