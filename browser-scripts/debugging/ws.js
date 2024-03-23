(async() => {
    'use strict';

    // Your code here...
    setTimeout(function() {
        window.jd.ws.send = new Proxy(window.jd.ws.send, {
            apply: function(target, scope, args) {
                if(typeof(args[0]) === 'string') {
                    console.log(args[0])
                }
                let data = target.apply(scope, args);
                return data;
            }
        });
        window.jd.ws.addEventListener('message', async(e) => { console.log(e.data); });
    },6000);
})(); // setup the JDNService watcher proxy
