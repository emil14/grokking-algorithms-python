type HashTable = {
  add: (key: string, value: any) => void,
  read: (key: string) => any
}

const hashFunction = (str: string): number => str.split().reduce((acc, char) => acc + char.charCodeAt(0), 0)

const HashTable = (): HashTable => {
  const data: any[] = []

  return {
    add: (key, value) => data[hashFunction(key)] = value,
    read: key => data[hashFunction(key)]
  }
}

export default HashTable
