                                //here onclick is the event.we we click the btn tym will be shown

                                <html lang="en">
                                <head>
                                    <meta charset="UTF-8">
                                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <title>Document</title>
                                </head>
                                <body>
                                <p id="demo"></p>
                                <button onclick='document.getElementById("demo").innerHTML=Date()'>the tym is</button>

                                </body>
                                </html>


                                //here we use function to print tym..


                                <html lang="en">
                                <head>
                                    <meta charset="UTF-8">
                                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <title>Document</title>
                                </head>
                                <body>
                                <p id="demo"></p>
                                <button onclick=fun()>the tym is</button>
                                <script>
                                    function fun(){
                                        document.getElementById("demo").innerHTML=Date();
                                    }
                                </script>
                                </body>
                                </html>
