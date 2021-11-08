var player1=prompt("Enter  player1 name");
var player2=prompt("Enter player2 name");
var turn=1;
var win=-1;
var count=0;
var matrix=[
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1]
]
function myFunction(elem,row,col)
{
    if(elem.innerHTML!="")
        return;
    if(win!=-1)
        return;

    count++;
    matrix[row][col]=turn;
    if(turn==1)
    {
        elem.innerHTML="X";
        document.getElementById("result").innerHTML= player2 + " turn  is " ;
        turn=2;
        
    }
    else if(turn==2)
    {
        elem.innerHTML="O";
        document.getElementById("result").innerHTML=player1 + " turn  is " ;
        turn=1;
    }
    for(var i=0;i<3;i++)
    {
        //row
        if(matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2])
        win=matrix[i][0];
        if(win!=-1){
            if(win==1)
            {
                alert("Winner is " + player1);
                document.getElementById("result").innerHTML=player1 + "has won";
            }
            else
            {
                alert("Winner is " + player2);
                document.getElementById("result").innerHTML=player2 + "has won";
            }

        }
        
      


        //col

        if(matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i])
        win=matrix[0][i];
       
        if(win!=-1){
            if(win==1)
            {
                alert("Winner is " + player1);
                document.getElementById("result").innerHTML=player1 + "has won";
            }
            else
            {
                alert("Winner is " + player2);
                document.getElementById("result").innerHTML=player2 + "has won";
            }
        }

    }

    //diagonal


    if(matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2])
    win=matrix[0][0];
    if(win!=-1){
        if(win==1)
        {
            alert("Winner is " + player1);
            document.getElementById("result").innerHTML=player1 + "has won";
        }
        else
        {
            alert("Winner is " + player2);
            document.getElementById("result").innerHTML=player2 + "has won";
        }
    }


    if(matrix[0][2] == matrix[1][1] && matrix[1][1]== matrix[2][0])
    win=matrix[0][2];
    if(win!=-1){
        if(win==1)
        {
            alert("Winner is " + player1);
            document.getElementById("result").innerHTML=player1 + "has won";
        }
        else
        {
            alert("Winner is " + player2);
            document.getElementById("result").innerHTML=player2 + "has won";
        }
    }

    //draw condition
    if(count==9 && win==-1)
    {
        document.getElementById("result").innerHTML="Draw game";
        alert("Draw match");
    }


   
}
