import Debug "mo:base/Debug";
import Principal "mo:base/Principal";
import Nat8 "mo:base/Nat8";

actor class Nft(name: Text, owner: Principal, content: [Nat8]) {
  
    let imageBytes = content;
    let itemName = name;
    let nftOwner = owner;


    public query func getName() :async Text {
        return itemName;
    };


    public query func getOwner() :async Principal {
        return nftOwner;
    };


    public query func getAsset() :async [Nat8] {
        return imageBytes;
    };
};