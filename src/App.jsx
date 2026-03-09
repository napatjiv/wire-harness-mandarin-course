import { useState } from "react";
import { pinyin } from "pinyin-pro";

const COURSE_DATA = {
  title: "线束中文课程",
  subtitle: "Wire Harness Mandarin Course — HSK 3-4 Level",
  modules: [
    {
      id: 1,
      title: "第一课：什么是 Wire Harness？",
      titleEn: "Lesson 1: What is a Wire Harness?",
      intro: "在这一课里，我们会学习 wire harness 的基本知识。Wire harness 就像汽车的血管和神经，把电力和信号送到车里的每个地方。",
      introEn: "In this lesson, we'll learn the basics of wire harnesses. A wire harness is like a car's blood vessels and nerves, delivering power and signals to every part of the vehicle.",
      vocab: [
        { zh: "汽车", pinyin: "qìchē", en: "automobile / car", example: "Yazaki 给很多汽车公司做 wire harness。", exampleEn: "Yazaki makes wire harnesses for many auto companies." },
        { zh: "电力", pinyin: "diànlì", en: "electric power", example: "Wire harness 把电力送到车里的每个地方。", exampleEn: "Wire harnesses deliver electric power to every part of the car." },
        { zh: "信号", pinyin: "xìnhào", en: "signal", example: "这些 wire 可以传送信号和电力。", exampleEn: "These wires can transmit signals and electric power." },
        { zh: "连接", pinyin: "liánjiē", en: "to connect", example: "Wire harness 的工作就是连接不同的电子设备。", exampleEn: "The job of a wire harness is to connect different electronic devices." },
        { zh: "安全", pinyin: "ānquán", en: "safe / safety", example: "安全是我们做 wire harness 最重要的事情。", exampleEn: "Safety is the most important thing when we make wire harnesses." },
        { zh: "保护", pinyin: "bǎohù", en: "to protect", example: "外面的材料保护 wire 不受水和热的影响。", exampleEn: "The outer material protects the wires from water and heat." },
        { zh: "传送", pinyin: "chuánsòng", en: "to transmit / deliver", example: "Wire harness 传送电力给发动机。", exampleEn: "The wire harness transmits power to the engine." },
        { zh: "设备", pinyin: "shèbèi", en: "equipment / device", example: "汽车里有很多电子设备需要 wire harness 来连接。", exampleEn: "There are many electronic devices in a car that need wire harnesses to connect them." },
      ],
      reading: `Wire harness 是什么？简单来说，wire harness 就是把很多 wire 和 cable 放在一起的东西。你可以把它想成汽车的"神经系统"。

在一辆汽车里面，有非常多的电子设备。比如说，engine management system、灯、air conditioning 和安全系统，这些都需要电力和信号。Wire harness 的工作就是把这些设备连接在一起，让电力和信号可以安全地传送。

如果没有 wire harness，车里的 wire 会非常乱，也不安全。Wire harness 把所有的 wire 整理在一起，用特别的材料保护它们。这样不但更安全，安装也更方便。

Yazaki 从 1929 年开始做 wire harness，现在是世界上最大的 wire harness 生产公司。Yazaki 在 46 个国家都有工厂，给丰田、本田等很多汽车公司提供 wire harness。`,
      readingEn: `What is a wire harness? Simply put, a wire harness is something that bundles many wires and cables together. You can think of it as a car's "nervous system."

Inside a car, there are very many electronic devices. For example, the engine management system, lights, air conditioning, and safety systems all need power and signals. The wire harness's job is to connect these devices together, allowing power and signals to be safely transmitted.

Without wire harnesses, the wires inside a car would be very messy and unsafe. Wire harnesses organize all the wires together, using special materials to protect them. This is not only safer, but also more convenient to install.

Yazaki started making wire harnesses in 1929 and is now the world's largest wire harness manufacturer. Yazaki has factories in 46 countries and supplies wire harnesses to many auto companies like Toyota and Honda.`,
      quiz: [
        { q: "Wire harness 的主要工作是什么？", qEn: "What is the main job of a wire harness?",
          options: ["A. 让汽车更好看", "B. 连接电子设备，传送电力和信号", "C. 让汽车开得更快", "D. 保护发动机"],
          answer: 1 },
        { q: "Yazaki 是什么时候开始做 wire harness 的？", qEn: "When did Yazaki start making wire harnesses?",
          options: ["A. 1939 年", "B. 2000 年", "C. 1929 年", "D. 1950 年"],
          answer: 2 },
        { q: "“保护”是什么意思？", qEn: "What does 保护 (bǎohù) mean?",
          options: ["A. to connect", "B. to transmit", "C. to protect", "D. to install"],
          answer: 2 },
      ]
    },
    {
      id: 2,
      title: "第二课：Wire Harness 的组成部分",
      titleEn: "Lesson 2: Components of a Wire Harness",
      intro: "今天我们要学习 wire harness 是由哪些部分组成的。每个部分都有自己的作用。",
      introEn: "Today we'll learn what parts make up a wire harness. Each part has its own function.",
      vocab: [
        { zh: "组成", pinyin: "zǔchéng", en: "to compose / make up", example: "Wire harness 由很多部分组成。", exampleEn: "Wire harnesses are made up of many parts." },
        { zh: "材料", pinyin: "cáiliào", en: "material", example: "做 wire harness 需要用很多不同的材料。", exampleEn: "Making wire harnesses requires many different materials." },
        { zh: "铜", pinyin: "tóng", en: "copper", example: "大部分 wire 的里面是铜做的。", exampleEn: "Most wires are made of copper inside." },
        { zh: "铝", pinyin: "lǚ", en: "aluminum", example: "Yazaki 也在用铝来做更轻的 wire harness。", exampleEn: "Yazaki is also using aluminum to make lighter wire harnesses." },
        { zh: "轻", pinyin: "qīng", en: "light (weight)", example: "铝比铜轻很多。", exampleEn: "Aluminum is much lighter than copper." },
        { zh: "重", pinyin: "zhòng", en: "heavy", example: "太重的 wire harness 会让汽车用更多的油。", exampleEn: "Wire harnesses that are too heavy make a car use more fuel." },
        { zh: "绝缘", pinyin: "juéyuán", en: "insulation (to insulate)", example: "绝缘材料可以防止电流泄漏。", exampleEn: "Insulation materials can prevent current from leaking." },
        { zh: "部分", pinyin: "bùfen", en: "part / component", example: "每个部分都很重要。", exampleEn: "Every part is important." },
      ],
      reading: `一个 wire harness 由很多部分组成。让我们来看看这些重要的部分：

第一，wire（电线）。Wire 是 wire harness 最基本的部分。Wire 里面通常是铜做的，因为铜传送电力的能力很好。但是，铜比较重。所以 Yazaki 现在也在研究用铝来做 wire，因为铝更轻。这样可以让汽车更轻，用更少的油。

第二，connector（连接器）。Connector 是把 wire 和电子设备连接在一起的东西。Yazaki 做很多不同种类的 connector，有大的，有小的，有能防水的。

第三，terminal（端子）。Terminal 是 connector 里面的小金属部分，它直接接触电流。Terminal 必须做得很好，连接必须很紧。这个过程叫做 crimping。

第四，绝缘材料。每根 wire 外面都包着一层绝缘材料。绝缘材料的作用是保护 wire，防止电流泄漏，也防止 wire 受到水、热和摩擦的影响。

第五，grommet（密封圈）。Grommet 是一个橡胶做的 seal，可以防止水和灰尘进入 connector。`,
      readingEn: `A wire harness is made up of many parts. Let's look at these important parts:

First, wires. Wires are the most basic part of a wire harness. Wires are usually made of copper inside, because copper has excellent power transmission capability. However, copper is relatively heavy. So Yazaki is now also researching using aluminum for wires, because aluminum is lighter. This can make cars lighter and use less fuel.

Second, connectors. Connectors are what connect wires to electronic devices. Yazaki makes many different types of connectors — big ones, small ones, waterproof ones.

Third, terminals. Terminals are the small metal parts inside connectors that directly contact electric current. Terminals must be made well and the connection must be tight. This process is called crimping.

Fourth, insulation materials. Each wire is wrapped in a layer of insulation material. Insulation protects wires, prevents current leakage, and also prevents wires from being affected by water, heat, and friction.

Fifth, grommets. A grommet is a rubber seal that prevents water and dust from entering the connector.`,
      quiz: [
        { q: "为什么 Yazaki 要用铝来做 wire？", qEn: "Why does Yazaki want to use aluminum for wires?",
          options: ["A. 因为铝更便宜", "B. 因为铝更轻", "C. 因为铝的颜色更好看", "D. 因为铝更硬"],
          answer: 1 },
        { q: "“组成”是什么意思？", qEn: "What does 组成 (zǔchéng) mean?",
          options: ["A. to protect", "B. to install", "C. to compose / make up", "D. to connect"],
          answer: 2 },
        { q: "绝缘材料的作用是什么？", qEn: "What is the function of insulation material?",
          options: ["A. 让 wire 更重", "B. 保护 wire，防止电流泄漏", "C. 让 wire 传送信号更快", "D. 让 wire 的颜色不一样"],
          answer: 1 },
      ]
    },
    {
      id: 3,
      title: "第三课：Wire Harness 的生产过程",
      titleEn: "Lesson 3: The Wire Harness Manufacturing Process",
      intro: "在这一课里，我们学习 wire harness 是怎么做出来的。这个过程大部分还是需要人工来完成。",
      introEn: "In this lesson, we'll learn how wire harnesses are made. This process still mostly requires manual labor.",
      vocab: [
        { zh: "生产", pinyin: "shēngchǎn", en: "to produce / production", example: "Wire harness 的生产过程很复杂。", exampleEn: "The wire harness production process is very complex." },
        { zh: "过程", pinyin: "guòchéng", en: "process", example: "让我给你介绍一下这个过程。", exampleEn: "Let me introduce this process to you." },
        { zh: "工人", pinyin: "gōngrén", en: "worker", example: "工厂里有很多工人在做 wire harness。", exampleEn: "There are many workers in the factory making wire harnesses." },
        { zh: "切", pinyin: "qiē", en: "to cut", example: "第一步是把 wire 切成需要的长度。", exampleEn: "The first step is to cut the wires to the needed length." },
        { zh: "安装", pinyin: "ānzhuāng", en: "to install", example: "安装 wire harness 比安装一根一根的 wire 方便多了。", exampleEn: "Installing a wire harness is much more convenient than installing wires one by one." },
        { zh: "检查", pinyin: "jiǎnchá", en: "to inspect / check", example: "每个 wire harness 做好以后都要仔细检查。", exampleEn: "Every wire harness must be carefully inspected after it's made." },
        { zh: "质量", pinyin: "zhìliàng", en: "quality", example: "Yazaki 非常重视产品的质量。", exampleEn: "Yazaki places great importance on product quality." },
        { zh: "设计", pinyin: "shèjì", en: "to design / design", example: "工程师先设计 wire harness，然后工人再生产。", exampleEn: "Engineers first design the wire harness, then workers produce it." },
      ],
      reading: `Wire harness 的生产过程是怎样的？这是一个很有意思的话题。

虽然现在很多行业都用机器人来生产东西，但是 wire harness 的生产大部分还是靠人工。为什么？因为 wire harness 的形状很复杂，每种汽车的 wire harness 都不一样，机器很难做这种工作。Yazaki 的工厂里有很多工人。

生产的过程大概是这样的：

第一步：切 wire。用专门的机器把 wire 切成设计要求的长度。在切的时候，机器也会在 wire 上面印标记。

第二步：stripping。把 wire 两头的绝缘材料去掉，让里面的金属露出来。

第三步：crimping。把 terminal 压到 wire 上面。这个过程必须做得很好，连接要很紧。

第四步：组装。工人在一个大的 assembly board 上面，把所有的 wire 按照设计图放好，然后绑在一起。

第五步：检查。做好的 wire harness 要经过很多检查。比如电路检查（看电流能不能正常通过）和尺寸检查（看大小对不对）。

质量是最重要的。因为如果 wire harness 有问题，汽车的安全就会有问题。所以 Yazaki 非常重视质量。`,
      readingEn: `What is the wire harness production process like? This is a very interesting topic.

Although many industries now use robots to produce things, wire harness production still mostly relies on manual labor. Why? Because wire harnesses have complex shapes, each car model's wire harness is different, and machines have difficulty doing this kind of work. Yazaki's factories have many workers.

The production process is roughly like this:

Step 1: Cut the wires. Use specialized machines to cut wires to the lengths required by the design. While cutting, the machine also prints markings on the wires.

Step 2: Stripping. Remove the insulation from both ends of the wire, exposing the metal inside.

Step 3: Crimping. Press terminals onto the wires. This process must be done well — the connection must be tight.

Step 4: Assembly. Workers place all wires on a large assembly board according to the design drawings, then bundle them together.

Step 5: Inspection. Completed wire harnesses undergo many inspections. For example, circuit testing (checking if current can flow normally) and dimensional checks (checking if the size is correct).

Quality is the most important thing. Because if a wire harness has a problem, the car's safety will be compromised. So Yazaki places great importance on quality.`,
      quiz: [
        { q: "为什么 wire harness 的生产大部分还是靠人工？", qEn: "Why does wire harness production mostly still rely on manual labor?",
          options: ["A. 因为机器太贵了", "B. 因为形状复杂，每种汽车都不一样", "C. 因为工人比机器快", "D. 因为法律要求"],
          answer: 1 },
        { q: "“质量”是什么意思？", qEn: "What does 质量 (zhìliàng) mean?",
          options: ["A. quantity", "B. speed", "C. quality", "D. price"],
          answer: 2 },
        { q: "生产过程的第一步是什么？", qEn: "What is the first step of the production process?",
          options: ["A. 检查", "B. 组装", "C. 切 wire", "D. crimping"],
          answer: 2 },
      ]
    },
    {
      id: 4,
      title: "第四课：Yazaki 和汽车行业",
      titleEn: "Lesson 4: Yazaki and the Automotive Industry",
      intro: "今天我们来了解 Yazaki 在汽车行业里的地位，以及 wire harness 行业面对的变化。",
      introEn: "Today we'll understand Yazaki's position in the automotive industry and the changes the wire harness industry faces.",
      vocab: [
        { zh: "行业", pinyin: "hángyè", en: "industry", example: "Wire harness 行业正在发生很大的变化。", exampleEn: "The wire harness industry is undergoing big changes." },
        { zh: "客户", pinyin: "kèhù", en: "customer / client", example: "Yazaki 的客户包括丰田、本田和福特。", exampleEn: "Yazaki's clients include Toyota, Honda, and Ford." },
        { zh: "提供", pinyin: "tígōng", en: "to provide / supply", example: "Yazaki 给全世界的汽车公司提供 wire harness。", exampleEn: "Yazaki supplies wire harnesses to auto companies worldwide." },
        { zh: "需求", pinyin: "xūqiú", en: "demand / need", example: "电动汽车对 high-voltage wire harness 的需求越来越大。", exampleEn: "Demand for high-voltage wire harnesses in EVs is growing." },
        { zh: "研究", pinyin: "yánjiū", en: "to research / research", example: "Yazaki 在研究怎么用更少的 wire。", exampleEn: "Yazaki is researching how to use fewer wires." },
        { zh: "发展", pinyin: "fāzhǎn", en: "to develop / development", example: "这个行业发展得很快。", exampleEn: "This industry is developing very fast." },
        { zh: "挑战", pinyin: "tiǎozhàn", en: "challenge", example: "电动汽车给 wire harness 行业带来了新的挑战。", exampleEn: "EVs have brought new challenges to the wire harness industry." },
        { zh: "全球", pinyin: "quánqiú", en: "global / worldwide", example: "Yazaki 是一个全球性的公司。", exampleEn: "Yazaki is a global company." },
      ],
      reading: `Yazaki 是世界上最大的 wire harness 公司。公司 1929 年在日本开始做生意，最早是一个小的家族企业。现在 Yazaki 在全球 46 个国家都有工厂和办公室，有超过 19 万员工。

Yazaki 的 wire harness 销售大约占公司收入的 90%。公司的客户包括日本的丰田、本田，美国的通用、福特，还有其他很多汽车公司。

现在，汽车行业正在经历很大的变化。电动汽车（EV）和混合动力汽车（HEV）越来越多。这些车需要 high-voltage wire harness 来把电池的电力传送到电动马达。这是一个很大的机会。

但是也有挑战。汽车里的电子设备越来越多，如果每个设备都用 wire 连接，wire 的数量和重量就会太多。Yazaki 正在研究几个解决办法：

第一，用铝代替铜。铝更轻，可以减少 wire harness 的重量。
第二，multiplexing。让一根 wire 传送更多的信号。
第三，无线技术。用 wireless 的方式在汽车里面传送信号。

这些变化既是挑战也是机会。Yazaki 不只想做一个 wire 公司，还想成为一个电气电子配电和显示系统的供应商。`,
      readingEn: `Yazaki is the world's largest wire harness company. The company started in Japan in 1929 as a small family business. Now Yazaki has factories and offices in 46 countries globally, with over 190,000 employees.

Yazaki's wire harness sales account for about 90% of the company's revenue. Clients include Toyota, Honda, GM, Ford, and many others.

The automotive industry is undergoing major changes. EVs and HEVs are becoming more common. These vehicles need high-voltage wire harnesses to transmit battery power to the electric motor. This is a big opportunity.

But there are challenges. With more electronics in cars, the number and weight of wires becomes too much. Yazaki is researching several solutions:

First, replacing copper with aluminum for lighter harnesses.
Second, multiplexing — one wire carrying more signals.
Third, wireless technology — transmitting signals wirelessly inside the car.

These changes are both challenges and opportunities. Yazaki wants to become not just a wire company, but a supplier of electrical/electronic distribution and display systems.`,
      quiz: [
        { q: "Wire harness 的销售大约占 Yazaki 收入的多少？", qEn: "About how much of Yazaki's revenue comes from wire harness sales?",
          options: ["A. 50%", "B. 70%", "C. 90%", "D. 100%"],
          answer: 2 },
        { q: "“挑战”是什么意思？", qEn: "What does 挑战 (tiǎozhàn) mean?",
          options: ["A. opportunity", "B. challenge", "C. research", "D. solution"],
          answer: 1 },
        { q: "Yazaki 用什么来代替铜？", qEn: "What is Yazaki using to replace copper?",
          options: ["A. 铁 (iron)", "B. 铝 (aluminum)", "C. 金 (gold)", "D. 塑料 (plastic)"],
          answer: 1 },
      ]
    },
    {
      id: 5,
      title: "第五课：工作中的中文",
      titleEn: "Lesson 5: Chinese for the Workplace",
      intro: "在这最后一课里，我们学习在 wire harness 公司工作时常用的中文表达。",
      introEn: "In this final lesson, we'll learn common Chinese expressions used when working at a wire harness company.",
      vocab: [
        { zh: "项目", pinyin: "xiàngmù", en: "project", example: "我在负责一个新的项目。", exampleEn: "I'm in charge of a new project." },
        { zh: "协调", pinyin: "xiétiáo", en: "to coordinate", example: "我的工作是协调不同部门之间的合作。", exampleEn: "My job is to coordinate cooperation between departments." },
        { zh: "供应商", pinyin: "gōngyìngshāng", en: "supplier", example: "Yazaki 是汽车行业最大的 wire harness 供应商。", exampleEn: "Yazaki is the largest wire harness supplier in the auto industry." },
        { zh: "合作", pinyin: "hézuò", en: "to cooperate / cooperation", example: "我们需要跟客户紧密合作。", exampleEn: "We need to work closely with our clients." },
        { zh: "交货", pinyin: "jiāohuò", en: "to deliver (goods)", example: "我们必须按时交货。", exampleEn: "We must deliver on time." },
        { zh: "成本", pinyin: "chéngběn", en: "cost", example: "我们要在保证质量的同时降低成本。", exampleEn: "We need to reduce costs while maintaining quality." },
        { zh: "改善", pinyin: "gǎishàn", en: "to improve / kaizen", example: "我们一直在改善生产过程。", exampleEn: "We are always improving the production process." },
        { zh: "报告", pinyin: "bàogào", en: "report", example: "请在下周一之前交报告。", exampleEn: "Please submit the report by next Monday." },
      ],
      reading: `作为 Yazaki 的 project coordinator，你需要知道一些工作中常用的表达。让我们来学习一些。

介绍自己的工作：
"我在 Yazaki 工作，是一个 venture coordinator。我的主要工作是协调不同部门之间的合作。"

开会时常用的话：
"这个项目的进度怎么样了？" — 问项目的情况
"我们需要在下个月之前交货。" — 说交货时间
"成本太高了，我们需要想办法降低。" — 讨论成本
"质量方面有没有什么问题？" — 问质量

和供应商沟通：
"我们对你们的产品质量非常满意。" — 表示满意
"交货时间能不能提前？" — 要求更早交货
"价格方面可以再谈一下吗？" — 谈价格

汇报工作：
"这个月的报告已经写好了。" — 说报告的情况
"跟上个月相比，生产效率改善了百分之五。" — 汇报改善
"下一步我们计划研究新的材料。" — 说未来的计划

在 wire harness 行业工作，了解中文不但可以帮助你跟中国的供应商和客户沟通，也可以帮助你更好地了解亚洲市场。`,
      readingEn: `As a project coordinator at Yazaki, you need to know commonly used expressions at work. Let's learn some.

Introducing your work:
"I work at Yazaki as a venture coordinator. My main job is coordinating cooperation between departments."

Common meeting phrases:
"How is this project progressing?" — asking about status
"We need to deliver by next month." — stating deadlines
"The cost is too high; we need to find ways to reduce it." — discussing costs
"Any quality issues?" — asking about quality

Communicating with suppliers:
"We are very satisfied with your product quality." — expressing satisfaction
"Can delivery be moved up?" — requesting earlier delivery
"Can we discuss the price further?" — negotiating

Work reports:
"This month's report is done." — reporting status
"Compared to last month, production efficiency improved by 5%." — reporting improvements
"Next, we plan to research new materials." — stating future plans

Working in the wire harness industry, understanding Chinese can help you communicate with Chinese suppliers and clients, and better understand the Asian market.`,
      quiz: [
        { q: "“协调”是什么意思？", qEn: "What does 协调 (xiétiáo) mean?",
          options: ["A. to produce", "B. to coordinate", "C. to deliver", "D. to inspect"],
          answer: 1 },
        { q: "你想让供应商更早交货，应该怎么说？", qEn: "If you want a supplier to deliver earlier, what would you say?",
          options: ["A. 价格可以再谈吗？", "B. 质量有没有问题？", "C. 交货时间能不能提前？", "D. 报告写好了吗？"],
          answer: 2 },
        { q: "“成本”是什么意思？", qEn: "What does 成本 (chéngběn) mean?",
          options: ["A. quality", "B. delivery", "C. schedule", "D. cost"],
          answer: 3 },
      ]
    },
  ]
};

const colors = {
  bg: "#0f172a",
  card: "#1e293b",
  cardHover: "#334155",
  accent: "#38bdf8",
  accentDark: "#0284c7",
  correct: "#22c55e",
  wrong: "#ef4444",
  text: "#f1f5f9",
  textDim: "#94a3b8",
  pinyin: "#fbbf24",
  border: "#334155",
  techWord: "#c084fc",
};

export default function App() {
  const [currentModule, setCurrentModule] = useState(null);
  const [currentTab, setCurrentTab] = useState("vocab");
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showReadingEn, setShowReadingEn] = useState(false);
  const [expandedVocab, setExpandedVocab] = useState({});

  const mod = currentModule !== null ? COURSE_DATA.modules[currentModule] : null;

  const handleQuizAnswer = (qIdx, optIdx) => {
    const key = `${currentModule}-${qIdx}`;
    if (quizAnswers[key] !== undefined) return;
    setQuizAnswers((prev) => ({ ...prev, [key]: optIdx }));
  };

  const getQuizScore = () => {
    if (!mod) return { correct: 0, total: 0 };
    let correct = 0;
    mod.quiz.forEach((q, i) => {
      if (quizAnswers[`${currentModule}-${i}`] === q.answer) correct++;
    });
    return { correct, total: mod.quiz.length };
  };

  const allQuizAnswered = mod
    ? mod.quiz.every(
        (_, i) => quizAnswers[`${currentModule}-${i}`] !== undefined
      )
    : false;

  const pinyinCache = {};
  const getCachedPinyin = (text) => {
    if (!pinyinCache[text]) {
      pinyinCache[text] = pinyin(text, { type: "array" });
    }
    return pinyinCache[text];
  };

  const renderWithPinyin = (text) => {
    const chineseRegex = /([\u4e00-\u9fff\u3400-\u4dbf]+)/g;
    const parts = text.split(chineseRegex);
    return parts.map((part, i) => {
      if (/^[\u4e00-\u9fff\u3400-\u4dbf]+$/.test(part)) {
        const pinyinArray = getCachedPinyin(part);
        return (
          <span key={i}>
            {part.split("").map((char, j) => (
              <ruby key={j}>
                {char}
                <rp>(</rp>
                <rt>{pinyinArray[j]}</rt>
                <rp>)</rp>
              </ruby>
            ))}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  const highlightTech = (text) => {
    const techTerms = [
      "wire harness", "wire", "cable", "connector", "terminal", "crimping",
      "assembly board", "grommet", "seal", "engine management system",
      "air conditioning", "stripping", "high-voltage", "multiplexing",
      "wireless", "EV", "HEV", "Wire harness", "Wire", "Cable",
      "Connector", "Terminal", "Crimping", "Assembly", "Grommet",
      "Yazaki", "venture coordinator", "project coordinator",
    ];
    const sorted = [...techTerms].sort((a, b) => b.length - a.length);
    const escaped = sorted.map((t) =>
      t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    const regex = new RegExp(`(${escaped.join("|")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) => {
      const isMatch = techTerms.some(
        (t) => t.toLowerCase() === part.toLowerCase()
      );
      return isMatch ? (
        <span key={i} style={{ color: colors.techWord, fontWeight: 600 }}>
          {part}
        </span>
      ) : (
        <span key={i}>{renderWithPinyin(part)}</span>
      );
    });
  };

  // ---- HOME ----
  if (currentModule === null) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: colors.bg,
          color: colors.text,
          fontFamily: "'Segoe UI', system-ui, sans-serif",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "40px 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>🔌</div>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 700,
                margin: "0 0 4px",
                color: colors.accent,
              }}
            >
              {renderWithPinyin(COURSE_DATA.title)}
            </h1>
            <p style={{ fontSize: 15, color: colors.textDim, margin: 0 }}>
              {COURSE_DATA.subtitle}
            </p>
            <div
              style={{
                marginTop: 16,
                display: "flex",
                gap: 8,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {["HSK 3-4", "Wire Harness", "Yazaki", "5 Lessons"].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 12,
                      padding: "4px 12px",
                      borderRadius: 999,
                      background: "rgba(56,189,248,0.15)",
                      color: colors.accent,
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {COURSE_DATA.modules.map((m, i) => (
              <button
                key={m.id}
                onClick={() => {
                  setCurrentModule(i);
                  setCurrentTab("vocab");
                  setShowReadingEn(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  background: colors.card,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 12,
                  padding: "16px 20px",
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                  color: colors.text,
                  transition: "all 0.15s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = colors.cardHover)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = colors.card)
                }
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: `linear-gradient(135deg, ${colors.accentDark}, ${colors.accent})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    fontWeight: 700,
                    flexShrink: 0,
                    color: "#fff",
                  }}
                >
                  {m.id}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 600 }}>{renderWithPinyin(m.title)}</div>
                  <div style={{ fontSize: 13, color: colors.textDim }}>
                    {m.titleEn}
                  </div>
                </div>
                <div style={{ color: colors.textDim, fontSize: 20 }}>→</div>
              </button>
            ))}
          </div>
          <div
            style={{
              marginTop: 32,
              padding: 20,
              background: colors.card,
              borderRadius: 12,
              border: `1px solid ${colors.border}`,
            }}
          >
            <h3
              style={{
                fontSize: 15,
                fontWeight: 600,
                margin: "0 0 8px",
                color: colors.pinyin,
              }}
            >
              📖 学习方法 How to Use
            </h3>
            <p
              style={{
                fontSize: 13,
                color: colors.textDim,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              每课有三个部分：
              <strong style={{ color: colors.text }}>词汇</strong>
              （vocabulary）、<strong style={{ color: colors.text }}>阅读</strong>
              （reading）和{" "}
              <strong style={{ color: colors.text }}>测验</strong>（quiz）。
              技术名词（如{" "}
              <span style={{ color: colors.techWord }}>
                wire harness, connector, terminal
              </span>
              ）保留英文。 点击词汇卡片看英文翻译和例句。先试着自己理解中文，再看翻译！
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ---- MODULE ----
  const tabs = [
    { key: "vocab", label: "📝 词汇", count: mod.vocab.length },
    { key: "reading", label: "📖 阅读" },
    { key: "quiz", label: "✏️ 测验", count: mod.quiz.length },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.bg,
        color: colors.text,
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "24px 20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <button
            onClick={() => setCurrentModule(null)}
            style={{
              background: colors.card,
              border: `1px solid ${colors.border}`,
              borderRadius: 8,
              padding: "8px 14px",
              cursor: "pointer",
              color: colors.textDim,
              fontSize: 14,
            }}
          >
            ← 课程
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 700 }}>{renderWithPinyin(mod.title)}</div>
            <div style={{ fontSize: 13, color: colors.textDim }}>
              {mod.titleEn}
            </div>
          </div>
        </div>

        <div
          style={{
            background: colors.card,
            borderRadius: 12,
            padding: 16,
            marginBottom: 20,
            border: `1px solid ${colors.border}`,
          }}
        >
          <p style={{ margin: 0, fontSize: 14, lineHeight: 2.4 }}>
            {highlightTech(mod.intro)}
          </p>
          <p
            style={{ margin: "8px 0 0", fontSize: 13, color: colors.textDim }}
          >
            {mod.introEn}
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setCurrentTab(t.key)}
              style={{
                flex: 1,
                padding: "10px 8px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                background:
                  currentTab === t.key ? colors.accent : colors.card,
                color: currentTab === t.key ? colors.bg : colors.textDim,
              }}
            >
              {t.label} {t.count ? `(${t.count})` : ""}
            </button>
          ))}
        </div>

        {/* VOCAB */}
        {currentTab === "vocab" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {mod.vocab.map((v, i) => {
              const isExp = expandedVocab[`${currentModule}-${i}`];
              return (
                <div
                  key={i}
                  onClick={() =>
                    setExpandedVocab((p) => ({
                      ...p,
                      [`${currentModule}-${i}`]: !isExp,
                    }))
                  }
                  style={{
                    background: colors.card,
                    borderRadius: 10,
                    padding: "14px 18px",
                    border: `1px solid ${
                      isExp ? colors.accent : colors.border
                    }`,
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <span style={{ fontSize: 22, fontWeight: 700 }}>
                        {v.zh}
                      </span>
                      <span
                        style={{
                          fontSize: 14,
                          color: colors.pinyin,
                          marginLeft: 12,
                        }}
                      >
                        {v.pinyin}
                      </span>
                    </div>
                    <span style={{ fontSize: 12, color: colors.textDim }}>
                      {isExp ? "▲" : "▼"}
                    </span>
                  </div>
                  {isExp && (
                    <div style={{ marginTop: 10 }}>
                      <div
                        style={{
                          fontSize: 14,
                          color: colors.accent,
                          marginBottom: 8,
                        }}
                      >
                        {v.en}
                      </div>
                      <div
                        style={{
                          background: "rgba(56,189,248,0.08)",
                          borderRadius: 8,
                          padding: 12,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 14,
                            lineHeight: 2.4,
                            marginBottom: 4,
                          }}
                        >
                          {highlightTech(v.example)}
                        </div>
                        <div style={{ fontSize: 12, color: colors.textDim }}>
                          {v.exampleEn}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* READING */}
        {currentTab === "reading" && (
          <div>
            <div
              style={{
                background: colors.card,
                borderRadius: 12,
                padding: 20,
                border: `1px solid ${colors.border}`,
                lineHeight: 2.6,
                fontSize: 15,
              }}
            >
              {mod.reading.split("\n").map((line, i) => (
                <p
                  key={i}
                  style={{
                    margin: line.trim() === "" ? "12px 0" : "0 0 8px",
                  }}
                >
                  {highlightTech(line)}
                </p>
              ))}
            </div>
            <button
              onClick={() => setShowReadingEn(!showReadingEn)}
              style={{
                marginTop: 12,
                width: "100%",
                padding: 12,
                background: showReadingEn ? colors.accentDark : colors.card,
                border: `1px solid ${colors.border}`,
                borderRadius: 8,
                color: colors.text,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              {showReadingEn
                ? "隐藏翻译 Hide Translation"
                : "显示翻译 Show Translation"}
            </button>
            {showReadingEn && (
              <div
                style={{
                  marginTop: 12,
                  background: "rgba(56,189,248,0.08)",
                  borderRadius: 12,
                  padding: 20,
                  border: `1px solid ${colors.border}`,
                  lineHeight: 1.9,
                  fontSize: 14,
                  color: colors.textDim,
                }}
              >
                {mod.readingEn.split("\n").map((line, i) => (
                  <p
                    key={i}
                    style={{
                      margin: line.trim() === "" ? "12px 0" : "0 0 8px",
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

        {/* QUIZ */}
        {currentTab === "quiz" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {mod.quiz.map((q, qIdx) => {
              const key = `${currentModule}-${qIdx}`;
              const answered = quizAnswers[key] !== undefined;
              const userAnswer = quizAnswers[key];
              return (
                <div
                  key={qIdx}
                  style={{
                    background: colors.card,
                    borderRadius: 12,
                    padding: 18,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  <div
                    style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}
                  >
                    {qIdx + 1}. {renderWithPinyin(q.q)}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: colors.textDim,
                      marginBottom: 12,
                    }}
                  >
                    {q.qEn}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    {q.options.map((opt, oIdx) => {
                      let bg = "rgba(56,189,248,0.06)";
                      let borderCol = colors.border;
                      if (answered) {
                        if (oIdx === q.answer) {
                          bg = "rgba(34,197,94,0.15)";
                          borderCol = colors.correct;
                        } else if (
                          oIdx === userAnswer &&
                          oIdx !== q.answer
                        ) {
                          bg = "rgba(239,68,68,0.15)";
                          borderCol = colors.wrong;
                        }
                      }
                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleQuizAnswer(qIdx, oIdx)}
                          style={{
                            background: bg,
                            border: `1px solid ${borderCol}`,
                            borderRadius: 8,
                            padding: "10px 14px",
                            textAlign: "left",
                            cursor: answered ? "default" : "pointer",
                            color: colors.text,
                            fontSize: 14,
                          }}
                        >
                          {renderWithPinyin(opt)}
                          {answered && oIdx === q.answer && " ✓"}
                          {answered &&
                            oIdx === userAnswer &&
                            oIdx !== q.answer &&
                            " ✗"}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            {allQuizAnswered && (
              <div
                style={{
                  background: `linear-gradient(135deg, ${colors.accentDark}, ${colors.accent})`,
                  borderRadius: 12,
                  padding: 20,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 24, fontWeight: 700 }}>
                  {getQuizScore().correct} / {getQuizScore().total}
                </div>
                <div style={{ fontSize: 14, marginTop: 4 }}>
                  {getQuizScore().correct === getQuizScore().total
                    ? "太好了！Perfect! 🎉"
                    : "继续加油！Keep going! 💪"}
                </div>
              </div>
            )}
          </div>
        )}

        {/* NAV */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 28,
            paddingBottom: 40,
          }}
        >
          <button
            onClick={() => {
              setCurrentModule(Math.max(0, currentModule - 1));
              setCurrentTab("vocab");
              setShowReadingEn(false);
            }}
            disabled={currentModule === 0}
            style={{
              padding: "10px 20px",
              borderRadius: 8,
              border: "none",
              background: currentModule === 0 ? colors.card : colors.accentDark,
              color: currentModule === 0 ? colors.textDim : colors.text,
              cursor: currentModule === 0 ? "default" : "pointer",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            ← 上一课
          </button>
          <button
            onClick={() => {
              setCurrentModule(
                Math.min(COURSE_DATA.modules.length - 1, currentModule + 1)
              );
              setCurrentTab("vocab");
              setShowReadingEn(false);
            }}
            disabled={currentModule === COURSE_DATA.modules.length - 1}
            style={{
              padding: "10px 20px",
              borderRadius: 8,
              border: "none",
              background:
                currentModule === COURSE_DATA.modules.length - 1
                  ? colors.card
                  : colors.accent,
              color:
                currentModule === COURSE_DATA.modules.length - 1
                  ? colors.textDim
                  : colors.bg,
              cursor:
                currentModule === COURSE_DATA.modules.length - 1
                  ? "default"
                  : "pointer",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            下一课 →
          </button>
        </div>
      </div>
    </div>
  );
}
