export class snakes{


  
  
  constructor (name, age, lenght, typeOfFood){
    this.name = name
    this.age = age
    this.lenght = lenght
    this.typeOfFood = typeOfFood
    this.mealsEaten = 0
    this.alive = true

  }
  
  
  snakeHaveMeal(){
  _mealsAvaiable--
  console.log(this.name + 'has had a meal and now we still have ' + _snakesMealsAvaiable + ' meals avaiable')
  }
  
  }