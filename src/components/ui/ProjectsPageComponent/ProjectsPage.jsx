import React from 'react';
import styles from './projects_page.module.css';

const ProjectsPage = () => {
  return (
    <div className={styles.projects_content}>
      <div className="license-header">
        <h1 className="animate-header">Работы компании</h1>
        <p className="animate-subheader">Эксперты в автоматизации: наши работы</p>
      </div>
      <table className={styles.projects_table}>
        <thead>
          <tr>
            <th>Наименование объекта</th>
            <th>Заказчик</th>
            <th>Генподрядчик</th>
            <th>Год</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.project_name}>
              ПНР по модернизации реакторных блоков секции 300/2 ЛК-6У №2 (2-я очередь)
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>УП «Полесье-Промжилстрой»</td>
            <td className={styles.project_year}>2024</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР по модернизации реакторных блоков секции 300/2 ЛК-6У №1 (1-я очередь)
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>УП «Полесье-Промжилстрой»</td>
            <td className={styles.project_year}>2024</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Реконструкция открытого склада комовой серы
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>УП «Полесье-Промжилстрой»</td>
            <td className={styles.project_year}>2024</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР по возведению автотракторной мойки в а.г. Дудрова, филиал «Дуброва-АГРО» РУП «Гомельэнерго»
            </td>
            <td className={styles.project_customer}>Филиал «Дуброва-АГРО» РУП «Гомельэнерго» Светлогорского района</td>
            <td className={styles.project_contractor}>ОДО «ПроКТОр»</td>
            <td className={styles.project_year}>2024</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР по изменению технологической схемы оборотного водоснабжения БОВ-7 (2-я очередь)
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>СООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2024</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР АСУ ТП и КИП установки гидроочистки дизельного топлива и керосина Л-24/6
            </td>
            <td className={styles.project_customer}>ООО «КИНЕФ», РФ</td>
            <td className={styles.project_contractor}>ООО «СПИК СЗМА»</td>
            <td className={styles.project_year}>2024</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Реконструкция здания участка сантехработ РПМ
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>УП «Полесье-Промжилстрой»</td>
            <td className={styles.project_year}>2024</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пусконаладочные работы автоматизации технологии на объекте «Строительство склада сильнодействующих ядовитых веществ (СДЯВ)»
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>МСУ «Электроналадка» ОАО «Трест Белпромналадка»</td>
            <td className={styles.project_year}>2023</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пусконаладочные работы на объекте «Строительство маслосклада и отапливаемых складских помещений УПВ»
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>СООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2023</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Сборка шкафов управления для производства ООО «СПИК СЗМА»
            </td>
            <td className={styles.project_customer}>ООО «СПИК СЗМА»</td>
            <td className={styles.project_contractor}>ООО «СПИК СЗМА»</td>
            <td className={styles.project_year}>2023</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Сборка шкафов управления для производства ООО «СПИК СЗМА»
            </td>
            <td className={styles.project_customer}>ООО «СПИК СЗМА»</td>
            <td className={styles.project_contractor}>ООО «СПИК СЗМА»</td>
            <td className={styles.project_year}>2023</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Реконструкция котельной в санатории «Лесное»
            </td>
            <td className={styles.project_customer}>Санаторий «Лесное» КГБ РБ</td>
            <td className={styles.project_contractor}>ОДО «ПроКТОр»</td>
            <td className={styles.project_year}>2023</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
               Пусконаладочные работы на объекте «Строительство птичника 4Б в д. Ляховцы Мозырского района»
            </td>
            <td className={styles.project_customer}>ОДО «ПроКТОр»</td>
            <td className={styles.project_contractor}>ОДО «ПроКТОр»</td>
            <td className={styles.project_year}>2023</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Модернизация блоков предварительной гидроочистки секции 200 ЛК-6У №1 и №2 (2-я очередь)
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>УП «Полесье-Промжилстрой»</td>
            <td className={styles.project_year}>2023</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Наладка регуляторов горячего водоснабжения и системы отопления ИТП на Хойникском заводе ЖБИ
            </td>
            <td className={styles.project_customer}>ИТП Хойникский завод ЖБИ ОАО Мозырский домостроительный комбинат</td>
            <td className={styles.project_contractor}>СООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2023</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР по установке производства серы «Сера-1» на объекте «Комплекс гидрокрекинга тяжелых нефтяных остатков»
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>СООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2019-2023</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Замена физически устаревшего оборудования АСУ ТП УЛГК 2-й пусковой комплекс
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>СООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2021-2023</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР АТХ комбинированной установки гидрокрекинга на объекте «Комплекс гидрокрекинга тяжелых нефтяных остатков»
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>МСУ «Электроналадка» ОАО «Трест Белпромналадка»</td>
            <td className={styles.project_year}>2019-2023</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Комплекс пуско-наладочных работ на нефтеперерабатывающем заводе Paz Ashdod
            </td>
            <td className={styles.project_customer}>Нефтеперерабатывающий завод Paz Ashdod, Израиль</td>
            <td className={styles.project_contractor}>АО «СПИК СЗМА»</td>
            <td className={styles.project_year}>2022</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Комплекс пуско-наладочных работ на нефтеперерабатывающем заводе BAZAN Group
            </td>
            <td className={styles.project_customer}>Нефтеперерабатывающий завод BAZAN Group, Израиль</td>
            <td className={styles.project_contractor}>АО «СПИК СЗМА»</td>
            <td className={styles.project_year}>2022</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пусконаладочные работы по установке производства водорода на объекте «Комплекс гидрокрекинга тяжелых нефтяных остатков»
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>МСУ «Электроналадка» ОАО «Трест Белпромналадка»</td>
            <td className={styles.project_year}>2019-2021</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пусконаладочные работы по КИП и А (АТХ) 1-го пускового комплекса объекта «Азотная станция и воздушная компрессорная №4 (АС и ВК №4)»
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>СООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2020-2021</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Замена печи П1 нагрева мазута и оборудования КИП и А вакуумного блока УПБ на установке по производству битума
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>СООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2020-2021</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР АСУТП операторной с распределительной трансформаторной подстанцией РТП-40 и операторной БОВ-6, РКС-6 и УОПК на объекте «Комплекс гидрокрекинга тяжелых нефтяных остатков»
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>ОАО «Белэлектро-монтажналадка»</td>
            <td className={styles.project_year}>2019-2021</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР АТХ на объекте «Комплекс гидрокрекинга тяжелых нефтяных остатков. Комбинированная установка гидрокрекинга».
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>МСУ Электроналадка, Трест Белпромналадка</td>
            <td className={styles.project_year}>2019-2020</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР по установке производства серы Сера-1 на объекте «Комплекс гидрокрекинга тяжелых нефтяных остатков».
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_year}>2019-2020</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР АТХ на объекте «Комплекс гидрокрекинга тяжелых нефтяных остатков. Комбинированная установка гидрокрекинга».
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>МСУ Электроналадка, Трест Белпромналадка</td>
            <td className={styles.project_year}>2019-октябрь 2020</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР по установке производства серы Сера-1 на объекте «Комплекс гидрокрекинга тяжелых нефтяных остатков».
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_year}>2019-январь 2020</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР АТХ на объекте «Комплекс гидрокрекинга тяжелых нефтяных остатков. Комбинированная установка гидрокрекинга MSCC»
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>МСУ Электроналадка, Трест Белпромналадка</td>
            <td className={styles.project_year}>2019-январь 2020</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Мозырь-11
              <div className={styles.project_details}>
                <ul>
                  <li>ТКП. ЛК-1.С-100. Модернизация ТО. Переход с преобразователей КНД и Элита на систему управления секции 100 ЛК-6У №1. Часть КИП</li>
                  <li>ТКП. ЛК-1 Модернизация ТО. Приведение насосного оборудования С-300/1 ЛК-6У №1 Часть КИП. Наладочные работы</li>
                </ul>
              </div>
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>ОАО «Белэлектромонтажналадка»</td>
            <td className={styles.project_year}>2019-январь 2020</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР по установке производства водорода на объекте «Комплекс гидрокрекинга тяжелых нефтяных остатков»
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>МСУ Электроналадка, Трест Белпромналадка</td>
            <td className={styles.project_year}>2019</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР АСУ операторной с распределительной трансформаторной подстанцией РТП-40 и операторной БОВ-6, РКС-6 и УОПК на объекте «Комплекс гидрокрекинга»
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>ОАО «Белэлектромонтажналадка»</td>
            <td className={styles.project_year}>2019</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пуско-наладочные работы по АСУТП и КИП Комплекса глубокой переработки нефти ООО «КИНЕФ»
            </td>
            <td className={styles.project_customer}>ООО «КИНЕФ» г. Кириши, РФ</td>
            <td className={styles.project_contractor}>АО «СПИК СЗМА» Санкт-Петербург, РФ</td>
            <td className={styles.project_year}>2019</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Наладка автоматизации щита сигнализации ЩС на объекте «Пожарное депо на территории ОАО МПЗ»
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>ООО «Никова»</td>
            <td className={styles.project_year}>2019</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ТКП Модернизация АСУТП компрессоров ПК-305,306 реакторного блока С-300-2 ЛК-6У №1
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>СООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2018</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР Монтаж дренажной емкости с погружными насосами на территории узла водопроводных сооружений 2-4 подъема цеха №9
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>СООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2018</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Работы по интеграции оборудования пневмопочты по объекту «Железнодорожные весы для взвешивания вагонов-цистерн»
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>СООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2018</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Наладка АСУ контроля уровня загазованности на объекте «Пожарное депо на территории ОАО «Мозырский НПЗ»
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_conordinator}>ООО «Никова»</td>
            <td className={styles.project_year}>2018</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пуско-наладочные работы по АСУТП Комплекса ЛК-2Б
            </td>
            <td className={styles.project_customer}>ООО «КИНЕФ» г. Кириши РФ</td>
            <td className={styles.project_contractor}>АО «СПИК СЗМА», Санкт-Петербург, РФ</td>
            <td className={styles.project_year}>2017</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              «Реконструкция пожарной сигнализации цеха №14. 2-я очередь строительства» Ремонтная мастерская №1» Корректировка 2.
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>ЗАО «Севзапмонтажавтоматика»</td>
            <td className={styles.project_year}>2016</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              НХП. УПБ. Модернизация АСУТП окислительных колонн К3-К8. Часть КИП
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>ЗАО «Трест СЗМА»</td>
            <td className={styles.project_year}>2016</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Реконструкция секции 300/1 установки ЛК-6У № 2 для гидроконверсии вакуумного газойля. 2 очередь
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>ОАО «Трест Белпромналадка»</td>
            <td className={styles.project_year}>2016</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пуско-наладочные работы по АСУТП на объектах завода глубокой переработки нефти
            </td>
            <td className={styles.project_customer}>Завод глубокой переработки нефти (ЗГНП) ООО «КИНЕФ» г. Кириши РФ</td>
            <td className={styles.project_contractor}>АО «СПИК СЗМА», Санкт-Петербург, РФ</td>
            <td className={styles.project_year}>2016</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Увеличение производительности секции 100ЛК 6У №1
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>ОАО «Белэлектромонтаж»</td>
            <td className={styles.project_year}>2016</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Установка Адсорбционной очистки С4
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>CООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2016</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Установка производства серы Сера-2
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>СООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2016</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Комбинированная установка производства высокооктановых компонентов бензина и объекты общезаводского хозяйства
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>СООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2016</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Наладка средств автоматизации оборудования на объекте «Завод горного воска»
            </td>
            <td className={styles.project_customer}>ОДО «Монтажавтоматика»</td>
            <td className={styles.project_contractor}>ОАО «Завод горного воска»</td>
            <td className={styles.project_year}>2015-2016</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пусконаладочные работы по объектам ТКП ЛК1 С100 Модернизация ТО Переход с преобразователей КНД и Элита на систему управления секции 100 ЛК6У №1; ТПК ЛК1 Модернизация ТО. Приведение насосного оборудования С-300/1 ЛК-6У
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>СООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2014-2016</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Мозырь-11
              <div className={styles.project_details}>
                <ul>
                  <li>Парк для приема, хранения и отгрузки дизельного топлива. ПНР АСУ ТП и системы контроля уровня загазованности.</li>
                </ul>
              </div>
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>СООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2015</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пуско-наладочные работы по АСУТП на объектах завода глубокой переработки нефти (ЗГПН) Секция 2000 ООО «КИНЕФ».
            </td>
            <td className={styles.project_customer}>Завод глубокой переработки нефти (ЗГНП) ООО «КИНЕФ» г. Кириши РФ</td>
            <td className={styles.project_contractor}>АО «СПИК СЗМА» Санкт-Петербург, РФ</td>
            <td className={styles.project_year}>2015</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Мозырь-11
              <div className={styles.project_details}>
                <ul>
                  <li>ТКП. ЛК-1.С-100. Модернизация ТО. Переход с преобразователей КНД и Элита на систему управления секции 100 ЛК-6У №1. Часть КИП</li>
                  <li>ТКП. ЛК-1 Модернизация ТО. Приведение насосного оборудования С-300/1 ЛК-6У №1 Часть КИП. Наладочные работы.</li>
                </ul>
              </div>
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>СООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2014</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Мозырь-11
              <div className={styles.project_details}>
                <ul>
                  <li>ТКП. ЛК-1. Приведение к требованиям ОПВ-96 запорной арматуры на границах технологических блоков 1 категории взрывоопасности секции 200 Л-6У №1. Часть КИП.</li>
                  <li>ТКП. ЛК-1. Модернизация АСУ ТП и КИП и А установки С-300 ЛК-1.</li>
                </ul>
              </div>
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>СООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2014</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Мозырь-11
              <div className={styles.project_details}>
                <ul>
                  <li>ПНР системы ПАЗ объекта «Расширение системы управления ТОШИБА в связи с строительством парка приема, хранения и отгрузки бензина АИ-92.</li>
                  <li>Наладка автоматизированной системы контроля объекта «Модернизация системы контроля уровня SAKURA в связи с строительством парка приема, хранения и отгрузки бензина АИ-92.РВС 110-113.</li>
                  <li>ПНР вновь смонтированного аналитического оборудования парка приема, хранения и отгрузки бензина АИ-92.</li>
                </ul>
              </div>
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>ОАО «Мозырь промстрой»</td>
            <td className={styles.project_year}>2014</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пуско-наладочные работы по АСУТП на объектах завода глубокой переработки нефти.
            </td>
            <td className={styles.project_customer}>Завод глубокой переработки нефти (ЗГНП) OОО «КИНЕФ» г. Кириши, РФ</td>
            <td className={styles.project_contractor}>АО «СПИК СЗМА» Санкт-Петербург, РФ</td>
            <td className={styles.project_year}>2014</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Мозырь-11
              <div className={styles.project_details}>
                <ul>
                  <li>Пуско-наладочные работы КИП и А на объекте: «Реконструкция секции 300/1 установки ЛК 6У№2 ОАО «Мозырский НПЗ»</li>
                </ul>
              </div>
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>ОАО «Ремспецстрой»</td>
            <td className={styles.project_year}>2013</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Мозырь-11
              <div className={styles.project_details}>
                <ul>
                  <li>Пуско-наладочные работы КИП и А на объекте: Приведение секции 300/2 ЛК 6У№2 в соответствие с требованиями ОПВ-96 ОАО «Мозырский НПЗ».</li>
                </ul>
              </div>
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>ОДО «ПроКТОр»</td>
            <td className={styles.project_year}>2013</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Мозырь-11
              <div className={styles.project_details}>
                <ul>
                  <li>Пуско-наладочные работы автоматизированной системы контроля, управления и защиты компрессоров ЛК-6У №2 ПК-301, ПК-302, ПК-303, ПК-304, К-211В.</li>
                </ul>
              </div>
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>АО «СПИК СЗМА» Санкт-Петербург, РФ</td>
            <td className={styles.project_year}>2013</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пуско-наладочные работы по АСУТП на объектах завода глубокой переработки нефти.
            </td>
            <td className={styles.project_customer}>Завод глубокой переработки нефти (ЗГНП) ООО «КИНЕФ», г. Кириши РФ</td>
            <td className={styles.project_contractor}>АО «СПИК СЗМА» Санкт-Петербург, РФ</td>
            <td className={styles.project_year}>2012-2013</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Мозырь-11
              <div className={styles.project_details}>
                <ul>
                  <li>Пуско-наладочные работы по АСУ ТП по объекту: «Установка изомеризации» ОАО «Мозырский НПЗ».</li>
                </ul>
              </div>
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>СООО «БИК СЗМА»</td>
            <td className={styles.project_year}>2012-2013</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Мозырь-11
              <div className={styles.project_details}>
                <ul>
                  <li>Пуско-наладочные работы по АСУ ТП автоматизированных систем управления технологическим процессом на строительстве объекта ОАО «МНПЗ». Комплекс изомеризации гидрообессеривания бензина каталитического крекинга ОЗХ установки изомеризации. Парк Изомеризата.</li>
                </ul>
              </div>
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский нефтеперерабатывающий завод»</td>
            <td className={styles.project_contractor}>ООО «Лотос»</td>
            <td className={styles.project_year}>2012</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пусконаладочные работы АСУ ТП по проекту «Реконструкция стадии дистиляции капролоктама цеха капролоктам 1(контроллерный уровень – Delta V Controller MD Plas, верхний уровень — Delta Ver/11/3r Emerson Process Management, нулевой уровень — Aplisens, Метран, Krohne Simens Fiji)
            </td>
            <td className={styles.project_customer}>«ОАО «Гродно Азот»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}>2012</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР АСУ ТП объекта «Установка гидроочистки дизельного топлива» комплекса моторных топлив
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский НПЗ»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}>2011</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              «Блок регенерации МЭА» установки производства серы.
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский НПЗ»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}>2011</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Автоматическая установка тактового налива светлых нефтепродуктов.
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский НПЗ»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}>2011</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пусконаладочные работы АСУ ТП реконструкция цеха по производству метиловых эфиров жирных кислот (контроллерный уровень OMRON CQM1H (CX Programer, верхний уровень – GE Fanuc Proficy iFIX) с увеличением производительности на 30 тыс. тонн в год.
            </td>
            <td className={styles.project_customer}>«ОАО «Гродно Азот»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}>2011</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пусконаладочные работы АСУ ИТС ГЗУ «Белгосцирк», (контроллерный уровень Allen-Bradley PanelVien).
            </td>
            <td className={styles.project_customer}>ГЗУ «Белгосцирк»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}>2010-2011</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пусконаладочные работы, РСУ цеха «Карбамид 3» (РСУ Honeywell С3000+ Honeywell Experion PKS).
            </td>
            <td className={styles.project_customer}>«ОАО «Гродно Азот»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}>2010</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пусконаладочные работы, конфигурирование РСУ и ПАЗ по проекту «Производство капролоктама 1 очереди. Установка окисления циклогексана. Корпус 2110», (РСУ Honeywell TDS3000+ Honeywell Experion PKS, ПАЗ – Honeywell FSC).
            </td>
            <td className={styles.project_customer}>ОАО «Гроднохимволокно»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}>2010</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР АСУ ТП объекта автоматизированная система контроля, управления и защиты компрессоров ЦК-201, ЦК-301 установки ЛК-6У.
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский НПЗ»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}>2009</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              ПНР установки фталевого ангидрида Honeywell Experion PKS+С.
            </td>
            <td className={styles.project_customer}>ОАО «Лидалакокраска»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}>2009</td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пусконаладочные работы по АСУ ТП на объекте «Замена технологических печей секции 100 ЛК-6У №2».
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский НПЗ»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}></td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Реконструкция и реставрация здания ГЗУ «Белгосцирк». Система АСУ ИТС: отопление и ГВС, управление освещением, приточно-вытяжной вентиляцией с подогревом и кондиционированием воздуха, обогрев крыши, управление холодильной установкой.
            </td>
            <td className={styles.project_customer}>ГЗУ «Белгосцирк»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}></td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Цех слабой азотной кислоты на контроллерах OMRON под управлением скада-системы InTouch фирмы Wonderware.
            </td>
            <td className={styles.project_customer}>ОАО «Гродно Азот»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}></td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Разработка программного обеспечения и наладка АСУ ТП компрессоров ЦК 301 и ЦК 201 ЛК-6У №2 на базе контроллеров «Siemens».
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский НПЗ»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}></td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              УПС. Модернизация АСУ ТП и ПАЗ СОКВ-2.
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский НПЗ»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}></td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              УПС. Модернизация АСУ ТП и ПАЗ МЭА-3, СЕРА-3.
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский НПЗ»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}></td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Модернизация технологического оборудования. Изменение технологической схемы подачи присадок дизельных топлив.
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский НПЗ»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}></td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Установка производства водорода. АСУ ТП компрессоров К-101, А, В, С.
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский НПЗ»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}></td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Турбинный цех (разработка программного обеспечения и пусконаладочные работы АСУ ТП турбоагрегата Р-4-3,4/0,5-1) на системе «Siemens».
            </td>
            <td className={styles.project_customer}>ОАО «Светлогорский ЦКК»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}></td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Товарно-сырьевая база ОАО «Мозырский НПЗ» (распределенная система управления фирмы TOSHIBA).
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский НПЗ»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}></td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Установка гидрообессеривания бензина каталитического крекинга (распределенная система управления фирмы ABB).
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский НПЗ»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}></td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Комбинированная установка алкилирования (распределенная система управления фирмы Honeywell).
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский НПЗ»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}></td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Комбинированная установка каталитического крекинга (распределенная система управления фирмы ABB).
            </td>
            <td className={styles.project_customer}>ОАО «Мозырский НПЗ»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}></td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Крупнотоннажное производство аммиака и метанола (система фирмы Foxboro).
            </td>
            <td className={styles.project_customer}>АО «АХЕМА», Литва</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}></td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Производство капролактам-2 (замена микропроцессорной системы контроля, управления и защиты технологического потока №2 и №1 цеха циклогексанона-2) на системе Honeywell.
            </td>
            <td className={styles.project_customer}>ОАО «Гродно Азот»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}></td>
          </tr>
          <tr>
            <td className={styles.project_name}>
              Пуск крупнотоннажного реактора цеха фталевого ангидрида на базе системы “Honeywell Plant Scape”.
            </td>
            <td className={styles.project_customer}>ОАО «Лакокраска»</td>
            <td className={styles.project_contractor}></td>
            <td className={styles.project_year}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsPage;