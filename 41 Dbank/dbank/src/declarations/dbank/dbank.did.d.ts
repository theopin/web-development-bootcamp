import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkValue' : () => Promise<number>,
  'compound' : () => Promise<undefined>,
  'topUp' : (arg_0: float64) => Promise<undefined>,
  'withdraw' : (arg_0: float64) => Promise<undefined>,
}
