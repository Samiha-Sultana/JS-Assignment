var texts=["“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill",
"“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers","“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown",
"“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” – Johann Wolfgang Von Goethe"," “Whether You Think You Can Or Think You Can’t, You’re Right.” – Quote By Henry Ford"];


function RandomQuote()
{
    document.getElementById("TEXTAREA").innerHTML= texts[Math.round(Math.random()*4)];
}

function Green()
{
    document.getElementById("TEXTAREA").style.backgroundColor="green";
    document.getElementById("TEXTAREA").style.fontStyle = "initial";
document.getElementById("TEXTAREA").style.fontFamily = "Impact,Charcoal,sans-serif";
    document.getElementById("TEXTAREA").style.borderColor="dotted";
    document.getElementById("TEXTAREA").style.borderStyle="2";
    document.getElementById("TEXTAREA").style.color="white";
    
}


function Yellow()
{
    document.getElementById("TEXTAREA").style.backgroundColor="yellow";
    document.getElementById("TEXTAREA").style.fontStyle = "italic";
    document.getElementById("TEXTAREA").style.borderColor="black";
      document.getElementById("TEXTAREA").style.borderStyle="dashed";
      document.getElementById("TEXTAREA").style.color="black";
}

function Blue()
{
    document.getElementById("TEXTAREA").style.backgroundColor="blue";
    document.getElementById("TEXTAREA").style.borderColor="aqua";
    document.getElementById("TEXTAREA").style.borderStyle="double";
     document.getElementById("TEXTAREA").style.color="white";
     document.getElementById("TEXTAREA").style.fontFamily =  "Pacifico, cursive";
    
    
}

function Orange()
{
    document.getElementById("TEXTAREA").style.backgroundColor="orange";
    document.getElementById("TEXTAREA").style.borderColor="pink";
      document.getElementById("TEXTAREA").style.borderStyle="groove";
      document.getElementById("TEXTAREA").style.color="black";
      document.getElementById("TEXTAREA").style.fontStyle = "inherit";
}

function Cnvrt() {
	var cnvTyp = document.getElementById('CnvTyp').value;
    valu = document.getElementById('cvt').value;
    var text="";

	if (cnvTyp=="P2K") {
        x= valu * 0.4536;
        text=" "+x+" kilograms";
		document.getElementById('ans').innerHTML = text;

	} else if (cnvTyp=="K2P") {
        x= valu * 2.2046;
        text="  "+x+" pounds";
		document.getElementById('ans').innerHTML = text;
	}
}



var input;
var numbers;
var maxNumber=0;
var maxI=0;
var minI=0;
var currentSum;



function Calculate()
{
     input =  document.getElementById("CALCULATETEXT");
     numbers = input.value.split(",");
   Max();
   Min();
   Sum();
   Average();
   Reverse();
   
}


function Max()
{
     
   
    //console.log(numbers);
    for(var i=maxI ; i<numbers.length ; i++)
       {
           if(parseInt(numbers[i])>parseInt(maxNumber))
          // if(numbers[i]>maxNumber)  it is also okay.
               {
                   maxNumber=numbers[i];
                   maxI=i;
               }
       }
       document.getElementById("MAX").value = maxNumber;
   //console.log(document.getElementById("MAX").value = maxNumber); 
}


function Min()
{
     
   
    var minNumber= numbers[0];
    //console.log(numbers);
    for(var i=minI ; i<numbers.length ; i++)
       {
           if(parseInt(numbers[i])<=parseInt(minNumber))
               {
                   minNumber=numbers[i];
                   minI=i;
               }
       }
       document.getElementById("MIN").value = minNumber;
   //console.log(document.getElementById("MIN").value = minNumber); 
}


function Sum()
{
     
   var sum=0;
  
    for(var i=0 ; i<numbers.length ; i++)
       {
          sum=parseInt(sum) + parseInt(numbers[i]); 
       }
   //console.log(document.getElementById("SUM").innerHTML = sum); 
   document.getElementById("SUM").innerHTML = sum;
    currentSum = sum;
}


function Average()
{
       
    document.getElementById("AVERAGE").innerHTML = (currentSum/numbers.length)
  // console.log(document.getElementById("AVERAGE").innerHTML = (currentSum/numbers.length)); 
}


function Reverse()
{
    var reverseArray = numbers.reverse();
    document.getElementById("REVERSE").innerHTML =reverseArray;

  // console.log(document.getElementById("REVERSE").innerHTML =reverseArray); 
}

function Clear()
{
    document.getElementById("TEXTAREA2").value="";
}

function Sort()
{
    var texts = document.getElementById("TEXTAREA2").value.split("\n");
    
      var sortedText = texts.sort();
    
    var text = "";
    
    for(var i=0 ; i<sortedText.length ; i++)
        {
            text = text + "\n" + sortedText[i] ;
        }
    document.getElementById("TEXTAREA2").value = text.toString();  
   
}


function reversetext() {
    let input = document.getElementById("TEXTAREA2");
    let array1 = input.value.split("\n");
    let array2 = [array1.length];
    var text=""
    for (i = array1.length-1; i>=0; i--) {
       text = text + array1[i]+"\n" ;

    }
    document.getElementById("TEXTAREA2").value = text.toString();  
    
}

var flag = false;

function Capitalize()
{
    if(flag==false){
        flag=true;
        document.getElementById("TEXTAREA2").style.textTransform = "uppercase";
    }
    else{
        flag=false;
        document.getElementById("TEXTAREA2").style.textTransform = "lowercase";
    }
       
        

}


function Shuffle(){
    let input = document.getElementById("TEXTAREA2");
    let array = input.value.split("\n");
    var text="";
    for (i = 0; i < array.length; i++) {
        let rand = Math.floor(Math.random() * array.length);
        let temp = array[rand];
        array[rand] = array[i];
        array[i] = temp;
    }
    for(j=0;j<array.length;j++){
        text = text + array[j]+"\n" ;
        console.log(array[j]);
        console.log(text);
    }
    document.getElementById("TEXTAREA2").value = text.toString();

}

function Addi()
{
    let input = document.getElementById("TEXTAREA2");
    let array1 = input.value.split("\n");
    
    let sum2= 0;
    var text="";
    var num=1;
    
    for(var i=0 ; i<array1.length ; i++)
        {
            //sum2 = parseInt(sum2) + parseInt(array1[i]) ;
           // console.log(sum2);
           text=text+num+"."+array1[i]+"\n";
           num++;
        }
        num=0;
    document.getElementById("TEXTAREA2").value = text.toString();  
   
}

function Trim()
{
    var texts = document.getElementById("TEXTAREA2").value.split("\n");
    var text="";
    
     for(var i=0 ; i<texts.length ; i++)
        {
            texts[i].trim();
            text = text.trim() + "\n" + texts[i].trim() ;
        }
    document.getElementById("TEXTAREA2").value = text.toString();  
   
}
