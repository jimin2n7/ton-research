import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnectUI } from '@tonconnect/ui-react';
import '@twa-dev/sdk';
import { useState } from 'react';
import { Address} from '@ton/core';


function App() {
  const [tonConnectUI] = useTonConnectUI();

  const [addressWallet, setAddressWallet] = useState<string>('')
  const [amount, setAmount] = useState()

  const handleChangeAddress = (e: any) => {
    setAddressWallet(e.target.value)
  }

  const handleChangeAmount = (e: any) => {
    setAmount(e.target.value)
  }


  const handleSubmit = (e: any) => {
    e.preventDefault()

    const transaction: any = {
      messages: [
        {
          address: Address.parse(addressWallet), // destination address
          amount: amount //Toncoin in nanotons
        }
      ]

    }
    tonConnectUI.sendTransaction(transaction)
  }

  return (
    <div className='App'>
      <div className='Container'>
        <TonConnectButton />
        {/* <div className='Card'>
          <b>Counter Address</b>
          <div className='Hint'>{address?.slice(0, 30) + '...'}</div>
        </div>

        <div className='Card'>
          <b>Counter Value</b>
          <div>{value ?? 'Loading...'}</div>
        </div>

        <a
          className={`Button ${connected ? 'Active' : 'Disabled'}`}
          onClick={() => {
            sendIncrement();
          }}
        >
          Increment
        </a> */}
        
        <form onSubmit={handleSubmit}>
          <div className="inputControl">
            <label htmlFor="address">Address:</label>
            <input className="input" type="text" name="address" id="address" onChange={handleChangeAddress} />
          </div>
          <div className="inputControl">
            <label htmlFor="amount">Amount:</label>

            <input className="input" type="number" name="amount" id="amount" onChange={handleChangeAmount} />
          </div>
          <div>
            <button className="Button" type="submit">
              Send Transaction
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default App
