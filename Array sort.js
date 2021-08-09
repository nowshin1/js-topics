//sort() method sorts an array alphabetically

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<button onclick="fun()">Try it</button>
<p id="link"></p>
<script>
    var fruits=["Banana","Orange","Apple","Mango","kiwi"];
    document.getElementById("link").innerHTML=fruits;
    function fun(){
      fruits.sort();
        document.getElementById("link").innerHTML=fruits;  //output will be Apple,Banana,Mango,Orange,kiwi..
    }
</script>

</body>
</html>




//reverse() method 

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<button onclick="fun()">Try it</button>
<p id="link"></p>
<script>
    var fruits=["Banana","Orange","Apple","Mango","kiwi"];
    document.getElementById("link").innerHTML=fruits;
    function fun(){
      fruits.sort();
        document.getElementById("link").innerHTML=fruits;  //sorted like Apple,Banana,Mango,Orange,kiwi..
    fruits.reverse();
    document.getElementById("link").innerHTML=fruits; //output will be  kiwi,Orange,Mango,Banana,Apple.
    }
</script>

</body>
</html>







//asending sorting 

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="dream()">Click here</button>
    <p id="demo"></p>
<script>
var arr=[3,4,2,6];
document.getElementById("demo").innerHTML=arr;
function dream(){
arr.sort(function(a,b){
  return a-b
});

document.getElementById("demo").innerHTML=arr;//output will be 2,3,4,6,
}
</script>

</body>
</html>



//decending order sorting 


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="dream()">Click here</button>
    <p id="demo"></p>
<script>
var arr=[3,4,2,6];
document.getElementById("demo").innerHTML=arr;
function  dream(){
    arr.sort(function(a,b){
        return b-a; 
    });
    document.getElementById("demo").innerHTML=arr; //output 6,4,3,2 
}  
</script>

</body>
</html>






//
