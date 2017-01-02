//Exercise 1
for (var i=1; i<=100; i++){
    console.log(i);
}

//Exercise 2
var x = "#";

for (var i=1; i <=7; i++){
    console.log(x);
    x += "#";
}

//Exercise 3
for (var i=1; i<=100; i++){
    if (i % 5 == 0 && i % 3 != 0){
        console.log("fizz")
    }
    else if (i % 3 == 0 && i % 5 != 0){
        console.log("buzz")
    }
    else if (i % 5 == 0 && i % 3 == 0){
        console.log("fizzbuzz");
    }
    else{
        console.log(i);
    }
}

//Exercise 4
var board = "";
for (var i=1; i<=8; i++){
    for (var j=1; j<=8; j++){
        if (i % 2 != 0){
            if (j%2 != 0){
                board += "#";
            }
            else {
                board += " ";
            }
        }
        else {
            if (j%2 != 0){
                board += " ";
            }
            else{
                board += "#";
            }
        }
    }
    board += "\n";
}
console.log(board);