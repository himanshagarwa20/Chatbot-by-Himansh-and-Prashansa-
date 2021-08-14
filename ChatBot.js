function talk(){
    var know ={
        "Hi":"Hi, How can i assist you?",
        "Good morning":"Good morning, How can i assist you?",
        "Good afternoon":"Good afternoon, How can i assist you?",
        "Good evening":"Good evening, How can i assist you?",
        "Hello Doctor":"Hello, How can i assist you?",
        "Hello":"Hello, How can i assist you?",
        "How are you?":"Great!",
        "I have fever, when i should come?":  "Our Clinic is open from Monday-Friday 1-5 pm",
        "I want to book a appointment!": "Ok sure, Our Clinic is open from Monday-Friday 1-5 pm",
        "Ok i want for Tuesday 2 pm" : "Booked",
        "Thank you":"Welcome, Have A Nice Day!",
        "Thank you so much":"Welcome, Have A Nice Day!",
        
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if(user in know){
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
        document.getElementById('chatLog').innerHTML = "I do not understand .";
    }
}