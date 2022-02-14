export interface Messages {
  messageList: Message;
}

export interface ModifiedMessages {
  key: string;
  username: string;
  text: string;
  created_at?: number;
  reaction?: number;
}

export interface Message {
  [key: string]: MessageValue;
}

export interface MessageValue {
  username: string;
  text: string;
  created_at?: number;
  reaction?: number;
}
