function ispalindrome(string)
{   if(string)
    {
        var str=string.toLowerCase();
        var len=string.length;
        var mid=Math.floor(len/2);
   
        for(var i=0; i<mid;i++)
        {  
            if(str[i]!==str[len-1-i])
        
            return false;
        }
        return true;
    } 
    else return false;  
    
}

var string=prompt("Enter the String ");
var result=ispalindrome(string);
if(result)
    alert("Yaay, it is a palindrome.");
else alert("Sorry. Its not.");




