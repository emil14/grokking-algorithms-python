interface HashTable {
  insert: (key: string, value: any) => void,
  read: (key: string) => any
}

function hashFunction(str: string): number {
  return str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

function createHashTable(): HashTable {
  const data: any[] = [];

  return {
    insert: (key, value) => data[hashFunction(key)] = value,
    read: key => data[hashFunction(key)]
  }
}

export default createHashTable;
