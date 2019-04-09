# Chapter 1 | Introduction to algorithms


def binary_search(input, value, low, high):
    mid = round((low + high) / 2)
    if input[mid] == value:
        return mid
    if input[mid] < value:
        return binary_search(input, value, mid + 1, high)
    return binary_search(input, value, low, mid - 1)
