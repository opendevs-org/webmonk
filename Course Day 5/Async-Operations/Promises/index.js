const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
});

const promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise
    .then(script => {
        alert(`Cool, the script ${script.src} is loaded`);
        alert( _ ); // function declared in the loaded script
    })
    .catch(error => alert(`Error: ${error.message}`));

promise.then(script => alert('Another handler...'));

/*
SECTION: Differences
1.
Promises:
Promises allow us to do things in the natural order.
First, we run loadScript(script), and .then we write what to do with the result.
Callbacks:
We must have a callback function at our disposal when calling loadScript(script, callback).
In other words, we must know what to do with the result before loadScript is called.

2.
Promises:
We can call .then on a Promise as many times as we want.
Callbacks:
There can be only one callback.
*/