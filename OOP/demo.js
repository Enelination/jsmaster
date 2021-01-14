let studentId = 1
let studentName = "John"
let studentMarks = 89


let teacherName = 'Bessy'
let teacherId = 9
let teacherExp = 5


const displayStudent = function(){
    console.log('id is ' + studentId)
    console.log('Name is' + studentName)
    console.log('Marks are ' + studentMarks)

}

const displayTeacher = function(){
    console.log('id is ' + teacherId)
    console.log('Name is' + teacherName)
    console.log('Experience are ' + teacherExp)

}

displayTeacher()
displayStudent()


//oop
let student = {
    Id : 1,
    name : 'John',
    marks : 89,
    display(){
        console.log('id is ' + this.Id)
        console.log('Name is' + this.name)
        console.log('Marks are ' + this.marks)
    
    }
    

}

let teacher ={
    id:2,
    name:'Aku',
    exp:4,
    display(){
        console.log('id is ' + this.id)
        console.log('Name is' + this.name)
        console.log('Experience are ' + this.exp)
    
    }
}


student.display()
teacher.display() 