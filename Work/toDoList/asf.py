import random

def generate_random_graph(num_vertices, weight_range):
    # 무한대로 초기화된 그래프 생성
    graph = [[float('inf')] * num_vertices for _ in range(num_vertices)]
    
    # 자기 자신으로 가는 경로의 길이는 0으로 설정
    for i in range(num_vertices):
        graph[i][i] = 0
    
    # 간선의 가중치를 무작위로 할당
    for i in range(num_vertices):
        for j in range(num_vertices):
            if i != j:
                weight = random.randint(weight_range[0], weight_range[1])
                graph[i][j] = weight
    
    return graph


def floyd_warshall(graph):
    num_vertices = len(graph)
    dist = [row[:] for row in graph]  # 그래프를 복사하여 거리 행렬 생성

    for k in range(num_vertices):
        for i in range(num_vertices):
            for j in range(num_vertices):
                # i에서 j로 가는 경로를 k를 거쳐가는 경로로 업데이트
                dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
    
    return dist


def print_all_pairs_shortest_paths(dist):
    num_vertices = len(dist)
    
    for i in range(num_vertices):
        for j in range(num_vertices):
            if i != j:
                print(f"노드 {i}에서 {j}까지의 최단 경로 길이: {dist[i][j]}")


# 노드 수와 간선 가중치 범위 설정
node_counts = [250]
weight_range = [4, 30]

for num_vertices in node_counts:
    print(f"노드 수: {num_vertices}")
    
    # 무작위 그래프 생성
    graph = generate_random_graph(num_vertices, weight_range)
    
    # 플로이드-워셜 알고리즘을 사용하여 최단 경로 길이 계산
    dist = floyd_warshall(graph)
    
    # 각 노드 쌍의 최단 경로 길이 출력
    print_all_pairs_shortest_paths(dist)
    print()