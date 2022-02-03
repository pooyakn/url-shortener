import { plainToClass } from "class-transformer";
import { validateOrReject } from "class-validator";
import { CreateShortUrlRequest, CreateShortUrlResponse } from "../service/url/endpoint";

export async function httpToCreateShortUrlRequest(req: Record<string, any>): Promise<CreateShortUrlRequest> {
    const result = plainToClass(CreateShortUrlRequest, req)
    await validateOrReject(result)
    return result
}