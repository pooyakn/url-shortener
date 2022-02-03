import { Config } from "../../config/config"
import { createClient, RedisClientType } from "redis"

export interface RedisRepo {
    get(key: string): string
    set(key: string, value: string): void
}

class RedisRepoImpl implements RedisRepo {
    private client
    constructor(private config: Config) {
        this.client = createClient({
            url: config.REDIS_CONNECTION_URL
        })
    }

    get(key: string): string {
        throw new Error("Method not implemented.")
    }

    set(key: string, value: string): void {
        throw new Error("Method not implemented.")
    }
}