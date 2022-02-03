import { Logger } from "../../../utility/logger";
import { UrlRepo } from "../../repo/url";
import { CreateShortUrlRequest, CreateShortUrlResponse } from "./endpoint";

export interface UrlShortener {
    create(request: CreateShortUrlRequest): CreateShortUrlResponse
}

class UrlShortenerImpl implements UrlShortener {
    constructor(private urlRepo: UrlRepo, private logger: Logger) {}

    create(request: CreateShortUrlRequest): CreateShortUrlResponse {
        throw new Error("Method not implemented.")
    }
}