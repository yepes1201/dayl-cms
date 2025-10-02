export function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-3xl font-normal">Daniel Yepes</h1>
      <nav>
        <ul className="flex gap-4">
          <Header.NavItem>Home</Header.NavItem>
          <Header.NavItem>Work</Header.NavItem>
          <Header.NavItem>About me</Header.NavItem>
          <Header.NavItem>Blog</Header.NavItem>
          <Header.NavItem>Contact</Header.NavItem>
        </ul>
      </nav>
    </header>
  )
}

Header.NavItem = ({ children }: { children: React.ReactNode }) => {
  return <li className="hover:underline">{children}</li>
}
