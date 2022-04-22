import "./style.sass";
import { useDispatch, useSelector } from "react-redux";
import { addCashAction, getCashAction } from "../store/cashReducer";
import {
  addCustomerAction,
  removeCustomerAction,
} from "../store/customerReducer";
import { fetchCustomers } from "../asyncAction/customers";
import {
  addCountAction,
  asyncAddCountAction,
  asyncADDCountAction,
  asyncCountAction,
  asyncDeleteCountAction,
  asyncDELETECountAction,
  deleteCountAction,
} from "../store/countReducer";
import { fetchUsers } from "../store/userReducer";

function ColumnsSection() {
  // чтобы изменить состояние нам нужен dispatch получить который мы можем с помощью useDispatch
  const dispatch = useDispatch();

  // получаем состояние
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  const count = useSelector((state) => state.count.count);
  const users = useSelector((state) => state.users.users);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  const addCount = (count) => {
    dispatch(addCountAction(count));
  };

  const deleteCount = (count) => {
    dispatch(deleteCountAction(count));
  };

  return (
    <div className="columns-section">
      <div style={{ fontSize: "3rem", margin: "0 0 20px 0" }}>
        Баланс: {cash}
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счёт
        </button>
        <button
          onClick={() => getCash(Number(prompt()))}
          style={{ marginLeft: "20px" }}
        >
          Снять со счёта
        </button>
        <button
          onClick={() => addCustomer(prompt())}
          style={{ marginLeft: "20px" }}
        >
          Добавить пользователя
        </button>
        <button
          onClick={() => dispatch(fetchCustomers())}
          style={{ marginLeft: "20px" }}
        >
          Получить клиентов из базы
        </button>
      </div>

      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              onClick={() => removeCustomer(customer)}
              style={{
                fontSize: "2rem",
                border: "1px solid black",
                padding: "10px",
                marginTop: "20px",
              }}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "2rem", marginTop: "20px" }}>
          Клиенты отсутствуют!
        </div>
      )}

      <div>
        <div
          style={{ fontSize: "2rem", marginTop: "20px", textAlign: "center" }}
        >
          Счёт: {count}
        </div>
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => dispatch(asyncAddCountAction())}
            style={{ fontSize: "1rem" }}
          >
            Увеличить на 1
          </button>
          <button
            onClick={() => dispatch(asyncDeleteCountAction())}
            style={{ fontSize: "1rem", marginLeft: "20px" }}
          >
            Уменьшить на 1
          </button>
          <button
            onClick={() => dispatch(fetchUsers())}
            style={{ fontSize: "1rem", marginLeft: "20px" }}
          >
            Получить пользователей
          </button>

          {users.length > 0 ? (
            <div>
              {users.map((user) => (
                <div
                  // onClick={() => removeCustomer(users)}
                  style={{
                    fontSize: "2rem",
                    border: "1px solid black",
                    padding: "10px",
                    marginTop: "20px",
                  }}
                >
                  {user.name}
                </div>
              ))}
            </div>
          ) : (
            <div style={{ fontSize: "2rem", marginTop: "20px" }}>
              Пользователи отсутствуют!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ColumnsSection;
