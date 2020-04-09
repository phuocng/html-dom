let throttleTimeout: any = null;

function throttle(callback: Function, wait = 500) {
    return function () {
        if (wait) {
            if (throttleTimeout === null) {
                throttleTimeout = setTimeout(() => {
                    callback();
                    throttleTimeout = null;
                }, wait)
            }
        } else {
            callback();
        }
    }
}

export default throttle;