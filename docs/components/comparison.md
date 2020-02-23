## 对比其他UI框架

当你看到这里，说明你对uView还是认可的，或许你还无法抉择，UI框架这么多，我该选择谁？  

或许你做过很多其他的项目，并且使用其他的框架或者插件解决了你的问题，比如PC端的`Element UI`，`iView`，`Antd-vue`，或者是小程序的`Vant`，`We UI`，`Min UI`，抑或是uni生态
的`uni-ui`，`Color UI`，`Thor UI`，`Grace UI`等，基于以上，你想看看uView是否你下一个项目更好的选择，作为uView的缔造者，我们希望能够客观的回答您的问题。

### PC端的Element UI，iView，Antd-vue

毫无疑问，他们都是VUE生态的佼佼者，如果您是VUE的使用者，相信您一定使用过它们，并为它们的精妙而赞叹。

- 它们都有丰富和全面的组件，让人信手拈来
- 它们都有详尽的文档和示例，让人一目了然
- 它们都有很漂亮的后台模板，让人爱不释手

基于以上，我们认为它们是优秀且值得拥有的——如果您是在开发一个PC端项目的话，我们推荐您尽情的使用它们。但是我们要告诉您的是，uView也有丰富的组件，
以及同样详尽的文档，同时借助uni实现8个平台编译的能力，这是它们所不具备的，并且我们一直为uView做得更优秀而努力。 
 
就如以上所说，它们都是PC端的UI框架，而**uView是uniapp生态的UI框架**，虽然它们本质都是由VUE驱动的，但是uni和PC两个完全不同的领域。因为uni
是移动端的(小程序，APP，H5等)的范畴，您也无法在uni项目中使用它们，所以uView和它们之间不存在交集。  
至此，相信您对uView和它们之间，已经有了一个清晰的认知。

### 小程序的Vant，We UI，Min UI

这里说的小程序，指的是微信小程序，相比其他小程序平台，比如QQ，支付宝小程序，从生态来讲，无疑微信小程序是最值得我们探讨的。 
 
在探讨这个问题之前，我们认为有必要提一下uni的历史，最开始的时候，也就是2018年初时，uni崛地而起，方兴未艾，彼时uni还是借助mpvue(目前uni已实现自己的编译引擎)去实现对
微信小程序的支持，实现对微信小程序，Android，IOS三个平台的编译能力，后来众望所归的加入对H5的支持。  

在早期，社区对uni是否支持`Vant`很是关切，官方也明确给出答案，支持`Vant`编译到微信小程序，Android和IOS，但是不支持编译到H5，这就导致很多人在做uni项目时
放弃了`Vant`(Hbuilder X 2.4.7.20191216-alpha起，H5平台、QQ小程序 支持运行微信小程序组件)，到目前为止(2020年)，微信小程序组件还不支持运行到其他小程序平台，
uni V3版本后，官方也逐渐弱化了对微信小程序生态的依赖，因为uni生态已羽翼渐丰，无需再借助微信小程序生态助力。  

我们依然要说，微信小程序生态是目前所有小程序平台中最繁荣的，也有很多优秀的UI框架，比如`Vant`，`iView WeApp`，`We UI`，`Min UI`，`Wux WeApp`等。  

注意，以上的微信小程序UI框架，都是基于原生微信API开发的，如果您要使用原生的微信API开发小程序，而不是借助mpvue或者uniapp现实更友好的开发的话，我们优先建议您选择`Vant`。
这些小程序UI，它们天生就是基于微信小程序的，只是恰巧uni为了小程序的生态而支持了它们，随着uni对微信小程序生态依赖的弱化，以后难免会出现不兼容的问题，
再者它们也无法编译到其他小程序平台，无法实现开发者8个平台编译的宏伟构想，而uView天生就是为uni而开发的，我们对uni抱有崇高的敬意，并且为了让uView成为
uni生态最优秀的UI框架而不懈努力。

故此，我们认为，如果您要使用原生的微信API开发小程序，它们会让您事半功倍。但是，如果要借助uni开发，uView或许是您更好的选择。


### uni生态的uni-ui，Color UI，Thor UI，Grace UI

之所以放到最后比较，是因为我们认为这是最重要的，和上面的比较不同，这几个UI框架，都是基于uni生态的(不确定`Color UI`严格意义上算不算，见下方解释)。
我们认为，它们都很不错，并且都早于uView诞生，uView也借鉴过它们的思想，在此对它们表示感谢和敬意。  

下面我们对以上几个UI逐一比较和说明，您也可以并且应该有自己的见解，并得出自己认为正确的结论。  

#### uni-ui

`uni-ui`是uni官方所出UI框架，理论上，它对uni的新功能支持度和uni能力的理解是最透彻的，也是uni生态最早的UI框架，其他UI框架可能会兴起，也可能会没落，
但只要uni还在，`uni-ui`就会越来越好，以下分别对`uni-ui`的优缺点进行一个概述：

优点：
- 官方出品，性能有保证，并且目前也已经兼容`nvue`
- 组件比较全面，覆盖了基本的应用场景
- 有官方文档，Hbuilder X内置并且支持`uni-ui`的语法提示

缺点：
- 组件不够丰富，颜值有待提升，而uView有更丰富的组件
- 没有专门的文档，只是单个拆分的组件在uni插件市场有介绍，uView有最详尽的文档支持
- 没有对uni能力的一些封装，事实上，`uni-ui`没这个必要，因为uni就是它自家的

我们相信，`uni-ui`是很优秀的，但是社区经常会有人问有没有更好的UI框架，究其原因，是因为官方有更伟大和迫切的开源事业要做，而`uni-ui`是抛砖引玉之作。
相比之下，第三方出品的UI(如uView)，开发团队会倾尽全力去提升UI的组件和颜值，完善文档和社区支持，才能获得开发者的青睐。

::: warning 说明
Hbuilder X 2.5.3版本(2020年1月份)，引入了`easycom`功能(详见[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom))，让我们拥有了可以统一引入组件的能力，从而摆脱了要使用一个组件，都要`import`一遍的困扰，
`uni-ui`首先对这个功能进行了支持，uView也迅速跟进，引入了此功能
:::

#### Color UI

我们认为，`Color UI`最早是为微信小程序而开发的，就如它的作者所言：**ColorUI是一个css库，是鲜亮的高饱和色彩，专注视觉的小程序组件库**。我们
高度赞同作者的观点，也如作者所言`Color UI`是一个css库，它所有的效果都是由一个庞大的css文件驱动的，严格来讲，它不是一个组件库，由此：  

- `Color UI`官方没有说明文档，导致您需要从它的案例中抽丝剥茧的提取出你想要效果的css类，uView有详细的文档支持
- 一个没有组件的UI，因为单靠css类很难承载更强大的能力，uView不靠css类库实现功能，而是将css融入到各个组件中进行解耦，并且有强大的js去驱动丰富的组件
- `Color UI`最早不是为uni而生的，它内部没有uni能力的深度支持。2019年早期，uni插件市场大赛的时候，`Color UI`迅速适配uni，一炮而红，获得了大奖之后，`Color UI`就
再也没有进行过更新(截止2020年初)

我们认为`Color UI`的css写得十分优秀，甚至是精辟，不管使用与否，如果您对它深入探究，一定会对它的一些独到之处拍案惊奇。

#### Thor UI

我们认为，`Thor UI`很全面，有小程序和uni两个版本，作者也一直对它进行更新和优化，以下为我们对它的评价：

- `Thor UI`组件丰富，模板也很多，包括商城，新闻模板等。这方面uView目前还有所欠缺，但是我们一直都在壮大它的模板生态
- `Thor UI`有比较详细的文档，而uView的文档更加详细
- `Thor UI`组件很多js写得很精妙，稳定且可靠

我们不对`Thor UI`和uView进行孰优孰劣的比较，我们能说的是，uView也很优秀，您可以根据自己的判断做出自己认为正确的选择，这里也祝`Thor UI`越来越好。

#### Grace UI

首先，**Graceui是收费的**，目前(2020年初)，其授权费用为200元，如果您认为它很优秀，肯定会认为这是物有所值的，但是也有很多开发者认为，一个前端UI框架
的基础功能都收费，是不合理的，这里我们可以参考`iView`(最新4.0版本改名`View UI`)，它有基础的免费版，功能并没有因为免费而阉割，但是也有收费的Pro版。

- `Graceui`有丰富的组件库，并且有比较详细的文档，值得一提的是，它还有专门的weex和小程序版本
- `Graceui`文档不够详细，且没有示例demo，您无法做到先看看它的效果如何再决定是否购买授权，要使用某个组件的时候也无法做到"所见即所得"

抛开收费不说，我们认为`Graceui`和其他的UI框架一样，也是很优秀的，不然就不会在此进行比较，至于是否使用，看开发者的选择。


### uView

以上我们从各个领域和纬度对一些优秀的UI框架进行了对比，列出它们的优点和缺点，没有贬低之意，因为任何UI框架都有它的优点和不足，uView也是如此。

- uView是开源且免费的
- uView有很丰富的组件库，也有十分详尽的文档和示例，开发团队也很优秀，并为了uView更美好的未来而努力
- uView会不断迭代，添加新功能和修改不足，同时会引入更多的优秀模板

总的来说，uView是uni生态的一员，我们会努力成为最优秀的那一个，但有我们的努力是不够的，我们也希望能有其他更多的开发参与进来，贡献自己的力量，
为uView更美好的未来而一起努力，成为参与者，也是受益者，同时也祝愿uni生态欣欣向荣，前程似锦。



