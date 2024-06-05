// src/app/services/app.service.ts

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private dataStore: Record<string, any> = {};

    /**
     * Method to manage data in the singleton.
     * @param key - Key for the data.
     * @param value - Value to set for the key.
     * @param defaultValue - Default value if the provided value is null or undefined.
     */
    data(key: string, value?: any, defaultValue?: any) {
        if (arguments.length === 1) {
            return this.getData(key);
        } else {
            this.setData(key, value, defaultValue);
        }
    }

    /**
     * Method to retrieve data from the singleton.
     * @param key - Key for the data.
     * @param defaultValue - Default value if the data is not found.
     */
    getData(key: string, defaultValue?: any) {
        const keys = key.split('.');
        let result: any = this.dataStore;
        for (let k of keys) {
            result = result ? result[k] : undefined;
            if (result === undefined) break;
        }
        return result !== undefined ? result : defaultValue;
    }

    /**
     * Method to set data in the singleton.
     * @param key - Key for the data.
     * @param value - Value to set for the key.
     * @param defaultValue - Default value if the provided value is null or undefined.
     */
    setData(key: string, value: any, defaultValue?: any) {
        const keys = key.split('.');
        let target = this.dataStore;
        keys.forEach((k, i) => {
            if (i === keys.length - 1) {
                target[k] = value !== undefined ? value : defaultValue;
            } else {
                target = target[k] = target[k] || {};
            }
        });
    }
}