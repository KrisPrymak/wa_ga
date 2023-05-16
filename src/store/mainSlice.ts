import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { messageAPI } from "../api/api";

interface Auth {
  idInstance: null | string;
  apiTokenInstance: null | string;
}

interface mesageItem {
  from: "me" | "interlocutor";
  text: string;
}

export interface chat {
  phoneNumber: number;
  messagesList: Array<mesageItem>;
}

interface MainState {
  auth: Auth;
  currentNumber: null | number;
  chats: Array<chat>;
  status: null | "pending" | "resolved" | "rejected";
  error: any;
}

interface sendMessageProps {
  phoneNumber: number | null;
  message: string;
  idInstance: string | null;
  apiTokenInstance: string | null;
}

interface getMessageProps {
  idInstance: string | null;
  apiTokenInstance: string | null;
}

const initialState: MainState = {
  auth: {
    idInstance: null,
    apiTokenInstance: null,
  },
  currentNumber: null,
  chats: [
    // {
    //   phoneNumber: 79178849863,
    //   messagesList: [
    //     { from: "me", text: "hello im um" },
    //     { from: "interlocutor", text: "hi how are ypo" },
    //   ],
    // },
  ],
  status: null,
  error: null,
};

export const sendMessage = createAsyncThunk(
  "main/sendMessage",
  async function (
    { phoneNumber, message, idInstance, apiTokenInstance }: sendMessageProps,
    { rejectWithValue }
  ) {
    try {
      const response = await messageAPI.sendMessage(
        phoneNumber,
        message,
        idInstance,
        apiTokenInstance
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getMessage = createAsyncThunk(
  "main/getMessage",
  async function (
    { idInstance, apiTokenInstance }: getMessageProps,
    { rejectWithValue }
  ) {
    try {
      const response = await messageAPI.getMessage(
        idInstance,
        apiTokenInstance
      );
      let resData = response.data;
      if (resData !== null) {
        await messageAPI.deleteMessage(idInstance, apiTokenInstance, resData.receiptId);
      } else {
        resData = null;
      }
      return resData;
      // return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
//объект с уведомлением
const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    login(state, action) {
      state.auth = action.payload;
    },
    addCurrentNumber(state, action) {
      state.currentNumber = action.payload;
    },
    addUIMessage(state, action) {
      const index = state.chats.findIndex(
        (item) => item.phoneNumber == action.payload.phoneNumber
      );
      index === -1
        ? state.chats.push({
            phoneNumber: action.payload.phoneNumber,
            messagesList: [{ from: "me", text: action.payload.message }],
          })
        : state.chats.map((item) =>
            item.phoneNumber == action.payload.phoneNumber
              ? item.messagesList.push({
                  from: "me",
                  text: action.payload.message,
                })
              : item
          );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendMessage.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(sendMessage.fulfilled, (state) => {
      state.status = "resolved";
    });
    builder.addCase(sendMessage.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });

    builder.addCase(getMessage.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(getMessage.fulfilled, (state, action) => {
      console.log(action.payload)
      state.status = "resolved";
     if (action.payload !== null) {
      if (action.payload.body.typeWebhook !== 'outgoingMessageStatus') {
        const index = state.chats.findIndex(
          (item) =>
            item.phoneNumber ==
            action.payload.body.senderData.chatId.substring(0, 11)
            //action.payload.body.senderData?.chatId.substring(0, 11)
        );
        index === -1
          ? state.chats.push({
              // phoneNumber: action.payload.body.senderData?.chatId.substring(0, 11),
              phoneNumber: action.payload.body.senderData.chatId.substring(0, 11),
              messagesList: [
                {
                  from: "interlocutor",
                  text: `${action.payload.body.messageData.typeMessage !== 'audioMessage' ? action.payload.body?.messageData?.textMessageData
                  ?.textMessage : 'Аудиосообщение'}`,
                },
              ],
            })
          : state.chats.map(item => item.phoneNumber == action.payload.body?.senderData?.chatId.substring(0, 11) ? item.messagesList.push({
            from: "interlocutor",
            text: `${action.payload.body.messageData.typeMessage !== 'audioMessage' ? action.payload.body?.messageData?.textMessageData
            ?.textMessage : 'Аудиосообщение'}`,
          }) : item);
      } 
     }
    });
    builder.addCase(getMessage.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});

export const { login, addCurrentNumber, addUIMessage } = mainSlice.actions;

export default mainSlice.reducer;
