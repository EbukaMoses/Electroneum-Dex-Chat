// Ethereum Contract ABIs and Configuration

// USDT ERC20 Contract ABI (standard ERC20 functions we need)
export const USDT_ABI = [
    {
        "constant": true,
        "inputs": [{ "name": "_owner", "type": "address" }],
        "name": "balanceOf",
        "outputs": [{ "name": "balance", "type": "uint256" }],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "name": "_spender", "type": "address" },
            { "name": "_value", "type": "uint256" }
        ],
        "name": "approve",
        "outputs": [{ "name": "", "type": "bool" }],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            { "name": "_owner", "type": "address" },
            { "name": "_spender", "type": "address" }
        ],
        "name": "allowance",
        "outputs": [{ "name": "", "type": "uint256" }],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "name": "_to", "type": "address" },
            { "name": "_value", "type": "uint256" }
        ],
        "name": "transfer",
        "outputs": [{ "name": "", "type": "bool" }],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{ "name": "", "type": "uint8" }],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [{ "name": "", "type": "string" }],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [{ "name": "", "type": "string" }],
        "type": "function"
    }
] as const;

// FiatBridge Contract ABI (based on your deployed Solidity contracts)
export const FIAT_BRIDGE_ABI = [
    // Core functions
    {
        "inputs": [
            { "name": "token", "type": "address" },
            { "name": "tokenAmount", "type": "uint256" },
            { "name": "fiatAmount", "type": "uint256" },
            { "name": "fiatCurrency", "type": "string" },
            { "name": "transactionId", "type": "string" }
        ],
        "name": "initiateOfframp",
        "outputs": [{ "name": "", "type": "bytes32" }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "name": "token", "type": "address" },
            { "name": "tokenAmount", "type": "uint256" },
            { "name": "fiatAmount", "type": "uint256" },
            { "name": "fiatCurrency", "type": "string" },
            { "name": "transactionId", "type": "string" }
        ],
        "name": "initiateOnramp",
        "outputs": [{ "name": "", "type": "bytes32" }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "name": "requestId", "type": "bytes32" },
            { "name": "newStatus", "type": "uint8" },
            { "name": "externalReference", "type": "string" }
        ],
        "name": "processFiatRequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "name": "requestId", "type": "bytes32" }],
        "name": "getRequest",
        "outputs": [
            { "name": "user", "type": "address" },
            { "name": "token", "type": "address" },
            { "name": "tokenAmount", "type": "uint256" },
            { "name": "fiatAmount", "type": "uint256" },
            { "name": "fiatCurrency", "type": "string" },
            { "name": "transactionId", "type": "string" },
            { "name": "requestType", "type": "uint8" },
            { "name": "status", "type": "uint8" },
            { "name": "timestamp", "type": "uint256" },
            { "name": "externalReference", "type": "string" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    // Token management
    {
        "inputs": [
            { "name": "token", "type": "address" },
            { "name": "minAmount", "type": "uint256" },
            { "name": "maxAmount", "type": "uint256" },
            { "name": "fee", "type": "uint256" }
        ],
        "name": "setSupportedToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "name": "token", "type": "address" }],
        "name": "isTokenSupported",
        "outputs": [{ "name": "", "type": "bool" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "name": "token", "type": "address" }],
        "name": "getTokenConfig",
        "outputs": [
            { "name": "isSupported", "type": "bool" },
            { "name": "minAmount", "type": "uint256" },
            { "name": "maxAmount", "type": "uint256" },
            { "name": "fee", "type": "uint256" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    // Liquidity management
    {
        "inputs": [
            { "name": "token", "type": "address" },
            { "name": "amount", "type": "uint256" }
        ],
        "name": "addLiquidity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "name": "token", "type": "address" }],
        "name": "getAvailableLiquidity",
        "outputs": [{ "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    // Operator management
    {
        "inputs": [
            { "name": "operator", "type": "address" },
            { "name": "authorized", "type": "bool" }
        ],
        "name": "setOperator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    // View functions
    {
        "inputs": [],
        "name": "feeRecipient",
        "outputs": [{ "name": "", "type": "address" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{ "name": "", "type": "address" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "requestCounter",
        "outputs": [{ "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    }
] as const;

// Contract Addresses (Deployed on Electroneum Testnet)
export const ETHEREUM_CONTRACTS = {
    USDT: process.env.NEXT_PUBLIC_USDT_ADDRESS || '0x18d6fbf54748579B2201025140d69e38fa2278d0' as `0x${string}`,
    FIAT_BRIDGE: process.env.NEXT_PUBLIC_FIAT_BRIDGE_ADDRESS || '0xDfC297A689ad8525F9528D8510732c6a9061251B' as `0x${string}`,
} as const;

// Supported tokens for Electroneum
export const ETHEREUM_TOKENS = {
    USDT: {
        address: ETHEREUM_CONTRACTS.USDT,
        symbol: 'USDT',
        name: 'Tether USD',
        decimals: 6,
        logo_url: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png'
    },
    // Add more tokens as needed
} as const;

// Chain configuration for Electroneum
export const ETHEREUM_CHAIN_CONFIG = {
    chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || '5201420'), // Default to Electroneum Testnet
    rpcUrl: process.env.NEXT_PUBLIC_RPC_URL || 'https://rpc.ankr.com/electroneum_testnet',
} as const;

// Electroneum chain information
export const ELECTRONEUM_CHAINS = {
    MAINNET: {
        id: 52014,
        name: 'Electroneum',
        rpcUrl: 'https://rpc.ankr.com/electroneum',
        explorer: 'https://blockexplorer.electroneum.com',
    },
    TESTNET: {
        id: 5201420,
        name: 'Electroneum Testnet',
        rpcUrl: 'https://rpc.ankr.com/electroneum_testnet',
        explorer: 'https://testnet-blockexplorer.electroneum.com',
    }
} as const;

// Morph chain information (keeping for compatibility)
export const MORPH_CHAINS = {
    MAINNET: {
        id: 2818,
        name: 'Morph Mainnet',
        rpcUrl: 'https://rpc-quicknode.morphl2.io',
        explorer: 'https://explorer.morphl2.io',
    },
    HOLESKY: {
        id: 2810,
        name: 'Morph Holesky',
        rpcUrl: 'https://rpc-quicknode-holesky.morphl2.io',
        explorer: 'https://explorer-holesky.morphl2.io',
    }
} as const;
