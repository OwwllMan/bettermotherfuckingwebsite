setTimeout(popUp, 5000);

function popUp(){
    result = window.confirm("Salut mon pote ça va ? tu veux faire un tour sur notre site ? ");

    if(result ==false){
    while(result==false){
        result = window.confirm("Salut mon pote ça va ? tu veux faire un tour sur notre site ? ");
    }
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
    else{
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
}