import logoImg from "../assets/logo.jpg";

export function Header() {
  return (
    <header>
      <img src={logoImg} alt="Food and beverage" />
      <h1>Order Up</h1>
    </header>
  );
}
