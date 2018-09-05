const start = Date.now();

const waitAndWrite = (delay) => {
    "use strict";
    setTimeout(() => {
        console.log(Date.now() - start);
    }, delay);
};

const run = () => {
    waitAndWrite(1000);
    waitAndWrite(2000);
    waitAndWrite(3000);
};

run();


const waitAndReturn = (delay) => {
    "use strict";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Date.now() - start);
        }, delay);
    });
}

const runOnReturn = () => {
    "use strict";
    waitAndReturn(4000).then((duration) => {
        "use strict";
        console.log(duration);
    });
    waitAndReturn(5000).then((duration) => {
        "use strict";
        console.log(duration);
    });
    waitAndReturn(6000).then((duration) => {
        "use strict";
        console.log(duration);
    });
};

runOnReturn();


const asyncWaitAndReturn = (delay) => {
    "use strict";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Date.now() - start);
        }, delay);
    });
}

const runAsyncOnReturn = async() => {

    let response1 = await asyncWaitAndReturn(1000);
    console.log('async1', response1);

    let response2 = await asyncWaitAndReturn(2000);
    console.log('async2', response2);

    let response3 = await asyncWaitAndReturn(1000);
    console.log('async3', response3);

};

runAsyncOnReturn();


const asyncWaitAndReturnRandom = (delay) => {
    "use strict";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const timeDiff = Date.now() - start;
            if (timeDiff > 2005) {
                reject(timeDiff);
            }
            resolve(timeDiff);
        }, delay);
    });
}

const runAsyncOnReturnRandom = () => {

    asyncWaitAndReturnRandom(1000).then((delay) => {
        console.log('then:', delay);
        return asyncWaitAndReturnRandom(1000)
    }).then((delay) => {
        console.log('then:', delay);
        return asyncWaitAndReturnRandom(1000)
    }).then((delay) => {
        console.log('then:', delay);
    }).catch((error) => {
        "use strict";
        console.log('Oops!', error);
    });


};

runAsyncOnReturnRandom();


Promise.all([asyncWaitAndReturnRandom(1000),  asyncWaitAndReturnRandom(2000),  asyncWaitAndReturnRandom(3000)]).then((values) => {
    "use strict";
    console.log(values, 'See sündmus juhtus 12.5% tõenäosusega');
}).catch(() => {
    "use strict";
   console.log('Ebaõnnestus');
});