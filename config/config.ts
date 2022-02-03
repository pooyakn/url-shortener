import { IsNotEmpty, IsString, validateSync } from "class-validator"
import { plainToClass } from "class-transformer"
import dotenv from 'dotenv'

export class Config {
    @IsString()
    @IsNotEmpty()
    public readonly MONGO_CONNECTION_URL: string

    @IsString()
    public readonly REDIS_CONNECTION_URL: string
}

export function getConfig(): Config {
    const conf = plainToClass(Config, dotenv.config(), { enableImplicitConversion: true })
    const result = validateSync(conf)

    if(result.length > 0) {
        console.error(result)
        throw new Error('config validation failed')
    }

    return conf
}