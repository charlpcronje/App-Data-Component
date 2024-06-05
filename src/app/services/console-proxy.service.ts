import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ConsoleProxyService {
    private logs: { message: string, source: string, type: string }[] = [];

    constructor() {
        this.overrideConsoleMethods();
    }

    private overrideConsoleMethods(): void {
        const originalLog = console.log;
        console.log = (...args: any[]) => {
            const source = new Error().stack?.split('\n')[2].trim();
            this.logs.push({ message: `LOG: ${args.join(' ')}`, source: source || 'unknown', type: 'log' });
            originalLog.apply(console, args);
        };

        const originalError = console.error;
        console.error = (...args: any[]) => {
            const source = new Error().stack?.split('\n')[2].trim();
            this.logs.push({ message: `ERROR: ${args.join(' ')}`, source: source || 'unknown', type: 'error' });
            originalError.apply(console, args);
        };

        const originalWarn = console.warn;
        console.warn = (...args: any[]) => {
            const source = new Error().stack?.split('\n')[2].trim();
            this.logs.push({ message: `WARN: ${args.join(' ')}`, source: source || 'unknown', type: 'warn' });
            originalWarn.apply(console, args);
        };
    }

    getLogs(): { message: string, source: string, type: string }[] {
        return this.logs;
    }
}
