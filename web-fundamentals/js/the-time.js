function ifYouDontMind(){

    var hour = 4;
    var minute = 15;
    var period = "AM";

    if (minute < 30){
        if (period == "AM"){
            console.log("It is just after", hour, "in the morning.");
        }
        else{
            console.log("It is just after", hour, "in the evening.");
        }
    }
    
    if (minute > 30){
        if (period == "AM"){
            console.log("It is almost", hour+1,"in the morning.");
        }
        else{
            console.log("It is almost", hour+1,"in the evening.");
        }
    }

    if (minute == 30){
        if (period == "AM"){
            console.log("It is half past", hour,"in the morning.");
        }
        else{
            console.log("It is half past", hour,"in the evening.");
        }
    }
}

ifYouDontMind();