function hook() {
    try {
        Java.perform(function () {
            let C = Java.use("com.nx.sdk.C");
            C["a"].overload('java.lang.String', 'java.util.Map').implementation = function (str, map) {
                var url = str;
                if (url.indexOf('zkapi.hexiny.com/advert/getAdvert') != -1) {
                    str = "http://";
                }
                let ret = this.a(str, map);
                return ret;
            };
        })
    } catch (error) {

    }

}

setImmediate(hook);