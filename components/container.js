export function Container({ children }) {
  return <div className="container mx-auto px-5">{children}</div>
}

export function FlexContainer({ children }) {
  return <div className="container flex mx-auto">{children}</div>
}

export function CategoryContainer({ children }) {
  return <div className="container">{children}</div>
}