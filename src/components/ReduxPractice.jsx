import FetchDataSaga from './FetchDataSaga'
import ReduxBankBalance from './ReduxBankBalance'
import ReduxCart from './ReduxCart'
import ReduxCounter from './ReduxCounter'
import ReduxProductListCart from './ReduxProductListCart'
import ReduxSaga from './ReduxSaga'

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
