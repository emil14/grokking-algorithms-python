# Chapter 4 | Quicksort

def _partition(input, pivot):
    left = []
    right = []
    for el in input:
        if el < input[pivot]:
            left.append(el)
        elif el > input[pivot]:
            right.append(el)
    return left, right

def quicksort(input):
    pivot = round(len(input) / 2)
    if len(input) < 2:
        return input
    left, right = _partition(input, pivot)
    return quicksort(left) + [input[pivot]] + quicksort(right)
