import { instance } from "./axios"

export const messageAPI = {
    async sendMessage(phoneNumber: number | null, message: string, idInstance: string | null, apiTokenInstance: string | null) {
        const res = await instance.post(`waInstance${idInstance}/SendMessage/${apiTokenInstance}`, {
            chatId: `${phoneNumber}@c.us`,
            message
        })
        return res;
    },
    async getMessage(idInstance: string | null, apiTokenInstance: string | null) {
        const res = await instance.get(`waInstance${idInstance}/receiveNotification/${apiTokenInstance}`)
        return res;
    },
    async deleteMessage(idInstance: string | null, apiTokenInstance: string | null, receiptId: number) {
        const res = await instance.delete(`waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`)
        return res;
    },

}
