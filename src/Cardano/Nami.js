import React from "react";

import { useStoreActions, useStoreState } from "easy-peasy";
import Loader from './loader';

const addressToBech32 = async () => {
    await Loader.load();
    const address = (await window.cardano.getUsedAddresses())[0];
    return Loader.Cardano.Address.from_bytes(
      Buffer.from(address, "hex")
    ).to_bech32();
  };

const ConnectNami = (props) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [flag, setFlag] = React.useState(false);
    const connected = useStoreState((state) => state.connection.connected);
    const setConnected = useStoreActions(
      (actions) => actions.connection.setConnected
    );
      
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
      if (connected && !flag)
        window.cardano.onAccountChange(async () => {
          const address = await addressToBech32();
          setConnected(address);
          console.log('Account changed');
          console.log(`New Address: ${address}`);
          setFlag(true);
        });
    }, [connected]);
  
    React.useEffect(() => {
      checkConnection();
    }, []);
  
    return connected ? (
      <a className="nami">{connected.replace(connected.substring(7,connected.length-5), '...')}</a>
    ) : (
      <a className="nami pointer"
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
        Connect Nami
      </a>
    );
  };

  export default ConnectNami;

  const checkStatus = async () => {
    return (
      NoNami() &&
      (await window.cardano.enable().catch((e) => {}))
    );
  };

  /**
   * Checks if Nami is installed
   * @returns Boolean
   */
  const NoNami = () => {
    if (window.cardano) return true;
    // TODO: Add a nicer message asking for Nami to be installed
    alert('Nami not installed. Please install Nami and try again');
    return false;
  };
