---
id: metamask
title: Metamask
sidebar_label: Metamask
slug: /dev/metamask
---

## Install the MetaMask Extension
We start with a fresh [MetaMask](https://metamask.io/) installation from the Chrome or Firefox store. Download the extension and follow the "get started" guide. You need to create a wallet, set a password, and store your secret backup phrase (make sure to store these in a secure place). This will generate a Ether netowork compatible address:

![Metamask import Account](/img/metamask/MM1.png)

From the “Settings -Networks” dropdown menu select the RPC network. Name it as you like and add the new RPC url:

![Metamask Custom RPC configuration](/img/metamask/MM2.png)
![Metamask Custom RPC](/img/metamask/MM2.png)
![Metamask Custom RPC complete](/img/metamask/MM3.png)

From metamask select your new added Network:

![Metamask select network](/img/metamask/MM4.png)

## Using Remix
###Getting Started with Remix
Now let’s fire up Remix to exercise some more advanced functionalities in ETP EVM module. 
Launch Remix by navigating to https://remix.ethereum.org/. In the main screen, under Environments, select Solidity to configure Remix for Solidity development, then navigate to the File Explorers view:

![Remix screenshot 1](/img/metamask/REMIX1.png)

We will create a new file to save the Solidity smart contract. Hit the + button under File Explorers and enter the name "MyToken.sol" (or whatever name you want) into the popup dialog.

![Remix screenshot 2](/img/metamask/REMIX2.png)

Now let's paste the following smart contract into the editor tab that comes up: 

``` solidity
//begin code

pragma solidity ^0.7.0;

import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.2.0-solc-0.7/contracts/token/ERC20/ERC20.sol';

// This ERC-20 contract mints the specified amount of tokens to the contract creator.
contract MyToken is ERC20 {
  constructor(uint256 initialSupply) ERC20("MyToken", "MYTOK") public {
    _mint(msg.sender, initialSupply);
  }
}
//end code
```

This is a simple ERC-20 contract based on the current Open Zeppelin ERC-20 template. It creates MyToken with symbol MYTOK and mints the entirety of the initial supply to the creator of the contract.
Once you have pasted the contract into the editor it should look like this. Now navigate to the compile sidebar option to press the “Compile MyToken.sol” button:

![Remix screenshot 3](/img/metamask/REMIX4.png)

These are default settings but you can choose your version of Solidity.

## Deploying a Contract to ETP EVM Using Remix
Now we can deploy the contract by navigating to the Deployment sidebar option. You need to change the topmost “Environment” dropdown from “JavaScript VM” to “Injected Web3” which tells Remix to use the MetaMask injected provider, which will point it to your RPC standalone node. As soon as you select this you will be prompted to allow Remix to connect to your MetaMask account:

![Remix screenshot 4](/img/metamask/REMIX5.png)

Select from MetaMask the account to be used for deployment and then click next on metamask button.

Press “Next” in Metamask to allow Remix to access the selected account.
Back on the Remix side, you should see the account to be used for deployment as the one that is managed by MetaMask. Next to the Deploy button, let’s specify an initial supply of 8M tokens. Since this contract uses the default of 18 decimals, the value to put in the box is 8000000000000000000000000:

![Remix screenshot 5](/img/metamask/remix6.png)

Once you have entered this value hit the Deploy button. You will be prompted in MetaMask to confirm the contract deployment transaction:

![Remix screenshot 6](/img/metamask/remix7.png)

After you press confirm and the deployment is complete, you will see the transaction listed in MetaMask and the contract will appear under Deployed Contracts in Remix. 

Once the contract is deployed, you can interact with it from within Remix.
Drill down on the contract under “Deployed Contracts.” Clicking on name, symbol, and totalSupply should return “MyToken,” “MYTOK,” and “8000000000000000000000000” respectively. If you copy the address from which you deployed the contract, and paste it into the balanceOf field, you should see the entirety of the balance of the ERC20 as belonging to that user. Also copy the contract addres by click the button next to the contract name and address.

## Interacting with a ETP EVM-based ERC-20 from MetaMask

Now, open MetaMask to add the newly deployed ERC-20 tokens. Before doing so, make sure you have copied the contract's address from Remix. Back in MetaMask, click on “Add Token” as shown below. Make sure you are in the account that deployed the token contract:

![Metamask add token screenshot 1](/img/metamask/at1.png)

Paste the copied contract address into the “Custom Token” field. The “Token Symbol” and “Decimals of Precision” fields should be automatically populated:

![Metamask add token screenshot 2](/img/metamask/at2.png)

Now we can send some of these ERC-20 tokens to the other account that we have set up in MetaMask. Hit “send” to initiate the transfer of 500 MyTokens and select the destination account.

The tutorial about main Contracts pallet is simpler and will be ready this weekend.

The contract can be seen as event here:

[http://167.86.115.158:1990/?rpc=ws%3A%2F%2F167.86.95.203%3A9946#/explorer]

![Explorer screenshot](/img/metamask/expl.jpeg)

After you press confirm and the deployment is complete, you will see the transaction listed in MetaMask and the contract will appear under Deployed Contracts in Remix:

![Contract interaction screenshot 1](/img/metamask/ia1.png)

You will be able then to interact with all methods of your contract:

![Contract interaction screenshot 2](/img/metamask/ia2.png)


