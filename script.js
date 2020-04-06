const Keyboard = {

    // const KeyboardLayout = {

    //     en: [
    //         "`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-","=","backspace",
    //            "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p","[","]","\\","del",
    //             "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l",";","'", "enter",
    //             "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?","up", "shift",
    //             "ctrl","win","alt","space","alt","left", "down", "right", "ctrl"
    
    //     ],
    //     ru: [
    //         "ё","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-","=","backspace",
    //            "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з","х","ъ","\\","del",
    //             "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д","ж","э", "enter",
    //             "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".","up", "shift",
    //             "ctrl","win","alt","space","alt","left", "down", "right", "ctrl"
    
    //     ]
    // }

    createSiteElements() {
        const main = document.createElement('main');
        const heading = document.createElement('h1');
        const description = document.createElement('ul');
        const input = document.createElement('textarea');
        const keyboard = document.createElement('div');
        const liFirst = document.createElement('li');
        const liLast = document.createElement('li');
        main.className = 'main';
        heading.className = 'main-heading';
        description.className = 'description';
        input.className = 'textarea';
        keyboard.className = 'keyboard';
        heading.innerHTML = 'Виртуальная клавиатура';
        liFirst.innerHTML = 'Клавиатура создана в операционной системе Windows';
        liLast.innerHTML = 'Для переключения используется комбинация клавиш:';
        document.body.appendChild(main);
        main.appendChild(heading);
        main.appendChild(description);
        description.appendChild(liFirst);
        description.appendChild(liLast);
        main.appendChild(input);
        main.appendChild(keyboard);
        
    }

    // generateKeyboard() {}

    // createKey() {}

};

window.addEventListener('load', () => {
    Keyboard.createSiteElements()})

