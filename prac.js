var word ; 
function checkpal(word) {
  var word = prompt("enter a word");
    var splitted = word.split(''); 
    var reverse = splitted.reverse();
     var joined = reverse.join('');
      if(joined == word) 
      return alert('yeah its a palandrom')  
         return alert('no its not a palandrom')}


         


var students = ['hassan' , 'salman', 'kamran', 'rashid', 'faizan', 'noor'];
function arfil(students) {
for(i=0 ; i < students.length ; i++){
  if(!students[i].includes('an')){var a = students.indexOf(students[i]);
  students.splice(a,1) ;
  i= -1;
  } 
 else{i+1}
} document.write('BEFORE ARRAY     hassan,salman,kamran, rashid, faizan, noor' + '<br/>' + '<br/>'); document.write('AFTER ARRAY' + " "  + " " + " " +students);
} 




var strng = 'The quick brown fox jumps over the lazy dog';
function quantity(strng) {var count = 0;
var strn = strng.toLocaleLowerCase();
    var splitted = strn.split(' '); 
  for(i=0 ; i < splitted.length ; i++){
    
    if( splitted[i].includes('the')){
     count++;
    }
  } document.write(count);

} 





      function kaam(){
            var a = prompt("enter the number");
            for(var i = 0 ; i < a ; i++ ){
               for(var j = 0 ; j < a ; j++ ){
               if(i==j){
                document.write("1"," ");
               }
               else{
                document.write("0"," ");
               }
                      } document.write("<br/>");
                 
                 }
               }
         





function pattern(){
 for( var i=5;i>=1;i--)
 {

  for( var j=1;j<=i;j++)
 {
   document.write(j);
  }
   document.write('<br/>');
 }

 for( var i=5;i>=1;i--)
 {

  for( var j=1;j<=i;j++)
 {
   document.write('*');
  }
   document.write('<br/>');
 }
  } 





  function hadi(){}
  function typof(a,b,d,e,f,g){
    document.write( a ,' ','is', ' ', typeof(a),'<br/>');
    document.write( b ,' ','is', ' ', typeof(b),'<br/>');
    document.write( d ,' ','is', ' ', typeof(d),'<br/>');
    document.write( e ,' ','is', ' ', typeof(e),'<br/>');
    document.write( f ,' ','is', ' ', typeof(f),'<br/>');
    document.write( 'g' ,' ','is', ' ', typeof(g),'<br/>');
   }



  





   function calculator(num1,num2,c){
     document.write("1st number is:",num1 ,'<br/>');
     document.write("2nd number is:",num2 ,'<br/>');
     
     if(c == '+'){
      var f = parseInt(num1) + parseInt(num2);
     document.write('<br/>',"the addition result of  " + num1 + " and " + num2 + " is " + f);
     }
     else if(c == '*'){
      var g = parseInt(num1) * parseInt(num2);
      document.write('<br/>',"the multiplication result of  " + num1 + " and " + num2 + " is " + g);
     }
     else if(c == '/'){
      var h = parseInt(num1) / parseInt(num2);
      document.write('<br/>',"the division result of  " + num1 + " and " + num2 + " is " + h);
     }
     else if(c == '-'){
      var i = parseInt(num1) - parseInt(num2);
      document.write('<br/>',"the subtraction result of  " + num1 + " and " + num2 + " is " + i);
     }

    }

   function vals(callback){
     var num1 = prompt("enter 1st number");
     var num2 = prompt("enter 2nd number");
     var c = prompt("enter the operator");
      callback(num1,num2,c);}








 function objct(){
 var students = ["studentdata","teacherdata"]

studentdata = {
Firstname : 'bilal',
Lastname : 'alam',
rollnumber :  '68',
classname: 6,
midtermscore:92,
finalscore:100,
hasClassRepresentativeRole:true
}

document.write( 'classname is :', studentdata['classname'] ,'<br/>' , 'finalscore is:', studentdata['finalscore'] , '<br/>', 'has Class RepresentativeRole :', studentdata['hasClassRepresentativeRole']
)
}
     
     
     

    



