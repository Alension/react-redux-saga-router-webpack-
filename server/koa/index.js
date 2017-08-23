const koa =require('koa');
const fs = require('fs')
const cors=require('koa2-cors')
const Router = require('koa-router')

const app = new koa()
app.use(cors())


let home = new Router()

// 子路由1
home.get('/', async ( ctx )=>{
    // language=HTML
   const data=[
       {"key":"知乎和 MITBBS",
           "value":"十多年前 ,当我离开清华的时候，有媒体报道说：“支持王垠的也就只有国内屌丝，看看海外华人居多的 MITBBS，评价就很不一样。” 后来的很多博文，也经常会上 MITBBS 的“十大头条”。 \r\n 这些都是别人告诉我的，因为我根本不上清华的那一次，也就是我第一次听说 MITBBS。似乎一个很高大上的名字，然而等你真正成为了“海外华人”，注册了 MITBBS 的账号，才发现它不但跟 MIT （麻省理工学院）没有任何关系，而且并不是心理正常的海外华人会出没的地方。我认识的友好的，有水平的人，没有一个上 MITBBS。MITBBS 称自己是海外华人的家园，还不如叫做“心理不正常华人的家园”。\r\n  很多年前，我也算是有过几个 MITBBS 的“马甲”了。出国初期的时候因为人生地不熟，到上面问过一些生活方面的问题，希望了解“海外华人”们的解决方案。在一次次的碰壁之后，我终于醒悟了，MITBBS 上是没法形成正常的讨论的，没法得到任何有价值的信息。为什么呢？因为上 MITBBS 灌水的人，大部分心态都不正常。他们在那上面灌水，目的只是弥补心理的缺失，在这个虚幻的空间中获得存在的价值。换句话说，就是装逼。\r\n 所以你去跟这样一群人交流，能得到什么呢？每一次心存希望，每一次得到的都是失望。因为那些喜欢在网络上装逼的人，在现实生活中找不到人可以鄙视，所以会很喜欢拿你来鄙视 :P 如果你有问题，使用搜索引擎找几篇英文文章出来，效果往往好很多，完全不需要上 BBS 提问或者交流。\r\n 知乎也是类似的。很多年前我受人蛊惑，开始上知乎回答少量问题。立马就有人来信跟我说：“哎呀，知乎这种民科待的地方，你怎么也去了？” 后来我发现他说的确实如此。知乎上出名的人，在现实中一般都有严重的问题，他们想要在那个虚幻的空间制造自己的知名度。不知情的小白们以为从他们那里学到了东西，然而内行一看就知道完全不够水准。这就是为什么我后来删除了我所有的答案，因为这些信息出现在知乎上，玷污了它们的价值。\r\n 最近忽然有人问我是不是开了“知乎专栏”，说有很多人关注，我有点摸不着头脑。其实那个“王垠的专栏”是很多年前，知乎网站人员联系我，鼓动我开的。当时我说不感兴趣，但他们说先给我开着，也许以后我会想用。我也没再过问那件事，所以专栏就一直留在那里了，我都忘记了它的存在。没想到几年以后才有人发现它，误以为我最近开了专栏。那显然是不可能的，由于知乎的愚昧性质，我不可能为这样的网站提供任何信息。\r\n 最近又有人鼓吹我上知乎，但我看了一阵子上面最新的问题之后，发现它们对我没有任何意义。知乎鼓励人们去免费回答问题，然而上面的问题都是水准很低，或者心态不大正常的。比如：“刚毕业就月薪过万是怎么样一种感受？” “拥有一个身材很好的女朋友是怎样一种感受？” “如何评价 XXX？” 这些问题看起来像是“知识”吗？只不过是为了让这些压抑的人有一个装逼或者发泄的机会而已。上知乎回答问题，其实是在贬低自己的价值。\r\n 所以呢，MITBBS 和知乎在我心目中，处于被完全忽略的地位。那上面的人无论怎么装逼，无论怎么黑我，对我没有任何作用，因为我并不把它们当成“人”来对待。\r\n 但有一个严重的问题，我想在这里谈一下。有些人因为看我的博客而联系我，经过一些对话，我觉得其中少数人还值得交流，所以回国之后在条件合适的情况下，接见了他们其中几个人。然而不久，我就发现知乎上有人谈论我“面基”的事情，原来其中某些人不知是何种目的，在知乎上透露了跟我见面的事情。虽然我看到的信息都是正面的，然而这种事情属于个人隐私，不应该在知乎这样的地方谈论，成为心理变态者们的话题。另外，我对“面基”或者“见面会”这种网络词汇有严重的反感。一旦出现，这种人会被立即删除和封锁。\r\n在我的要求之下，相关人员删除了此类问题并且表示歉意。但由于这个问题的出现，我决定进一步的加强对人员的鉴别。本来在初步的对话中我就会排除掉大部分的人，我很少会面见直接给我发信的人，但今后我面见的人还必须通过背景审查：他们不可以在知乎和 MITBBS 一类的地方有较高的活跃程度。否则这说明他们级别太低，或者有严重的心理问题。我将来要成立的公司，也会利用知乎上的信息对面试者进行背景调查。还得感谢知乎这个吹牛大王们聚集地方，提供了大量的信息让我可以窥探到很多人的内心世界，在很早的时候就过滤掉不合格的人"},
       {"key":"微博",
           "value":"由于之前受到网络暴民的困扰，所以一直不想开放评论。其实大部分人都理解我说的话，或者愿意提出一些善意的建议，但网络上总有很多一知半解和愚昧的人，喜欢进行一些谩骂和侮辱。因为这些人的活动而关闭绝大部分好心人的交互，是不值得的，它会使得那些传播谬论的人更加肆无忌惮。\r\n所以经过考虑之后，我决定通过微博开放对我文章的评论和讨论活动。我重新开了一个微博账号，欢迎大家关注。新的博文发布之后将在微博发布更新，并且欢迎讨论。之前一次重开微博，很多人向我抱怨说本来不再用微博的，不得不又开了账号重新开始用。我对这些人的支持表示感谢。\r\n微博只是一个工具，上面很多是吹牛扯淡煽风点火的人，但上面也可以有实实在在的人。因为它的普及性，我还是愿意利用它来分享一些想法的。吹牛扯淡的伪君子们有几千万粉丝，天天被他们念经洗脑。我为什么不可以有几千万的粉丝，传播靠谱一点的信息呢？所以我鼓励大家关注我的微博，并且推荐给你的朋友们，特别是那些非技术领域的容易被迷惑的人。\r\n由于我很少关注评论，私信可能也不能一一回复。如果看到网络暴民的无理辱骂和骚扰，还请各位出手维持秩序。"}
   ]
    ctx.body = data
})





// 加载路由中间件
app.use(home.routes()).use(home.allowedMethods())

app.listen(3000, () => {
    console.log('[demo] route-use-middleware is starting at port 3000')
})
