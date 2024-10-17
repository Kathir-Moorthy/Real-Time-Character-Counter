const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');
const warningMsg = document.getElementById('warningMsg');
const charList = document.getElementById('charList');
const progress = document.getElementById('progress');
const maxChars = 200;

textarea.addEventListener('input', function () {
    const currentLength = textarea.value.length;

    // Update character count
    charCount.textContent = currentLength + '/' + maxChars + ' characters';

    // Update progress bar
    const progressPercentage = (currentLength / maxChars) * 100;
    progress.style.width = progressPercentage + '%';

    // Show or hide warning message
    if (currentLength > maxChars) {
        warningMsg.style.display = 'block'; // Show warning
    } else {
        warningMsg.style.display = 'none'; // Hide warning
    }

    // Limit input to max characters
    if (currentLength > maxChars) {
        textarea.value = textarea.value.substring(0, maxChars);
    }

    // Initialize an empty object to store character counts
    const charMap = {};

    // Loop through each character in the textarea
    for (let i = 0; i < textarea.value.length; i++) {
        let char = textarea.value[i];
        // Treat whitespaces and special characters
        charMap[char] = (charMap[char] || 0) + 1;
    }

    // Clear the previous list of character counts
    charList.innerHTML = '';

    // Display the updated list of characters and their counts
    Object.entries(charMap).forEach(([char, count]) => {
        const listItem = document.createElement('li');
        listItem.textContent = `'${char}' : ${count} time(s)`;
        charList.appendChild(listItem);
    });
});
