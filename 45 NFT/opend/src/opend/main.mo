import Cycles "mo:base/ExperimentalCycles";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import List "mo:base/List";
import Iter "mo:base/Iter";
import NftActorClass "../nft/nft";

actor OpenD {

    private type Listing = {
        itemOwner: Principal;
        itemPrice: Nat;

    };

    var mapOfNft = HashMap.HashMap<Principal, NftActorClass.Nft>(1, Principal.equal, Principal.hash);
    var mapOfOwners = HashMap.HashMap<Principal, List.List<Principal>>(1, Principal.equal, Principal.hash);
    var mapofListings = HashMap.HashMap<Principal, Listing>(1, Principal.equal, Principal.hash);

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
    };

        public query func getListedNfts(): async [Principal] {
        

        return Iter.toArray(mapofListings.keys())
    };

    public shared(msg) func listItem(id: Principal, price: Nat): async Text {
        var item: NftActorClass.Nft = switch (mapOfNft.get(id)){
            case null return "NFT does not exist";
            case (?result) result;
        };

        let owner = await item.getOwner();

        if(Principal.equal(owner, msg.caller )) {
            let newListing: Listing = {
                itemOwner = owner;
                itemPrice = price;
            };
            mapofListings.put(id, newListing);
            return "Success";
        } else {
            return "Not able to show you NFT"
        }
    };

    public query func getOpendCanisterId(): async Principal {
        return Principal.fromActor(OpenD)
    };

    public query func isListed(id: Principal): async Bool {
        if(mapofListings.get(id) == null) {
            return false
        } else {
            return true
        }
    };


    public query func getOriginalOwner(id: Principal): async Principal {
        var listing: Listing = switch (mapofListings.get(id)){
            case null return Principal.fromText("");
            case (?result) result;
        }; 

        return listing.itemOwner;
    };


    public query func getListedNftPrice(id: Principal): async Nat {
        var listing: Listing = switch (mapofListings.get(id)){
            case null return 0;
            case (?result) result;
        }; 

        return listing.itemPrice;
    };

};
