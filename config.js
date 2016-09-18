(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'app',

        '@angular': 'node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'reflect-metadata': 'node_modules/reflect-metadata/Reflect.js',
        'zone': 'node_modules/zone.js/dist/zone.js',
        'rxjs': 'node_modules/rxjs',
        'd3': 'node_modules/d3/d3.min.js'

    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {main: 'boot.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        'reflect-metadata': {defaultExtension: 'js'},
        'zone': {defaultExtension: 'js'},
        'd3': {defaultExtension: 'js'},
        'angular2-in-memory-web-api': {main: 'index.js', defaultExtension: 'js'}
    };

    var angularPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'upgrade'
    ];

    // Individual files (~300 requests):
    function angularPackIndex(pkgName) {
        packages['@angular/' + pkgName] = {main: './bundles/'+pkgName+'.umd.js'};
    }

    // Add package entries for angular packages
    angularPackageNames.forEach(angularPackIndex);

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);

})(this);