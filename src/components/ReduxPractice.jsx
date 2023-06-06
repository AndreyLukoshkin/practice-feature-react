import ReduxCounter from './ReduxCounter'
import ReduxBankBalance from './ReduxBankBalance'
import ReduxCustomers from './ReduxCustomers'
import CounterSaga from './CounterSaga'
import ReduxProductList from './ReduxProductList'

const ReduxPractice = () => {
  return (
    <div>
      <ReduxCounter />
      <ReduxBankBalance />
      <ReduxCustomers />
      <CounterSaga />
      <ReduxProductList />
    </div>
  )
}

export default ReduxPractice
