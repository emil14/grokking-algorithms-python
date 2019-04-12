from functools import reduce


class HashTable:
    def __init__(self, size=23):
        self.__data = []
        self.__size = size

    def __repr__(self):
        return f'<HashTable {self.__data}>'

    def __hash(self, key):
        unicode_sum = reduce(lambda x, y: ord(x) + ord(y), key, 0)
        return unicode_sum % self.__size

    def get(self, key):
        idx = self.__hash(key)
        for pair_key, pair_val in self.__data[idx]:
            if pair_key == key:
                return pair_val
        return None

    def set(self, key, val):
        idx = self.__hash(key)
        pair = (key, val)
        try:
            self.__data[idx].append(pair)
        except IndexError:
            self.__data.insert(idx, pair)
