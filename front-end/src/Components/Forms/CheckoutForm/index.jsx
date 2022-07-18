import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import RegisterSale from '../../../API/RegisterSale';
import context from '../../../Context/Context';
import './CheckoutForm.css';

function CheckoutForm() {
  const [seller, setSeller] = useState(0);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const { sellerList, card, token } = useContext(context);
  const history = useHistory();

  const finalizeOrder = async (event) => {
    event.preventDefault();
    const productIdAndQuantity = card.map(({ id, quantity }) => ({ id, quantity }));
    const totalPrice = card.reduce(
      (previous, current) => previous + current.price * current.quantity,
      0,
    );
    const response = await RegisterSale({
      token,
      sellerId: seller,
      totalPrice,
      address: { street: address, number },
      orders: productIdAndQuantity,
    });

    if (response.id) {
      history.push(`/customer/orders/${response.id}`);
    }
  };

  useEffect(() => {
    if (sellerList[0] && sellerList[0].id) {
      setSeller(sellerList[0].id);
    }
  }, [sellerList]);

  return (
    <form>
      <div className="form-input">
        <div className="form-input-seller">
          <h4>Vendedor:</h4>
          <select
            value={ seller }
            onChange={ ({ target }) => setSeller(target.value) }
            data-testid="customer_checkout__select-seller"
          >
            {sellerList.map(({ id, name }) => (
              <option key={ id } value={ id }>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-input-address">
          <h4>Endereço:</h4>
          <input
            type="text"
            placeholder="Rua - Bairro - Estado - País"
            value={ address }
            onChange={ ({ target }) => setAddress(target.value) }
            data-testid="customer_checkout__input-address"
          />
        </div>
        <div className="form-input-number">
          <h4>Número:</h4>
          <input
            type="text"
            value={ number }
            onChange={ ({ target }) => setNumber(target.value) }
            data-testid="customer_checkout__input-addressNumber"
          />
        </div>
      </div>
      <button
        type="submit"
        className="form-button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ (event) => finalizeOrder(event) }
      >
        Finalizar pedido
      </button>
    </form>
  );
}

export default CheckoutForm;
