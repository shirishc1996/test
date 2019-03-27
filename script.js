
var button=document.getElementById('btn');
button.addEventListener('click', myfunction);
    
function myfunction()
{
    document.getElementById('result').className="coinHide";
        repeat();
        setTimeout(() => {
            var coin=["head.jpg","tail.jpg"];
            var x=Math.round(Math.random());
            var result=coin[x];
            repeat();
            debugger;
            document.getElementById('result').className = "coinShow"; 
            document.getElementById('result').src=result;

        }, 3000);
        
    };
function repeat()
{
    if(document.getElementById('img').className == "coinShow")
 {
    document.getElementById('img').className="coinHide";
 }
  else if(document.getElementById('img').className == "coinHide")
 {
    document.getElementById('img').className = "coinShow";
 }
}

/** Extras */
