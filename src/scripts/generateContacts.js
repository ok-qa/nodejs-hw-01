import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    console.log(PATH_DB);
    const currentContacts = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const parsedContacts = JSON.parse(currentContacts);
    for (let i = 0; i < number; i++) {
      const contact = createFakeContact();
      parsedContacts.push(contact);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(parsedContacts), {
      encoding: 'utf8',
    });
    console.log(typeof parsedContacts);
  } catch (error) {
    console.error('generateContacts', error);
  }
};

generateContacts(5);
