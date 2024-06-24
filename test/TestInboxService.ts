// test/TestInboxService.ts
import { DataSource } from "../src/infrastructure/Database";
import { InboxRepository } from "../src/infrastructure/InboxRepository";
import { InboxService } from "../src/services/InboxService";
import { Inbox, ChatHistory } from "../src/core/domain/Inbox";

const dataSource = DataSource.instance;
const inboxRepository = new InboxRepository();
const inboxService = new InboxService(inboxRepository);

const user1Id = 1;
const user2Id = 2;

const message1 = new ChatHistory({ userId: user1Id, message: "Hello!" });
const message2 = new ChatHistory({ userId: user2Id, message: "Hi there!" });

async function testInboxService() {
  await inboxService.addMessage(user1Id, user2Id, message1);
  await inboxService.addMessage(user2Id, user1Id, message2);

  const inbox = await inboxService.getInbox(user1Id, user2Id);
  console.log("Inbox:", inbox);

  if (inbox) {
    await inboxService.deleteInbox(inbox.id);
    console.log("Inbox deleted");
  }
}

testInboxService();
