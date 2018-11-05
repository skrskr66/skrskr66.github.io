const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "年少有为",
        artist: '李荣浩',
        url: 'http://www.ytmp3.cn/down/50491.mp3'，
      }，
      {
        name: "unnatural（女生翻唱版）",
        artist: '迷津玄师',
        url: 'http://www.ytmp3.cn/down/53497.mp3'，
      }，
      {
        name: "狂恋你",
        artist: '沈以城',
        url: 'http://www.ytmp3.cn/down/49604.mp3'，
      }
    ]
});