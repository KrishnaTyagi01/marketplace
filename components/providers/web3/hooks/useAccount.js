import { useEffect } from "react";
import useSWR from "swr";

const adminAddress = {
  "0x4c1e8fd8a4891abe70e50f841163f75383a1d78d42eab101c995792f71acb2f1": true,
};

export const handler = (web3, provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/accounts" : null),
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null));
  }, [provider]);

  return {
    data,
    isAdmin: data && adminAddress[web3.utils.keccak256(data)],
    mutate,
    ...rest,
  };
};
