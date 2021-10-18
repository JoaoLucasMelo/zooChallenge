export class giraffes{

  _giraffeMealsAvaiable = 20
  
  
  constructor (name, age, height, typeOfFood){
    this.name = name
    this.age = age
    this.height = height
    this.typeOfFood = typeOfFood
    this.mealsEaten = 0
    this.alive = true
  
    console.log('you created a giraffe')
  }
  
  
  haveMeal(){
  _mealsAvaiable--
  console.log(this.name + 'has had a meal and now we still have ' + _giraffeMealsAvaiable + ' meals avaiable')
  }
  
  }