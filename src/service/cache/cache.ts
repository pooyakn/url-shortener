import { RedisRepo } from "../../repo/redis";

export interface Cache {
    get(key: string): string
    set(key: string, value: string): void
}

class CacheImpl implements Cache {
    constructor(private redisRepo: RedisRepo) {}

    get(key: string): string {
        throw new Error("Method not implemented.")
    }
    set(key: string, value: string): void {
        throw new Error("Method not implemented.")
    }
}