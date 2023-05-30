import { useCallback, useRef } from 'react'

const useDebounce = (callback, delay) => {
  const timer = useRef()
  // записываем внутрь timer - setTimeout
  // если в течении delay не была нажата кнопка и не вызвался debouncedCallback
  // SetTimeout успешно выполнился и timer снова становится undefined
  // перезаписывается при каждом нажатии и вызове debouncedCallback

  const debouncedCallback = useCallback(
    // Вызывается при каждом нажатии кнопки
    // при первом нажатии timer.current еще не инициализирован = undefined.
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current)
        // если есть предыдущий timer(предыдущая нажатая кнопка) - очищаем этот setTimeout из timer
        // перезаписываем в timer setTimeout и заново вызываем callback() с новой кнопкой
        // то есть выполняется только последний setTimeout
      }
      timer.current = setTimeout(() => {
        // инициализируем при первом нажатии timer.current = setTimeout
        // при втором нажатии перезаписываем новый setTimeout
        // после выполнения setTimeout, после delay = timer.current становится undefined
        // callback запускается пока передается callback и delay то есть пока вводим текст в течении delay
        callback(...args) // выполнится после задержки
      }, delay)
    },
    [callback, delay]
  )

  return debouncedCallback
}

export default useDebounce
