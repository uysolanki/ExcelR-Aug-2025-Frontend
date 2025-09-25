let win=0,lose=0,tie=0;
        let score= JSON.parse(localStorage.getItem("rpsscore")) || {win,lose,tie}
        
        let resetButton=document.querySelector('#reset-button').addEventListener('click',resetScore)
        let resultPara,scoreboardPara,movesPara


        let rockMoveButton=document.querySelector('#rock-move-button').addEventListener('click',()=>playGame('Rock'))
        let paperMoveButton=document.querySelector('#paper-move-button').addEventListener('click',()=>playGame('Paper'))
        let scissorsMoveButton=document.querySelector('#scissors-move-button').addEventListener('click',()=>playGame('Scissors'))
        function playGame(playerMove)
        {
            let computerMove=generateComputerMove()
            let result
          
            switch(playerMove)
            {
                case 'Rock':
                            switch(computerMove)
                            {
                                case 'Rock' :   result='TIE'; break
                                case 'Paper' :  result='LOSE'; break
                                case 'Scissors' :result='WIN'; break
                            }
                break;

                case 'Paper':
                            switch(computerMove)
                            {
                                case 'Rock' :   result='WIN'; break
                                case 'Paper' :  result='TIE'; break
                                case 'Scissors' :result='LOSE'; break
                            }
                break;


                case 'Scissors':
                            switch(computerMove)
                            {
                                case 'Rock' :   result='LOSE'; break
                                case 'Paper' :  result='WIN'; break
                                case 'Scissors' :result='TIE'; break
                            }
                break;   
            }

            switch(result)
            {
                case 'WIN' : score.win++; break;
                case 'LOSE' : score.lose++; break;
                case 'TIE' : score.tie++; break;
            }


            movesPara=document.querySelector('#moves')
            movesPara.innerHTML=`Player Move :  ${playerMove} | Computer Move : ${computerMove} `
        
            resultPara=document.querySelector('#result')
            resultPara.innerHTML=`Result ${result}`

            scoreboardPara=document.querySelector('#scoreboard')
            scoreboardPara.innerHTML=`Scoreboard WIN : ${score.win} LOSE : ${score.lose} : TIE ${score.tie}`
        
            let scoreString=JSON.stringify(score)
            localStorage.setItem("rpsscore",scoreString);
        }


        function generateComputerMove()
        {
            let randomNumber=Math.random();
           // console.log(randomNumber)
            if(randomNumber<=1/3)
            return 'Rock'
            else if(randomNumber<=2/3)
            return 'Paper'
            else
            return 'Scissors'
        }

        function resetScore()
        {
            score={
                win:0,
                lose:0,
                tie:0
            }

            localStorage.removeItem('rpsscore')
            alert('Scoreboard reset')

            movesPara.innerHTML=`Player Move :  | Computer Move :  `
        
            resultPara=document.querySelector('#result')
            resultPara.innerHTML=`Result `

            scoreboardPara=document.querySelector('#scoreboard')
            scoreboardPara.innerHTML=`Scoreboard WIN : ${score.win} LOSE : ${score.lose} : TIE ${score.tie}`
        }