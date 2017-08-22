/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * Switch between different wikipedia languages
 * bind enter to pressing key
 */
 var searchUrl="https://en.wikipedia.org/w/api.php?" ;
 var searchText="";


$(document).ready(function() {
    

    $("#searchField").keypress(function(event){
    
    if (event.key==='Enter')
    {
         searchText = this.value;
         
      searchUrl ="https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&uselang=user&search="+searchText +"&limit=20&profile=fuzzy";
       $.ajax ({ 
           
         url : searchUrl ,
         
         success: function(response){
             
             for (i=0; i<20;i++)
             {
               
                 var appendString ="<div class='searchResult'> <p> <a class='title' href="+response[3][i] +">";
                 appendString += response[1][i]+"</a>" ;
                 appendString += "<br>" + response[2][i] ;
                appendString +="</p></div>" ; 
                 
                $("#content").append(appendString); 
                 
             }
             
             
             
         },
         
         error :function (){}
         
         
       
       
        
    });
    
    
        }  
    
    
    
})
    
    
    
 
}) ;