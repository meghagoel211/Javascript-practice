const students = [
    {name: "Megha", subject: "Javascript"},
    {name: "Jack", subject: "ML"}
]


function enrollStudent(student)
{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = false;
            students.push(student);
            console.log("Student has been enrolled");
            if(!error){
                resolve();
            }
            else{
                reject();
            }
        }, 8000);
    })
    
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
enrollStudent(newStudent).then(getStudents)
.catch(function(){
    console.log("Some error occured")
});