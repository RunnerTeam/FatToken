# FatToken
FatToken is the official governance token 

# Quickstart

## Installation

```
npm install
```
## Configuration

Create a `.env` file with keys

```
MNEMONIC="..."
BSCSCAN_API_KEY="..."
```

## Compile

```
Truffle compile

```

## Deployment

### BINANCE SMART CHAIN

```
Truffle migrate --network bsc
Truffle migrate -- --network testnet
```

## Verify 
The network parameter should correspond to a network defined in the Truffle config file, with the correct network id
```
truffle run verify FatToken --network bsc
```

