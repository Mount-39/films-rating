"use strict";
var API = (function () {
    function API(URL) {
        if (URL === void 0) { URL = ''; }
        this.URL = URL;
        this.TOKEN = '95ffd438-9f28-44e6-b426-a3044222d5a0';
        this.URL = "http://www.myapifilms.com/imdb/" + URL + "&token=" + this.TOKEN + "&format=json&data=1";
    }
    return API;
}());
exports.API = API;
//# sourceMappingURL=API.js.map