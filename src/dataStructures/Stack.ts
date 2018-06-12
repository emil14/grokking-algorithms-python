type Stack = {
  push: (record: any) => number,
  pop: () => any,
  peek: () => any,
  getLength: () => number,
  isEmpty: () => boolean
}

const Stack = (): Stack => {
  const data: any[] = []

  return {
    push: record => data.push(record),
    pop: () => data.pop(),
    peek: () => data[data.length - 1],
    getLength: () => data.length,
    isEmpty: () => data.length === 0
  }
}

export default Stack
