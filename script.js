SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SpeechRecognition();
let text = document.getElementById('text');
let face = document.getElementById('face');
let massege;
let flag = 1;// 返答用　１通常　2挨拶　3名前を覚える　4…
let namae;



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
            say('僕はじゃんけんができるよ!!');
        }
        else if(message.includes('布団が吹っ飛んだ')) {
            say('あはは。面白いダジャレだね。');
        }
        else if(message.includes('ペンギン')) {
            say('ペンギン!!僕はペンギンが大好き!!');
        }
        else if(message.includes('じゃんけん')) {
            say('ジャンケンね、分かった。出す手を決めて言ってね。最初はグー、ジャンケン、、、');
            flag = 4;
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
        else if(message == 'チョキ') {
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
        }else{
            say('他のことは言わないで!!また、最初からジャンケンしよう。');
        }
        flag = 1;
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
