import React from "react";

import { useStoreActions, useStoreState } from "easy-peasy";
import Loader from '../Cardano/loader';

const addressToBech32 = async () => {
    await Loader.load();
    const address = (await window.cardano.getUsedAddresses())[0];
    return Loader.Cardano.Address.from_bytes(
      Buffer.from(address, "hex")
    ).to_bech32();
  };

const StartButton = (props) => {
    // const matches = useBreakpoint();
    const [isLoading, setIsLoading] = React.useState(false);
    const [flag, setFlag] = React.useState(false);
    const connected = useStoreState((state) => state.connection.connected);
    const setConnected = useStoreActions(
      (actions) => actions.connection.setConnected
    );
    // const toast = useToast();
  
    React.useEffect(() => {
      if (connected && !flag)
        window.cardano.onAccountChange(async () => {
          const address = await addressToBech32();
          setConnected(address);
          setFlag(true);
        });
    }, [connected]);
  
    const checkConnection = async () => {
      if (window.cardano && (await window.cardano.isEnabled())) {
        const session = localStorage.getItem("session");
        if (Date.now() - parseInt(session) < 6000000) {
          //1h
          const address = await addressToBech32();
          setConnected(address);
        }
      }
    };
  
    React.useEffect(() => {
      checkConnection();
    }, []);
  
    return connected ? (
      <div>{connected}</div>
    ) : (
      <button
        onClick={async () => {
          setIsLoading(true);
          if (!(await checkStatus(connected))) {
            setIsLoading(false);
            return;
          }
          if (await window.cardano.enable()) {
            const address = await addressToBech32();
            setConnected(address);
            localStorage.setItem("session", Date.now().toString());
          }
  
          setIsLoading(false);
        }}
      >
        Connect
      </button>
    );
  };

  export default StartButton;

  /**
   * 
   * @param {*} toast 
   * @param {*} connected 
   * @returns 
   */
  const checkStatus = async (toast, connected) => {
    return (
      NoNami(toast) &&
      (await window.cardano.enable().catch((e) => {}))
    );
  };

  /**
   * Checks if Nami is installed
   * @returns Boolean
   */
  const NoNami = () => {
    if (window.cardano) return true;
    alert('Nami not installed');
    return false;
  };
