import CurrencyFormat from "react-currency-format"

import { useStateValue } from "../../store/StateProvider"

import { getBasketTotal } from "../../store/reducer"

import "./Subtotal.scss"

function Subtotal() {
  const [{ basket }] = useStateValue()

  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        renderText={value => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
