import { FoodList } from "components/Food/FoodList";
import { SideBar } from "components/SideBar/SideBar";
import { ShopContainer } from "./Shop.styled";

export const Shop = () => {
    return (
      
      <ShopContainer>
        <SideBar/>
                <FoodList/>
      </ShopContainer>
    );
  };