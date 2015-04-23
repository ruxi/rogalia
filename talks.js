function Talks() {
    this.stories = {
        "Oldman": "Все знают, что Старик давно из ума выжил, и только и умеет, что сидеть с важным видом и посохом в пол стучать, если шумно. Главный человек в деревне - шаман. Чего он накамлает, чего в ухо Старику нашепчет - то и будет. Если увидит шаман через птичий глаз, что ты с ночной лесницей спутался, - будешь наказан, хоть бы и ни одной лесницы в жизни не видал. А если учует, что ты с ней ублюдка зачал, - быть тебе изгоем. Даже родичи тебе не родичи станут, оленьей мочой кровные узы разольют, погаными мётлами оприходуют, в спину харкнут. Пойдёшь за частокол - ни с чем, в рванине, с клеймом на видном месте. Проживёшь, помрёшь ли - никто о том не узнает, да и не почешется узнать.",
        "Outlaws": "Говорят, живут в лесу такие изгои, в семьи даже сбиваются, дома срубают, поля в лесу выжигают, селения свои строят. Ну так на то и стража на валу стоит, с луками да железными рогатинами. Коли вздумают сунуться - не с хлебом будут их встречать, не с мясом. Хочешь - к ним иди, коли знаешь, куда идти. Они на деревьях и камнях тайные знаки ставят, дымы над лесом пускают, кричат птичьими голосами. Да только сожрут они тебя, вернее всего, и плошку из черепа сделают.",
        "The forest": "Хочешь - сам живи, проживай. Как хутор отстроишь, так можно и далее глядеть, коли жив да здоров будешь. Еды в лесу в достатке, и травы какие хочешь есть. Зверь местами непуганый. Только зверь разный бывает, сам смекаешь. Но звери - ладно, с ними можно как-нибудь, коль духи дозволят. Есть в лесу и другие разные твари, и не всякая из них видом приятна и безобидна, как белая лесница или ручейник. Не будешь осторожен - и здоровье, и душу, и жизнь потеряешь.",
        "People": "Можешь до большой дороги или до Реки добраться и махнуть в сторону полей и городов. Да только не нужен ты там никому, если торговать нечем. Не успеешь оком мигнуть - в рабы или солдаты угодишь, или просто подохнешь в канаве. Люди иногда поопаснее ночных тварей будут. Так что лучше уж в Лесу сперва обживись, дело, ремесло какое наладь, торговлю хоть с кем, оборону крепкую - а там можно и в города соваться. Говорят, некоторые из благородных, из Императорских Рыцарей даже, - из Лесу родом. А теперь, гляди, целые земли под ними. Да что там! Говорят, что пращур Императора нашего, да хранят его духи, и сам был... Впрочем, к чему о далёком да давнем толковать.",
        "Things": "Ещё говорят, у благородных особые шаманские песты есть, которые издали убивают, и телеги самоходные, и даже железные летуны небесные, в которых наездники сидят и сверху бочки с болотным духом кидают. Много чудес в мире, несть числа им! Да только тебе их не видать, куда там. Ты и дневного перехода за околицей не осилишь. Никто ты и звать никак. Нету имени у тебя, вместе с прочим отняли. Придётся прозвище взять. Придумал уже? Скажи-ка.",
    };
    this.rules = {
        presents: "Я возьму у тебя самую длинную комбинацию атомов и дам соответсвующий подарок. Комбинации бывают такими: ROGALIK, OGALIK, GALIK, ALIK, LIK, IK, K"
    };
    this.npcs = {
        "charles": {
            "default": {
                "male": [
                    "Привет, дружище!",
                    "Это снова ты? Хотя я, конечно, понимаю, в этой глуши кроме меня поговорить то почти и не с кем. Ну ладно, давай с самого начала.",
                    "Меня зовут Чарльз, и я секретарь местной Имперской канцелярии. Здорово да? Не спрашивай, за что меня сослали в эту дыру вместе с вами, но я даже начал находить некую прелесть в такой жизни.",
                    "В этом городке ты сможешь отдохнуть от работы и обменяться товарами с другими людьми.",
                    "Так как собраны здесь люди самые разные, за порядок отвечаю я, как хоть какой-то представитель власти.",
                    "Итак, у меня ты можешь:",
                ],
                "female": [
                    "Доброго дня, юная леди!",
                    "Рад снова вас видеть. Порой я задумываюсь, что же должна сделать столь прелестная особа, чтобы её отправили в эту дыру, но... Ну ладно, давайте с самого начала.",
                    "Меня зовут Чарльз, и я секретарь местной Имперской канцелярии. Здорово да? Это место не такое плохое, как кажется, я даже начинаю входить во вкус. В этом городке вы сможете отдохнуть от работы и обменяться товарами с другими людьми. Так как собраны здесь люди самые разные, за порядок отвечаю я, как хоть какой-то представитель власти.",
                    "Итак, что вы можете сделать с моей помощью:",
                ]
            },
            "empire": {
                "male": [
                    "Рад снова тебя видеть!",
                    "Я смотрю, даже в таких условиях ты остался верен Императору. Это похвально! Не потерять веру в правителя, не поддаться на сладкие речи Конфедератов... Так держать, друг! Провалиться мне на этом месте, со всей Имперской канцелярией, если я тебе не помогу. Я Чарльз, и я к твоим услугам.",
                ],
                "female": [
                    "Хорошего дня, юная леди!",
                    "Я очень рад, что даже когда вас забросило в эту дыру, вы не отвернулись от Имперских законов. Я надеялся, что вы останетесь с нами, в этом городе так не хватает честных и открытых барышень, которые не поддались на обещания этих Конфедератов. Я, глава Имперской канцелярии этого города - Чарльз, и я ваш верный рыцарь и покорный слуга. Просите, и я непременно помогу вам."
                ]
            },
            "confederation": {
                "male": [
                    "Привет, приятель.",
                    "Ну и как там? На службе у конфедератов. Надеюсь, хотя бы кормят хорошо? Впрочем, прости за грубость. Здесь мы все равны, и я не должен делать предпочтения тем, кто остался верен нашему правителю. Хоть я и глава… ИМПЕРСКОЙ канцелярии, но, тем не менее, за этот город отвечаю я, Чарльз, и поэтому я с радостью тебе помогу.",
                ],
                "female": [
                    "Юная леди!",
                    "Что привело вас ко мне на этот раз? Мне очень скорбно, что вы примкнули к этим варварам, но не переживайте, моё отношение к вам от этого не изменилось. У вас наверняка были свои мотивы, которые я не вправе осуждать. Все мы здесь в равных условиях, просто... Я надеялся, что вы выберете более утончённый путь. В любом случае, Чарльз Диввенс к вашим услугам.",
                ]
            },
            "actions": {
                "Bank": "Оставить деньги на хранение. Я местный банкир и нахожусь под защитой Императора, поэтому у меня они будут под лучшей защитой.",
                "Set citizenship": "Сказать к какой фракции ты принадлежишь. Да, Император с Конфедератами не в ладах, но здесь ты можешь не бояться, я уже говорил, тут собрались самые разные люди и никто не будет тебя бить за приверженность одной из сторон. Во всяком случае, в городе…",
                "Get claim": "Получить личный клейм. Поставленный на какой-то территории, он закрепит эту территорию за тобой, и ты сможешь, наконец, приносить пользу Империи не опасаясь того, что кто-то придёт и украдёт твоих кур.",
                "Quest": "Помочь членам твоей фракции в выживании здесь. Это слегка возвысит тебя в их глазах.",
                "Talk": "Ну и наконец, мы можем просто поговорить о том, о сём.",
            },
        },
        "shot": {
            "default": {
                "male": [
                    "Привет, красавчик, меня зовут Шот, но если у тебя есть деньги, для тебя я стану Лонг *хи-хи*.",
                    "Наш трактир \"Гарцующий Койот\", пожалуй, единственное место, которое заслуживает внимания в этом городке, что бы там ни говорил этот задавака Чарльз. У нас есть еда, вода и кое-что погорячее в соседней комнате. Но, я думаю, ты и без меня разберёшься.",
                ],
                "female": [
                    "Привет, подруга!",
                    "Меня зовут Шот, и я официантка \"Гарцующего Койота\". У нас есть еда и вода, есть конечно ещё кое что, но девушки редко интересуются подобным, поэтому даже рассказывать не буду. Наш городок довольно неплохой, хоть тут и собрались одни мужланы, да отбросы *хи-хи*. Но ничего, я думаю мы с тобой станем хорошими подругами.",
                ]
            },
            "empire": {
                "male": [
                    "Чего достопочтимый джентльмен изволит откушать сегодня?",
                    "У нас есть семена картошки, которую вы без труда сможете вырастить *хи-хи*. Первосортная вода в ассортименте. Есть из речки, есть из озера, есть даже из пруда. Да вы не смотрите так, это просто небольшой трактирчик, а не ресторан в центре Имперской столицы. Или заходя в заведение под названием \"Гарцующий Койот\" вы ожидали увидеть что-то иное? Меня зовут Шот, и я готова вас обслужить.",
                ],
                "female": [
                    "О! Леди пришла поужинать?",
                    "Ну, я надеюсь, я оправдаю ваши ожидания. У меня есть семена на любой вкус. В смысли? Нормальная еда? А что, думаете из этих семян не выйдет ничего путного? У меня и воду можно купить, чтобы их полить *хи-хи*. Шучу конечно. Воду пить можно только тут. Из наших стаканов, да. Да, вот так вот тяжко жить. Можете написать на меня жалобу. Так и напишите: \"Ваша официантка Шот, Конфедератка, дочь Конфедератов не уважает честных Имперских женщин\"."
                ]
            },
            "confederation": {
                "male": [
                    "Привет, красавчик, меня зовут Шот, но если у тебя есть деньги, для тебя я стану Лонг *хи-хи*.",
                    "Наш трактир \"Гарцующий Койот\", пожалуй, единственное место, которое заслуживает внимания в этом городке, что бы там ни говорил этот задавака Чарльз. У нас есть еда, вода и кое-что погорячее в соседней комнате специально для таких как ты. Я слышала вы, парни из конфедерации, очень не против подобного досуга. Но, я думаю, ты и без меня разберёшься.",
                ],
                "female": [
                    "Привет-привет! Я рада, что ещё одна дочь Конфедерации посетила наш трактир!",
                    "\"Гарцующий Койот\" не такое и плохое место, можешь заходить чаще, я уверена, мы станем хорошими подругами. Я - Шот, кстати. Я могу тебя накормить, продать семян, ну и, знаешь… Если ты широких взглядов, а я смотрю на тебя, цыпочку, и думаю, что ты именно такая, - то для тебя найдётся и кое что интересненькое в соседней комнате *хи-хи*.",
                ]
            },
            "actions": {
                "Buy": "Купить еды или семян.",
                "Drink water": "Выпить воды (5 серебряных).",
                "Quest": "Квест.",
            }
        },
        "margo": {
            "default": {
                "male": [
                    "Эй, сладкий, не проходи мимо!",
		    "Давай повеселимся немного, ты же знаешь кто я, не правда ли? Вы называете нас «mulier stupri», но мне больше нравится «ночная бабочка», я же похожа на бабочку правда? Шелковистые крылышки, лёгкость во всём теле, необычайная красота, а главное… Я тоже дарю людям удовольствие… Особое удовольствие. Так что, ты просто поглазеть пришёл или даже такой крепкий парень как ты нуждается иногда в отдыхе?",
                ],
                "female": [
                    "Золотце? Ты ошиблась дверью или ты?..",
		    "О, не стесняйся ты так, я всё поняла по твоим глазам, ни слова больше. Меня зовут Марго, и я тот, кто тебе нужен. Поверь, я вижу напряжение и скованность, ты пришла точно по адресу, сейчас мы будем с этим бороться. Женщина должна выпустить себя наружу. Показать миру, избавившись от предрассудков. Проходи, золотце, присаживайся на кровать, я не кусаюсь.",
                ]
            },
            "empire": {
                "male": [
                    "Сладенький, я вижу как напряжены твои мышцы, надеюсь у тебя так напряжены ВСЕ твои мышцы. Может повеселимся?",
		    "Я знаю, что вы, Имперцы, такое не одобряете, называете нас \"mulier stupri\" и считаете, что вы выше этого, но, сладкий, твой Император так далеко, а я так близко... Не противься желанию, я же вижу ты хочешь, у тебя аж вены на голове вздулись и ты стал как большой сладкий помидорчик. А я люблю помидорчики. Давай, пять минут удовольствия и мы никому ничего не скажем.",
                ],
                "female": [
                    "Да-да? Вы что-то хотели от Марго?",
		    "Марго, это я. Путана. Девушка лёгкого поведения, скажем так. Вас это смущает? Да, я вижу, что смущает. Любого Имперца это смутит. Но… Что я вижу? Постойте, не отворачивайтесь. Я вижу… Желание? Желание в ваших глазах, ну надо же. Простите меня, за такую поспешность. Это место, знаете ли, немного нестабильно. Что бы ни говорил Чарльз - Империя и Конфедерация останутся врагами, даже если закинуть нас на необитаемый остров. Но вы не переживайте. Я лояльна ко всем своим клиентам. Со мной напряжение сбросить лучше, чем с этими потными мужланами."
                ]
            },
            "confederation": {
                "male": [
                    "Милый, не стесняйся, заходи.",
		    "Ох, какой напор, от тебя так и веет мужиком! Я сразу почувствовала самца в таком уверенном мужчине, даже твоя походка заставляет мои ноги дрожать. И мне кажется, ты пришёл не просто так, в конце концов, это вы, красавчики, позволили нам, \"ночным бабочкам\" распространиться по Империи, так что ты просто обязан знать, что именно нужно со мной делать не так ли? Можешь называть меня Марго, или как тебе будет угодно, от взгляда твоих глаз я готова провалиться сквозь землю.",
                ],
                "female": [
                    "Заходи, детка, Марго всегда рада таким симпатичным девочка как ты.",
		    "В этом Имперском царстве потных грязных мужиков иногда хочется просто немного расслабиться, подурачиться и сбросить напряжение, неправда ли? Наша профессия, \"muloer stupri\", как нас называют, она учит этому, учит давать людям то, что они хотят. А сейчас ты хочешь побыть здесь со мной, я угадала?",
                ]
            },
            "actions": {
                "Buy sex": "Купить секс (10 золота)",
                "Quest": "Квест.",
            }
        },
        "bruno": {
            "default": {
                "male": [
                    "Ээээ… Парень, ты меня ни с кем не попутал?",
		    "Я вроде не вызывался нянькой работать. Или… А! Эээ, ну в общем, добро пожаловать в мой магазин. Тут у меня… Ээээ… Да, тут у меня всякие штуки, чтобы быть портным, а там, в соседнем помещении, моя любимая кузница. Ну, ты типа тут вроде новенький, поэтому можешь моими инструментами бесплатно пользоваться пока. Только смотри ничего не сломай! Я с тебя кожу сдеру и мешочки из неё сделаю! Ээээ… Ну, или просто выпишу штраф… Посмотрим… В общем, обращайся, если что-то понадобиться.",
                ],
                "female": [
                    "Ыыыы… Женщина… ",
		    "Хы. Хы-хы. Хы… Ну э… Чем Бруно может быть вам полезен? Хы-хы. Я владелец этого роскошного заведения по продаже… Эээ… Тряпок. Ну, там, штуки эти крутящиеся есть, чтобы ниточки наматывать… Хы-хы. А ещё, соседняя кузница тоже моя! Я хозяин! Хы-хы. Не часто… Да, не часто тут встретишь… Хы-хы… Девушку. Как тебя зовут, дорогая? Может пропустим по пивку вечером? Хы-хы.",
                ]
            },
            "empire": {
                "male": [
                    "Ээээ… Добрый день?",
		    "Друг, ты если чего хочешь, ты говори, не стесняйся. Ну… Ну типа, я тут главный, отвечаю за всё и, ну… В общем, если что-то надо, то это ко мне. Меня зовут Бруно, я… Ээээ… Хозяин? Гммм… Владелец… Да! Владелец! Я владелец этого магазина. У меня тут всякая чепуха для иголковедов, а в соседнем здании моя любимая кузница. Ты в общем, ну… Разберёшься сам, что тебе нужно?",
                ],
                "female": [
                    "Эй, барышня!",
		    "Эээ… Ну типа, не проходите мимо! У Бруно лучшие крутилки ниток во всём городе! Эээ… Ну там, чтобы шить или… Ну, не знаю в общем, вам должно быть понятнее чем мне. Приятно видеть настоящую имперскую леди в этом ыыыы… Захолустье. А то, одни дураки вокруг. Ну… Чарльз этот, в общем, ну… Выглядит не очень умным. Какую-то муть постоянно несёт, нихрена не понятно, что он имеет в виду. Но вам то, хы-хы, я думаю, нужен мужик посмышлёней. Ну так вот – это я. Хы-хы. У меня вон, аж два магазина. Этот и кузница соседняя. Всё моё. Всё! Я… Эээ… Богатый."
                ]
            },
            "confederation": {
                "male": [
                    "Слышь! Парень, тут Конфедератам не рады!",
		    "Мне… Мне наплевать, что там тебе наплёл Чарльз про равенство, это всё говно собачье! Или ты честный гражданин Империи, которого отправили сюда за то, что он немного вспылил и убил своего покупателя, или ты отброс общества, который разрушил нашу великую Империю! Ээээ… В общем, как-то так. Поэтому… Гммм… Если у тебя есть деньги, отдавай их  мне… Ну в смысли, можешь что-нибудь быстро купить, и проваливай отсюда. Я – Бруно! Владелец этого дома тряпок и соседней кузницы, а ты – дно. Дно болота под названием Конфедерация, поэтому заканчивай свои дела и катись отсюда.",
                ],
                "female": [
                    "Эй! Попа карамельная, ты заходи не стесняйся!",
		    "Каково это, под Конфедератами то подстилкой быть? Неплохо да? Ну, хы-хы, не мне тебя судить. Наверное. Или мне? Как считаешь? В любом случае, меня зовут Бруно… Ээээ… Это мой магазин, и кузница там за стеной тоже моя. И в общем… Эээ… Всё тут моё. А ты смотри, выбирай, ежели чо, можешь натурой расплатиться, гы-гы. В моём заведении не рады Конфедератам, но ээээ… В общем, попка у тебя ничего, поэтому ты оставайся пока.",
                ]
            },
            "actions": {
                "Buy": "Купить камней",
                "Quest": "Квест.",
            }
        },
        "boris": {
            "default": {
                "male": [
                    "Заходи, сын мой, в нашей церкви всегда рады новым прихожанам.",
		    "Меня зовут отец Борис, и я настоятель этой святой обители. Наша церковь была построена совсем недавно, на мощах святого Бенедикта, но я уверен - без слова Господа не должно обходиться ни одно поселение. Да, не смотри на меня так, я прибыл сюда совершенно добровольно, в отличие от вас бедолаг. Я уверен, я свято уверен, что в ваших душах есть Свет, в каждом из вас, и я отправился сюда, чтобы найти его. Империя претерпевает большие изменения, но вера, Вера всегда должна поддерживать людей. Не отворачивайся от Бога, и он найдёт тебя, где бы ты ни был.",
                ],
                "female": [
                    "Заходи, дочь моя, в нашей церкви всегда рады новым прихожанам.",
		    "Меня зовут отец Борис, и я настоятель этой святой обители. Наша церковь была построена совсем недавно, на мощах святого Бенедикта, но я уверен - без слова Господа не должно обходиться ни одно поселение. Да, не смотри на меня так, я прибыл сюда совершенно добровольно, в отличие от вас бедолаг. Я уверен, я свято уверен, что в ваших душах есть Свет, в каждом из вас, и я отправился сюда, чтобы найти его. Насколько благочестивой ты была или не была, Свет есть в каждой заблудшей овце нашего пастыря. Империя претерпевает большие изменения, но вера, Вера всегда должна поддерживать людей. Не отворачивайся от Бога, и он найдёт тебя, где бы ты ни был.",
                ]
            },
            "empire": {
                "male": [
                    "Заходи, сын мой, в нашей церкви всегда рады новым прихожанам.",
		    "Меня зовут отец Борис, и я настоятель этой святой обители. Наша церковь была построена совсем недавно, на мощах святого Бенедикта, но я уверен - без слова Господа не должно обходиться ни одно поселение. Да, не смотри на меня так, я прибыл сюда совершенно добровольно, в отличие от вас бедолаг. Я уверен, я свято уверен, что в ваших душах есть Свет, в каждом из вас, и я отправился сюда, чтобы найти его. Империя претерпевает большие изменения, но вера, Вера всегда должна поддерживать людей. Не отворачивайся от Бога, и он найдёт тебя, где бы ты ни был.",
                ],
                "female": [
                    "Заходи, дочь моя, в нашей церкви всегда рады новым прихожанам.",
		    "Меня зовут отец Борис, и я настоятель этой святой обители. Наша церковь была построена совсем недавно, на мощах святого Бенедикта, но я уверен - без слова Господа не должно обходиться ни одно поселение. Да, не смотри на меня так, я прибыл сюда совершенно добровольно, в отличие от вас бедолаг. Я уверен, я свято уверен, что в ваших душах есть Свет, в каждом из вас, и я отправился сюда, чтобы найти его. Насколько благочестивой ты была или не была, Свет есть в каждой заблудшей овце нашего пастыря. Империя претерпевает большие изменения, но вера, Вера всегда должна поддерживать людей. Не отворачивайся от Бога, и он найдёт тебя, где бы ты ни был."
                ]
            },
            "confederation": {
                "male": [
                    "Заходи, сын мой, в нашей церкви всегда рады новым прихожанам.",
		    "Меня зовут отец Борис, и я настоятель этой святой обители. Наша церковь была построена совсем недавно, на мощах святого Бенедикта, но я уверен - без слова Господа не должно обходиться ни одно поселение. Да, не смотри на меня так, я прибыл сюда совершенно добровольно, в отличие от вас бедолаг. Я уверен, я свято уверен, что в ваших душах есть Свет, в каждом из вас, и я отправился сюда, чтобы найти его. Империя претерпевает большие изменения, но вера, Вера всегда должна поддерживать людей. Не отворачивайся от Бога, и он найдёт тебя, где бы ты ни был.",
                ],
                "female": [
                    "Заходи, дочь моя, в нашей церкви всегда рады новым прихожанам.",
		    "Меня зовут отец Борис, и я настоятель этой святой обители. Наша церковь была построена совсем недавно, на мощах святого Бенедикта, но я уверен - без слова Господа не должно обходиться ни одно поселение. Да, не смотри на меня так, я прибыл сюда совершенно добровольно, в отличие от вас бедолаг. Я уверен, я свято уверен, что в ваших душах есть Свет, в каждом из вас, и я отправился сюда, чтобы найти его. Насколько благочестивой ты была или не была, Свет есть в каждой заблудшей овце нашего пастыря. Империя претерпевает большие изменения, но вера, Вера всегда должна поддерживать людей. Не отворачивайся от Бога, и он найдёт тебя, где бы ты ни был.",
                ]
            },
            "actions": {
                "Buy indulgence": "Купить индульгенцию (10 золотых +100 кармы).",
                "Quest": "Квест.",
            }
        },
        "vendor": {
            "default": {
                "male": [
                    "Здравствуйте, сударь.",
                ],
                "female": [
                    "Здравствуйте, сударыня.",
                ],
            },
            "actions": {
                "Buy": "Купите у меня пару-тройку вещиц, вы точно не пожалеете.",
                "Sell": "Возможно у вас найдется то, что мне нужно?",
            },
        },
    };
    this.get = function(type, faction, sex) {
        var result = {
            actions: {},
            talks: [],
        };

        var typeData = this.npcs[type];
        if (!typeData)
            return result;

        result.actions = typeData["actions"] || {};

        var factionData = typeData[faction] || typeData["default"];
        if (!factionData)
            return result;

        result.talks = factionData[sex];
        return result;
    };
}
