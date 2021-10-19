import { giraffes } from "../models/giraffes.js"
import { lions } from "../models/lions.js"
import { monkeys } from "../models/monkeys.js"
import { snakes } from "../models/snakes.js"


let _lionsCage = {
  king: new lions('King', 15, 200),
  bud: new lions('Bud', 10, 170),
  kid: new lions('Kid', 3, 100)
}

let _giraffesCage = {
  martha: new giraffes('Martha', 12, 400),
  carlos: new giraffes('Carlos', 20, 500),
  zero: new giraffes('Zero', 4, 300)
}

let _monkeysCage = {
  george: new monkeys('George', 25, 170),
  pie: new monkeys('Pie', 20, 150),
  tony: new monkeys('Tony', 6, 150)
}

let _snakesCage = {
  string: new snakes('String', 19, 250),
  draco: new snakes('Draco', 34, 320),
  mimi: new snakes('Mimi', 12, 200)
}

export class ZooControllers{

  constructor(){

  }
  lionInfo(){
    let templateLion =''
    for ( let key in _lionsCage){
    let lion = _lionsCage[key]
    templateLion += `<li>Name: ${lion.name} - Age: ${lion.age} years - Lenght: ${lion.lenght}cm</li>`
    }
    document.getElementById('lionsList').innerHTML = templateLion
  }

  GiraffeInfo(){
    let templateGiraffe =''
    for ( let key in _giraffesCage){
    let giraffe = _giraffesCage[key]
    templateGiraffe += `<li>Name: ${giraffe.name} - Age: ${giraffe.age} years - Height: ${giraffe.height}cm</li>`
    }
    document.getElementById('GiraffesList').innerHTML = templateGiraffe
  }

  MonkeyInfo(){
    let templateMonkey =''
    for ( let key in _monkeysCage){
    let monkey = _monkeysCage[key]
    templateMonkey += `<li>Name: ${monkey.name} - Age: ${monkey.age} years - Height: ${monkey.height}cm</li>`
    }
    document.getElementById('MonkeysList').innerHTML = templateMonkey
  }

  SnakeInfo(){
    let templateSnake =''
    for ( let key in _snakesCage){
    let snake = _snakesCage[key]
    templateSnake += `<li>Name: ${snake.name} - Age: ${snake.age} years - Lenght: ${snake.lenght}cm</li>`
    }
    document.getElementById('SnakesList').innerHTML = templateSnake
  }

  LionFeed(){

document.getElementById('lionfood').innerText = ` You fed all the Lions`
  }
  MonkeyFeed(){

document.getElementById('monkeyfood').innerText = ` You fed all the Monkeys`
}
SnakeFeed(){

  document.getElementById('snakefood').innerText = ` You fed all the Snakes`
  }
  GiraffeFeed(){

    document.getElementById('giraffefood').innerText = ` You fed all the Giraffes`
    }



    }