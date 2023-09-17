import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";



actor DBank {
  // stable: orthogonal persistence
  stable var currentValue: Float = 300; // auto assumed as nat
  currentValue:= 300;
  stable var startTime = Time.now();

  let id = 4084948; // let is immutable, cannot be changed - constant

  // underscores show separation between thousands and millions
  

  Debug.print(debug_show(id));

  // Default private
  public func topUp(amount: Float) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdraw(amount: Float) {
    let tempValue: Float = currentValue - amount; // Int can be +/-. Nat can only be more than 0
    if(tempValue > 0) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));

    } else {
      Debug.print("not possible")
    };

  };

  public query func checkValue(): async Float {
    return currentValue;
  };

  public func compound() {
    let currentTime = Time.now();
    let timeElapsed = (currentTime - startTime) / 1000000000;
    currentValue:= currentValue * 1.01 ** Float.fromInt(timeElapsed);
    startTime:= currentTime;
  };



} 