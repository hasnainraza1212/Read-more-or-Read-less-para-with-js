// GETTING btn
var btn = document.getElementById('btn');
// GETTING PARA
var initialText = document.getElementById('para');
//CREATING FLAG FOR COMPARISON
var  flag = false;
//SHORTPARA
var shortPara = document.getElementById('para').innerHTML;
//LONGPARA
var fullpara = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illum corrupti quisquam minima earum nisi iste minus at et molestiae vero tenetur commodi odio deserunt illo a dignissimos, magnam expedita esse voluptates voluptas hic quasi temporibus placeat. Aut, dolorum ipsam officiis minus dolorem minima, praesentium nesciunt excepturi necessitatibus esse itaque reiciendis! Commodi magnam fugiat ut incidunt ipsam sequi cumque! Ab similique eligendi itaque porro tempora sequi dolore molestias accusantium. Autem velit qui impedit quae quia facilis cumque libero natus, debitis dicta sint, eaque similique, voluptatum commodi! Sequi obcaecati quidem nam in quia! Culpa itaque tempora, porro nisi quaerat ad perspiciatis."


function parachanger() {
    //AS INITIALLY FLAG IS  FALSE IF BLOCK RUN
    if(!flag){
    initialText.innerHTML = fullpara;
    btn.innerHTML = "Read less"
    flag = true;
    }
    //ON SECOND  TURN ELSE BLOCK RUN AS FLAG IS SETTED TRUE, ON NEXT TURN IF BLOCK AGAIN RUN BC FLAG IS SETTED FALSE AND THIS CYCLE KEEP GOING
    else if(flag) {
        initialText.innerHTML = shortPara;
        btn.innerHTML = "Read more"
        flag = false;
    }
}


