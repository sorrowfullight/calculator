
### [Task/ Задание](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit)

---

### [Deployed version/ Деплой приложения](https://sorrowfullight.github.io/calculator/)

---

### _RU_ Краткое описание

> Приложение представляет собой базовый калькулятор, выполняющий следующие функции:
> + сложение;
> + вычитание;
> + умножение;
> + деление;
> + вычисление процента;
> + смена знака.
>
> Работает с числами до десяти знаков.тз

---

### _EN_ Short description

> This application is a basic calculator that fulfills the functions below:
> + addition;
> + subtraction;
> + multiplication;
> + division;
> + calculation of percentage;
> + sign reverse.
>
> It can handle numbers up to 10 digits.

---

### _RU_ Описание структуры папок

> + ___Корневая папка___ - деплой приложения + html-разметка
> + ___Папка dist___ - файлы, которые создаются с помощью вебпака для последующего рендеринга приложения из файлов из папки src, а также из html-разметки (корневая папка)
> + ___Папка src___ - css-стили и логика приложения, описанная в файле main.js, которые позже преобразовываются через файл webpack.config.js (корневая папка) в файл bundle.js (папка dist)

### _EN_ Structure of the folders

> + ___Root folder___ - application deployment + html-file
> + ___Folder 'dist'___- files created via webpack from folder 'src', namely from the files main.js and styles.css, as well as from index.html (root folder) to be rendered later as an app 
> + ___Folder 'src'___ - css-styles and application logic (described in main.js) to be processed later by webpack.config.js(root folder) into bundle.js (folder 'dist')


### _EN_ How to run the app / _RU_ Как запустить приложение
```bash 
git clone https://github.com/sorrowfullight/calculator
cd calculator
npm install
npm run build
npm start
```

