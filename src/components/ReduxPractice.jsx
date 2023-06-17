import ReduxCounter from './ReduxCounter'
import ReduxBankBalance from './ReduxBankBalance'
import ReduxCart from './ReduxCart'
import ReduxSaga from './ReduxSaga'
import ReduxProductListCart from './ReduxProductListCart'
import FetchDataSaga from './FetchDataSaga'

const ReduxPractice = () => {
  return (
    <div>
      <ReduxCounter />
      <ReduxBankBalance />
      <ReduxCart />
      <ReduxSaga />
      <ReduxProductListCart />
      <FetchDataSaga />
    </div>
  )
}

export default ReduxPractice
