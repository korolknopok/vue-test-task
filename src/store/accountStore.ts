import {defineStore} from 'pinia';
import {ref} from 'vue';

export interface Account {
    label: {text: string}[];
    type: string;
    login: string;
    password: string | null;
}

export const useAccountStore = defineStore('account', {
    state: () => ({
        accounts: [
            {
                label: [],
                type: 'Локальная',
                login: '',
                password: '',
            },
        ] as Account[],
    }),
    actions: {
        addAccount() {
            this.accounts.push({
                label: [],
                type: 'Локальная',
                login: '',
                password: '',
            });
        },
        removeAccount(index: number) {
            this.accounts.splice(index, 1);
        },
        updateType(index: number, type: string) {
            const account = { ...this.accounts[index], type };
            if (type === 'LDAP') {
                account.password = null;
            } else {
                account.password = account.password || '';
            }
            this.accounts[index] = account;
        },
    },
    persist: {
        storage: localStorage,
    },
});