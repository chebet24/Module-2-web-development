//just the basics of the js
// creating a storage space 
var math = 90,english=70,kiswahili = 80,total,avg ;

total = math + english +kiswahili ;
avg = total /3 
if (avg >= 80)
    {
        document.write(" You have  A")
    }else if (avg < 80 && avg >= 70)
        {
        document.write("You have B")
    }else if (avg < 70  && avg >= 60){
        document.write(" You have C")

    }else if (avg < 60 && avg >=50 ){
        document.write("You have D")
    }else(avg < 50) 
    {
        document.write("You have E")
    }



// document.write("The sum of the results is  ",total ,"<br>");
// document.write ("The average of the results  is ", avg )

