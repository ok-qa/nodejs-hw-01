import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const currentContacts = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const parsedContacts = JSON.parse(currentContacts);
    return parsedContacts;
  } catch (error) {
    console.error('getAllContacts', error);
  }
};

console.log(await getAllContacts());
