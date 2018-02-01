import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    isStorageAvailable() {
        return typeof (Storage) !== 'undefined';
    }

    setSessionItem(key: string, value: any): boolean {
        if (typeof (Storage) !== 'undefined' && window.sessionStorage) {
            window.sessionStorage.setItem(key, value);
            return true;
        }
        return false;
    }

    setLocalItem(key: string, value: any): boolean {
        if (typeof (Storage) !== 'undefined' && window.localStorage) {
            window.localStorage.setItem(key, value);
            return true;
        }
        return false;
    }


    getSessionItem(key: string) {
        if (typeof (Storage) !== 'undefined' && window.sessionStorage) {
            let value = window.sessionStorage.getItem(key);
            return value;
        }
        return null;
    }

    getLocalItem(key: string) {
        if (typeof (Storage) !== 'undefined' && window.localStorage) {
            let value = window.localStorage.getItem(key);
            return value;
        }
        return null;
    }

    removeSessionItem(key: string) {
        if (typeof (Storage) !== 'undefined' && window.sessionStorage) {
            window.sessionStorage.removeItem(key);
            return true;
        }
        return false;
    }

    removeLocalItem(key: string) {
        if (typeof (Storage) !== 'undefined' && window.localStorage) {
            window.localStorage.removeItem(key);
            return true;
        }
        return false;
    }

}