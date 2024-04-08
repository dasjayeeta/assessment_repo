//Task 3: Asynchronous File Handling
import fs from 'fs';

const words = (text) => {
    const readText = text.trim().split(/\s+/);
    return readText.length;

}

fs.readFile('data.txt', 'utf8', (err, text) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const countWords = words(text);
    console.log(`Total number of words: ${countWords}`);
});