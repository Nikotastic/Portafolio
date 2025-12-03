export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur border-b z-50">
      <div className="max-w-3xl mx-auto flex justify-between py-4 px-4">
        <span className="font-bold">Mi Portafolio</span>
        <div className="space-x-4">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
