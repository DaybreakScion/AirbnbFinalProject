// src/infrastructure/InboxRepository.ts
import { Inbox, ChatHistory } from '../core/domain/Inbox';
import { IInboxRepository } from '../interfaces';

export class InboxRepository implements IInboxRepository {
  private inboxes: Inbox[] = [];

  async findById(id: number): Promise<Inbox | null> {
    return this.inboxes.find(inbox => inbox.id === id) || null;
  }

  async findByUserIds(userId: number, recipientId: number): Promise<Inbox | null> {
    return this.inboxes.find(inbox => inbox.userId === userId && inbox.recipientId === recipientId) || null;
  }

  async save(inbox: Inbox): Promise<Inbox> {
    const existingIndex = this.inboxes.findIndex(i => i.id === inbox.id);
    if (existingIndex !== -1) {
      this.inboxes[existingIndex] = inbox;
    } else {
      this.inboxes.push(inbox);
    }
    return inbox;
  }

  async delete(id: number): Promise<void> {
    this.inboxes = this.inboxes.filter(inbox => inbox.id !== id);
  }

  async addMessage(inboxId: number, message: ChatHistory): Promise<Inbox> {
    const inbox = await this.findById(inboxId);
    if (!inbox) {
      throw new Error("Inbox not found");
    }
    inbox.chatHistory.push(message);
    return this.save(inbox);
  }

  async findOrCreateInbox(userId: number, recipientId: number): Promise<Inbox> {
    let inbox = await this.findByUserIds(userId, recipientId);
    if (!inbox) {
      inbox = new Inbox({ id: this.inboxes.length + 1, userId, recipientId });
      await this.save(inbox);
    }
    return inbox;
  }
}
