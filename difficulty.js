function easy() {
    localStorage.setItem( "numb" , 50);
    localStorage.setItem( "diff" , "easy");
    window.location="game.html";
}

function medium() {
    localStorage.setItem( "numb" , 100 );
    localStorage.setItem( "diff" , "medium" );
    window.location="game.html";
}

function hard() {
    localStorage.setItem( "numb" , 500);
    localStorage.setItem( "diff" , "hard");
    window.location="game.html";
}

function extreme() {
    localStorage.setItem( "numb" , 1000 );
    localStorage.setItem( "diff" , "extreme" );
    window.location="game.html";
}