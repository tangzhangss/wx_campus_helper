/**首页公告 */
function getIndex() {
  return {
    "notice": "我的校园助手的公告!"
  }
}
//失物招领
function lostAndFound(){
   return {
     goods:[
       {
         id: 1,
         logo: "/img/key.jpg",
         goods: "书1包",
         name: "andy",
         mobile: "1234567890",
         addr: "四川省成都市成都七中A5 605教室"
       },
       {
         id: 2,
         logo: "/img/key.jpg",
         goods: "书2包",
         name: "andy",
         mobile: "1234567890",
         addr: ".四川省成都市成都七中A5 605教室"
       },
       {
         id: 3,
         logo: "/img/key.jpg",
         goods: "书3包",
         name: "andy",
         mobile: "1234567890",
         addr: "................................."
       },
       {
         id: 4,
         logo: "/img/key.jpg",
         goods: "书包4",
         name: "andy",
         mobile: "1234567890",
         addr: "................................."
       },
       {
         id: 5,
         logo: "/img/key.jpg",
         goods: "书5包",
         name: "andy",
         mobile: "1234567890",
         addr: "................................."
       },
       {
         id: 6,
         logo: "/img/key.jpg",
         goods: "书6包",
         name: "andy",
         mobile: "1234567890",
         addr: "................................."
       }
     ]
   }
}

//二手商品配置
function getFoundthing() {
  return {
    goodsList: [
      {
        "id":1,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        //辅助图片描述 4张
        "picdesc":[
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "学生一",
        "status": 0,
        "desc": "我商品描述一哦^_^",
        "contact": "10086",
        "price": "99",
      area: 1 //1表示南校区 2表示北校区
      },
      {
        "id": 2,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "学生二",
        "status": 1,
        "desc": "我商品描述二哦^_^我商品描述2哦^_^",
        "contact": "10086",
        "price": "99", area: 1 //1表示南校区 2表示北校区
      },
      {
        "id": 3,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "学生三",
        "status": 1,
        "desc": "我商品描述三哦^_^我商品描述3哦^_^我商品描述3哦^_^",
        "contact": "10086",
        "price": "99", area: 1 //1表示南校区 2表示北校区
      },
      {
        "id": 10,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "学生四",
        "status": 0,
        "desc": "我商品描述四哦^_^我商品描述4哦^_^",
        "contact": "10086",
        "price": "99", area: 1 //1表示南校区 2表示北校区
      },
      {
        "id": 4,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "学生五",
        "status": 0,
        "desc": "我商品描述哦5^_^",
        "contact": "10086",
        "price": "99", area: 1 //1表示南校区 2表示北校区
      },
      {
        "id": 5,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "学生六",
        "status": 0,
        "desc": "我商品描述5哦^_^",
        "contact": "10086",
        "price": "99", area: 2 //1表示南校区 2表示北校区
      },
      {
        "id": 6,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "学生七",
        "status": 0,
        "desc": "我商品描述6哦^_^",
        "contact": "10086",
        "price": "99", area: 1 //1表示南校区 2表示北校区
      },
      {
        "id":7,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "学生八",
        "status":0,
        "desc": "我商品描述7哦^_^",
        "contact": "10086",
        "price": "99", area: 2//1表示南校区 2表示北校区
      },
      {
        "id": 8,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "学生九",
        "status":0,
        "desc": "我商品描述8哦^_^",
        "contact": "10086",
        "price": "99", area: 1 //1表示南校区 2表示北校区
      },
      {
        "id": 9,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "学生十",
        "status": 0,
        "desc": "我商品描述9哦^_^",
        "contact": "10086",
        "price": "99", area:2 //1表示南校区 2表示北校区
      }
    ]
  }
}
//跑腿代购配置
function getShopHelper(){
  return {
     //南校区
     shophelper0:[
        {
          id:1,
          goods:"火腿肠",
          addr:"6舍一栋",
          sex:"男",
          name:"唐一",
avatarurl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
          contact:"15520449931",
          money:3,
          time:"2019-3-19 16:35:25",
          status:0, 
        },
        {
         id: 2,
         goods: "矿泉水",
         addr: "6舍一栋",
         sex: "女",
         name: "梅花",
         avatarurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
         contact: "15520449931",
         money: 3,
         time: "2019-3-19 13:35:25",
          status: 1
       },
       {
         id: 3,
         goods: "辣条",
         addr: "6舍一栋",
         sex: "女",
         name: "梅花",
         avatarurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
         contact: "15520449931",
         money: 3,
         time: "2019-3-19 09:35:25",
         status: 0
       },
       {
         id: 4,
         goods: "辣条",
         addr: "6舍一栋",
         sex: "女",
         name: "梅花",
         avatarurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
         contact: "15520449931",
         money: 3,
         time: "2019-3-19 09:35:25",
         status: 0
       },
       {
         id: 5,
         goods: "辣条",
         addr: "6舍一栋",
         sex: "女",
         name: "梅花",
         avatarurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
         contact: "15520449931",
         money: 3,
         time: "2019-3-19 09:35:25",
         status: 0
       },
       {
         id: 6,
         goods: "辣条",
         addr: "6舍一栋",
         sex: "女",
         name: "梅花",
         avatarurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
         contact: "15520449931",
         money: 3,
         time: "2019-3-19 09:35:25",
         status: 0
       }
     ],
    //北校区
     shophelper1: [
       {
         id: 1,
         goods: "小辣棒",
         addr: "5舍一栋",
         sex: "男",
         name: "唐一",
         avatarurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
         contact: "15520449931",
         money: 3,
         time: "2019-3-19 16:35:25",
         status: 1
       },
       {
         id: 2,
         goods: "大辣条",
         addr: "6舍一栋",
         sex: "女",
         name: "梅花",
         avatarurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
         contact: "15520449931",
         money: 3,
         time: "2019-3-19 13:35:25",
         status: 0
         
       },
       {
         id: 3,
         goods: "大面筋",
         addr: "6舍一栋",
         sex: "女",
         name: "梅花",
         avatarurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
         contact: "15520449931",
         money: 3,
         time: "2019-3-19 09:35:25",
         status: 0
       }
     ],
  }
}


module.exports={
  getIndex: getIndex,
  getFoundthing: getFoundthing,
  getShopHelper: getShopHelper,
  lostAndFound: lostAndFound
}