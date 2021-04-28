// import { CONTACTS, Contact } from './modules/contacts/shared';

import { CONTACTS } from './shared/data/contact.list.mock';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { USERS } from './shared/data/users.list.mock';

export class InMemoryDataService implements InMemoryDbService {
  // tslint:disable-next-line: typedef
  createDb() {
    const users = USERS;
    const contacts = CONTACTS;

    return { users, contacts };
  }
}
