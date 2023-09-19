import Cycles "mo:base/ExperimentalCycles";
import Principal "mo:base/Principal";
import NftActorClass "../nft/nft"

actor OpenD {
    public shared(msg) func mint(imgData: [Nat8], name: Text): async Principal {
        let owner: Principal = msg.caller;

        Cycles.add(100_500_000_000);


        let newNft = await NftActorClass.Nft(name, owner, imgData);

        return await newNft.getCanisterId();
    };
};
