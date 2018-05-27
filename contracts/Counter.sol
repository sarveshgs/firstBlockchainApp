pragma solidity ^0.4.23;

contract Counter {
    
    event CounterIncrementedEvent(int count);
    event CounterDecrementedEvent(int count);

    int private count = 0;

    function incrementCounter() public {
        count += 1;
        emit CounterIncrementedEvent(count);
    }

    function decrementCounter() public {
        count -= 1;
        emit CounterDecrementedEvent(count);
    }

    function getCount() public constant returns (int) {
        return count;
    }
}






