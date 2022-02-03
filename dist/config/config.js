"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.Config = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const dotenv_1 = __importDefault(require("dotenv"));
class Config {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)()
], Config.prototype, "MONGO_CONNECTION_URL", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], Config.prototype, "REDIS_CONNECTION_URL", void 0);
exports.Config = Config;
function getConfig() {
    const conf = (0, class_transformer_1.plainToClass)(Config, dotenv_1.default.config(), { enableImplicitConversion: true });
    const result = (0, class_validator_1.validateSync)(conf);
    if (result.length > 0) {
        console.error(result);
        throw new Error('config validation failed');
    }
    return conf;
}
exports.getConfig = getConfig;
//# sourceMappingURL=config.js.map