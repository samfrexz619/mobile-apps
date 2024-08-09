import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const config = {
  enpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.frexz.frexziew',
  projectId: '66b5a2be003c8338e5bd',
  databaseId: '66b5a5d00037462b2a3c',
  userCollectionId: '66b5a6020025595db555',
  videoCollectionId: '66b5a653002a8273461d',
  storageId: '66b5a8d30015c2891944',
}

const client = new Client();
client
  .setEndpoint(config.enpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)

// Register User
export const createUser = async (user: User) => {
  const { email, password, username } = user
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    )
    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username)

    await logIn(user)

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl
      }
    )
    return newUser;

  } catch (error: any) {
    console.log(error)
    throw new Error(error)
  }
}

export const logIn = async (user: User) => {
  const { email, password } = user
  try {
    // account.deleteSession('current')
    const session = await account.createEmailPasswordSession(email, password)
    return session
  } catch (error: any) {
    throw new Error(error)
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get()
    if (!currentAccount) throw Error;
    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    );
    if (!currentUser) throw Error;

    return currentUser.documents[0]
  } catch (error) {
    console.log(error)
  }
}