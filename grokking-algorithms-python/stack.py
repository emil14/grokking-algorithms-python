class Stack:
    def __init__(self):
        self._stack = []

    def __repr__(self):
        return f'<Stack {self._stack}>'

    def push(self, el):
        self._stack.append(el)

    def pop(self):
        return self._stack.pop()
