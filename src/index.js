import promptly from 'promptly';
import main from './main/index.js';
import processInput from './utils/processInput.js';

(async () => {
    // Load profile, theme if save data exists
    console.clear();
    let display = main;

    while (true) {
        console.log(display);
        const input = await promptly.prompt('Input: ');

        processInput(input);
        console.clear();
    }
})();
