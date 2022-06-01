// process input

const processInput = (input) => {
    switch (input) {
        case 'q':
            process.exit(0);
        default:
            return;
    }
};

export default processInput;
