var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    

//To display all the country flags in the console
for (i=0; i<result.length; i++){
    console.log(result[i].flag)
}

//To print all countries names, regions, sub region and populations
for (i=0; i<result.length; i++){
    console.log(result[i].name)
    console.log(result[i].region)
    console.log(result[i].subregion)
    console.log(result[i].population)
}


//To compare two JSON have the same properties without order
var obj1 = {name:"Person 1", age:5};
var obj2 = {age:5, name:"Person 1"};
console.log(JSON.stringify(obj1) == JSON.stringify(obj2))

}
