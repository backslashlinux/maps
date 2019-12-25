const isOnline = require('is-online');

function checkIfOnline() {
    (async () => {
        if((await isOnline())) {
            jQuery("#offline").hide();
        } else {
            jQuery("#offline").show();
        }
    })();
}

window.setInterval(function(){
    checkIfOnline()
}, 1000);