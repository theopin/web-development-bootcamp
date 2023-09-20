import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'getListedNftPrice' : (arg_0: Principal) => Promise<bigint>,
  'getListedNfts' : () => Promise<Array<Principal>>,
  'getOpendCanisterId' : () => Promise<Principal>,
  'getOriginalOwner' : (arg_0: Principal) => Promise<Principal>,
  'getOwnedNfts' : (arg_0: Principal) => Promise<Array<Principal>>,
  'isListed' : (arg_0: Principal) => Promise<boolean>,
  'listItem' : (arg_0: Principal, arg_1: bigint) => Promise<string>,
  'mint' : (arg_0: Array<number>, arg_1: string) => Promise<Principal>,
}
