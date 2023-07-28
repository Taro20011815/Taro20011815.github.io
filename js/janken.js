function janken(hand) {

    let rand = 0;                       // 生成した疑似乱数の保存用変数
    let computer = 0;                   // コンピュータの出す手の保存用変数
    let type = ["グー","チョキ","パー"]  // コンピュータの出す手の種類をまとめた配列
    let you = '';                        // 自分が出す手の保存用変数
    let result = '';                    // 結果の記録用変数
    
    if (hand === 1) {
        
        you = 'グー';

        // 0~2.999...の間で疑似乱数を生成
        rand = Math.random()*3;

        // 生成した疑似乱数の小数点以下を切り捨て
        computer = Math.floor(rand);

        // お互いが出した手をコンソールから確認できるよう出力
        console.log("じゃんけん...");
        console.log("あなた：" + you);
        console.log("コンピュータ：" + type[computer]);

        // 結果の出力（結果はHTML上でも表示）・・・・論理演算子 && を利用すれば，if文の入れ子構造を防ぐことができる
        if(type[computer] == you){
            result = "DROW";
            console.log("結果：" + result);
        }
        else if(type[computer] === "パー"){
            result = "YOU LOSE";
            console.log("結果：" + result);        
        }
        else if(type[computer] === "チョキ"){
            result = "YOU WIN";
            console.log("結果：" + result);
        }
    } 
        
    else if (hand === 2) {
        you = 'チョキ';
        rand = Math.random()*3;
        computer = Math.floor(rand);
        console.log("じゃんけん...");
        console.log("あなた："+you);
        console.log("コンピュータ：" + type[computer]);

        if(type[computer] === you){
            result = "DROW";
            console.log("結果：" + result); 
        }
        else if(type[computer] === "グー"){
            result = "YOU LOSE";
            console.log("結果：" + result);        
        }
        else if(type[computer] === "パー"){
            result = "YOU WIN";
            console.log("結果：" + result);        
        }
    } 
        
    else if (hand === 3) {
        you = 'パー';
        rand = Math.random()*3;
        computer = Math.floor(rand);
        console.log("じゃんけん...");
        console.log("あなた："+you);
        console.log("コンピュータ：" + type[computer]);

        if(type[computer] === you){
            result = "DROW";
            console.log("結果：" + result);        
        }
        else if(type[computer] === "チョキ"){
            result = "YOU LOSE";
            console.log("結果：" + result);        
        }
        else if(type[computer] === "グー"){
            result = "YOU WIN";
            console.log("結果：" + result);        
        }
    }
    
    // 書き換えたいHTMLの要素を取得
        const p_greet = document.querySelector('#result');
        p_greet.textContent = result;

        // $('#result').text('あなたの手は'+ you + ',コンピュータの手は' + type[computer] + ',したがって結果は,' + result);
}






