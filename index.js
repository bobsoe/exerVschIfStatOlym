// prelims
if(5 > 3){
    console.log( "5 is greater than 3")
}

var cat="cat"
if(cat.length = 3){
    console.log( "3 is the length of cat")
}

var dog="dog"
if(cat = cat){
    console.log("they are the same")
} else {
    console.log("they are not the same")
}


//Bronze part 1
var person = {
    name : "Bobby",
    age : 12
}
if(person.age >18) {
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log(person.name + " is not allowed to go to the movie")
}

// Bronze part 2
if(person.name.startsWith('B')){
    console.log(person.name + " is allowed to go to the movie")
} 

// Bronze part 3
if((person.name.startsWith('B')) && (person.age >18)){
    console.log(person.name + " is allowed to go to the movie")
}  else {
    console.log(person.name + " is not allowed to go the movie")
}

// Silver part 1

