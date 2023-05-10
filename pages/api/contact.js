import {
  createMongoClient,
  insertDocumentIntoCollection,
} from '@/helpers/db-utils';

const handlersUri = process.env.NEXT_PUBLIC_API_HANDLERS_URI;
const mongoClient = createMongoClient(handlersUri);

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid data input!' });
      return;
    }

    try {
      await insertDocumentIntoCollection(mongoClient, 'messages', {
        email,
        name,
        message,
      });

      const newContact = { email, name, message };
      console.log(newContact);

      res
        .status(201)
        .json({ message: 'Successfully stored message!', contact: newContact });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error! Try again!' });
    } finally {
      await mongoClient.close();
    }
  }
}

export default handler;
