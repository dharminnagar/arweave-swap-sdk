# Arweave Swap SDK

A TypeScript SDK for performing token swaps on the Arweave blockchain. This SDK provides a simple and developer-friendly interface for interacting with the Arweave swap protocol.

## Installation

```bash
npm install arweave-swap-sdk
```

## Usage

### Basic Setup

```typescript
import { ArweaveSigner, Swap } from 'arweave-swap-sdk';
import Arweave from 'arweave';

// Initialize Arweave
const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
});

// Load your wallet
const wallet = await arweave.wallets.generate();
// or load from file
// const wallet = JSON.parse(fs.readFileSync('wallet.json', 'utf-8'));

// Initialize the signer
const signer = new ArweaveSigner(wallet);

// Create a new Swap instance
const swap = new Swap(signer);
```

### Performing a Swap

```typescript
// Perform a swap
const [messageId, result] = await swap.swap(
  'baseTokenProcessId',  // The process ID of the token you're swapping from
  'quoteTokenProcessId', // The process ID of the token you're swapping to
  '1000000000000',      // Amount of base token to swap
  '500000000000'        // Minimum amount of quote token to receive
);

console.log('Swap initiated with message ID:', messageId);
console.log('Swap result:', result);
```

### Checking Balance

```typescript
// Check token balance
const balanceResult = await swap.dryRun(
  'tokenProcessId',
  '',
  { 'Action': 'Balance' }
);

console.log('Token balance:', balanceResult);
```

### Getting Swap Result

```typescript
// Get swap result
const swapResult = await swap.getResult(
  'tokenProcessId',
  messageId
);

console.log('Swap status:', swapResult);
```

## API Reference

### ArweaveSigner

The `ArweaveSigner` class handles signing messages with your Arweave wallet.

```typescript
const signer = new ArweaveSigner(wallet);
```

### Swap

The `Swap` class provides methods for interacting with the swap protocol.

#### Methods

- `swap(baseToken: string, quoteToken: string, amount: string, minAmountOut: string)`: Perform a token swap
- `dryRun(pid: string, anchor: string, tags: Record<string, string>)`: Simulate a transaction
- `getResult(pid: string, messageId: string)`: Get the result of a transaction
- `sendAndGet(pid: string, anchor: string, tags: Record<string, string>)`: Send a message and get its result

## Types

The SDK includes TypeScript interfaces for common data structures:

- `Token`: Token metadata
- `Pools`: Liquidity pool information
- `TokenPairs`: Token pair information

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT