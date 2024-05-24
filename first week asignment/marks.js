
let marks;
let exam;
function gradingFunc(marks, exam){
    if(exam === 'general'){
        if(marks >= 89 && marks <= 100){
            
            return 'Excellent job, you got an A+'
        }
        else if(marks >= 80 && marks <= 88){

            return "Good job, you got an A."
        }
        else if(marks >= 75 && marks <= 79){

            return "Well done, you got a B+."
        }
        else if(marks >= 70 && marks <= 74){

            return "Nice work, you got a B."
        }
        else if(marks >= 60 && marks <= 69){

            return "You got a C."
        }
        else if(marks < 60){

            return "You need to improve."
        }
    }



    if(exam === 'final'){
        if(marks >= 90 && marks <= 100){
            
            return 'Excellent job, you got an A+'
        }
        else if(marks >= 80 && marks <= 89){

            return "Good job, you got an A."
        }
        else if(marks >= 75 && marks <= 79){

            return "Well done, you got a B+."
        }
        else if(marks >= 70 && marks <= 74){

            return "Nice work, you got a B."
        }
        else if(marks >= 60 && marks <= 69){

            return "You got a C."
        }
        else if(marks < 60){

            return "You need to improve."
        }
    }

}

console.log(gradingFunc(45, 'final'))