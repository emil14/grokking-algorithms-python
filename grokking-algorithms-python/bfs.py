from collections import deque


def bfs(start_node, goal_node, graph):
    queue = deque(graph[start_node])
    visited = [start_node]
    while queue:
        current_node = queue.popleft()
        if current_node in visited:
            continue
        else:
            visited.append(current_node)
            if current_node is goal_node:
                return visited
            else:
                queue += graph[current_node]
    return None
