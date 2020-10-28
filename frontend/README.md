# frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Notes

For Better performance and load time I:
- Built a skeleton for each component that needs an external resource to act as a loader.
- Used webpack bundle gzip compression plugin to decrease bundle size.
- Used Code-splitting to split bundle into smaller bundles.
