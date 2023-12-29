SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SpeechRecognition();
let text = document.getElementById('text');
let face = document.getElementById('face');
let massege;
let flag = 1;// 返答用　１通常　2挨拶　3名前を覚える　4ゲーム(じゃんけん)　5ゲーム(私は誰でしょう？)　6アドバイス 7ペンギン図鑑 8クイズ
let namae = 'uiiahugaoggassjisauigioshuhsajjihaisoasuoasjjguaonjhaijiahoihoihsuiasbugi';
let ryouri = {1:'カレー',2:'うどん',3:'親子丼',4:'チャーハン',5:'鍋',6:'シュークルート',7:'ハンバーグ',8:'オムライス',9:'焼き魚',10:'豚汁',11:'ラーメン',12:'メンチカツ',13:'ハヤシライス',14:'酢豚',15:'コロッケ',16:'お好み焼き',17:'唐揚げ'};
let gyagu = {1:'布団が吹っ飛んだ',2:'トイレに行っといれ',3:'アルミ缶の上にあるミカン',4:'アサリをあっさりと食べる',5:'画びょうが刺さって、ガビョーン',6:'帽子を忘れて ハットした',7:'内容が無いよう',8:'イクラは幾ら？',9:'電話に誰も出んわ',10:'アイスを愛す。',11:'チョコをちょこっと食べた。',12:'箱を運んだ',13:'松の木の下で、待つ。',14:'トナカイと仲いい',15:'内臓がないぞう',16:'牛が笑って、うっしっし',17:'ダジャレを言うのは、誰じゃ！'};
let kuizu = {1:'歌が上手なイスってどんなイス？',2:'嫌いな人がいない、スポーツって何？',3:'テントを持って歩いてる虫ってどんな虫？',4:'たたくと音が出る鯛はどんな鯛？',5:'取りにくいお肉ってどんなお肉？',6:'赤ちゃんが一人で乗る車ってなに？',7:'牛が壁を「ドン」っとたたくと出てくる食べ物は？',8:'眠い時、口から出る「くび」ってどんなくび？',9:'逆さまに泳いでる軽い生き物って何？',10:'牛乳瓶を逆さまにしたら、木の実が出てきたよ、何の木の実？',11:'雪で作る「枕」って何？',12:'お母さんに怒られるサイはどんなサイ？'};
let kotae = {1:'うぐいす',2:'スキー',3:'てんとう虫',4:'太鼓',5:'鶏肉',6:'ベビーカー',7:'牛丼',8:'あくび',9:'イルカ',10:'ミルク',11:'鎌倉',12:'うるさい'};
let abcdef;




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
        }/*
        else if(message.includes('調べて') && message.includes('ペンギン')) {
            say('ペンギンを調べるよ。ペンギンの種類を言ってね。');
            flag = 7;
        }*/
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
        else if(message.includes('分かったよ')) {
            say('うん、');
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
        else if(message.includes('おしゃべり')) {
            say('おしゃべりなら、今してるよ。');
        }
        else if(message.includes('なんで')) {
            say('知らない～');
        }
        else if(message.includes('ギャグ')) {
            let ran = (Math.floor(Math.random() * 17) + 1);
            say(gyagu[ran]);
        }
        else if(message.includes('ゲーム')) {
            say('僕はじゃんけんとクイズ、私は誰でしょう？ができるよ!!');
        }
        else if(message.includes('布団が吹っ飛んだ')) {
            say('あはは。面白いダジャレだね。');
        }
        else if(message.includes('痛い')) {
            say('大丈夫？どこが痛いの？頭、お腹、目、それとも、、');
            flag = 6;
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
        else if(message.includes('クイズ')) {
            let ran = (Math.floor(Math.random() * 12) + 1);
            say('クイズね、分かった。' + kuizu[ran]);
            abcdef = kotae[ran];
            flag = 8;
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
        else if(message.includes('好きな') && message.includes('音楽')) {
            say('カエルの歌だよ。');
        }
        else if(message.includes('おすすめ') && message.includes('料理')) {
            let ran = (Math.floor(Math.random() * 17) + 1);
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
    else if(flag == 6) {
        if(message.includes('頭')) {
            say('じゃあ、まずは電子機器から頭を放して、頭をゆっくり回してみて。');
        }
        else if(message.includes('お腹')) {
            say('ト、トイレに行けば。あと、お腹を温めた方がいいよ。');
        }
        else if(message.includes('目')) {
            say('自然のものとか遠くを見たら良いかも。水も飲むといいかも。');
        }
    }
    /*
    else if(flag == 7) {
        if(message.includes('皇帝ペンギン')) {
            say('皇帝ペンギンはペンギンの中で一番大きいよ。');
            hyouji('https://4.bp.blogspot.com/-vxQKfIkCUec/XAY5iENS7II/AAAAAAABQcE/GLLS6U3KrNoeBV8o4YCkffo8P6RYG4fMQCLcBGAs/s400/animal_koutei_penguin_egg.png');
        }
        else if(message.includes('王様ペンギン')) {
            say('王様ペンギンは首元がオレンジ色になってるよ。');
            hyouji('http://2.bp.blogspot.com/-2rCYn8fQzAc/VOsJt9WEZ4I/AAAAAAAArr4/lrqHkm_OS34/s180-c/penguin01_king.png')
        }
    }*/
    else if(flag == 8) {
        if(message.includes(abcdef)) {
            say('当たりだよ!!答えは「' + abcdef + '」だよ。');
        }else{
            say('違うなぁ～、また、挑戦して!!');
        }
        flag = 1;
    }
    document.getElementById('text').textContent = message;
    console.log('AI    :' + message);
    face.src = 'off.png';
}



function listen() {
    document.getElementById('gazo').style.display = 'none';
    face.src = 'on.png';
    recognition.start();
}

function hyouji(aaa) {
    document.getElementById('gazo').src = (aaa);
    document.getElementById('gazo').style.display = 'block';
}

function say(aaa) {
    face.src = 'on2.png';
    speechSynthesis.speak(new SpeechSynthesisUtterance(aaa));
    message = aaa;
}
