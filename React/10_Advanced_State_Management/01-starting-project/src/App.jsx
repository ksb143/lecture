import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
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
  );
}

export default App;
