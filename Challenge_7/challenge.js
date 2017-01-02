//magic eightball

var numberofreplys = 3;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'

    /*
    write conditional logic here using if, else if, and else
    */
    if (choice == 1){
        reply = "I don't think so";
    }
    else if (choice == 2) {
        reply = "Yes";
    }
    else {
        reply = "An option is not yet made for this number";
    }


    console.log(choice);
    console.log(reply);
}

ask();

