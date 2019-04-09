from binary_search import binary_search
from selection_sort import selection_sort

data = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97]

print(binary_search(data, 37, 0, 24))
print(selection_sort([5, 3, 6, 2, 10]))  # 2,3,5,6,10

# binary_search(): O(log(n)), work only with sorted data
# array: O(1) reading, O(n) adding/removing
# linked-list: O(1) adding/removing, O(n) reading
# selection_sort: O(n^2)
