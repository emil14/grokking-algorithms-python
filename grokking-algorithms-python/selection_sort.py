# Chapter 2 | Selection sort


def find_min(input):
    min = 0
    for idx, el in enumerate(input):
        if el < input[min]:
            min = idx
    return min


def selection_sort(input):
    sorted = []
    for _el in range(len(input)):
        min = find_min(input)
        sorted.append(input.pop(min))
    return sorted
