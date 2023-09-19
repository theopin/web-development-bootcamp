import Cycles "mo:base/ExperimentalCycles";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import List "mo:base/List";
import NftActorClass "../nft/nft";

actor OpenD {

    var mapOfNft = HashMap.HashMap<Principal, NftActorClass.Nft>(1, Principal.equal, Principal.hash);
    var mapOfOwners = HashMap.HashMap<Principal, List.List<Principal>>(1, Principal.equal, Principal.hash);

    public shared(msg) func mint(imgData: [Nat8], name: Text): async Principal {
        let owner: Principal = msg.caller;

        Cycles.add(100_500_000_000);


        let newNft = await NftActorClass.Nft(name, owner, imgData);
        let newNftPrincipal = await newNft.getCanisterId();

        mapOfNft.put(newNftPrincipal, newNft);
        addToOwnerMap(owner, newNftPrincipal);

        return await newNft.getCanisterId();
    };

    private func addToOwnerMap(owner: Principal, nftId: Principal) {
        var ownedNft: List.List<Principal> = switch(mapOfOwners.get(owner)) {
            case null List.nil<Principal>();
            case (?result) result;
        };

        ownedNft := List.push(nftId, ownedNft);
        mapOfOwners.put(owner, ownedNft)
    };


    public query func getOwnedNfts(user: Principal): async [Principal] {
        var userNft: List.List<Principal> = switch (mapOfOwners.get(user)){
            case null List.nil<Principal>();
            case (?result) result;
        };

        return List.toArray(userNft);
    }
};
