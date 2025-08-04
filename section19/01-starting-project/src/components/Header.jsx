import logoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Food and beverage" />
        <h1>Order Up</h1>
      </div>
      <nav>
        <button>Card (0)</button>
      </nav>
    </header>
  );
}
