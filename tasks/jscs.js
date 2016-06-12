var srcDir   = __dirname + "/../";

module.exports = {
    all: {
        src: [
                srcDir + "*.js",
                srcDir + "lib/*.js",
                srcDir + "adapter/example/*.js",
                srcDir + "tasks/**/*.js",
                srcDir + "www/**/*.js",
                srcDir + "widgets/justgage/js/*.js",
                '!' + srcDir + "www/lib/**/*.js",
                '!' + srcDir + 'node_modules/**/*.js',
                '!' + srcDir + 'adapter/*/node_modules/**/*.js',
                '!' + srcDir + "widgets/justgage/lib/**/*.js"
        ],
        options: require('./jscsRules.js')
    }
};