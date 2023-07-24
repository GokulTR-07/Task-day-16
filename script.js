var number10 = function(){
  var num10 = document.getElementById("con");
  num10.innerHTML = "10";
  num10.style.color="orange"

  var number9 = function(){
    var num9 = document.getElementById("con");
    num9.innerHTML = "9";
    num9.style.color="white"

    var number8 = function(){
      var num8 = document.getElementById("con");
      num8.innerHTML = "8";
      num8.style.color="green"

      var number7 = function(){
        var num7 = document.getElementById("con");
        num7.innerHTML = "7";
        num7.style.color="orange"

        var number6 = function(){
          var num6 = document.getElementById("con");
          num6.innerHTML = "6";
          num6.style.color="white"

          var number5 = function(){
            var num5 = document.getElementById("con");
            num5.innerHTML = "5";
            num5.style.color="green"

            var number4 = function(){
              var num4 = document.getElementById("con");
              num4.innerHTML = "4";
              num4.style.color="orange"

              var number3 = function(){
                var num3 = document.getElementById("con");
                num3.innerHTML = "3";
                num3.style.color="white"

                var number2 = function(){
                  var num2 = document.getElementById("con");
                  num2.innerHTML = "2";
                  num2.style.color="green"

                  var number1 = function(){
                    var num1 = document.getElementById("con");
                    num1.innerHTML = "1";
                    num1.style.color="orange"

                    var content = function(){
                      var con = document.getElementById("con");
                      con.innerHTML = "Happy Independence Day";
                      con.style.color="orange"
                    }
                    setTimeout(content,1000);
                  }
                  setTimeout(number1,1000);
                }
                setTimeout(number2,1000);
              }
              setTimeout(number3,1000);
            }
            setTimeout(number4,1000);
          }
          setTimeout(number5,1000);
        }
        setTimeout(number6,1000);
      }
      setTimeout(number7,1000);
    }
    setTimeout(number8,1000);
  }
  setTimeout(number9,1000);
}
setTimeout(number10,1000); 
