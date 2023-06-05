import ReduxCounter from './ReduxCounter'
import ReduxBankBalance from './ReduxBankBalance'
import ReduxCustomers from './ReduxCustomers'
import CounterSaga from './CounterSaga'

const ReduxPractice = () => {
  return (
    <div>
      <ReduxCounter />
      <ReduxBankBalance />
      <ReduxCustomers />
      <CounterSaga />
    </div>
  )
}

export default ReduxPractice
