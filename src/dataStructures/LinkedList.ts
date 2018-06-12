type Node = { data: any, next: Node | null }
type Link = Node | null
type LinkedList = { head: Link, tail: Link }

const Node = (data: any, next = null): Node => ({ data, next })

const LinkedList = () => {
  const data: Node[] = []
  let head: any = null
  let tail = null

  return {
    addToHead: (value: any) => {
      const node = Node(value, head)
    }
  }
}

export default LinkedList
