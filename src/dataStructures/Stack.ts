type Stack = {
  push: (item: any) => number,
  pop: () => any,
  peek: () => any,
  getLength: () => number,
  isEmpty: () => boolean
}

const Stack = (): Stack => {
  const data: any[] = []

  return {
    push: record => data.push(record),
    pop: () => data.pop() || null,
    peek: () => data[data.length - 1] || null,
    getLength: () => data.length,
    isEmpty: () => data.length === 0
  }
}

export default Stack
