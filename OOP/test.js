class Parent {
constructor(){
    this.lastname = 'Ford'
}
displayLastname(){
    console.log('Our lastname is ' + this.lastname)
}

}

class Child extends Parent{

}

let rob = new Child()
rob.displayLastname()