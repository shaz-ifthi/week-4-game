
        /***** Variables  *****/
        var totalScore = $("#totalScore");
        var score = 0

        var total = 0
        // var randNum = Math.floor((Math.random() * 100) + 12);
        // console.log(randNum)
        var wins = $("#wins");
        var losses = $("#losses");
        var numId = $("#randNum_id");

        var crystal1
        var crystal2
        var crystal3
        var crystal4
        var randNum
        var winCount = 0
        var lossCount = 0


        //generate random number and get values for individual crystals    
        function resetValue() {
           
            randNum = Math.floor(Math.random() * 101) + 19;
            console.log("Random Number = " + randNum)

            crystal1 = Math.floor((Math.random() * 11) + 1);
            console.log("Crystal1 value =  " + crystal1)

            crystal2 = Math.floor((Math.random() * 11) + 1);
            console.log("Crystal2 value =  " + crystal2)

            crystal3 = Math.floor((Math.random() * 11) + 1);
            console.log("Crystal3 value =  " + crystal3)

            crystal4 = Math.floor((Math.random() * 11) + 1);
            console.log("Crystal4 value =  " + crystal4)

            total = 0;
        }

        /* Call the resetValue function*/
        resetValue()


        /* common if elseIf and else statement to be used in all 4 crystals */
        function ifElse() {
            if (total === randNum) {
                console.log("You Win!")
                resetValue();
                winCount = winCount + 1;
                wins.html(winCount)
                numId.html("Random Number: " + randNum)
                totalScore.html("Your Total Score is: " + total)
                console.log("Total Score: " + total)
            }

            else if (total > randNum) {
                console.log("You Lose!")
                resetValue();
                lossCount = lossCount + 1;
                losses.html(lossCount)
                numId.html("Random Number: " + randNum)
                totalScore.html("Your Total Score is: " + total)
                console.log("Total Score: " + total)
            }

            else {
                console.log("Keep Trying")
                console.log("Total Score: " + total)
                // resetValue();
            }
        }
        /* calling the ifElse function */
        ifElse()

        /***** jQuery *****/
        totalScore.html("Your total score is : " + total)
        numId.html("Random Number: " + randNum)


        /****** Functions *****/

        $("#crystal1_id").on("click", function () {
            console.log(crystal1)
            total = total + crystal1;
            totalScore.html("Your total score is : " + total)
            ifElse()
        })



        $("#crystal2_id").on("click", function () {
            console.log(crystal2)
            total = total + crystal2;
            totalScore.html("Your total score is : " + total)
            ifElse()
        })


        $("#crystal3_id").on("click", function () {
            console.log(crystal3)
            total = total + crystal3;
            // console.log("total = " + total)
            totalScore.html("Your total score is : " + total)
            ifElse()
        })



        $("#crystal4_id").on("click", function () {
            console.log(crystal4)
            total = total + crystal4;

            totalScore.html("Your total score is : " + total)
            ifElse()
        })



   
