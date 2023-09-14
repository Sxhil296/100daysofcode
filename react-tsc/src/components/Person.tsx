type nameProps = {
name: {
    first: string
    last: string
}
}

export const Person = (props: nameProps) => {
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}
