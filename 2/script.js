/*Take the course names from user in one prompt separated by 
comma
Then display on console as Table Coursename, Grade, and
(Success or Fail) each course in one row
success if the grade >=60
Fail if the grade<60 */

let userCourse = prompt("please Enter Your Courses Name");
//let courseGrade = prompt("Please Enter Your Grades");
//console.log(userCourse);


if(userCourse == null || !isNaN(userCourse))
{
prompt("enter valid courses name")

} else 
{
    console.log( userCourse);
}

