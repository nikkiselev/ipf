

# IPF

Calculate relative scores in IPF powerlifting competitions.

- Wilks
- Wilks-2 (2020)
- DOTS

## Installation
````shell
npm i @nikkiselev/ipf
````
## Examples

### Wilks-2 (2020)

```typescript
// 93 kg male that lifted 700 kg in total
wilks2(93, 700, 'm')

// 61 kg female that lifted 500 kg in total
wilks2(61, 500, 'f')

// 137 lb female that lifted 882 lb in total
wilks2(137, 882, 'f', 'lb')
```

### Wilks (before 2020)

```typescript
// 93 kg male that lifted 700 kg in total
wilks(93, 700, 'm')

// 61 kg female that lifted 500 kg in total
wilks(61, 500, 'f')

// 137 lb female that lifted 882 lb in total
wilks(137, 882, 'f', 'lb')
```

### DOTS formula

```typescript
// 93 kg male that lifted 700 kg in total
dots(93, 700, 'm')

// 61 kg female that lifted 500 kg in total
dots(61, 500, 'f')

// 137 lb female that lifted 882 lb in total
dots(137, 882, 'f', 'lb')
```

