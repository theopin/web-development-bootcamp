export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getListedNftPrice' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    'getListedNfts' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'getOpendCanisterId' : IDL.Func([], [IDL.Principal], ['query']),
    'getOriginalOwner' : IDL.Func([IDL.Principal], [IDL.Principal], ['query']),
    'getOwnedNfts' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(IDL.Principal)],
        ['query'],
      ),
    'isListed' : IDL.Func([IDL.Principal], [IDL.Bool], ['query']),
    'listItem' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Text], []),
    'mint' : IDL.Func([IDL.Vec(IDL.Nat8), IDL.Text], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };
