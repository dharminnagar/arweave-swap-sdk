import { connect, message, result as getResult } from "@permaweb/aoconnect";
import { ArweaveSigner } from './signer';

const SDK = 'arweave-swap-sdk';
const MU = 'https://mu.ao-testnet.xyz';
const CU = 'https://cu.ao-testnet.xyz';
const GATEWAY = 'https://arweave.net';

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

export class Swap {
    private signer: ArweaveSigner;
    private ao: any;

    constructor(signer: ArweaveSigner) {
        this.signer = signer;
        this.ao = connect({ 
            MODE: "legacy", 
            CU_URL: CU, 
            MU_URL: MU, 
            GATEWAY_URL: GATEWAY 
        });
    }

    async sendMessage(
        pid: string,
        tags: Tag[],
        data: string = ''
    ): Promise<[string, Result]> {
        const response = await message({
            process: pid,
            signer: () => this.signer,
            tags,
            data
        });

        const result = await getResult({
            message: response,
            process: pid
        });

        return [response, result];
    }

    async swap(
        processPID: string,
        poolPID: string,
        amount: string,
        minAmountOut: string
    ): Promise<[string, Result]> {
        const tags = [
            { name: 'Action', value: 'Transfer' },
            { name: 'Recipient', value: poolPID },
            { name: 'Quantity', value: amount },
            { name: 'X-PS-For', value: 'Swap' },
            { name: 'X-PS-MinAmountOut', value: minAmountOut }
        ];

        return this.sendMessage(processPID, tags);
    }
} 