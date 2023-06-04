import { Outlet } from "react-router-dom";
import { Header, Link, Logo } from "./Layout.styled";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "redux/selectors";



export function Layout() {
  const price = useSelector(selectTotalPrice);

  return (
    <>
    <Header>
    <Logo>
      <span role="img" aria-label="computer icon">
        💻
      </span>{" "}
      GoMerch Store
    </Logo>
    <nav>
      <Link to="/" end>
Shop
      </Link>
      <Link to="/cart">Shopping Cart: {price}</Link>
      <Link to="/history">History</Link>
    </nav>
  </Header>
  <Outlet/>
  </>
  )
}
