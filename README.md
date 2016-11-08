# testing-everything
Practice TTD - Test Driven Development using Mocha.js & Chai.js with work flow : Test (red) - Code (green) - Refactor (blue)

## TDD Workflow
1.  RED
    * Make the test first (failing test)
2. GREEN
    * Implement the code and make the test success (test passed)
3. BLUE
    * Refactor the code (make it right)

## Dependencies
1. mocha : ```npm i -D mocha```
2. chai : ```npm i -S chai```

## How To use
1. ```npm install```
2. ```mocha```
3. live watch : ```mocha -w```

## Tree
```
.
├── README.md
├── controller
│   └── controller.index.js
├── package.json
└── test
    └── index.test.js

2 directories, 4 files
```

## Package json
```
{
  "name": "testing-everything",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/blanford-fox-2016/testing-everything.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/blanford-fox-2016/testing-everything/issues"
  },
  "homepage": "https://github.com/blanford-fox-2016/testing-everything#readme",
  "devDependencies": {
    "mocha": "^3.1.2"
  },
  "dependencies": {
    "chai": "^3.5.0"
  }
}

```

## Contributor
Ken Duigraha Putra &copy; 2016

## License
MIT
