export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1>🐱 고양이 댄스 파티</h1>
        <p>버튼을 눌러 고양이를 춤추게 해보세요!</p>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <p>Made with ❤️ and lots of catnip</p>
      </footer>
    </div>
  );
}
