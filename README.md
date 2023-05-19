<h2>Интерфейс для отправки и получения сообщений Whatsapp</h2>
<h3>Инструкция для запуска проекта</h3>
<ol>
<li>Клонируйте репозиторий: <b>git clone</b> https://github.com/KrisPrymak/wa_ga.git</li>
<li>Перейдите на локальной машине в папку с проектом</li>
<li>Установите зависимости, используя <b>npm i</b></li>
<li>Запустите проект <b>npm start</b></li>
</ol>
<ul><li>Или перейдите к просмотру проекта на GitHub Pages https://krisprymak.github.io/wa_ga</li></ul>
<ul><li>Для авторизации вам потребуется зарегистрироваться в личном кабинете https://console.green-api.com/ и получить idInstance и apiTokenInstance</li></ul>

<h3>В проекте используются:</h3>
<ul>
<li>TypeScript</li>
<li>React</li>
<li>Redux Toolkit</li>
<li>Axios</li>
<li>Ant Design</li>
</ul>
<h3>Описание проекта</h3>
<a target="_blank" href="https://drive.google.com/file/d/1jVoH8Jzw5mQYC88PeVZ9aXKY_4V3Xk99/view?usp=sharing">Видео презентация проекта</a>
<br/><br/>
<img src="https://raw.githubusercontent.com/KrisPrymak/wa_ga/main/src/media/screenshot.png"/>

<ul>
<li>Использован сервис GREEN-API https://green-api.com/</li>
<li>За прототип интерфейса взять внешний вид чата https://web.whatsapp.com/</li>
<li>Отправка сообщений реализована методом https://green-
api.com/docs/api/sending/SendMessage/ </li>
<li>Получение сообщение реализовано методом https://green-
api.com/docs/api/receiving/technology-http-api/ </li>
<li>Результат:<ul> 
<li>Пользователь переходит на сайт чата и вводит свои учетные данные из системы GREEN-API (idInstance, apiTokenInstance)</li>
<li> Пользователь вводит номер телефона получателя и создает новый чат</li>
<li> Пользователь пишет текстовое сообщение и отправляет его получателю в
WhatsApp</li>
<li> Получатель отвечает на сообщение в мессенджере WhatsApp</li>
<li> Пользователь видит ответ получателя в чате</li>
  </ul></li>
</ul>