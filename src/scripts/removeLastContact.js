import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const currentContacts = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const parsedContacts = JSON.parse(currentContacts);
    if (parsedContacts.length > 0) {
      parsedContacts.pop();
    }

    await fs.writeFile(PATH_DB, JSON.stringify(parsedContacts), {
      encoding: 'utf8',
    });
  } catch (error) {
    console.error('removeLastContact', error);
  }
};

removeLastContact();
