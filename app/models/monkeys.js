export class monkeys{


  
  
  constructor (name, age, height, typeOfFood){
    this.name = name
    this.age = age
    this.height = height
    this.typeOfFood = typeOfFood
    this.mealsEaten = 0
    this.alive = true
  
    console.log('you created a monkey')
  }
  
  
  monkeyHaveMeal(){
  _mealsAvaiable--
  console.log(this.name + 'has had a meal and now we still have ' + _monkeysMealsAvaiable + ' meals avaiable')
  }
  
  }