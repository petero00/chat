SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SpeechRecognition();
let text = document.getElementById('text');
let face = document.getElementById('face');
let massege;



recognition.onresult = (event) => {


    message = event.results[0][0].transcript;
    
    console.log('あなた:' + message);

    if(message.includes('こんにちは')) {
        say('こんにちは、僕はAIだよ!!');
    }
    else if(message.includes('おじさん')) {
        say('おじさんがどうしたの？');
    }
    else if(message.includes('布団が吹っ飛んだ')) {
        say('あはは。面白いダジャレだね。');
    }
    else if(message.includes('ペンギン')) {
        say('ペンギン!!僕はペンギンが大好き!!');
    }
    else if(message.includes('何時')) {
        
        say(new Date().getHours() + '時' + new Date().getMinutes() + '分だよ。');
    }
    else if(message.includes('好きな') && message.includes('動物')) {
        say('ペンギンだよ。');
    }
    document.getElementById('text').textContent = message;
    console.log('AI    :' + message);
}



function listen() {
    face.src = 'on.png';
    recognition.start();
}

function say(aaa) {
    face.src = 'on2.png';
    message = aaa;
    speechSynthesis.speak(new SpeechSynthesisUtterance(aaa));
    face.src = 'off.png';
}
