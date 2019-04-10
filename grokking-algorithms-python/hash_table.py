class HashTable:
    def __init__(self):
        self._data = []

    def __repr__(self):
        return f'<HashTable {self._data}>'

    def __hash(key):
        return len(key)

    def get(self, key):
        idx = self.__hash(key)
        for (pair_key, pair_value) in self._data[idx]:
            if pair_key == key:
                return pair_value
        return None

    def set(self, key, value):
        idx = self.__hash(key)
        pair = (key, value)
        if (len(self._data) >= idx):
            self._data[idx].append(pair)
        else:
            self._data[idx] = [pair]


