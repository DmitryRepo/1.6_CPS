Верстка адаптивного макета
Нужно сверстать адаптивную страничку по макету из фигмы.
Материалы
Макет 
Шрифт (начертания TT Lakes Regular, TT Lakes Medium, TT Lakes Bold)
Цвета - см. в макете
Контентные тексты - можете использовать тексты из макета и/или "lorem ipsum"
Иконки и изображения - экспортируйте из фигмы
Интерактив
Мобильное меню должно раскрываться при клике на кнопку "бургер" слева в шапке. На "планшете" меню закрывается или при  
нажатие на кнопку или при нажатии на "заблюренную" область. Само меню не должно дублироваться в коде - меняйте позиционированием.
При клике "Показать все" должен раскрываться более полный список (используйте те же логотипы/тексты)
Для слайдеров используем этот модуль.
Не нужно делать, чтобы при ресайзе слайдер убирался/добавлялся - смотрим инициировать слайдер 
или нет в зависимости от начальной ширины экрана.
По клику на кнопку с трубкой открывается модалка "заказать звонок"
По клику на кнопку с сообщением открывается модалка "обратная связь"
Требования
За основу берем простенькую сборку вебпака отсюда. Мануал по использованию сборки - тут
Поддержка браузеров - последние версии Safari, Chrome, Firefox
Без использования css фреймворков, без jQuery
Между указанными на макете разрешениями (320, 768, 1440) все должно адекватно выглядеть и ничего не должно ломаться. На больших 
разрешениях центрируем страницу. Выбор, как именно будут располагаться блоки за вами. Учтите, что десктопы начинаются в наши дни 
начинаются с 1366px в ширину (бюджетные ноуты).
Все стили должны быть по БЭМ. Стиль именования - two dashes: block-name__elem-name--mod-name--mod-val
Используем SCSS, стили разносим по разным файлам (по логическим блокам), цвета выносим в переменные. Для стилизации элементов по 
БЭМ используем функционал вложенности.
Результат предоставить в виде репозитория на github и ссылки на github pages
В ветке master скомпилированных .css не должно быть, только исходники
