// src/core/domain/Inbox.ts
export class Inbox {
    public id: number;
    public userId: number; // User who owns the inbox
    public recipientId: number; // User who receives the messages
    public chatHistory: ChatHistory[];
  
    constructor(rawData?: Partial<Inbox>) {
      Object.assign(this, rawData);
      this.chatHistory = this.chatHistory || [];
    }
  }
  
  export class ChatHistory {
    public userId: number;
    public message: string;
    public timestamp: Date;
  
    constructor(rawData?: Partial<ChatHistory>) {
      Object.assign(this, rawData);
      this.timestamp = this.timestamp || new Date();
    }
  }
  