console.log("This is tutorial 37");

//pretend this response is coming from the server
const students = [
    {name: "Megha", subject: "Javascript"},
    {name: "Jack", subject: "ML"}
]


function enrollStudent(student, callback)
{
    setTimeout(function(){
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 8000);
}

function getStudents(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str+= `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 1000);
}

let newStudent = {name: "Anushka", subject:"Python"};
enrollStudent(newStudent, getStudents);
//getStudents();