const dice = document.querySelector('#dice')
const newgame = document.querySelector('#new-game')
const rolldice = document.querySelector('#roll-dice')
const hold= document.querySelector('#hold')
const score0 = document.querySelector('#score-0')
const score1 = document.querySelector('#score-1')
const colour0 = document.querySelector('#colour-0')
const colour1 = document.querySelector('#colour-1')
const total0 = document.querySelector('#total-0')
const total1 = document.querySelector('#total-1')
const won0 = document.querySelector('#won-0')
const lose1 = document.querySelector('#lose-1')
const won1 = document.querySelector('#won-1')
const lose0 = document.querySelector('#lose-0')

let activeplayer =0

 let scores =0
 let add = [0,0]
 let playing = true
rolldice.addEventListener('click', ()=>{
    if(playing){
    dice.classList.remove('hidden')
  const dicerandom = Math.trunc(Math.random() * 6) +1  
    dice.src = `dice-${dicerandom}.png`
    scores+=dicerandom
            document.querySelector(`#score-${activeplayer}`).textContent=scores

    if(dicerandom ===1){
        scores =0
        document.querySelector(`#score-${activeplayer}`).textContent=scores
     activeplayer = activeplayer === 0 ? 1:0   
        console.log(activeplayer)
 colour0.classList.toggle('bg-blue-950')
 colour0.classList.toggle('bg-blue-700')
 colour1.classList.toggle('bg-blue-950')
 colour1.classList.toggle('bg-blue-700')

    }

    }

})


hold.addEventListener('click',()=>{
    if(playing){
           add[activeplayer] +=  scores
document.querySelector(`#total-${activeplayer}`).textContent = add[activeplayer]
scores= 0
        document.querySelector(`#score-${activeplayer}`).textContent=scores

if(add[activeplayer] >= 100){

        
        dice.classList.add('hidden')
    document.querySelector(`#colour-${activeplayer}`).classList.add('bg-[green]')
    document.querySelector(`#colour-${activeplayer}`).classList.toggle('bg-blue-700')
    document.querySelector(`#won-${activeplayer}`).classList.remove('hidden')
    activeplayer = activeplayer === 0 ? 1:0   
    document.querySelector(`#colour-${activeplayer}`).classList.add('bg-[red]')
    document.querySelector(`#colour-${activeplayer}`).classList.toggle('bg-blue-950')
   
 const losingplayer = activeplayer ===0 ?0:1
 document.querySelector(`#lose-${losingplayer}`).classList.remove('hidden')

    playing = false
 } 
  activeplayer = activeplayer === 0 ? 1:0   
        console.log(activeplayer)
 colour0.classList.toggle('bg-blue-950')
 colour0.classList.toggle('bg-blue-700')
 colour1.classList.toggle('bg-blue-950')
 colour1.classList.toggle('bg-blue-700')
    }
})



newgame.addEventListener('click', ()=>{
activeplayer =0
 scores =0
 add = [0,0]
 playing = true
 score0.textContent=scores
 score1.textContent=scores
 total0.textContent=add[0]
 total1.textContent=add[1]
 won0.classList.add('hidden')
 won1.classList.add('hidden')
 lose0.classList.add('hidden')
 lose1.classList.add('hidden')
colour0.classList.remove('bg-[green]')
colour1.classList.remove('bg-[green]')
colour0.classList.remove('bg-[red]')
colour1.classList.remove('bg-[red]')
colour0.classList.add('bg-blue-950')
colour1.classList.add('bg-blue-700')
colour0.classList.remove('bg-blue-700')
colour1.classList.remove('bg-blue-950')
dice.classList.add('hidden')
// activeplayer = activeplayer === 0 ? 1:0 
    // document.querySelector(`#colour-${activeplayer}`).classList.add('bg-blue-700')

})