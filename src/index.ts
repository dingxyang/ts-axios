import { AxisoRequestConfig } from './types'
import xhr from './xhr'

function axios(config: AxisoRequestConfig) {
  xhr(config)
}

export default axios
