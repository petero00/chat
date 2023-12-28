SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SpeechRecognition();
let text = document.getElementById('text');
let face = document.getElementById('face');
let massege;
let flag = 1;// 返答用　１通常　2挨拶　3名前を覚える　4ゲーム(じゃんけん)　5ゲーム(私は誰でしょう？)
let namae = 'uiiahugaoggassjisauigioshuhsajjihaisoasuoasjjguaonjhaijiahoihoihsuiasbugi';
let ryouri = {1:'カレー',2:'うどん',3:'親子丼',4:'チャーハン',5:'鍋',6:'シュークルート',7:'ハンバーグ',8:'オムライス',9:'焼き魚',10:'豚汁'};





recognition.onresult = (event) => {


    message = event.results[0][0].transcript;

    console.log('あなた:' + message);

    if(flag == 1) {
        if(message.includes('こんにちは')) {
            say('こんにちは、僕はAIだよ!!');
        }
        else if(message == '名前を覚えて') {
            say('OK。名前を言ってみて。ニックネームでもいいんだよ!!');
            flag = 3;
        }
        else if(message.includes('覚えた') && message.includes('名前')) {
            if(namae == 'uiiahugaoggassjisauigioshuhsajjihaisoasuoasjjguaonjhaijiahoihoihsuiasbugi') {
                say('まだ、名前は覚えてないよ。')
            }else{
                say('えーっと、、、' + namae + 'であってる？');
            }
        }
        else if(message.includes('名前')) {
            say('僕の名前はChatくんだよ。');
        }
        else if(message.includes('おじさん')) {
            say('おじさんがどうしたの？');
        }
        else if(message == '挨拶して' || message == '挨拶をして') {
            say('分かったよ。誰に挨拶するの？');
            flag = 2;
        }
        else if(message.includes('可愛い')) {
            say('ありがとう！！そう言われると嬉しいよ。');
        }
        else if(message.includes('元気')) {
            say('僕はいつも元気だよ。');
        }
        else if(message.includes('さようなら') || message.includes('さよなら') || message.includes('また') || message.includes('バイバイ')) {
            say('うん、また、おしゃべりしようね。');
        }
        else if(message.includes('なんでやねん')) {
            say('何がやねん！');
        }
        else if(message.includes('ゲーム')) {
            say('僕はじゃんけんと私は誰でしょうができるよ!!');
        }
        else if(message.includes('布団が吹っ飛んだ')) {
            say('あはは。面白いダジャレだね。');
        }
        else if(message.includes('ありがとう')) {
            say('どういたしまして。');
        }
        else if(message.includes('ペンギン')) {
            say('ペンギン!!僕はペンギンが大好き!!');
        }
        else if(message.includes('じゃんけん')) {
            say('ジャンケンね、分かった。出す手を決めて言ってね。最初はグー、ジャンケン、、、');
            flag = 4;
        }
        else if(message.includes('私は誰でしょう')) {
            say('私は誰でしょうゲームね、分かった。僕は灰色です。僕は生き物です。僕は陸に住んでます。');
            flag = 5;
        }
        else if(message.includes('何時')) {    
            say(new Date().getHours() + '時' + new Date().getMinutes() + '分だよ。');
        }
        else if(message.includes('日付') || message.includes('何日')) {
            
            say(new Date().getMonth() + 1 + '月' + new Date().getDate() + '日だよ。');
        }
        else if(message.includes('好きな') && message.includes('動物')) {
            say('ペンギンだよ。');
        }
        else if(message.includes('好きな') && message.includes('食べ物')) {
            say('おにぎりが好きだよ。');
        }
        else if(message.includes('おすすめ') && message.includes('料理')) {
            let ran = (Math.floor(Math.random() * 10) + 1);
            say('おすすめの料理は' + ryouri[ran] + 'だよ。');
        }
        else if(message.includes('何') && message.includes('でき')) {
            say('おしゃべりとゲームや、日時を伝えられるよ。');
        }
    }
    else if(flag == 2) {
        say(message + '、よろしくお願いします。僕はあの人が作ったChatくんという何かです。');
        flag = 1;
    }
    else if(flag == 3) {
        namae = message;
        say(namae + 'だね。覚えておくよ。');
        flag = 1;
    }
    else if(flag == 4) {
        //gu = 1
        //choki = 2
        //pa = 3
        flag = 1;
        let com = Math.floor(Math.random() * 3) + 1;
        if(message == 'グー' || message == 'Goo') {
            if(com == 1) {
                say('あいこだったよ。')
            }
            if(com == 2) {
                say('僕の負けだよ。')
            }
            if(com == 3) {
                say('僕の勝ちだ。やったー')
            }
        }
        else if(message == 'チョキ' || message == 'チョッキー') {
            if(com == 2) {
                say('あいこだったよ。')
            }
            if(com == 3) {
                say('僕の負けだよ。')
            }
            if(com == 1) {
                say('僕の勝ちだ。やったー')
            }
        }
        else if(message == 'パー') {
            if(com == 3) {
                say('あいこだったよ。')
            }
            if(com == 1) {
                say('僕の負けだよ。')
            }
            if(com == 2) {
                say('僕の勝ちだ。やったー')
            }
        }
        else if(message == 'ポイ' || message == 'ぽい') {
            say('ポイじゃなくてグーかチョキかパーって言ってね。ジャンケン、、、');
            flag = 4;
        }else{
            say('他のことは言わないで!!また、最初からジャンケンしよう。');
        }
    }
    else if(flag == 5) {
        if(message.includes('ヒントを出して')) {
            say('ヒントを出すよ。その動物は鼻がとっても長いよ。');
        }
        else if(message == '象' || message == '増' || message == 'ぞうさん') {
            say('おめでとう、当たりだよ。');
            flag = 1;
        }
        else if(message.includes('答え')) {
            say('答えが分かったら答えだけ答えてね。');
            flag = 1;
        }else{
            say('ヒントを出して。と言ったらヒントを出すよ！答えが分かったら言ってね。')
        }
    }
    document.getElementById('text').textContent = message;
    console.log('AI    :' + message);
    face.src = 'off.png';
}



function listen() {
    face.src = 'on.png';
    recognition.start();
}

function say(aaa) {
    face.src = 'on2.png';
    speechSynthesis.speak(new SpeechSynthesisUtterance(aaa));
    message = aaa;
}

function jyanken() {

}
