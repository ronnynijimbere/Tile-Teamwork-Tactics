const myGeneration = {
  '-3': ['great grandfather', 'great grandmother'],
  '-2': ['grandfather', 'grandmother'],
  '-1': ['father', 'mother'],
  '0': ['me!', 'me!'],
  '1': ['son', 'daughter'],
  '2': ['grandson', 'granddaughter'],
  '3': ['great grandson', 'great granddaughter']
}

function generation(x, y) {
  return y==="m"?myGeneration[x][0]:myGeneration[x][1];
}
generation(2, "f") 

generation(-3, "m")

generation(1, "f")