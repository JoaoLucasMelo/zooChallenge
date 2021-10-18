export class lions{

_lionMealsAvaiable = 20


constructor (name, age, lenght, typeOfFood){
  this.name = name
  this.age = age
  this.lenght = lenght
  this.typeOfFood = typeOfFood
  this.mealsEaten = 0
  this.alive = true

  console.log('you created a lion')
}


haveMeal(){
_mealsAvaiable--
console.log(this.name + 'has had a meal and now we still have ' + _lionMealsAvaiable + ' meals avaiable')
}

}














