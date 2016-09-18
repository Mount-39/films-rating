"use strict";
var router_1 = require('@angular/router');
var top20_page_1 = require("./pages/top20/top20.page");
var byDecade_page_1 = require("./pages/byDecade/byDecade.page");
var favorite_page_1 = require("./pages/favorite/favorite.page");
exports.routes = [
    { path: '', component: top20_page_1.Top20 },
    { path: 'top20', component: top20_page_1.Top20 },
    { path: 'by-decade', component: byDecade_page_1.ByDecade },
    { path: 'favorite', component: favorite_page_1.Favorite },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.router.js.map