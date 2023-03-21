export default {
  message: function () {
    let msgs = [
      {
        id: "a",
        imgurl: "t2.jpeg",
        message: {
          voice: "a",
          time: "60",
        },
        types: 2,
        time: new Date() - 1000 * 20,
        tip: 9,
      },
      {
        id: "b",
        imgurl: "stu.png",
        message: {
          voice: "a",
          time: "20",
        },
        types: 2,
        time: new Date() - 1000 * 60 * 1,
        tip: 8,
      },
      {
        id: "a",
        imgurl: "t2.jpeg",
        message: "今天好大的雨",
        types: 0,
        time: new Date() - 1000 * 60 * 2,
        tip: 0,
      },
      {
        id: "a",
        imgurl: "t2.jpeg",
        message: "嗯嗯好吧",
        types: 0,
        time: new Date() - 1000 * 60 * 7,
        tip: 1,
      },
      {
        id: "b",
        imgurl: "stu.png",
        message: "没事的，说明老师关照你",
        types: 0,
        time: new Date() - 1000 * 60 * 8,
        tip: 2,
      },
      {
        id: "a",
        imgurl: "t2.jpeg",
        message: "上课的时候被老师提问，没回答上",
        types: 0,
        time: new Date() - 1000 * 60 * 59,
        tip: 3,
      },
      {
        id: "b",
        imgurl: "stu.png",
        message:
          "怎么了",
        types: 0,
        time: new Date() - 1000 * 60 * 60,
        tip: 4,
      },
      {
        id: "b",
        imgurl: "stu.png",
        message: "今天不开心",
        types: 0,
        time: new Date() - 1000 * 60 * 60 * 24,
        tip: 5,
      },
      {
        id: "a",
        imgurl: "t2.jpeg",
        message: "今天感觉挺好的，上课也学到很多知识",
        types: 0,
        time: new Date() - 1000 * 60 * 60 * 24,
        tip: 6,
      },
      {
        id: "b",
        imgurl: "stu.png",
        message: "最近情绪感觉怎么样",
        types: 0,
        time: new Date() - 1000 * 60 * 60 * 24 * 2,
        tip: 7,
      },
    ];
    return msgs;
  },
};
