// API for this: https://api-ffpscan.permaswap.network/pools
// API response for Token
export interface Token {
    process: string;
    decimals: number;
    symbol: string;
    fullName: string;
    logo: string;
    totalSupply: string;
    price: string;
    status: string;
    cuUrl: string;
    tokenAccessible: boolean;
}

// API for this: https://api-ffpscan.permaswap.network/pools
// API response for Liquidity Pools
export interface Pools {
    process: string;
    x: string;
    y: string;
    fee: string;
    symbolX: string;
    symbolY: string;
    decimalX: number;
    decimalY: number;
    fullNameX: string;
    fullNameY: string;
    px: string;
    py: string;
    logoX: string;
    logoY: string;
    totalSupply: string;
    denomination: number;
    poolStatus: string;
    xUsdPrice: string;
    yUsdPrice: string;
    tradeCount24H: number;
    volumeLast24H: string;
    volumeLast7Days: string;
    name: string;
    py_real_up: string;
    py_real_down: string;
    px_real_up: string;
    px_real_down: string;
    pool_type: string;
    low: string;
    high: string;
    factor: string;
    accessible: boolean;
    reverseSymbol: boolean;
}

// API for this: https://api-ffpscan.permaswap.network/tokenPairs
// API response for Token Pairs
export interface TokenPairs {
    baseToken: string;
    quoteToken: string;
    baseSymbol: string;
    quoteSymbol: string;
    baseLogo: string;
    quoteLogo: string;
    tradeCount24H: number;
    tradeCount7Days: number;
    volumeLast24H: string;
    volumeLast7Days: string;
    baseUsdPrice: string;
    wARUsdPrice: string;
    tokenPriceChange24HPercent: string;
    tokenPriceChange6HPercent: string;
    tokenPriceChange1HPercent: string;
    tokenPriceChange5MinPercent: string;
    greatProcess: string;
    liquidity: string;
    marketCap: string;
    tokenStatus: string;
}
