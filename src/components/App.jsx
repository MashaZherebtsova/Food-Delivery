import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { Shop } from 'Pages/Shop/Shop';
import { History } from 'Pages/History';
import { Layout } from './Layout/Layout';
import { Cart } from 'Pages/Cart/Cart';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </Container>
  );
};
