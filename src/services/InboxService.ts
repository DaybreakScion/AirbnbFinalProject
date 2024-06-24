// src/services/InboxService.ts
import { Inbox, ChatHistory } from '../core/domain/Inbox';
import { IInboxRepository } from '../interfaces';

export class InboxService {
  private repository: IInboxRepository;

  constructor(repository: IInboxRepository) {
    this.repository = repository;
  }

  async getInboxById(id: number): Promise<Inbox | null> {
    return this.repository.findById(id);
  }

  async createOrUpdateInbox(inbox: Inbox): Promise<Inbox> {
    return this.repository.save(inbox);
  }

  async deleteInbox(id: number): Promise<void> {
    return this.repository.delete(id);
  }

  async addMessage(userId: number, recipientId: number, message: ChatHistory): Promise<Inbox> {
    const inbox = await this.repository.findOrCreateInbox(userId, recipientId);
    inbox.chatHistory.push(message);
    return this.repository.save(inbox);
  }

  async getInbox(userId: number, recipientId: number): Promise<Inbox | null> {
    return this.repository.findByUserIds(userId, recipientId);
  }
}
