# Arweave Swap SDK

A TypeScript SDK for performing token swaps on the Arweave blockchain using AO processes. This SDK provides a simple and developer-friendly interface for interacting with the Arweave swap protocol.

## Installation

```bash
npm install arweave-swap-sdk
```

## Usage

### Basic Setup

```typescript
import { ArweaveSigner, Swap } from 'arweave-swap-sdk';

// Initialize the signer with your Arweave wallet
const signer = new ArweaveSigner(wallet);

// Create a new Swap instance
const swapper = new Swap(signer);
```

### Performing a Swap

```typescript
// Perform a swap
const [messageId, result] = await swapper.swap(
  'processPID',        // The process ID of the token you're swapping from
  'poolPID',           // The process ID of the pool you're swapping through
  '1000000000000',     // Amount of token to swap
  '500000000000'       // Minimum amount of token to receive
);

console.log('Swap initiated with message ID:', messageId);
console.log('Swap result:', result);
```

### Sending Messages

```typescript
// Send a message to a process
const [messageId, result] = await swapper.sendMessage(
  'processPID',        // The process ID to send the message to
  [                    // Tags for the message
    { name: 'Action', value: 'Transfer' },
    { name: 'Recipient', value: 'recipientPID' },
    { name: 'Quantity', value: '1000000000000' }
  ],
  'optional data'      // Optional data to include with the message
);

console.log('Message sent with ID:', messageId);
console.log('Message result:', result);
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

- `swap(processPID: string, poolPID: string, amount: string, minAmountOut: string)`: Perform a token swap
- `sendMessage(pid: string, tags: Tag[], data?: string)`: Send a message to a process

#### Types

```typescript
interface Tag {
    name: string;
    value: string;
}

interface Message {
    Tags?: Tag[];
    [key: string]: any;
}

interface Result {
    Messages?: Message[];
    Spawns?: any[];
    Output?: string;
    Error?: string;
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT