from functools import reduce

class HashTable:
    def __init__(self, size=23):
        self.__data = []
        self.__size = size

    def __repr__(self):
        return f'<HashTable {self.__data}>'

    def __hash(key):
        return reduce(lambda x, y: ord(x) + ord(y), 0) % self.__size

    def get(self, key):
        idx = self.__hash(key)
        return next(pair_value for (pair_key, pair_value) in self.__data[idx] if pair_key == key, None)

    def set(self, key, value):
        idx = self.__hash(key)
        pair = (key, value)
        if (len(self.__data) >= idx):
            self.__data[idx].append(pair)
        else:
            self.__data[idx] = [pair]


