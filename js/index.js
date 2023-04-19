var contractAddress = "0x702F0231F75F537106Fba232615c3f4C17D38985"; 
var contractAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_token_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_token_symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_numOfStocks",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_priceOfStock",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "Burn",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "buyTokens",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "EOD",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "sellTokens",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLatestPrice",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initial_number_of_tokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initial_supply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "number_of_tokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "numOfStocks",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "priceOfOneToken",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "priceOfStock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token_name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token_symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "volume_of_stocks",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "volume_of_tokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

// Get user balance
balanceOf_ = async() => {
    const writeContract = async () => {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);

        const walletAddress = await signer.getAddress();

        const balance = await contract.balanceOf(walletAddress);
        document.getElementById("myInput").value = balance.toString().concat("   TCSX");
    };
    writeContract();
}

// Buy token
buyToken_ = async() => {
    const writeContract = async () => {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);

        const amount = await document.getElementById("buyTokenInput").value;
        await contract.buyTokens(amount);

    };
    writeContract();
}

// Sell token
sellToken_ = async() => {
    const writeContract = async () => {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);

        const amount = await document.getElementById("sellTokenInput").value;
        await contract.sellTokens(amount);
        
    };
    writeContract();
}

// Mint token
mintToken = async() => {
    const writeContract = async () => {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);

        const amount = await document.getElementById("mintInput").value;
        await contract.mint(amount);
        
    };
    writeContract();
}

// Burn token
burnToken = async() => {
    const writeContract = async () => {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);

        const amount = await document.getElementById("burnInput").value;
        await contract.burn(amount);
        
    };
    writeContract();
}

// Transfer token
transferToken = async() => {
    const writeContract = async () => {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);

        const from = await document.getElementById("transferFrom").value.toString();
        console.log(from)
        const to = await document.getElementById("transferTo").value.toString();
        console.log(to)
        const amount = await document.getElementById("transferAmount").value;
        await contract.transferFrom(from,to,amount);
        
    };
    writeContract();
}

// EOD
balanceOf_ = async() => {
    const writeContract = async () => {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);

        const walletAddress = await signer.getAddress();

        const balance = await contract.balanceOf(walletAddress);
        document.getElementById("myInput").value = balance.toString().concat("   TCSX");
    };
    writeContract();
}

// Basic stuff
uploadData = async() => {
    const writeContract = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        
        await provider.send("eth_requestAccounts", []);
        
        const signer = provider.getSigner();
        const contract = new ethers.Contract(walletAddress, walletAbi, signer);

        const sendEthAmount = await document.getElementById("sendEthAmount").value;
        await contract.sendEth({value: ethers.utils.formatUnits(sendEthAmount,0)});

    };
    writeContract();
}

getUploadData = async() => {
    const writeContract = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        
        await provider.send("eth_requestAccounts", []);
        
        const signer = provider.getSigner();
        const contract = new ethers.Contract(walletAddress, walletAbi, signer);

        const _raisedFunds = await contract.getContractBalance();
        const raisedFunds = await ethers.utils.formatUnits(_raisedFunds,0);
        document.getElementById("raisedFunds").innerHTML = raisedFunds;
    };
    writeContract();
}

deploy = async() => {
    const contractAbi = [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_target",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "contributors",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_description",
                    "type": "string"
                },
                {
                    "internalType": "address payable",
                    "name": "_recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "createRequests",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "deadline",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getContractBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getDeadlineValue",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getManagerValue",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getRaisedAmountValue",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTargetValue",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getnoOfContributors",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getnumRequests",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_requestNo",
                    "type": "uint256"
                }
            ],
            "name": "makePayment",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "manager",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "noOfContributors",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "numRequests",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "raisedAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "refund",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "requests",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                },
                {
                    "internalType": "address payable",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "completed",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "noOfVoters",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "sendEth",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "target",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_requestNo",
                    "type": "uint256"
                }
            ],
            "name": "voteRequest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
    const contractByteCode = {
        "functionDebugData": {
            "@_67": {
                "entryPoint": null,
                "id": 67,
                "parameterSlots": 2,
                "returnSlots": 0
            },
            "abi_decode_t_uint256_fromMemory": {
                "entryPoint": 196,
                "id": null,
                "parameterSlots": 2,
                "returnSlots": 1
            },
            "abi_decode_tuple_t_uint256t_uint256_fromMemory": {
                "entryPoint": 219,
                "id": null,
                "parameterSlots": 2,
                "returnSlots": 2
            },
            "allocate_unbounded": {
                "entryPoint": null,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 1
            },
            "checked_add_t_uint256": {
                "entryPoint": 290,
                "id": null,
                "parameterSlots": 2,
                "returnSlots": 1
            },
            "checked_mul_t_uint256": {
                "entryPoint": 383,
                "id": null,
                "parameterSlots": 2,
                "returnSlots": 1
            },
            "cleanup_t_uint256": {
                "entryPoint": 480,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 1
            },
            "panic_error_0x11": {
                "entryPoint": 490,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
                "entryPoint": null,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
                "entryPoint": 537,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "validator_revert_t_uint256": {
                "entryPoint": 542,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 0
            }
        },
        "generatedSources": [
            {
                "ast": {
                    "nodeType": "YulBlock",
                    "src": "0:2055:1",
                    "statements": [
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "70:80:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "80:22:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "offset",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "95:6:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mload",
                                                "nodeType": "YulIdentifier",
                                                "src": "89:5:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "89:13:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "80:5:1"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "138:5:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "validator_revert_t_uint256",
                                                "nodeType": "YulIdentifier",
                                                "src": "111:26:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "111:33:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "111:33:1"
                                    }
                                ]
                            },
                            "name": "abi_decode_t_uint256_fromMemory",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "offset",
                                    "nodeType": "YulTypedName",
                                    "src": "48:6:1",
                                    "type": ""
                                },
                                {
                                    "name": "end",
                                    "nodeType": "YulTypedName",
                                    "src": "56:3:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "value",
                                    "nodeType": "YulTypedName",
                                    "src": "64:5:1",
                                    "type": ""
                                }
                            ],
                            "src": "7:143:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "250:413:1",
                                "statements": [
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "296:83:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "298:77:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "298:79:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "298:79:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "dataEnd",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "271:7:1"
                                                        },
                                                        {
                                                            "name": "headStart",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "280:9:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "sub",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "267:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "267:23:1"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "292:2:1",
                                                    "type": "",
                                                    "value": "64"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "slt",
                                                "nodeType": "YulIdentifier",
                                                "src": "263:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "263:32:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "260:119:1"
                                    },
                                    {
                                        "nodeType": "YulBlock",
                                        "src": "389:128:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "404:15:1",
                                                "value": {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "418:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "offset",
                                                        "nodeType": "YulTypedName",
                                                        "src": "408:6:1",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "433:74:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "479:9:1"
                                                                },
                                                                {
                                                                    "name": "offset",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "490:6:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "475:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "475:22:1"
                                                        },
                                                        {
                                                            "name": "dataEnd",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "499:7:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_decode_t_uint256_fromMemory",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "443:31:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "443:64:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "value0",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "433:6:1"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulBlock",
                                        "src": "527:129:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "542:16:1",
                                                "value": {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "556:2:1",
                                                    "type": "",
                                                    "value": "32"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "offset",
                                                        "nodeType": "YulTypedName",
                                                        "src": "546:6:1",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "572:74:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "618:9:1"
                                                                },
                                                                {
                                                                    "name": "offset",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "629:6:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "614:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "614:22:1"
                                                        },
                                                        {
                                                            "name": "dataEnd",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "638:7:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_decode_t_uint256_fromMemory",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "582:31:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "582:64:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "value1",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "572:6:1"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "abi_decode_tuple_t_uint256t_uint256_fromMemory",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "headStart",
                                    "nodeType": "YulTypedName",
                                    "src": "212:9:1",
                                    "type": ""
                                },
                                {
                                    "name": "dataEnd",
                                    "nodeType": "YulTypedName",
                                    "src": "223:7:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "value0",
                                    "nodeType": "YulTypedName",
                                    "src": "235:6:1",
                                    "type": ""
                                },
                                {
                                    "name": "value1",
                                    "nodeType": "YulTypedName",
                                    "src": "243:6:1",
                                    "type": ""
                                }
                            ],
                            "src": "156:507:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "709:35:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "719:19:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "735:2:1",
                                                    "type": "",
                                                    "value": "64"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mload",
                                                "nodeType": "YulIdentifier",
                                                "src": "729:5:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "729:9:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "memPtr",
                                                "nodeType": "YulIdentifier",
                                                "src": "719:6:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "allocate_unbounded",
                            "nodeType": "YulFunctionDefinition",
                            "returnVariables": [
                                {
                                    "name": "memPtr",
                                    "nodeType": "YulTypedName",
                                    "src": "702:6:1",
                                    "type": ""
                                }
                            ],
                            "src": "669:75:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "794:261:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "804:25:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "827:1:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "cleanup_t_uint256",
                                                "nodeType": "YulIdentifier",
                                                "src": "809:17:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "809:20:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "x",
                                                "nodeType": "YulIdentifier",
                                                "src": "804:1:1"
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "838:25:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "y",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "861:1:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "cleanup_t_uint256",
                                                "nodeType": "YulIdentifier",
                                                "src": "843:17:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "843:20:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "y",
                                                "nodeType": "YulIdentifier",
                                                "src": "838:1:1"
                                            }
                                        ]
                                    },
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "1001:22:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "panic_error_0x11",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1003:16:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "1003:18:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "1003:18:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "922:1:1"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "929:66:1",
                                                            "type": "",
                                                            "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                                                        },
                                                        {
                                                            "name": "y",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "997:1:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "sub",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "925:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "925:74:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "gt",
                                                "nodeType": "YulIdentifier",
                                                "src": "919:2:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "919:81:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "916:107:1"
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "1033:16:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1044:1:1"
                                                },
                                                {
                                                    "name": "y",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1047:1:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "1040:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1040:9:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "sum",
                                                "nodeType": "YulIdentifier",
                                                "src": "1033:3:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "checked_add_t_uint256",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "x",
                                    "nodeType": "YulTypedName",
                                    "src": "781:1:1",
                                    "type": ""
                                },
                                {
                                    "name": "y",
                                    "nodeType": "YulTypedName",
                                    "src": "784:1:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "sum",
                                    "nodeType": "YulTypedName",
                                    "src": "790:3:1",
                                    "type": ""
                                }
                            ],
                            "src": "750:305:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "1109:300:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "1119:25:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1142:1:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "cleanup_t_uint256",
                                                "nodeType": "YulIdentifier",
                                                "src": "1124:17:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1124:20:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "x",
                                                "nodeType": "YulIdentifier",
                                                "src": "1119:1:1"
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "1153:25:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "y",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1176:1:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "cleanup_t_uint256",
                                                "nodeType": "YulIdentifier",
                                                "src": "1158:17:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1158:20:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "y",
                                                "nodeType": "YulIdentifier",
                                                "src": "1153:1:1"
                                            }
                                        ]
                                    },
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "1351:22:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "panic_error_0x11",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1353:16:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "1353:18:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "1353:18:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "x",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1263:1:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "iszero",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1256:6:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "1256:9:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1249:6:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1249:17:1"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "y",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1271:1:1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "1278:66:1",
                                                                    "type": "",
                                                                    "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                                                                },
                                                                {
                                                                    "name": "x",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1346:1:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "div",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1274:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "1274:74:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "gt",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1268:2:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1268:81:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "and",
                                                "nodeType": "YulIdentifier",
                                                "src": "1245:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1245:105:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "1242:131:1"
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "1383:20:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1398:1:1"
                                                },
                                                {
                                                    "name": "y",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1401:1:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mul",
                                                "nodeType": "YulIdentifier",
                                                "src": "1394:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1394:9:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "product",
                                                "nodeType": "YulIdentifier",
                                                "src": "1383:7:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "checked_mul_t_uint256",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "x",
                                    "nodeType": "YulTypedName",
                                    "src": "1092:1:1",
                                    "type": ""
                                },
                                {
                                    "name": "y",
                                    "nodeType": "YulTypedName",
                                    "src": "1095:1:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "product",
                                    "nodeType": "YulTypedName",
                                    "src": "1101:7:1",
                                    "type": ""
                                }
                            ],
                            "src": "1061:348:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "1460:32:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "1470:16:1",
                                        "value": {
                                            "name": "value",
                                            "nodeType": "YulIdentifier",
                                            "src": "1481:5:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "cleaned",
                                                "nodeType": "YulIdentifier",
                                                "src": "1470:7:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nodeType": "YulTypedName",
                                    "src": "1442:5:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "cleaned",
                                    "nodeType": "YulTypedName",
                                    "src": "1452:7:1",
                                    "type": ""
                                }
                            ],
                            "src": "1415:77:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "1526:152:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1543:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1546:77:1",
                                                    "type": "",
                                                    "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "1536:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1536:88:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "1536:88:1"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1640:1:1",
                                                    "type": "",
                                                    "value": "4"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1643:4:1",
                                                    "type": "",
                                                    "value": "0x11"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "1633:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1633:15:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "1633:15:1"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1664:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1667:4:1",
                                                    "type": "",
                                                    "value": "0x24"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "1657:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1657:15:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "1657:15:1"
                                    }
                                ]
                            },
                            "name": "panic_error_0x11",
                            "nodeType": "YulFunctionDefinition",
                            "src": "1498:180:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "1773:28:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1790:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1793:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "1783:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1783:12:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "1783:12:1"
                                    }
                                ]
                            },
                            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                            "nodeType": "YulFunctionDefinition",
                            "src": "1684:117:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "1896:28:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1913:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1916:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "1906:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1906:12:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "1906:12:1"
                                    }
                                ]
                            },
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulFunctionDefinition",
                            "src": "1807:117:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "1973:79:1",
                                "statements": [
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "2030:16:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "2039:1:1",
                                                                "type": "",
                                                                "value": "0"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "2042:1:1",
                                                                "type": "",
                                                                "value": "0"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "revert",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2032:6:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2032:12:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "2032:12:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1996:5:1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "value",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2021:5:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "cleanup_t_uint256",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2003:17:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2003:24:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "eq",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1993:2:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1993:35:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "iszero",
                                                "nodeType": "YulIdentifier",
                                                "src": "1986:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1986:43:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "1983:63:1"
                                    }
                                ]
                            },
                            "name": "validator_revert_t_uint256",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nodeType": "YulTypedName",
                                    "src": "1966:5:1",
                                    "type": ""
                                }
                            ],
                            "src": "1930:122:1"
                        }
                    ]
                },
                "contents": "{\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256t_uint256_fromMemory(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x != 0 and y > (maxValue / x)\n        if and(iszero(iszero(x)), gt(y, div(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, x))) { panic_error_0x11() }\n\n        product := mul(x, y)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
                "id": 1,
                "language": "Yul",
                "name": "#utility.yul"
            }
        ],
        "linkReferences": {},
        "object": "60806040523480156200001157600080fd5b50604051620019a6380380620019a68339818101604052810190620000379190620000db565b81600381905550603c806018836200005091906200017f565b6200005c91906200017f565b6200006891906200017f565b4262000075919062000122565b60028190555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000238565b600081519050620000d5816200021e565b92915050565b60008060408385031215620000f557620000f462000219565b5b60006200010585828601620000c4565b92505060206200011885828601620000c4565b9150509250929050565b60006200012f82620001e0565b91506200013c83620001e0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620001745762000173620001ea565b5b828201905092915050565b60006200018c82620001e0565b91506200019983620001e0565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620001d557620001d4620001ea565b5b828202905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600080fd5b6200022981620001e0565b81146200023557600080fd5b50565b61175e80620002486000396000f3fe60806040526004361061011f5760003560e01c8063590e1ae3116100a05780639fb42b1f116100645780639fb42b1f14610396578063ab30286d146103c1578063c59ee1dc146103ec578063d078226914610417578063d4b83992146104425761011f565b8063590e1ae3146102bd5780636f9fb98a146102d45780637e5d9d0d146102ff57806381d12c581461032a5780638bb164161461036b5761011f565b80633eb7647b116100e75780633eb7647b146101ec578063481c6a75146102155780634cb6f4a5146102405780634e260f6f146102695780635114cb52146102945761011f565b806306a1a5831461012457806306e99fef1461014f5780631ef45527146101595780631f6d49421461018457806329dcb0cf146101c1575b600080fd5b34801561013057600080fd5b5061013961046d565b6040516101469190611261565b60405180910390f35b610157610477565b005b34801561016557600080fd5b5061016e61058b565b60405161017b9190611261565b60405180910390f35b34801561019057600080fd5b506101ab60048036038101906101a69190610ed9565b610595565b6040516101b89190611261565b60405180910390f35b3480156101cd57600080fd5b506101d66105ad565b6040516101e39190611261565b60405180910390f35b3480156101f857600080fd5b50610213600480360381019061020e9190610f06565b6105b3565b005b34801561022157600080fd5b5061022a610706565b604051610237919061110c565b60405180910390f35b34801561024c57600080fd5b5061026760048036038101906102629190610f75565b61072c565b005b34801561027557600080fd5b5061027e6108d1565b60405161028b9190611261565b60405180910390f35b3480156102a057600080fd5b506102bb60048036038101906102b69190610f75565b6108d7565b005b3480156102c957600080fd5b506102d2610acb565b005b3480156102e057600080fd5b506102e9610c3a565b6040516102f69190611261565b60405180910390f35b34801561030b57600080fd5b50610314610c42565b6040516103219190611261565b60405180910390f35b34801561033657600080fd5b50610351600480360381019061034c9190610f75565b610c4c565b604051610362959493929190611127565b60405180910390f35b34801561037757600080fd5b50610380610d37565b60405161038d9190611261565b60405180910390f35b3480156103a257600080fd5b506103ab610d41565b6040516103b89190611261565b60405180910390f35b3480156103cd57600080fd5b506103d6610d47565b6040516103e3919061110c565b60405180910390f35b3480156103f857600080fd5b50610401610d71565b60405161040e9190611261565b60405180910390f35b34801561042357600080fd5b5061042c610d77565b6040516104399190611261565b60405180910390f35b34801561044e57600080fd5b50610457610d81565b6040516104649190611261565b60405180910390f35b6000600554905090565b60025442106104bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b2906111a1565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054141561051b576005600081548092919061051590611474565b91905055505b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461056991906112ee565b92505081905550346004600082825461058291906112ee565b92505081905550565b6000600254905090565b60006020528060005260406000206000915090505481565b60025481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610643576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063a90611181565b60405180910390fd5b600060066000600754815260200190815260200160002090506007600081548092919061066f90611474565b91905055508381600001908051906020019061068c929190610d87565b50828160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081816002018190555060008160030160006101000a81548160ff0219169083151502179055506000816004018190555050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116107ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a4906111c1565b60405180910390fd5b6000600660008381526020019081526020016000209050600015158160050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610859576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085090611241565b60405180910390fd5b60018160050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508060040160008154809291906108c890611474565b91905055505050565b60055481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610967576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095e90611181565b60405180910390fd5b600354600454101561097857600080fd5b6000600660008381526020019081526020016000209050600015158160030160009054906101000a900460ff161515146109e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109de906111e1565b60405180910390fd5b60026005546109f69190611344565b816004015411610a3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3290611221565b60405180910390fd5b8060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600201549081150290604051600060405180830381858888f19350505050158015610aa9573d6000803e3d6000fd5b5060018160030160006101000a81548160ff0219169083151502179055505050565b60025442118015610adf5750600354600454105b610b1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1590611201565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411610b6957600080fd5b60003390508073ffffffffffffffffffffffffffffffffffffffff166108fc6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549081150290604051600060405180830381858888f19350505050158015610bf2573d6000803e3d6000fd5b5060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b600047905090565b6000600354905090565b6006602052806000526040600020600091509050806000018054610c6f90611411565b80601f0160208091040260200160405190810160405280929190818152602001828054610c9b90611411565b8015610ce85780601f10610cbd57610100808354040283529160200191610ce8565b820191906000526020600020905b815481529060010190602001808311610ccb57829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030160009054906101000a900460ff16908060040154905085565b6000600454905090565b60075481565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60045481565b6000600754905090565b60035481565b828054610d9390611411565b90600052602060002090601f016020900481019282610db55760008555610dfc565b82601f10610dce57805160ff1916838001178555610dfc565b82800160010185558215610dfc579182015b82811115610dfb578251825591602001919060010190610de0565b5b509050610e099190610e0d565b5090565b5b80821115610e26576000816000905550600101610e0e565b5090565b6000610e3d610e38846112a1565b61127c565b905082815260208101848484011115610e5957610e5861157e565b5b610e648482856113cf565b509392505050565b600081359050610e7b816116e3565b92915050565b600081359050610e90816116fa565b92915050565b600082601f830112610eab57610eaa611579565b5b8135610ebb848260208601610e2a565b91505092915050565b600081359050610ed381611711565b92915050565b600060208284031215610eef57610eee611588565b5b6000610efd84828501610e6c565b91505092915050565b600080600060608486031215610f1f57610f1e611588565b5b600084013567ffffffffffffffff811115610f3d57610f3c611583565b5b610f4986828701610e96565b9350506020610f5a86828701610e81565b9250506040610f6b86828701610ec4565b9150509250925092565b600060208284031215610f8b57610f8a611588565b5b6000610f9984828501610ec4565b91505092915050565b610fab81611387565b82525050565b610fba81611375565b82525050565b610fc981611399565b82525050565b6000610fda826112d2565b610fe481856112dd565b9350610ff48185602086016113de565b610ffd8161158d565b840191505092915050565b60006110156024836112dd565b91506110208261159e565b604082019050919050565b60006110386013836112dd565b9150611043826115ed565b602082019050919050565b600061105b6017836112dd565b915061106682611616565b602082019050919050565b600061107e601e836112dd565b91506110898261163f565b602082019050919050565b60006110a1601f836112dd565b91506110ac82611668565b602082019050919050565b60006110c46019836112dd565b91506110cf82611691565b602082019050919050565b60006110e76016836112dd565b91506110f2826116ba565b602082019050919050565b611106816113c5565b82525050565b60006020820190506111216000830184610fb1565b92915050565b600060a08201905081810360008301526111418188610fcf565b90506111506020830187610fa2565b61115d60408301866110fd565b61116a6060830185610fc0565b61117760808301846110fd565b9695505050505050565b6000602082019050818103600083015261119a81611008565b9050919050565b600060208201905081810360008301526111ba8161102b565b9050919050565b600060208201905081810360008301526111da8161104e565b9050919050565b600060208201905081810360008301526111fa81611071565b9050919050565b6000602082019050818103600083015261121a81611094565b9050919050565b6000602082019050818103600083015261123a816110b7565b9050919050565b6000602082019050818103600083015261125a816110da565b9050919050565b600060208201905061127660008301846110fd565b92915050565b6000611286611297565b90506112928282611443565b919050565b6000604051905090565b600067ffffffffffffffff8211156112bc576112bb61154a565b5b6112c58261158d565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60006112f9826113c5565b9150611304836113c5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611339576113386114bd565b5b828201905092915050565b600061134f826113c5565b915061135a836113c5565b92508261136a576113696114ec565b5b828204905092915050565b6000611380826113a5565b9050919050565b6000611392826113a5565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156113fc5780820151818401526020810190506113e1565b8381111561140b576000848401525b50505050565b6000600282049050600182168061142957607f821691505b6020821081141561143d5761143c61151b565b5b50919050565b61144c8261158d565b810181811067ffffffffffffffff8211171561146b5761146a61154a565b5b80604052505050565b600061147f826113c5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156114b2576114b16114bd565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f6e6c79206d616e616765722063616e2063616c6c6c20746869732066756e6360008201527f74696f6e00000000000000000000000000000000000000000000000000000000602082015250565b7f446561646c696e65206861732070617373656400000000000000000000000000600082015250565b7f596f75206d75737420626520636f6e7472696275746f72000000000000000000600082015250565b7f546865207265717565737420686173206265656e20636f6d706c657465640000600082015250565b7f596f7520617265206e6f7420656c696769626c6520666f7220726566756e6400600082015250565b7f4d616a6f7269747920646f6573206e6f7420737570706f727400000000000000600082015250565b7f596f75206861766520616c726561647920766f74656400000000000000000000600082015250565b6116ec81611375565b81146116f757600080fd5b50565b61170381611387565b811461170e57600080fd5b50565b61171a816113c5565b811461172557600080fd5b5056fea2646970667358221220e766d54848285297aad4afdc86f458a0453e46b9a4fce69fc72b1b14d63434a664736f6c63430008070033",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0x19A6 CODESIZE SUB DUP1 PUSH3 0x19A6 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH3 0x37 SWAP2 SWAP1 PUSH3 0xDB JUMP JUMPDEST DUP2 PUSH1 0x3 DUP2 SWAP1 SSTORE POP PUSH1 0x3C DUP1 PUSH1 0x18 DUP4 PUSH3 0x50 SWAP2 SWAP1 PUSH3 0x17F JUMP JUMPDEST PUSH3 0x5C SWAP2 SWAP1 PUSH3 0x17F JUMP JUMPDEST PUSH3 0x68 SWAP2 SWAP1 PUSH3 0x17F JUMP JUMPDEST TIMESTAMP PUSH3 0x75 SWAP2 SWAP1 PUSH3 0x122 JUMP JUMPDEST PUSH1 0x2 DUP2 SWAP1 SSTORE POP CALLER PUSH1 0x1 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP POP POP PUSH3 0x238 JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0xD5 DUP2 PUSH3 0x21E JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH3 0xF5 JUMPI PUSH3 0xF4 PUSH3 0x219 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH3 0x105 DUP6 DUP3 DUP7 ADD PUSH3 0xC4 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH3 0x118 DUP6 DUP3 DUP7 ADD PUSH3 0xC4 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x12F DUP3 PUSH3 0x1E0 JUMP JUMPDEST SWAP2 POP PUSH3 0x13C DUP4 PUSH3 0x1E0 JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP3 GT ISZERO PUSH3 0x174 JUMPI PUSH3 0x173 PUSH3 0x1EA JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x18C DUP3 PUSH3 0x1E0 JUMP JUMPDEST SWAP2 POP PUSH3 0x199 DUP4 PUSH3 0x1E0 JUMP JUMPDEST SWAP3 POP DUP2 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DIV DUP4 GT DUP3 ISZERO ISZERO AND ISZERO PUSH3 0x1D5 JUMPI PUSH3 0x1D4 PUSH3 0x1EA JUMP JUMPDEST JUMPDEST DUP3 DUP3 MUL SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x229 DUP2 PUSH3 0x1E0 JUMP JUMPDEST DUP2 EQ PUSH3 0x235 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x175E DUP1 PUSH3 0x248 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x11F JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x590E1AE3 GT PUSH2 0xA0 JUMPI DUP1 PUSH4 0x9FB42B1F GT PUSH2 0x64 JUMPI DUP1 PUSH4 0x9FB42B1F EQ PUSH2 0x396 JUMPI DUP1 PUSH4 0xAB30286D EQ PUSH2 0x3C1 JUMPI DUP1 PUSH4 0xC59EE1DC EQ PUSH2 0x3EC JUMPI DUP1 PUSH4 0xD0782269 EQ PUSH2 0x417 JUMPI DUP1 PUSH4 0xD4B83992 EQ PUSH2 0x442 JUMPI PUSH2 0x11F JUMP JUMPDEST DUP1 PUSH4 0x590E1AE3 EQ PUSH2 0x2BD JUMPI DUP1 PUSH4 0x6F9FB98A EQ PUSH2 0x2D4 JUMPI DUP1 PUSH4 0x7E5D9D0D EQ PUSH2 0x2FF JUMPI DUP1 PUSH4 0x81D12C58 EQ PUSH2 0x32A JUMPI DUP1 PUSH4 0x8BB16416 EQ PUSH2 0x36B JUMPI PUSH2 0x11F JUMP JUMPDEST DUP1 PUSH4 0x3EB7647B GT PUSH2 0xE7 JUMPI DUP1 PUSH4 0x3EB7647B EQ PUSH2 0x1EC JUMPI DUP1 PUSH4 0x481C6A75 EQ PUSH2 0x215 JUMPI DUP1 PUSH4 0x4CB6F4A5 EQ PUSH2 0x240 JUMPI DUP1 PUSH4 0x4E260F6F EQ PUSH2 0x269 JUMPI DUP1 PUSH4 0x5114CB52 EQ PUSH2 0x294 JUMPI PUSH2 0x11F JUMP JUMPDEST DUP1 PUSH4 0x6A1A583 EQ PUSH2 0x124 JUMPI DUP1 PUSH4 0x6E99FEF EQ PUSH2 0x14F JUMPI DUP1 PUSH4 0x1EF45527 EQ PUSH2 0x159 JUMPI DUP1 PUSH4 0x1F6D4942 EQ PUSH2 0x184 JUMPI DUP1 PUSH4 0x29DCB0CF EQ PUSH2 0x1C1 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x130 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x139 PUSH2 0x46D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x146 SWAP2 SWAP1 PUSH2 0x1261 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x157 PUSH2 0x477 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x165 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x16E PUSH2 0x58B JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x17B SWAP2 SWAP1 PUSH2 0x1261 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x190 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1AB PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1A6 SWAP2 SWAP1 PUSH2 0xED9 JUMP JUMPDEST PUSH2 0x595 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1B8 SWAP2 SWAP1 PUSH2 0x1261 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1CD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1D6 PUSH2 0x5AD JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1E3 SWAP2 SWAP1 PUSH2 0x1261 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1F8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x213 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x20E SWAP2 SWAP1 PUSH2 0xF06 JUMP JUMPDEST PUSH2 0x5B3 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x221 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x22A PUSH2 0x706 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x237 SWAP2 SWAP1 PUSH2 0x110C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x24C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x267 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x262 SWAP2 SWAP1 PUSH2 0xF75 JUMP JUMPDEST PUSH2 0x72C JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x275 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x27E PUSH2 0x8D1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x28B SWAP2 SWAP1 PUSH2 0x1261 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2A0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2BB PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x2B6 SWAP2 SWAP1 PUSH2 0xF75 JUMP JUMPDEST PUSH2 0x8D7 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2C9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2D2 PUSH2 0xACB JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2E0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2E9 PUSH2 0xC3A JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x2F6 SWAP2 SWAP1 PUSH2 0x1261 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x30B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x314 PUSH2 0xC42 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x321 SWAP2 SWAP1 PUSH2 0x1261 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x336 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x351 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x34C SWAP2 SWAP1 PUSH2 0xF75 JUMP JUMPDEST PUSH2 0xC4C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x362 SWAP6 SWAP5 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x1127 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x377 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x380 PUSH2 0xD37 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x38D SWAP2 SWAP1 PUSH2 0x1261 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x3A2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x3AB PUSH2 0xD41 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x3B8 SWAP2 SWAP1 PUSH2 0x1261 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x3CD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x3D6 PUSH2 0xD47 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x3E3 SWAP2 SWAP1 PUSH2 0x110C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x3F8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x401 PUSH2 0xD71 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x40E SWAP2 SWAP1 PUSH2 0x1261 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x423 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x42C PUSH2 0xD77 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x439 SWAP2 SWAP1 PUSH2 0x1261 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x44E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x457 PUSH2 0xD81 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x464 SWAP2 SWAP1 PUSH2 0x1261 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 PUSH1 0x5 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x2 SLOAD TIMESTAMP LT PUSH2 0x4BB JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x4B2 SWAP1 PUSH2 0x11A1 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD EQ ISZERO PUSH2 0x51B JUMPI PUSH1 0x5 PUSH1 0x0 DUP2 SLOAD DUP1 SWAP3 SWAP2 SWAP1 PUSH2 0x515 SWAP1 PUSH2 0x1474 JUMP JUMPDEST SWAP2 SWAP1 POP SSTORE POP JUMPDEST CALLVALUE PUSH1 0x0 DUP1 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x569 SWAP2 SWAP1 PUSH2 0x12EE JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP CALLVALUE PUSH1 0x4 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x582 SWAP2 SWAP1 PUSH2 0x12EE JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SWAP1 POP SLOAD DUP2 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x643 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x63A SWAP1 PUSH2 0x1181 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x6 PUSH1 0x0 PUSH1 0x7 SLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SWAP1 POP PUSH1 0x7 PUSH1 0x0 DUP2 SLOAD DUP1 SWAP3 SWAP2 SWAP1 PUSH2 0x66F SWAP1 PUSH2 0x1474 JUMP JUMPDEST SWAP2 SWAP1 POP SSTORE POP DUP4 DUP2 PUSH1 0x0 ADD SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH2 0x68C SWAP3 SWAP2 SWAP1 PUSH2 0xD87 JUMP JUMPDEST POP DUP3 DUP2 PUSH1 0x1 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 DUP2 PUSH1 0x2 ADD DUP2 SWAP1 SSTORE POP PUSH1 0x0 DUP2 PUSH1 0x3 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP PUSH1 0x0 DUP2 PUSH1 0x4 ADD DUP2 SWAP1 SSTORE POP POP POP POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD GT PUSH2 0x7AD JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x7A4 SWAP1 PUSH2 0x11C1 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x6 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SWAP1 POP PUSH1 0x0 ISZERO ISZERO DUP2 PUSH1 0x5 ADD PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO ISZERO EQ PUSH2 0x859 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x850 SWAP1 PUSH2 0x1241 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x1 DUP2 PUSH1 0x5 ADD PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP DUP1 PUSH1 0x4 ADD PUSH1 0x0 DUP2 SLOAD DUP1 SWAP3 SWAP2 SWAP1 PUSH2 0x8C8 SWAP1 PUSH2 0x1474 JUMP JUMPDEST SWAP2 SWAP1 POP SSTORE POP POP POP JUMP JUMPDEST PUSH1 0x5 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x967 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x95E SWAP1 PUSH2 0x1181 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x3 SLOAD PUSH1 0x4 SLOAD LT ISZERO PUSH2 0x978 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x6 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SWAP1 POP PUSH1 0x0 ISZERO ISZERO DUP2 PUSH1 0x3 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO ISZERO EQ PUSH2 0x9E7 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x9DE SWAP1 PUSH2 0x11E1 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x2 PUSH1 0x5 SLOAD PUSH2 0x9F6 SWAP2 SWAP1 PUSH2 0x1344 JUMP JUMPDEST DUP2 PUSH1 0x4 ADD SLOAD GT PUSH2 0xA3B JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xA32 SWAP1 PUSH2 0x1221 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x1 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC DUP3 PUSH1 0x2 ADD SLOAD SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0xAA9 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP PUSH1 0x1 DUP2 PUSH1 0x3 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP POP POP JUMP JUMPDEST PUSH1 0x2 SLOAD TIMESTAMP GT DUP1 ISZERO PUSH2 0xADF JUMPI POP PUSH1 0x3 SLOAD PUSH1 0x4 SLOAD LT JUMPDEST PUSH2 0xB1E JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xB15 SWAP1 PUSH2 0x1201 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD GT PUSH2 0xB69 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 CALLER SWAP1 POP DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC PUSH1 0x0 DUP1 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0xBF2 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP PUSH1 0x0 DUP1 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH1 0x0 SELFBALANCE SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x3 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x6 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SWAP1 POP DUP1 PUSH1 0x0 ADD DUP1 SLOAD PUSH2 0xC6F SWAP1 PUSH2 0x1411 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0xC9B SWAP1 PUSH2 0x1411 JUMP JUMPDEST DUP1 ISZERO PUSH2 0xCE8 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xCBD JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0xCE8 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0xCCB JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 DUP1 PUSH1 0x1 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 DUP1 PUSH1 0x2 ADD SLOAD SWAP1 DUP1 PUSH1 0x3 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND SWAP1 DUP1 PUSH1 0x4 ADD SLOAD SWAP1 POP DUP6 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x4 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x7 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x4 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x7 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH2 0xD93 SWAP1 PUSH2 0x1411 JUMP JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH2 0xDB5 JUMPI PUSH1 0x0 DUP6 SSTORE PUSH2 0xDFC JUMP JUMPDEST DUP3 PUSH1 0x1F LT PUSH2 0xDCE JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0xDFC JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0xDFC JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0xDFB JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0xDE0 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH2 0xE09 SWAP2 SWAP1 PUSH2 0xE0D JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0xE26 JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH2 0xE0E JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH2 0xE3D PUSH2 0xE38 DUP5 PUSH2 0x12A1 JUMP JUMPDEST PUSH2 0x127C JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH2 0xE59 JUMPI PUSH2 0xE58 PUSH2 0x157E JUMP JUMPDEST JUMPDEST PUSH2 0xE64 DUP5 DUP3 DUP6 PUSH2 0x13CF JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0xE7B DUP2 PUSH2 0x16E3 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0xE90 DUP2 PUSH2 0x16FA JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0xEAB JUMPI PUSH2 0xEAA PUSH2 0x1579 JUMP JUMPDEST JUMPDEST DUP2 CALLDATALOAD PUSH2 0xEBB DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0xE2A JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0xED3 DUP2 PUSH2 0x1711 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xEEF JUMPI PUSH2 0xEEE PUSH2 0x1588 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xEFD DUP5 DUP3 DUP6 ADD PUSH2 0xE6C JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0xF1F JUMPI PUSH2 0xF1E PUSH2 0x1588 JUMP JUMPDEST JUMPDEST PUSH1 0x0 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0xF3D JUMPI PUSH2 0xF3C PUSH2 0x1583 JUMP JUMPDEST JUMPDEST PUSH2 0xF49 DUP7 DUP3 DUP8 ADD PUSH2 0xE96 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0xF5A DUP7 DUP3 DUP8 ADD PUSH2 0xE81 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 PUSH2 0xF6B DUP7 DUP3 DUP8 ADD PUSH2 0xEC4 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xF8B JUMPI PUSH2 0xF8A PUSH2 0x1588 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xF99 DUP5 DUP3 DUP6 ADD PUSH2 0xEC4 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0xFAB DUP2 PUSH2 0x1387 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0xFBA DUP2 PUSH2 0x1375 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0xFC9 DUP2 PUSH2 0x1399 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xFDA DUP3 PUSH2 0x12D2 JUMP JUMPDEST PUSH2 0xFE4 DUP2 DUP6 PUSH2 0x12DD JUMP JUMPDEST SWAP4 POP PUSH2 0xFF4 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x13DE JUMP JUMPDEST PUSH2 0xFFD DUP2 PUSH2 0x158D JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1015 PUSH1 0x24 DUP4 PUSH2 0x12DD JUMP JUMPDEST SWAP2 POP PUSH2 0x1020 DUP3 PUSH2 0x159E JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1038 PUSH1 0x13 DUP4 PUSH2 0x12DD JUMP JUMPDEST SWAP2 POP PUSH2 0x1043 DUP3 PUSH2 0x15ED JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x105B PUSH1 0x17 DUP4 PUSH2 0x12DD JUMP JUMPDEST SWAP2 POP PUSH2 0x1066 DUP3 PUSH2 0x1616 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x107E PUSH1 0x1E DUP4 PUSH2 0x12DD JUMP JUMPDEST SWAP2 POP PUSH2 0x1089 DUP3 PUSH2 0x163F JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x10A1 PUSH1 0x1F DUP4 PUSH2 0x12DD JUMP JUMPDEST SWAP2 POP PUSH2 0x10AC DUP3 PUSH2 0x1668 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x10C4 PUSH1 0x19 DUP4 PUSH2 0x12DD JUMP JUMPDEST SWAP2 POP PUSH2 0x10CF DUP3 PUSH2 0x1691 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x10E7 PUSH1 0x16 DUP4 PUSH2 0x12DD JUMP JUMPDEST SWAP2 POP PUSH2 0x10F2 DUP3 PUSH2 0x16BA JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x1106 DUP2 PUSH2 0x13C5 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1121 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0xFB1 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0xA0 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1141 DUP2 DUP9 PUSH2 0xFCF JUMP JUMPDEST SWAP1 POP PUSH2 0x1150 PUSH1 0x20 DUP4 ADD DUP8 PUSH2 0xFA2 JUMP JUMPDEST PUSH2 0x115D PUSH1 0x40 DUP4 ADD DUP7 PUSH2 0x10FD JUMP JUMPDEST PUSH2 0x116A PUSH1 0x60 DUP4 ADD DUP6 PUSH2 0xFC0 JUMP JUMPDEST PUSH2 0x1177 PUSH1 0x80 DUP4 ADD DUP5 PUSH2 0x10FD JUMP JUMPDEST SWAP7 SWAP6 POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x119A DUP2 PUSH2 0x1008 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x11BA DUP2 PUSH2 0x102B JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x11DA DUP2 PUSH2 0x104E JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x11FA DUP2 PUSH2 0x1071 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x121A DUP2 PUSH2 0x1094 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x123A DUP2 PUSH2 0x10B7 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x125A DUP2 PUSH2 0x10DA JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1276 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x10FD JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1286 PUSH2 0x1297 JUMP JUMPDEST SWAP1 POP PUSH2 0x1292 DUP3 DUP3 PUSH2 0x1443 JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0x12BC JUMPI PUSH2 0x12BB PUSH2 0x154A JUMP JUMPDEST JUMPDEST PUSH2 0x12C5 DUP3 PUSH2 0x158D JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x12F9 DUP3 PUSH2 0x13C5 JUMP JUMPDEST SWAP2 POP PUSH2 0x1304 DUP4 PUSH2 0x13C5 JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP3 GT ISZERO PUSH2 0x1339 JUMPI PUSH2 0x1338 PUSH2 0x14BD JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x134F DUP3 PUSH2 0x13C5 JUMP JUMPDEST SWAP2 POP PUSH2 0x135A DUP4 PUSH2 0x13C5 JUMP JUMPDEST SWAP3 POP DUP3 PUSH2 0x136A JUMPI PUSH2 0x1369 PUSH2 0x14EC JUMP JUMPDEST JUMPDEST DUP3 DUP3 DIV SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1380 DUP3 PUSH2 0x13A5 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1392 DUP3 PUSH2 0x13A5 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST DUP3 DUP2 DUP4 CALLDATACOPY PUSH1 0x0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x13FC JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x13E1 JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH2 0x140B JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH2 0x1429 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH2 0x143D JUMPI PUSH2 0x143C PUSH2 0x151B JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x144C DUP3 PUSH2 0x158D JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH2 0x146B JUMPI PUSH2 0x146A PUSH2 0x154A JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x147F DUP3 PUSH2 0x13C5 JUMP JUMPDEST SWAP2 POP PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 EQ ISZERO PUSH2 0x14B2 JUMPI PUSH2 0x14B1 PUSH2 0x14BD JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4F6E6C79206D616E616765722063616E2063616C6C6C20746869732066756E63 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x74696F6E00000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x446561646C696E65206861732070617373656400000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x596F75206D75737420626520636F6E7472696275746F72000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x546865207265717565737420686173206265656E20636F6D706C657465640000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x596F7520617265206E6F7420656C696769626C6520666F7220726566756E6400 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x4D616A6F7269747920646F6573206E6F7420737570706F727400000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x596F75206861766520616C726561647920766F74656400000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH2 0x16EC DUP2 PUSH2 0x1375 JUMP JUMPDEST DUP2 EQ PUSH2 0x16F7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x1703 DUP2 PUSH2 0x1387 JUMP JUMPDEST DUP2 EQ PUSH2 0x170E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x171A DUP2 PUSH2 0x13C5 JUMP JUMPDEST DUP2 EQ PUSH2 0x1725 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xE7 PUSH7 0xD54848285297AA 0xD4 0xAF 0xDC DUP7 DELEGATECALL PC LOG0 GASLIMIT RETURNDATACOPY CHAINID 0xB9 LOG4 0xFC 0xE6 SWAP16 0xC7 0x2B SHL EQ 0xD6 CALLVALUE CALLVALUE 0xA6 PUSH5 0x736F6C6343 STOP ADDMOD SMOD STOP CALLER ",
        "sourceMap": "75:3372:0:-:0;;;623:182;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;681:7;674:6;:14;;;;740:2;737;734;724:9;:12;;;;:::i;:::-;:15;;;;:::i;:::-;:18;;;;:::i;:::-;708:15;:34;;;;:::i;:::-;699:8;:43;;;;787:10;779:7;;:18;;;;;;;;;;;;;;;;;;623:182;;75:3372;;7:143:1;64:5;95:6;89:13;80:22;;111:33;138:5;111:33;:::i;:::-;7:143;;;;:::o;156:507::-;235:6;243;292:2;280:9;271:7;267:23;263:32;260:119;;;298:79;;:::i;:::-;260:119;418:1;443:64;499:7;490:6;479:9;475:22;443:64;:::i;:::-;433:74;;389:128;556:2;582:64;638:7;629:6;618:9;614:22;582:64;:::i;:::-;572:74;;527:129;156:507;;;;;:::o;750:305::-;790:3;809:20;827:1;809:20;:::i;:::-;804:25;;843:20;861:1;843:20;:::i;:::-;838:25;;997:1;929:66;925:74;922:1;919:81;916:107;;;1003:18;;:::i;:::-;916:107;1047:1;1044;1040:9;1033:16;;750:305;;;;:::o;1061:348::-;1101:7;1124:20;1142:1;1124:20;:::i;:::-;1119:25;;1158:20;1176:1;1158:20;:::i;:::-;1153:25;;1346:1;1278:66;1274:74;1271:1;1268:81;1263:1;1256:9;1249:17;1245:105;1242:131;;;1353:18;;:::i;:::-;1242:131;1401:1;1398;1394:9;1383:20;;1061:348;;;;:::o;1415:77::-;1452:7;1481:5;1470:16;;1415:77;;;:::o;1498:180::-;1546:77;1543:1;1536:88;1643:4;1640:1;1633:15;1667:4;1664:1;1657:15;1807:117;1916:1;1913;1906:12;1930:122;2003:24;2021:5;2003:24;:::i;:::-;1996:5;1993:35;1983:63;;2042:1;2039;2032:12;1983:63;1930:122;:::o;75:3372:0:-;;;;;;;"
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const myContract = new ethers.ContractFactory(contractAbi, contractByteCode, signer);

    async function main() {
        const contract = await myContract.deploy(target,deadline);
        // document.getElementById("contractAddress").innerHTML = contract.address;
        newContractAddress = await contract.address;
        document.getElementById('walletid').value = newContractAddress; 
        // console.log(contract.address);
        // console.log(contract.deployTransaction);
    }
          
    main();

}

submit = async() => {
    await uploadData();
}

getSubmit = async() => {
    await getUploadData();
}

deployContract = async() => {
    await deploy();
}
