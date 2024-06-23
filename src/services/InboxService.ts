import { Inbox } from '../core/domain/Inbox';
import { IInboxRepository } from '../interfaces';

class InboxService {
    private repository: IInboxRepository;
  
    constructor(repository: IInboxRepository) {
      this.repository = repository;
    }
  
    async getInboxById(id: number): Promise<Inbox | null> {
      return this.repository.findById(id);
    }
  
    async createOrUpdateInbox(inbox: Inbox): Promise<Inbox> {
      // biznes logika
      return this.repository.save(inbox);
    }
  
    async deleteInbox(id: number): Promise<void> {
      // aqac
      return this.repository.delete(id);
    }
  }