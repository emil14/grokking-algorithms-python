type Queue = {
  enqueue: (item: any) => number,
  dequeue: () => any,
  peek: () => any,
  getLength: () => number,
  isEmpty: () => boolean
}

const Queue = (): Queue => {
  const data: Array<any> = []

  return {
    enqueue: item => data.push(item),
    dequeue: () => data.shift(),
    peek: () => data[data.length - 1] || null,
    getLength: () => data.length,
    isEmpty: () => data.length === 0
  }
}

export default Queue
