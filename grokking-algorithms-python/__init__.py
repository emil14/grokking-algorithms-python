from bfs import bfs
from binary_search import binary_search
from hash_table import HashTable
from qsort import qsort
from queue import Queue
from selection_sort import selection_sort
from stack import Stack

# search
sorted_data = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97]
print(binary_search(sorted_data, 37, 0, 24))

# sorting
unsorted_data = [
    13, 17, 19, 23, 29, 59, 61, 67, 71, 2, 3, 5, 7, 11, 31, 37, 41, 43, 47, 53,
    73, 79, 83, 89, 97]
print(selection_sort(unsorted_data))
print(qsort(unsorted_data))

# Stack
s = Stack()
print(s)
s.push(42)
print(s)
s.pop()
print(s)

# HashTable
h = HashTable()
print(h)
h.set('name', 'Jesus')
print(h)
print(h.get('name'))

# Breath-first-search
data = {
    'a': ['b', 'c'],
    'b': ['f'],
    'c': ['d', 'e'],
    'd': ['b', 'f'],
    'e': ['a', 'f', 'g'],
    'f': ['a'],
    'g': []
}

print(
    bfs('a', 'g', data)
)

# binary_search(): O(log(n)), work only with sorted data
# array: O(1) reading, O(n) adding/removing
# linked-list: O(1) adding/removing, O(n) reading
# selection_sort: O(n^2)
