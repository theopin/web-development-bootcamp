import type { Principal } from '@dfinity/principal';
export interface Nft {
  'getAsset' : () => Promise<Array<number>>,
  'getName' : () => Promise<string>,
  'getOwner' : () => Promise<Principal>,
}
export interface _SERVICE extends Nft {}
