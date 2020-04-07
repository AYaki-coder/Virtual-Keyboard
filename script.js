const Keyboard = {

    KeyboardLayout: {

        en: [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "del",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
            "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "up", "right-shift",
            "ctrl", "win", "alt", "space", "alt", "left", "down", "right", "ctrl"

        ],
        ru: [
            "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "del",
            "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",
            "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "up", "right-shift",
            "ctrl", "win", "alt", "space", "alt", "left", "down", "right", "ctrl"

        ],

        code: [
            'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
            'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Del',
            'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
            'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
            'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
        ],
    },

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
        input.classList.add('textarea');
        keyboard.className = 'keyboard';
        keyboard.setAttribute('tabindex', '0')
        heading.innerHTML = 'Виртуальная клавиатура';
        liFirst.innerHTML = 'Клавиатура создана в операционной системе Windows';
        liLast.innerHTML = 'Для переключения используется комбинация клавиш:';
        document.body.append(main);
        main.append(heading);
        main.append(description);
        description.append(liFirst);
        description.append(liLast);
        main.append(input);
        main.append(keyboard);
        keyboard.append(this.generateKeyboard(this.KeyboardLayout.ru, this.KeyboardLayout.code));
        input.setAttribute('value', '');

        input.onblur = () => {
            input.focus();
        }
        input.focus();
    },

    generateKeyboard(KeyboardLayout, keyCode) {
        const fragment = document.createDocumentFragment();
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };
        KeyboardLayout.forEach((key, ind) => {
            const keyElement = document.createElement('div');
            const insertLineBreak = ["backspace", "del", "enter", "right-shift"].indexOf(key) !== -1;
            keyElement.classList.add("keyboard__key");
            keyElement.setAttribute('id', keyCode[ind]);
            switch (key) {
                case "backspace":
                    keyElement.classList.add("key_backspace");
                    keyElement.innerHTML = createIconHTML("keyboard_backspace");

                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    //     this._triggerEvent("oninput");
                    // });

                    break;

                case "tab":
                    keyElement.innerHTML = createIconHTML("keyboard_tab");
                    keyElement.classList.add("key_tab");
                    break;

                case "caps":
                    keyElement.classList.add("key_caps");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    // keyElement.addEventListener("click", () => {
                    //     this._toggleCapsLock();
                    //     keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                    // });

                    break;

                case "enter":
                    keyElement.classList.add("key_enter");
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value += "\n";
                    //     this._triggerEvent("oninput");
                    // });

                    break;

                case "space":
                    keyElement.classList.add("key_space");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value += " ";
                    //     this._triggerEvent("oninput");
                    // });

                    break;
                case "shift":
                    keyElement.innerHTML = createIconHTML("arrow_upward");
                    keyElement.classList.add("key_shift");
                    break;
                case "right-shift":
                    keyElement.innerHTML = createIconHTML("arrow_upward");
                    keyElement.classList.add("key_shift");
                    break;

                case "ctrl":
                    keyElement.classList.add("key_ctrl");
                    keyElement.textContent = key.toLowerCase();
                    break;
                case "up":
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_up");
                    break;
                case "down":
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_down");
                    break;
                case "left":
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_left");
                    break;
                case "right":
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_right");
                    break;

                default:
                    keyElement.textContent = key.toLowerCase();

                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                    //     this._triggerEvent("oninput");
                    // });

                    break;
            }

            fragment.append(keyElement);

            if (insertLineBreak) {
                fragment.append(document.createElement("br"));
            }
        });

        return fragment;
    },

    isButtonInTheKeyboard(event) {
        for (let i = 0; i <  Keyboard.KeyboardLayout.code.length; i++) {
            if (event.code ==  Keyboard.KeyboardLayout.code[i]) {
                return true;
            }
        }
        return false;
    },

    listenToTheKey(event) {

        const input = document.querySelector('textarea');
        const SpetialKey = ['Backspace', 'Tab', 'Del', 'CapsLock', 'Enter', 'ShiftLeft', 'ArrowUp', 'ShiftRight',
            'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',].indexOf(event.code) !== -1;
       
        if(Keyboard.isButtonInTheKeyboard(event)){
            event.preventDefault();
            document.getElementById(event.code).classList.add('key_active');
            if (SpetialKey) {
                console.log('1');
    
            } else {
                input.value += document.getElementById(event.code).innerHTML;
            } 
        }
       
    },

    stopListeningToTheKey(event) {
        if(Keyboard.isButtonInTheKeyboard(event)){
            document.getElementById(event.code).classList.remove('key_active'); 
        }
        
    },

    // createKey() {}

};

window.addEventListener('load', () => {
    Keyboard.createSiteElements();
    document.addEventListener('keydown', Keyboard.listenToTheKey);
    document.addEventListener('keyup', Keyboard.stopListeningToTheKey);

})

