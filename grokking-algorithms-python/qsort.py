# Chapter 4 | Quicksort

def _partition(input, pivot):
    left = []
    right = []
    for el in input:
        if el < input[pivot]:
            left.append(el)
        elif el > input[pivot]: # == ?
            right.append(el)
    return left, right

def qsort(input):
    if len(input) < 2: # if [4,2]?
        return input
    pivot = round(len(input) / 2)
    left, right = _partition(input, pivot)
    return qsort(left) + [input[pivot]] + qsort(right)
