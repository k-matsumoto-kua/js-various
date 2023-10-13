//https://swiperjs.com/get-started#initialize-swiper
let swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

//スライドしたら音源を変更 https://swiperjs.com/swiper-api#events
swiper.on('realIndexChange', function () {
  soundPlay(swiper.realIndex)
});

//サウンド用意
let sound;

//音源用意
let sound_list=[
  new Audio('../dummy_sound/sound01.mp3'),
  new Audio('../dummy_sound/sound02.mp3'),
  new Audio('../dummy_sound/sound03.mp3'),
];


function soundPlay(index){
  if(sound){//soundに音源をセットしてあれば
    sound.pause();//一時停止
  }
  sound = sound_list[index]//スライドに合わせたsoundに音源をセット
  sound.loop=true;//ループ再生設定
  sound.play();//再生
  sound.volume=0;//一旦音量0
  volumeUp();//徐々に音量上げる
}

function volumeUp(){
  if(sound.volume<=0.6){//音量が0.6以下なら
    sound.volume +=0.05;//ボリューム上げる
    setTimeout(volumeUp,100);//少し待って繰り返し(再帰)
  }
}
	
