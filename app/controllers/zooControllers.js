import { giraffes } from "../models/giraffes.js"
import { lions } from "../models/lions.js"
import { monkeys } from "../models/monkeys.js"

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

export class ZooControllers{

  constructor(){

  }
  lionInfo(){
    let templateLion =''
    for ( let key in _lionsCage){
    let lion = _lionsCage[key]
    console.log(lion)
    templateLion += `<li>Name: ${lion.name} - Age: ${lion.age} years - Lenght: ${lion.lenght}cm</li>`
    }
    document.getElementById('lionsList').innerHTML = templateLion
  }

  GiraffeInfo(){
    let templateGiraffe =''
    for ( let key in _giraffesCage){
    let giraffe = _giraffesCage[key]
    console.log(giraffe)
    templateGiraffe += `<li>Name: ${giraffe.name} - Age: ${giraffe.age} years - Height: ${giraffe.height}cm</li>`
    }
    document.getElementById('GiraffesList').innerHTML = templateGiraffe
  }

  MonkeyInfo(){
    let templateMonkey =''
    for ( let key in _monkeysCage){
    let monkey = _monkeysCage[key]
    console.log(monkey)
    templateMonkey += `<li>Name: ${monkey.name} - Age: ${monkey.age} years - Height: ${monkey.height}cm</li>`
    }
    document.getElementById('MonkeysList').innerHTML = templateMonkey
  }





}