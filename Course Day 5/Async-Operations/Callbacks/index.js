const loadScript = (src, callback) => {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`), null);

    document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (error, script) => {
    if (error) {
        console.log(`Error: ${error.message}`);
    } else {
        console.log(`Cool, the script ${script.src} is loaded`);
        console.log( _ ); // function declared in the loaded script
    }
});
