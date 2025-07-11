import {defineStore} from 'pinia';

export interface Account {
    label: { text: string }[];
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
            const account = {...this.accounts[index], type};
            if (type === 'LDAP') {
                account.password = null;
            } else {
                account.password = account.password || '';
            }
            this.accounts[index] = account;
        },
        isValid(index: number) {
            const account = this.accounts[index];
            return (
                !!account.login &&
                (account.type === 'LDAP' || !!account.password)
            );
        },
    },
    persist: {
        storage: localStorage,
    },
});