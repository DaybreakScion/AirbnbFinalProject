import { Inbox } from '../core/domain/Inbox';
import { IInboxRepository } from '../interfaces';

class InboxRepository implements IInboxRepository {
    private inboxes: Inbox[] = [];
  
    async findById(id: number): Promise<Inbox | null> {
      return this.inboxes.find(inbox => inbox.id === id) || null;
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
  }