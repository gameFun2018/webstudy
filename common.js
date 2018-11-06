            var i = 0;
            document.getElementById("btn").onclick  = function()
            {
                i++;
                if(i % 2 == 1)
                {
                    document.getElementById("showText").value = "clicked btn";  
                }else
                {
                    document.getElementById("showText").value = "show";     
                }
                  
            }