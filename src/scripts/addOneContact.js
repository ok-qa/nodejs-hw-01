import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const currentContacts = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const parsedContacts = JSON.parse(currentContacts);
    const contact = createFakeContact();
    parsedContacts.push(contact);
    await fs.writeFile(PATH_DB, JSON.stringify(parsedContacts), {
      encoding: 'utf8',
    });
  } catch (error) {
    console.error('addOneContact', error);
  }
};

addOneContact();
