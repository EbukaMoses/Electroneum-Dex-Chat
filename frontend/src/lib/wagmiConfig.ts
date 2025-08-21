import { http, createConfig } from 'wagmi';
import { defineChain } from 'viem';
import { ETHEREUM_CHAIN_CONFIG } from './ethereum';

// Define Morph Mainnet chain
const morphMainnet = defineChain({
    id: 2818,
    name: 'Morph Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc-quicknode.morphl2.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Morph Explorer',
            url: 'https://explorer.morphl2.io',
        },
    },
});

// Define Morph Holesky Testnet
const morphHolesky = defineChain({
    id: 2810,
    name: 'Morph Holesky',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc-quicknode-holesky.morphl2.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Morph Holesky Explorer',
            url: 'https://explorer-holesky.morphl2.io',
        },
    },
});

// Define Electroneum Mainnet chain
const electroneumMainnet = defineChain({
    id: 52014,
    name: 'Electroneum',
    nativeCurrency: {
        decimals: 18,
        name: 'Electroneum',
        symbol: 'ETN',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.ankr.com/electroneum'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Electroneum Explorer',
            url: 'https://blockexplorer.electroneum.com',
        },
    },
});

// Define Electroneum Testnet chain
const electroneumTestnet = defineChain({
    id: 5201420,
    name: 'Electroneum Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Electroneum',
        symbol: 'ETN',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.ankr.com/electroneum_testnet'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Electroneum Testnet Explorer',
            url: 'https://testnet-blockexplorer.electroneum.com',
        },
    },
});

// Determine which chain to use based on environment
const currentChain = ETHEREUM_CHAIN_CONFIG.chainId === 2818 ? morphMainnet :
    ETHEREUM_CHAIN_CONFIG.chainId === 52014 ? electroneumMainnet :
        ETHEREUM_CHAIN_CONFIG.chainId === 5201420 ? electroneumTestnet : morphHolesky;

export const wagmiConfig = createConfig({
    chains: [morphMainnet, morphHolesky, electroneumMainnet, electroneumTestnet],
    transports: {
        [morphMainnet.id]: http(ETHEREUM_CHAIN_CONFIG.rpcUrl || morphMainnet.rpcUrls.default.http[0]),
        [morphHolesky.id]: http(ETHEREUM_CHAIN_CONFIG.rpcUrl || morphHolesky.rpcUrls.default.http[0]),
        [electroneumMainnet.id]: http('https://rpc.ankr.com/electroneum'),
        [electroneumTestnet.id]: http('https://rpc.ankr.com/electroneum_testnet'),
    },
});

export { currentChain, morphMainnet, morphHolesky, electroneumMainnet, electroneumTestnet };
