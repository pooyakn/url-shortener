import { MongoClient } from 'mongodb'
import { Logger } from '../../utility/logger'
import { Url } from '../domain/url'

export interface UrlRepo {
    create(url: string): Promise<Url>
    get(_id: number): Promise<Url>
}

class UrlRepoImpl implements UrlRepo {
    constructor(private db: MongoClient, private logger: Logger) {}

    create(url: string): Promise<Url> {
        throw new Error('Method not implemented.')
    }

    get(_id: number): Promise<Url> {
        throw new Error('Method not implemented.')
    }
}