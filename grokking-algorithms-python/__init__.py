from binary_search import binary_search
from selection_sort import selection_sort
from quicksort import quicksort
from stack import Stack
from hash_table import HashTable

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
print(quicksort(unsorted_data))

# Stack
s = Stack()
print(s)
s.push(42)
print(s)
s.pop()
print(s)

# HashTable
h = HashTable()
h.insert('name', 'Jesus')
print(h)
h.delete('name')

# binary_search(): O(log(n)), work only with sorted data
# array: O(1) reading, O(n) adding/removing
# linked-list: O(1) adding/removing, O(n) reading
# selection_sort: O(n^2)
