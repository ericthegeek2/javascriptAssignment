var student = {
    name: 'David Rayy',
    sclass: 'v1',
    rollno: 12
}
console.log('before deleting the rollno property \n')
console.log(student,'\n')
delete(student.rollno)
console.log('after deleting the rollno property \n')
console.log(student ,'\n')