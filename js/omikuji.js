$(".take").on("click",function () {
    omikuji();
});

function omikuji(){
    const cont = Math.ceil(Math.random()*7);
    if(cont == 1){
        // $("#result").text("大吉");
        $(".luck").attr('src',"../img/omikuji_daikichi.png");
    } 
    
    else if(cont == 2){
        // $("#result").text("中吉");
        $(".luck").attr('src',"../img/omikuji_chuukichi.png");
    }

    else if(cont == 3){
        // $("#result").text("吉");
        $(".luck").attr('src',"../img/omikuji_kichi.png");
    }

    else if(cont == 4){
        // $("#result").text("小吉");
        $(".luck").attr('src',"../img/omikuji_syoukichi.png");
    }

    else if(cont == 5){
        // $("#result").text("末吉");
        $(".luck").attr('src',"../img/omikuji_suekichi.png");
    }

    else if(cont == 6){
        // $("#result").text("凶");
        $(".luck").attr('src',"../img/omikuji_kyou.png");
    }

    else if(cont == 7){
        // $("#result").text("大凶");
        $(".luck").attr('src',"../img/omikuji_daikyou.png");
    }
}
