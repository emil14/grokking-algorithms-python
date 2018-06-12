type HashTable = {
  add: (key: string, value: any) => void,
  read: (key: string) => any
}

const hashFunction = (key: string): number => key.length // FIXME: bad hashFunc

const HashTable = (): HashTable => {
  const data: any[] = []

  return {
    add: (key, value) => data[hashFunction(key)] = value,
    read: key => data[hashFunction(key)]
  }
}

export default HashTable
