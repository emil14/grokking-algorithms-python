type Stack = { push: Function, pop: Function }

const Stack = (): Stack => {
  const data: any[] = []

  return {
    push: (item: any) => data.push(data),
    pop: () => data.pop()
  }
}

export default Stack
