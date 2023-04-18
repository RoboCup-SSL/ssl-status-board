# Frontend

## Project Setup

```shell
npm install
```

## Compile and Hot-Reload for Development

```shell
# When running node 18
export NODE_OPTIONS=--openssl-legacy-provider
npm run serve
```

## Compile and Minify for Production

```shell
# When running node 18
export NODE_OPTIONS=--openssl-legacy-provider
npm run build
```

## Rebuild Protobuf code
```shell
npm run genProto
```
