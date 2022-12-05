//prompt to get grade output after marks input

function getGrade(){
    let grade
    let marks = prompt("how many marks did you score?")
       switch (marks) {
        case (marks>=79):
            grade ="A"
        case(marks>=60 && marks<78):
            grade ="B"
        case(marks<=59 && marks>=49):
            grade ="c"
        case(marks>=40 && marks<=48):
            grade ="D"
        case(marks<=39):
            return "E"       
        default:
            grade = "input marks";
       }
    }


