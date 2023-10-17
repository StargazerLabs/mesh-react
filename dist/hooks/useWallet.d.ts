export declare const useWallet: () => {
    name: string;
    connecting: boolean;
    connected: boolean;
    wallet: BrowserWallet;
    connect: (walletName: string) => Promise<void>;
    disconnect: () => void;
    error: unknown;
};
