import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateShortUrlRequest {
    @IsNotEmpty()
    @MaxLength(1024)
    @MinLength(3)
    @IsString()
    url: string
}

export class CreateShortUrlResponse {
    shortUrl: string
}