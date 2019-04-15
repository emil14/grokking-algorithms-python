from collections import deque

g = {
    'a': ['b', 'c'],
    'b': ['f'],
    'c': ['d', 'e'],
    'd': ['b', 'f'],
    'e': ['a', 'f', 'g'],
    'f': ['a'],
    'g': []
}

def bfs(start_node, goal_node, graph):
    queue = deque(graph[start_node])
    visited = [start_node]
    while queue:
        cur = queue.popleft()
        if cur not in visited:
            if cur is goal_node:
                visited.append(goal_node)
                return visited
            else:
                queue += graph[cur]
                visited.append(cur)
    return False


print(
    bfs('a', 'g', g)
)


