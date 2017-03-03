//PRACTICE WITH ARRAYS
//NUMBER 1
/*
var movies = new Array("Coming to America","The Nutty Professor","Weekend at Bernie's","What About Bob?","Caddyshack");
window.console.log(movies[1]);
*/

//NUMBER 2
/*
var movies = new Array();
movies[0] = "Coming to America";
movies[1] = "2 Fast 2 Furious";
movies[2] = "Remember the Titans";
movies[3] = "The Matrix";
movies[4] = "John Wick 2";
console.log(movies[0]);

//NUMBER 3
movies.splice(2,0,"Backdraft");
console.log(movies.length);
*/
//NUMBER 4
/*
var movies = new Array();
movies[0] = "Coming to America";
movies[1] = "2 Fast 2 Furious";
movies[2] = "Remember the Titans";
movies[3] = "The Matrix";
movies[4] = "John Wick 2";
movies.shift();
console.log(movies);
*/

//NUMBER 5 
/*
var movies = new Array();
var i;
movies[0] = "Coming to America";
movies[1] = "2 Fast 2 Furious";
movies[2] = "Remember the Titans";
movies[3] = "The Matrix";
movies[4] = "John Wick 2";
movies[5] = "Bill and Ted's Excellent Adventure";
movies[6] = "The Devil's Advocate";



for (i = 0;i<movies.length;i++)
    {
        console.log(movies[i]);
    };
*/

//NUMBER 8
/*
var movies = new Array();
movies[0] = "Coming to America";
movies[1] = "2 Fast 2 Furious";
movies[2] = "Remember the Titans";
movies[3] = "The Matrix";
movies[4] = "John Wick 2";
movies[5] = "Bill and Ted's Excellent Adventure";
movies[6] = "The Devil's Advocate";


var leastFavMovies = new Array("Vanilla Sky","Baby Boy","Scream 3");
*/
/*
for (var i in movies){
        console.log(movies[i]);
}

//NUMBER 7
for (var i in sortedMovies){
    console.log(Movies[i].sort());
}
*/

//NUMBER 8
/*
console.log("Movies I like:")
console.log("\n")

for (i=0;i<3;i++)
    {
    console.log(movies[i])
    }
console.log("...");
console.log("\n")
console.log("Movies I regret watching:")
console.log("\n")
for (i=0;i<3;i++)
    {
    console.log(leastFavMovies[i])
    };

var movies = movies.concat(leastFavMovies);

//NUMBER 9
console.log(movies.sort().reverse());

//NUMBER 10
movies.push("Scream 3");
console.log(movies);

//NUMBER 11
movies.pop("Scream 3");
console.log(movies.sort().reverse().shift());
console.log(movies);

//NUMBER 12 
console.log(movies.indexOf("Baby Boy"));
console.log(movies.indexOf("2 Fast 2 Furious"));
movies.splice(7,8,"Endless Summer", "Point Break");
console.log(movies);
*/

//NUMBER 13\
/*
var employee1 = [];
employee1["employeeid"] = 12;
employee1["name"] = "Bubba Hubba";
employee1["title"] = "Scientist";
employee1["department"] = "Research";
employee1["isCurrentEmployee"] = true;

var employee2 = [];
employee2["employeeid"] = 45;
employee2["name"] = "Ygritte Yas";
employee2["title"] = "Specialist";
employee2["department"] = "HR";
employee2["isCurrentEmployee"] = true;

var employees = [employee1, employee2];
console.log(employee2.name);

employees.forEach(function(item)
{
    console.log(item["name"])
});

var employee3 = [];
employee3["employeeid"] = 3;
employee3["name"] = "Hibbidy Derp";
employee3["title"] = "Loser";
employee3["department"] = "useless";
employee3["isCurrentEmployee"] = false;

var employees = [employee1, employee2, employee3];

for (var i = 0;i<employees.length;i++)
{
    if (employees[i][4] == true)
    {
        console.log(employees.name);
    }
}

//How to apply logic to array search???

var movies =[["Mission Impossible: Ghost Protocol",1],["Groundhog's Day",2],["What About Bob?",3],["Terminator 2",4],["Big Daddy", 5]];

var movieName = movies.filter(function(item)
{
    return typeof item === "string";
});

console.log(movieName);
//argh...
*/

//PRACTICE WITH FUNCTIONS

//number 1
/*
function displayMessage(string1){
    console.log(string1);
}
displayMessage("Testing...");

//number 2
function calculate(number1, number2){
    console.log(number1%number2)
}
calculate(15,4);

//number 3
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
function showEmployee(){
    console.log("Employees:");
    console.log("\n");
    for (i in employees)
    console.log(employees[i]);
}
showEmployee(employees);
*/
