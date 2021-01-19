const keyGenerator = require('./keyGenerator');
const { BITMAP, COUNT, SET } = require('./types');

class AnalyzerService {
    constructor(prefix, redisService) {
        this.prefix = prefix;
        this.redisService = redisService;
    }

    async analyze(type, timeSpan, args) {
        const key = keyGenerator({ prefix: this.prefix, type, timeSpan, ...args });

        switch (type) {
            case BITMAP:
                return this.redisService.countBit(key);

            case COUNT:
                return this.redisService.get(key).then(value => (value ? parseInt(value) : 0));

            case SET:
                return this.redisService.getSetValues(key);
        }
    }
}

module.exports = AnalyzerService;