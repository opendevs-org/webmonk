const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
});

(async () => {
    try {
        const script = await loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")
        alert(`Cool, the script ${script.src} is loaded`);
        alert( _ ); // function declared in the loaded script
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
})();
