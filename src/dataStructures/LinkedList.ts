type Node = { data: any, next: Node | null }
type Link = Node | null
type LinkedList = { insert: (item: any) => void }

const Node = (data: any, next = null): Node => ({ data, next })

const LinkedList = (): LinkedList => {
  let head: any = null

  return {
    insert: item => {
      const node = Node(item)
      if (head !== null) node.next = head
      head = node
    }
  }
}

export default LinkedList
