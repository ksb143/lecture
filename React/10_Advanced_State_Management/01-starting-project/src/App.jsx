import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
<<<<<<< HEAD
import CartContextProvider from './store/shoping-cart-context.jsx';

function App() {
  return (
    // 리액트가 생성한 컨텍스트 객체의 속성 사용
    // 특정 오브젝트 안에 중첩된 속성이 실질적인 컴포넌트가 되는 경우 사용 이러한 사용 또한 JSX 파일로써 유효
    // 중첩된 속성의 값이 유효한 리액트 컴포넌트라면 이를 컴포넌트로 사용 가능
    // Provider란 Context 오브젝트에 포함된 React 컴포넌트인 Provider는 context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할
    // 컨텍스트 생성 시 설정된 기본 value는 Provider 컴포넌트에 의해 래핑되지 않은 컴포넌트가 컨텍스트 값에 접근을 시도하는 경우에만 사용
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
=======

function App() {
  const [shoppingCart, setShoppingCart] = useState({
  });

  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
        });
      }

      return {
      };
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
      };
    });
  }

  return (
      <Header
        cart={shoppingCart}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
>>>>>>> 5e920bd1542d6cb3fa84f57e6d42f6e32433420f
  );
}

export default App;
