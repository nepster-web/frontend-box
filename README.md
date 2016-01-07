Заготовка для frontend приложения
=================================

Использование сборщика [Gulp](http://gulpjs.com).
Использование препроцессора [LESS](http://lesscss.org).
Использование менеджера пакетов [Bower](http://bower.io/).


Установка
---------

**npm install**
**bower update**


Запуск
------

**gulp**: запускает полную сборку

**gulp dev**: запускает сборку dev версии

**gulp prod**: запускает сборку prod версии

**gulp images**: запускает оптимизацию изображений

**gulp watch**: наблюдение за изменением файлов в dev версии


Окружения
---------
**dev** - окружение для быстрой сборки. Не использует оптимизацию изображений, минификацию и сжатие файлов.
**prod** - окружение для продакшина. Использует всю оптимизацию по максимуму.


Описание плагинов
-----------------

[gulp-less](https://github.com/plus3network/gulp-less): для компиляции LESS кода в CSS

[gulp-watch](https://www.npmjs.com/package/gulp-watch): наблюдение за изменениями файлов.

[gulp-preprocess](https://www.npmjs.com/package/gulp-preprocess): замена неких переменных в виде комментариев на нужные нам данные.

[gulp-copy](https://www.npmjs.com/package/gulp-copy): копирование файлов

[gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css): минификация css файлов

[gulp-concat](https://www.npmjs.com/package/gulp-concat): Слияние файлов (например css и js)

[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer): автоматически добавляет вендорные префиксы к CSS свойствам

[gulp-image](https://www.npmjs.com/package/gulp-image): сжатие изображений

[gulp-uglify](https://www.npmjs.com/package/gulp-uglify): сжатие js файлов

[gulp-env](https://www.npmjs.com/package/gulp-env): возможность настраивать окружения

[gulp-rename](https://www.npmjs.com/package/gulp-rename): переименование файлов

[gulp-ignore](https://github.com/robrich/gulp-ignore): игнорирование действий с файлами