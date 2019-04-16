from string import ascii_lowercase
from functools import reduce

class HashTable:
    def __init__(self, size=23):
        self.__size = size
        self.__data = [None] * self.__size

    def __repr__(self):
        return f'<HashTable {self.__data}>'

    def __hash(self, key):
        acc = 0
        for idx, char in enumerate(key):
            acc += ascii_lowercase.index(char) + idx
        return acc % self.__size

    def get(self, key):
        idx = self.__hash(key)
        for pair_key, pair_val in self.__data[idx]:
            if pair_key == key:
                return pair_val
        return None

    def set(self, key, val):
        idx = self.__hash(key)
        pair = (key, val)
        if self.__data[idx]:
            self.__data[idx].append(pair)
        else:
            self.__data.insert(idx, [pair])

