import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from './hooks/useTonConnect';
import { useTonConnectUI } from '@tonconnect/ui-react';
import '@twa-dev/sdk';
import { useState } from 'react';


function App() {
  const { connected } = useTonConnect();
  const [tonConnectUI] = useTonConnectUI();

  const [addressWallet, setAddressWallet] = useState()
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
          address: addressWallet, // destination address
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

            <input type="text" name="address" id="address" onChange={handleChangeAddress} />
          </div>
          <div className="inputControl">
            <label htmlFor="amount">Amount:</label>

            <input type="number" name="amount" id="amount" onChange={handleChangeAmount} />
          </div>
          <div>
            <a className={`Button ${connected ? 'Active' : 'Disabled'}`} type="submit">
              Send Transaction
            </a>
          </div>

        </form>

      </div>
    </div>
  );
}

export default App
