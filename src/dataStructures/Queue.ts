type Queue = {
  enqueue: (record: any) => number,
  dequeue: () => any,
  peek: () => any,
  getLength: () => number,
  isEmpty: () => boolean
}

const Queue = (): Queue => {
  const data: Array<any> = []

  return {
    enqueue: record => data.unshift(record),
    dequeue: () => data.pop(),
    peek: () => data[data.length - 1] || null,
    getLength: () => data.length,
    isEmpty: () => data.length === 0
  }
}

export default Queue
