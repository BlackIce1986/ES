const buildTree = (treeArray, depth = 0) => {
    const currentLevelElement = treeArray.shift();
    if (currentLevelElement !== undefined) {
        console.log('-'.repeat(depth), currentLevelElement);
        if (currentLevelElement.includes('.') === false) {
            depth++;
            buildTree(treeArray, depth);
        }
    }
};

buildTree('/var/www/subdirectory1'.split('/'));
buildTree('/var/www/subdirectory1/file1.png'.split('/'));
buildTree('/var/www/subdirectory1/file2.png'.split('/'));
buildTree('/var/www/subdirectory1/subdir2'.split('/'));
buildTree('/var/www/subdirectory1/subdir2/file3.png'.split('/'));
buildTree('/var/www/file5.png'.split('/'));


const arr = [2, 56, 234234, 2, 65, 2, 56, 75, 2, 5, 343, 25, 632, 2, -22, 432, 0, 433];

console.log('.sort', arr.sort((a, b) => {
    "use strict";
    return a - b;
}));

const insertionSort = (items) => {
    for (let i = 0; i < items.length; i++) {
        let value = items[i];
        // store the current item value so it can be placed right
        for (var j = i - 1; j > -1 && items[j] > value; j--) {
            // loop through the items in the sorted array (the items from the current to the beginning)
            // copy each item to the next one
            items[j + 1] = items[j];
        }
        // the last item we've reached should now hold the value of the currently sorted item
        items[j + 1] = value;
    }
    return items;
};

console.log('insertionSort', insertionSort(arr)); // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]


const bubbleSort = (items) => {
    let isSwapped = true;
    do {
        isSwapped = false;
        for (let i=0; i < items.length-1; i++) {
            if (items[i] > items[i+1]) {
                let temp = items[i];
                items[i] = items[i+1];
                items[i+1] = temp;
                isSwapped = true;
            }
        }
    } while (isSwapped);
    return items;
};

console.log('bubbleSort', bubbleSort(arr));