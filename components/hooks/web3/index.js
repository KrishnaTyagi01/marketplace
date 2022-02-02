import { useHooks } from "@components/providers/web3";

const enhancedHooks = (swrRes) => {
  return {
    ...swrRes,
    hasInitialResponse: swrRes.data || swrRes.error,
  };
};

export const useNetwork = () => {
  const swrRes = enhancedHooks(useHooks((hooks) => hooks.useNetwork)());
  return {
    network: swrRes,
  };
};

export const useAccount = () => {
  const swrRes = enhancedHooks(useHooks((hooks) => hooks.useAccount)());
  return {
    account: swrRes,
  };
};
