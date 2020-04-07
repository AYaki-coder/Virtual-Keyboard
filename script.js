let input;

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
                    break;

                case "tab":
                    keyElement.innerHTML = createIconHTML("keyboard_tab");
                    keyElement.classList.add("key_tab");
                    break;

                case "caps":
                    keyElement.classList.add("key_caps");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");
                    break;

                case "enter":
                    keyElement.classList.add("key_enter");
                    keyElement.innerHTML = createIconHTML("keyboard_return");
                    break;

                case "space":
                    keyElement.classList.add("key_space");
                    keyElement.innerHTML = createIconHTML("space_bar");
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
                    keyElement.textContent = key;
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
        for (let i = 0; i < Keyboard.KeyboardLayout.code.length; i++) {
            if (event.code == Keyboard.KeyboardLayout.code[i]) {
                return true;
            }
        }
        return false;
    },

    isSpetialKey(event) {
        switch (event) {
            case 'Backspace':

                document.getElementById(event).classList.add('key_active');
                this.inputBackspaceToTextarea();
                break;

            case 'Tab':
                document.getElementById(event).classList.add('key_active');
                this.inputTabToTextarea();
                break;

            case 'CapsLock':
                const capsKey = document.getElementById(event);
                document.querySelectorAll('.keyboard__key').forEach((key, indexkey) => {

                    const ConstKey = ["del", "ctrl", "win", "alt",].indexOf(key.innerHTML) !== -1;
                    if (!ConstKey && ((+key.childElementCount) == 0)) {

                        key.innerHTML = key.innerHTML == key.innerHTML.toLowerCase() ? key.innerHTML.toUpperCase() : key.innerHTML.toLowerCase();
                    }
                });

                if (capsKey.classList.contains('key_active')) {

                    capsKey.classList.remove('key_active');
                } else {

                    capsKey.classList.add('key_active');
                }
                break;

            case 'Enter':
                document.getElementById(event).classList.add('key_active');
                this.inputEnterToTextarea();
                break;

            case 'Space':
                document.getElementById(event).classList.add('key_active');
                this.inputSpaceToTextarea();
                break;

            case 'ShiftLeft':

                document.getElementById(event).classList.add('key_active');
                this.encodeShiftru();
                break;

            case 'ShiftRight':
                document.getElementById(event).classList.add('key_active');
                this.encodeShiftru();
                break;

            case 'ArrowUp':
                document.getElementById(event).classList.add('key_active');
                this.inputArrowUpToTextarea()
                break;

            case 'ArrowDown':
                document.getElementById(event).classList.add('key_active');
                this.inputArrowDownToTextarea();
                break;

            case 'ArrowLeft':
                document.getElementById(event).classList.add('key_active');
                this.inputArrowLeftToTextarea();

                break;
            case 'ArrowRight':
                document.getElementById(event).classList.add('key_active');
                this.inputArrowRightToTextarea();
                break;
        }
    },

    encodeShiftru() {
        document.querySelectorAll('.keyboard__key').forEach((key, indexkey) => {

            const ConstKey = ["del", "ctrl", "win", "alt",].indexOf(key.innerHTML) !== -1;
            if (!ConstKey && ((+key.childElementCount) == 0)) {
                switch (key.innerHTML) {

                    case '1':
                        key.innerHTML = '!';
                        break;
                    case '2':
                        key.innerHTML = '"';
                        break;
                    case '3':
                        key.innerHTML = '№';
                        break;
                    case '4':
                        key.innerHTML = ';';
                        break;
                    case '5':
                        key.innerHTML = '%';
                        break;
                    case '6':
                        key.innerHTML = ':';
                        break;
                    case '7':
                        key.innerHTML = '?';
                        break;
                    case '8':
                        key.innerHTML = '*';
                        break;
                    case '9':
                        key.innerHTML = '(';
                        break;
                    case '0':
                        key.innerHTML = ')';
                        break;
                    case '-':
                        key.innerHTML = '_';
                        break;
                    case '=':
                        key.innerHTML = '+';
                        break;
                    case '.':
                        key.innerHTML = ',';
                        break;
                    case '\\':
                        key.innerHTML = '/';
                        break;

                    default:
                        key.innerHTML = key.innerHTML == key.innerHTML.toLowerCase() ? key.innerHTML.toUpperCase() : key.innerHTML.toLowerCase();
                        break;
                }

            }
        });

    },

    decodeShiftru() {
        document.querySelectorAll('.keyboard__key').forEach((key, indexkey) => {

            const ConstKey = ["del", "ctrl", "win", "alt",].indexOf(key.innerHTML) !== -1;
            if (!ConstKey && ((+key.childElementCount) == 0)) {
                switch (key.innerHTML) {

                    case '!':
                        key.innerHTML = '1';
                        break;
                    case '"':
                        key.innerHTML = '2';
                        break;
                    case '№':
                        key.innerHTML = '3';
                        break;
                    case ';':
                        key.innerHTML = '4';
                        break;
                    case '%':
                        key.innerHTML = '5';
                        break;
                    case ':':
                        key.innerHTML = '6';
                        break;
                    case '?':
                        key.innerHTML = '7';
                        break;
                    case '*':
                        key.innerHTML = '8';
                        break;
                    case '(':
                        key.innerHTML = '9';
                        break;
                    case ')':
                        key.innerHTML = '0';
                        break;
                    case '_':
                        key.innerHTML = '-';
                        break;
                    case '+':
                        key.innerHTML = '=';
                        break;
                    case ',':
                        key.innerHTML = '.';
                        break;
                    case '/':
                        key.innerHTML = '\\';
                        break;

                    default:
                        key.innerHTML = key.innerHTML == key.innerHTML.toLowerCase() ? key.innerHTML.toUpperCase() : key.innerHTML.toLowerCase();
                        break;
                }

            }
        });
    },

    inputKeyToTextarea(str) {
        let start = input.selectionStart;
        if (input.selectionStart != input.selectionEnd) {
            input.value = input.value.slice(0, input.selectionStart) + str + input.value.slice(input.selectionEnd);
        } else if (input.value.length == input.selectionStart) {
            input.value += str;
        } else {
            input.value = input.value.slice(0, input.selectionStart) + str + input.value.slice(input.selectionEnd);
        }
        input.selectionStart = start + 1;
        input.selectionEnd = start + 1;
    },

    inputBackspaceToTextarea() {
        let start = input.selectionStart;
        if (input.selectionStart != input.selectionEnd) {
            input.value = input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
            input.selectionEnd = start;
        } else if (input.selectionStart > 0) {
            input.value = input.value.slice(0, input.selectionStart - 1) + input.value.slice(input.selectionEnd);
            input.selectionStart = start - 1;
            input.selectionEnd = start - 1;
        }
    },

    inputSpaceToTextarea() {
        let start = input.selectionStart;
        input.value = input.value.slice(0, input.selectionStart) + ' ' + input.value.slice(input.selectionEnd);
        input.selectionStart = start + 1;
        input.selectionEnd = start + 1;
    },

    inputTabToTextarea() {
        let start = input.selectionStart;
        input.value = input.value.slice(0, input.selectionStart) + '\t' + input.value.slice(input.selectionEnd);
        input.selectionStart = start + 1;
        input.selectionEnd = start + 1;
    },

    inputEnterToTextarea() {
        let start = input.selectionStart;
        input.value = input.value.slice(0, input.selectionStart) + '\n' + input.value.slice(input.selectionEnd);
        input.selectionStart = start + 1;
        input.selectionEnd = start + 1;
    },
    inputArrowLeftToTextarea() {
        if (input.selectionStart > 0) {
            input.selectionStart = input.selectionEnd = input.selectionStart - 1;
        }
    },
    inputArrowRightToTextarea() {
        if (input.selectionEnd < input.value.length) {
            input.selectionStart = input.selectionEnd = input.selectionEnd + 1;
        }
    },

    inputArrowDownToTextarea() {
        let start = input.selectionStart;
        input.value = input.value.slice(0, input.selectionStart) + '▼' + input.value.slice(input.selectionEnd);
        input.selectionStart = start + 1;
        input.selectionEnd = start + 1;
    },
    inputArrowUpToTextarea() {
        let start = input.selectionStart;
        input.value = input.value.slice(0, input.selectionStart) + '▲' + input.value.slice(input.selectionEnd);
        input.selectionStart = start + 1;
        input.selectionEnd = start + 1;
    },
   
    listenToTheKey(event) {
        
        const SpetialKey = ['Backspace', 'Tab', 'Del', 'CapsLock', 'Enter', 'ShiftLeft', 'ArrowUp', 'ShiftRight',
            'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',].indexOf(event.code) !== -1;

        if (Keyboard.isButtonInTheKeyboard(event)) {
            event.preventDefault();
           
            if (SpetialKey) {
                console.log('1');
                Keyboard.isSpetialKey(event.code);

            } else {

                document.getElementById(event.code).classList.add('key_active');
                Keyboard.inputKeyToTextarea(document.getElementById(event.code).innerHTML)
               
            }
        }

    },

    stopListeningToTheKey(event) {

        if (Keyboard.isButtonInTheKeyboard(event) && (event.code !== 'CapsLock')) {

            document.getElementById(event.code).classList.remove('key_active');
            if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                Keyboard.decodeShiftru();
            }
        }

    },
};

window.addEventListener('load', () => {
    Keyboard.createSiteElements();
    input = document.querySelector('textarea');
    document.addEventListener('keydown', Keyboard.listenToTheKey);
    document.addEventListener('keyup', Keyboard.stopListeningToTheKey);

})

