export const documents = [
  {
    name: "Приказ об утверждении Технических требований и условий изготовления защищенной от подделок полиграфической продукции",
    number: "217н",
    date: new Date(2020, 9, 29, 0, 0, 0),
    startDate: new Date(2021, 1, 1, 0, 0, 0),
    isNoEndDate: false,
    endDate: new Date(2026, 12, 31, 0, 0, 0),
    notes: "",
    requirementGroups: [
      {
        name: "Требования к качеству печати ЗПП",
        position: 1,
        notes: "",
        requirements: [
          { name: "Печать четкая и однородная", position: 1, notes: "" },
          {
            name: "Не допускается наличие забитых краской пробельных участков",
            position: 2,
            notes: "",
          },
          {
            name: "Не допускается отсутствие элементов изображения и текста",
            position: 3,
            notes: "",
          },
          {
            name: "Не допускается наличие утолщений (узлов) в местах пересечения линий гильоширных рисунков и фоновых сеток",
            position: 4,
            notes: "",
          },
          {
            name: "Печатное изображение ЗПП должно быть устойчивым к физико-химическим воздействиям в нормальных условиях эксплуатации ЗПП в соответствии с ее назначением",
            position: 5,
            notes: "",
          },
          {
            name: "Многоцветные гильоширные изображения должны изготавливаться путем нанесения двух и более гильоширных рисунков разного цвета один на другой",
            position: 6,
            notes:
              "Данное требование не распространяется на ЗПП, изготовленную с применением металлографской или орловской печати",
          },
          {
            name: "Печать наложенных друг на друга гильоширных рисунков различных цветов должна выполняться с приводкой, позволяющей установить совмещение элементов таких гильоширных рисунков",
            position: 7,
            notes: "",
          },
        ],
      },
      {
        name: "Требования к выходным данным ЗПП",
        position: 2,
        notes: "",
        requirements: [
          {
            name: "Указано полное или сокращенное (при наличии) наименование полиграфического предприятия",
            position: 1,
            notes: "",
          },
          {
            name: "Указано место нахождения полиграфического предприятия (наименование населенного пункта (муниципального образования)",
            position: 2,
            notes: "",
          },
          {
            name: "Указан год изготовления ЗПП",
            position: 3,
            notes: "",
          },
          {
            name: "Указано обозначение уровня защищенности ЗПП",
            position: 4,
            notes: "",
          },
          {
            name: "Наименование полиграфического предприятия соответствует учредительным документам",
            position: 5,
            notes:
              "Допускается не указывать организационно-правовую форму полиграфического предприятия. При указании наименования полиграфического предприятия может быть указано полное или сокращенное (при наличии) наименование филиала полиграфического предприятия",
          },
          {
            name: "Указанное на экземпляре ЗПП место нахождения полиграфического предприятия соответстует фактическому месту нахождения производственной площадки (филиала), на которой (ом) произведена ЗПП",
            position: 6,
            notes: "",
          },
          {
            name: "Обозначение уровня защищенности ЗПП выделяется открывающими и закрывающими строчными кавычками, в конце ставится точка",
            position: 7,
            notes: "",
          },
        ],
      },
      {
        name: "Требования к нумерации ЗПП",
        position: 3,
        notes: "",
        requirements: [
          {
            name: "На каждый экземпляр ЗПП нанесена идентификационная нумерация (серия (при наличии) и номер, которая позволяет учитывать каждый экземпляр ЗПП",
            position: 1,
            notes: "",
          },
          {
            name: "Идентификационная нумерация выполнена только машинным способом",
            position: 2,
            notes: "",
          },
          {
            name: "При производстве комплекта многослойных самокопирующихся бланков идентификационная нумерация может наноситься одновременно на все слои, при этом первый слой должен иметь оригинальный оттиск, а следующие - копии, идентичные оригинальному оттиску",
            position: 3,
            notes: "",
          },
        ],
      },
      {
        name: "Требования к графической композиции ЗПП",
        position: 4,
        notes: "",
        requirements: [
          {
            name:
              "ЗПП по текстовому, орнаментально-художественному и цветовому оформлению должна соответствовать:\r" +
              " утвержденной нормативными правовыми актами, указанными в пункте 3 настоящих Требований, форме (при наличии);\r" +
              " образцу или макету, утвержденному заказчиком;\r" +
              " установленным техническим требованиям на конкретный вид полиграфической продукции",
            position: 1,
            notes: "",
          },
          {
            name:
              "При производстве ЗПП должны использоваться оригинальные и нейтральные (типовые) графические композиции.\r" +
              "Оригинальная композиция должна быть уникальной по составу всех входящих в нее графических элементов защиты от подделки.\r" +
              "При использовании нейтральной композиции для разных видов ЗПП индивидуализация должна достигаться за счет дополнильного " +
              "применения нескольких индивидуальных сложных гильоширных рисунков или иных графических ЭЗП",
            position: 2,
            notes: "",
          },
          {
            name: "При производстве ЗПП уровней защищенности 'А', 'Б' должна применяться только оригинальная графическая композиция",
            position: 3,
            notes: "",
          },
          {
            name: "При производстве ЗПП уровней защищенности 'В', 'Г' может применяться как оригинальная, так и нейтральная графическая композиция",
            position: 4,
            notes: "",
          },
          {
            name:
              "Для ЗПП, производимой в соответствии с нормативными правовыми актами, указанными в пункте 3 настоящих Требований, " +
              "применяется только оригинальная композиция.\r" +
              "При производстве такой продукции различными полиграфическими предприятиями допускается применение в защитном комплексе " +
              "дополнительных ЭЗП. При этом они не должны искажать внешний вди ЗПП, за исключением случаев, когда это допускается " +
              "нормативным правовым актом, указанным в пункте 3 настоящих Требований, которым утверждена форма ЗПП конкретного вида",
            position: 5,
            notes: "",
          },
          {
            name:
              "Применяемые в графической композиции наложенные многоцветные гильоширные рисунки должны быть скоординированы между " +
              "собой и дополнять друг друга (при их наложении и стыковке друг с другом должны быть использованы общие математические " +
              "закономерности). Наложение произвольно выбранных гильоширных элементов не допускается",
            position: 6,
            notes: "",
          },
          {
            name:
              "Графическая композиция лицевой стороны ЗПП уровней защищенности 'А', 'Б', 'В' должна состоять не менее чем на " +
              "70 % из многоцветных гильоширных рисунков нерегулярной структуры и иных графических ЭЗП",
            position: 7,
            notes: "",
          },
          {
            name:
              "Оборотная сторона ЗПП уровней защищенности 'А', 'Б' должна быть запечатана гильоширными рисунками нерегулярной " +
              "структуры, при условии, что это допускается конструкцией бланка",
            position: 8,
            notes: "",
          },
        ],
      },
      {
        name: "Общие требования к защитному комплексу ЗПП уровней защищенности 'А', 'Б', 'В'",
        position: 5,
        notes: "",
        requirements: [
          {
            name: "Для обеспечения защиты от подделки при производстве ЗПП должны применяться: специальная бумага (далее - спецбумага) (для ЗПП на бумажной основе), специальные краски (далее - спецкраски), графические ЭЗП",
            position: 1,
            notes:
              "Дополнительно могут применяться оптические ЭЗП (оптически-переменные защитные элементы) (далее - ОЭЗП) и машиносчитываемые элементы",
          },
          {
            name:
              "Спецбумага должна иметь следующие характеристики:\n" +
              "массу бумаги площадью 1 м2 - от 70 до 120 г;\n" +
              "отсутствие свечения (видимой люминесценции) голубого цвета под действием ультрафиолетового излучения;\n" +
              "наличие водяного знака, обладающего выраженной контрастностью, обеспечивающей его визуальный контроль;\n" +
              "наличие не менее двух видов защитных волокон, контролируемых в видимой или иных областях спектра.\n",
            position: 2,
            notes:
              "Не допускается применение волокон, имеющих видимую люминесценцию голубого цвета под действием ультрафиолетового излучения. Допускается замена одного из видов волокон на другие виды включений - конфетти, защитные нити, капсулированный люминофор\n" +
              "Допускается применение бумаги с химической защитой",
          },
          {
            name: "В ЗПП должны применяться спецкраски, обладающие видимой люминесценцией (кроме голубого цвета) в ультрафиолетовом излучении, а также краски, обладающие визуальными защитными эффектами и (или) специальными машиночитаемыми признаками",
            position: 3,
            notes: "",
          },
          {
            name: "ЗПП должна быть отпечатана не менее чем двумя из следующих способов печати: плоская, высокая, глубокая, трафаретная или цифровая печать",
            position: 4,
            notes: "",
          },
          {
            name: "Для ЗПП, изготавливаемой на бумажной основе, нумерация выполняется способом высокой печати. Если конструктивные особенности ЗПП не позволяют выполнить нумерацию способом высокой печати допускается нанесение нумерации способом цифровой печати",
            position: 5,
            notes:
              "Допускается изготовление ЗПП с иным способом нумерации, если такой способ предусмотрен нормативными правовыми актами, указанными в пункте 3 настоящих Требований",
          },
          {
            name: "Многоцветные гильоширные рисунки должны быть напечатаны полиграфическими красками, колористические особенности которых затрудняют их воспроизведение",
            position: 6,
            notes: "",
          },
          {
            name:
              "Графическая композиция должна включать следующие графические ЭЗП: не менее трех различных по форме и конфигурации гильоширных рисунков и других графических ЭЗП (за исключением микротекста);\n" +
              "микротекст.\n",
            position: 7,
            notes: "",
          },
          {
            name:
              "Гильоширные рисунки должны иметь как позитивное (контурное) исполнение - темные линии на светлом фоне, так и негативное (директное) исполнение - светлые линии на темном фоне.\n" +
              "Толщина линий гильоширных рисунков в позитивном исполнении должна быть не более 70 мкм, в негативном - не более 90 мкм.",
            position: 8,
            notes: "",
          },
        ],
      },
      {
        name:
          "Дополнительные требования к защитному комплексу ЗПП уровня " +
          "защищенности «А»",
        position: 6,
        notes: "",
        requirements: [
          {
            name: "Спецбумага должна содержать не менее 25 % хлопкового или льняного волокна.",
            position: 1,
            notes: "",
          },
          {
            name:
              "Спецбумага должна иметь эксклюзивный двухтоновый водяной знак полиграфического предприятия, эмитента или заказчика.\n" +
              "Вместо двухтонового допускается применение многотонового или филигранного водяного знака.",
            position: 2,
            notes: "",
          },
          {
            name: "При производстве ЗПП уровня защищенности «А» используются способы печати, указанные в пункте 27 настоящих Требований, а также должны использоваться специальные и (или) высокозащищенные способы печати.",
            position: 3,
            notes: "",
          },
          {
            name:
              "Обязательно наличие наложения двух фоновых сеток с переменным шагом и с ирисовыми раскатами. В каждой сетке ирисовый раскат должен быть с двойным переходом.\n" +
              "В случае применения орловской печати допускается применение одной фоновой сетки с переменным шагом и двойным ирисовым раскатом.\n" +
              "В случае невозможности применения ирисового раската из-за малого формата продукции (менее 49 мм по стороне вдоль ирисового раската) допускается замена ирисового раската на ЭЗП сопоставимого уровня - дополнительные виды спецкрасок или графических ЭЗП.\n",
            position: 4,
            notes: "",
          },
          {
            name: "Нумерация ЗПП выполняется с применением спецкрасок.",
            position: 5,
            notes: "",
          },
          {
            name: "Микротекст должен быть как позитивным (контурным), так и негативным (директным). Высота знаков микротекста в позитивном исполнении должна быть не более 200 мкм, в негативном - не более 250 мкм.",
            position: 6,
            notes: "",
          },
        ],
      },
      {
        name:
          "Дополнительные требования к защитному комплексу ЗПП уровня " +
          "защищенности «Б»",
        position: 7,
        notes: "",
        requirements: [
          {
            name: "Спецбумага должна содержать не менее 15 % хлопкового или льняного волокна.",
            position: 1,
            notes: "",
          },
          {
            name:
              "Спецбумага должна иметь эксклюзивный двухтоновый водяной знак полиграфического предприятия, эмитента или заказчика.\n" +
              "Вместо двухтонового допускается применение многотонового или филигранного водяного знака.\n",
            position: 2,
            notes: "",
          },
          {
            name:
              "При производстве ЗПП уровня защищенности «Б», которая по своей конструкции не позволяет контролировать водяной знак, допускается неприменение следующих требований:\n" +
              "к массе бумаги площадью 1 м2, указанных в пункте 25 настоящих Требований;\n" +
              "к наличию в составе бумаги хлопкового или льняного волокна, указанных в пункте 38 настоящих Требований;\n" +
              "наличию и виду водяного знака.",
            position: 3,
            notes: "",
          },
          {
            name:
              "Обязательно наличие наложения двух фоновых сеток с переменным шагом и с ирисовыми раскатами. Рекомендуется применение ирисового раската с двойным переходом.\n" +
              "В случае применения орловской печати допускается применение одной фоновой сетки с переменным шагом и двойным ирисовым раскатом.\n" +
              "В случае невозможности применения ирисового раската из-за малого формата ЗПП (менее 49 мм по стороне вдоль ирисового раската) допускается замена ирисового раската на ЭЗП сопоставимого уровня: дополнительные виды спецкрасок или графических ЭЗП.",
            position: 4,
            notes: "",
          },
          {
            name: "Нумерация ЗПП выполняется с применением спецкрасок.",
            position: 5,
            notes: "",
          },
          {
            name: "Микротекст должен быть как позитивным (контурным), так и негативным (директным). Высота знаков микротекста в позитивном исполнении должна быть не более 200 мкм, в негативном - не более 250 мкм.",
            position: 6,
            notes: "",
          },
          {
            name: "При производстве 31111 уровня защищенности «Б» используются способы печати, указанные в пункте 27 настоящих Требований, а также могут использоваться специальные и (или) высокозащищенные способы печати.",
            position: 7,
            notes: "",
          },
        ],
      },
      {
        name:
          "Дополнительные требования к защитному комплексу ЗПП уровня " +
          "защищенности «В»",
        position: 8,
        notes: "",
        requirements: [
          {
            name:
              "Спецбумага может иметь эксклюзивный водяной знак или водяной знак ограниченного распространения. Допускается применение спецбумаги без водяного знака.\n" +
              "При производстве ЗПП уровня защищенности «В» без водяного знака допускается неприменение требований к массе бумаги площадью 1 м2, указанных в пункте 25 настоящих Требований.",
            position: 1,
            notes: "",
          },
          {
            name:
              "Обязательно наличие наложения двух фоновых сеток с переменным шагом, хотя бы одна из которых должна быть с ирисовым раскатом.\n" +
              "В случае применения орловской печати допускается применение одной фоновой сетки с ирисовым раскатом.\n" +
              "В случае невозможности применения ирисового раската из-за малого формата ЗПП (менее 49 мм по стороне вдоль ирисового раската) допускается замена ирисового раската на ЭЗП сопоставимого уровня: дополнительные виды спецкрасок или графических ЭЗП.",
            position: 2,
            notes: "",
          },
          {
            name: "Микротекст может быть как позитивным (контурным), так и негативным (директным). Высота знаков микротекста в позитивном исполнении должна быть не более 200 мкм, в негативном - не более 250 мкм.",
            position: 3,
            notes: "",
          },
          {
            name: "При производстве 31111 уровня защищенности «В» используются способы печати, указанные в пункте 27 настоящих Требований, а также могут использоваться специальные и (или) высокозащищенные способы печати.",
            position: 4,
            notes: "",
          },
        ],
      },
      {
        name: "Требования к защитному комплексу ЗПП уровня защищенности «Г»",
        position: 9,
        notes: "",
        requirements: [
          {
            name: "ЗПП уровня защищенности «Г» должна содержать не менее двух ЭЗП.",
            position: 1,
            notes: "",
          },
          {
            name: "Состав защитного комплекса при производстве ЗПП уровня защищенности «Г», в том числе способ нумерации, заказчик определяет самостоятельно или по согласованию с полиграфическим предприятием с учетом особенностей применения ЗПП конкретного вида.",
            position: 2,
            notes: "",
          },
        ],
      },
      {
        name: "Требования к оптически-переменным защитным элементам (оптическим элементам защиты от подделки)",
        position: 10,
        notes: "",
        requirements: [
          {
            name:
              "ОЭЗП изготавливаются на материале (основе), обладающем (обладающей) защитными свойствами от оптического и контактного копирования и обеспечивающем саморазрушение информационных слоев ОЭЗП при попытке отделения ОЭЗП от поверхности ЗПП\n" +
              "ОЭЗП должен содержать комплекс защитных признаков, сигнализирующий о фактах несанкционированного воздействия на 31111 и сохраняющий признаки подлинности и целостности ЗПП при его регламентированном использовании.",
            position: 1,
            notes: "",
          },
          {
            name: "ОЭЗП может быть как рельефно-фазовым защитным элементом на металлизированной основе, так и объемно-фазовым защитным элементом на фотополимерной основе, либо их комбинацией с использованием иных оптических эффектов (поляризационных, цветопеременных, лентикулярных или сферических растров, жидких кристаллов).",
            position: 2,
            notes: "",
          },
          {
            name:
              "ОЭЗП должен быть выполнен в виде фольги (ламината, оверлея, защитной нити) с локальным или непрерывным повторяющимся изображением и наноситься на ЗИП способом горячего или холодного нанесения (тиснения, ламинирования).\n" +
              "Свойства ОЭЗП и способ нанесения должны исключать возможность его отделения и повторного использования. ОЭЗП должен иметь размер, позволяющий проведение его идентификации.\n" +
              "На ЗПП уровней защищенности «В», «Г» допускается применение ОЭЗП, выполненных на самоклеящейся разрушаемой основе.",
            position: 3,
            notes: "",
          },
        ],
      },
      {
        name:
          "Дополнительные требования к ЗПП, изготавливаемой на полимерном\n" +
          "или комбинированном носителе\n",
        position: 11,
        notes: "",
        requirements: [
          {
            name: "К защитному комплексу 31111, изготавливаемой на полимерном или комбинированном носителе, не предъявляются требования о наличии в основе водяного знака, защитных волокон, конфетти и других элементов, введенных в основу в процессе ее изготовления.",
            position: 1,
            notes: "",
          },
          {
            name: "В ЗПП уровней защищенности «А», «Б», «В» на полимерном носителе должен использоваться полимерный материал, не имеющий видимой люминесценции под действием ультрафиолетового излучения.",
            position: 2,
            notes: "",
          },
          {
            name:
              "Конструкция ЗПП на полимерном или комбинированном носителе, включающая несколько слоев (два или более), должна препятствовать возможности расслаивания без полного или частичного необратимого изменения как внешнего вида, так и графических и (или) иных ЭЗП.\n" +
              "Конструкция ОЭЗП и ЭЗП, используемых для ЗПП, включающей персональные данные, должна обеспечивать защиту персональных данных от полного или частичного их изменения.",
            position: 3,
            notes: "",
          },
          {
            name:
              "При изготовлении ЗПП в виде пластиковой карты (далее - ПК) выполняются следующие требования:\n" +
              "ПК должна изготавливаться методом многослойного ламинирования в термопрессе;\n" +
              "физические параметры ПК должны соответствовать требованиям национального стандарта Российской Федерации ГОСТ Р ИСО/МЭК 7810-2015 «Карты идентификационные. Физические характеристики», утвержденного и введенного в действие приказом Федерального агентства по техническому регулированию и метрологии от 30 июля 2015 г. № 1026-ст (Стандартинформ, 2016);\n" +
              "ПК уровня защищенности «А» должна изготавливаться с использованием не менее одного специального защитного элемента, который формируется за счет применения технологического приема изготовления ЗПП, создающего на поверхности или внутри ПК микрорельеф, образующий дифракцию, ахроматическое, оптикопеременное или латентное изображение;\n" +
              "при изготовления ПК уровня защищенности «А» должен использоваться неклеевой поликарбонат;\n" +
              "при изготовлении ПК уровней защищенности «Б», «В», «Г» могут использоваться поликарбонат, поливинилхлорид, полиэтилентерефталат и их модификации. Для скрепления слоев изделия допускается использование термоактивируемых клеев;\n" +
              "нумерация ПК уровней защищенности «А», «Б», «В» должна быть выполнена на внутренних слоях печатным способом спецкраской или непечатным способом;\n" +
              "нумерация ПК уровня защищенности «В» может быть выполнена способом лазерной гравировки во внешних лазероактивных ламинационных слоях;\n" +
              "нумерация ПК уровня защищенности «Г» может быть выполнена на поверхностном слое.",
            position: 4,
            notes: "",
          },
          {
            name: "Электронные носители информации, применяемые при производстве ЗПП как её неотъемлемая часть, должны соответствовать требованиям, определенным законодательством Российской Федерации об информации, информационных технологиях и о защите информации, а также законодательством Российской Федерации в области персональных данных.",
            position: 5,
            notes: "",
          },
        ],
      },
      {
        name: "Условия изготовления ЗПП",
        position: 12,
        notes: "",
        requirements: [
          {
            name: "Полный цикл производства ЗПП должен осуществляться на территории Российской Федерации.",
            position: 1,
            notes: "",
          },
          {
            name:
              "Не допускается:\n" +
              "полное или частичное производство ЗПП за пределами территории, охраняемой в соответствии с требованиями о соблюдении режима охраны помещений (территорий), используемых для производства и реализации ЗПП, утверждаемыми в соответствии с частью 4.1 статьи 8 Федерального закона от 4 мая 2011 г. № 99-ФЗ «О лицензировании отдельных видов деятельности»;\n" +
              "одновременное выполнение работ по производству и реализации ЗИП и иной продукции в помещениях, используемых для осуществления деятельности по производству и реализации ЗИП;\n" +
              "наличие в 31111 одного вида изделий с одинаковой нумерацией, приводящее к появлению двух и более экземпляров без внешних отличий;\n" +
              "использование на полиграфическом предприятии полуфабрикатов другого полиграфического предприятия при производстве ЗПП уровней защищенности «А», «Б».",
            position: 2,
            notes: "",
          },
          {
            name: "При производстве ЗПП используются оригинал-макеты ЗПП в электронном виде, содержащие графические ЭЗП, разработанные только на таком полиграфическом предприятии.",
            position: 3,
            notes: "",
          },
          {
            name: "Оригинал-макеты ЗПП, указанные в пункте 61 настоящих Требований, могут передаваться только заказчику.",
            position: 4,
            notes: "",
          },
        ],
      },
    ],
    controlParameters: [
      {
        name: "Уровень защищенности",
        position: 1,
        notes: "",
        controlParameterValues: [
          { name: "А", position: 1, notes: "" },
          { name: "Б", position: 2, notes: "" },
          { name: "В", position: 3, notes: "" },
          { name: "Г", position: 4, notes: "" },
        ],
      },
    ],
  },
  {
    name: "Тестовый документ",
    number: "123456",
    date: new Date(2020, 9, 29, 0, 0, 0),
    startDate: new Date(2021, 1, 1, 0, 0, 0),
    isNoEndDate: false,
    endDate: new Date(2026, 12, 31, 0, 0, 0),
    notes: "",
    requirementGroups: [],
    controlParameters: [
      {
        name: "Параметр № 1",
        position: 1,
        notes: "",
        controlParameterValues: [
          { name: "Значение 1", position: 1, notes: "" },
          { name: "Значение 2", position: 2, notes: "" },
        ],
      },
      {
        name: "Параметр № 2",
        position: 1,
        notes: "",
        controlParameterValues: [
          { name: "Значение 3", position: 1, notes: "" },
          { name: "Значение 4", position: 2, notes: "" },
        ],
      },
    ],
  },
];
