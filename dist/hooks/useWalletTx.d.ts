import type { Era, Protocol } from '@meshsdk/core';
export declare const useWalletTx: (options?: {
    era?: Era;
    parameters?: Protocol;
}) => Transaction;
