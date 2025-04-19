import { createDataItemSigner } from "@permaweb/aoconnect";

export class ArweaveSigner {
    private wallet: any;
    private signer: any;

    constructor(wallet: any) {
        this.wallet = wallet;
        this.signer = createDataItemSigner(wallet);
    }

    async sign(message: string): Promise<string> {
        return this.signer({ data: message });
    }

    async signBundle(message: string): Promise<string> {
        return this.signer({ data: message });
    }
} 