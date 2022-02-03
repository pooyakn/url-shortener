"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newLogger = void 0;
function newLogger() {
    return new LoggerImpl();
}
exports.newLogger = newLogger;
class LoggerImpl {
    error(message, ...args) {
        throw new Error("Method not implemented.");
    }
    warn(message, ...args) {
        throw new Error("Method not implemented.");
    }
    info(message, ...args) {
        throw new Error("Method not implemented.");
    }
    debug(message, ...args) {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=logger.js.map