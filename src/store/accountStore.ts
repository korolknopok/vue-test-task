import {defineStore} from 'pinia';
import {ref} from 'vue';

export interface Account {
    label: string;
    type: string;
    login: string;
    password: string | null;
}

export const useAccountStore = defineStore('account', () => {
    const accounts = ref<Account[]>([
        {
            label: '',
            type: 'Локальная',
            login: '',
            password: ''
        }
    ]);

    const addAccount = () => {
        accounts.value.push({
            label: '',
            type: 'Локальная',
            login: '',
            password: ''
        });
    };

    const removeAccount = (index: number) => {
        accounts.value.splice(index, 1);
    };

    const updateType = (index: number, type: string) => {
        const account = {...accounts.value[index], type};
        if (type === 'LDAP') {
            account.password = null;
        } else {
            account.password = account.password || '';
        }
        accounts.value[index] = account;
    };

    return {accounts, addAccount, removeAccount, updateType};
});