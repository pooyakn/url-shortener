export interface Logger {
    error(message: string, ...args: any[]): void;
    warn(message: string, ...args: any[]): void;
    info(message: string, ...args: any[]): void;
    debug(message: string, ...args: any[]): void;
}

export function newLogger(): Logger {
    return new LoggerImpl()
}

class LoggerImpl implements Logger {
    error(message: string, ...args: any[]): void {
        throw new Error("Method not implemented.");
    }
    warn(message: string, ...args: any[]): void {
        throw new Error("Method not implemented.");
    }
    info(message: string, ...args: any[]): void {
        throw new Error("Method not implemented.");
    }
    debug(message: string, ...args: any[]): void {
        throw new Error("Method not implemented.");
    }
}
