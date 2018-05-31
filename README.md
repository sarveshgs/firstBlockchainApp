# firstBlockchainApp
This is simple blockchain application to demonstrate usage of smart contract and truffle framework for blockchain development


Repo Setup :

1. Node environment:  Node installer is available here. You can also use package manager like brew to install node.
                 Install using Brew: 
                 
                 brew install node@8
                 
2. Solc Compiler: Smart contract are compiled by Solc compiler. There are different ways to install Solc compiler.You can also use npm to install it.							

          
                npm install -g solc


3. Go Ethereum - Go Ethereum which is referred as geth is command line interface to run ethereum node implemented in Go. You can install geth from here.

                  Install Geth using brew:
                
                  1.brew tap ethereum/ethereum
                
                  2.brew install ethereum
                


4. Truffle framework -  Truffle is development environment and test framework for ethereum. You can install truffle using npm.
            
                npm install -g truffle
                
5. Ganache: What Ganache does is simple, it creates a virtual Ethereum blockchain, and it generates some fake accounts that we will use during development. 
                
                npm install -g ganache-cli



6. Run tests: 
                
                 truffle test
                 
7. Install dependencies 

                npm install

8. Unlock ganache-cli Account:

                truffle console 
                web3.personal.unlockAccount(firstAccountAdress,firstPrivateKey,15000)    
                
                
9. Run interaction layer: 

                node interaction/interaction.js                                            