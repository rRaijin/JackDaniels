module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true,
        "node": false
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "globals": {
        "process": true
    },
    "rules": {
        
        "indent": [
            "error",
            4
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/display-name": [
            0,
            { "ignoreTranspilerName": false }
        ],
        "react/prop-types": [
            0,
            { "ignore": "ignore", "customValidators": "customValidator" }
        ],
        "react/jsx-no-bind": [
            1, {
                "ignoreRefs": true,
                "allowArrowFunctions": false,
                "allowFunctions": false,
                "allowBind":  false
            }
        ]
    }
};