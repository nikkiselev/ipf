# IPF


 ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/nikkiselev/ipf/Node.js%20CI?style=flat-square) [![GitHub license](https://img.shields.io/github/license/nikkiselev/ipf?style=flat-square)](https://github.com/nikkiselev/ipf/blob/master/LICENSE)




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
import { wilks2 } from '@nikkiselev/ipf'

// 93 kg male that lifted 700 kg in total
wilks2(93, 700, 'm')

// 61 kg female that lifted 500 kg in total
wilks2(61, 500, 'f')

// 137 lb female that lifted 882 lb in total
wilks2(137, 882, 'f', 'lb')
```

### Wilks (before 2020)

```typescript
import { wilks } from '@nikkiselev/ipf'

// 93 kg male that lifted 700 kg in total
wilks(93, 700, 'm')

// 61 kg female that lifted 500 kg in total
wilks(61, 500, 'f')

// 137 lb female that lifted 882 lb in total
wilks(137, 882, 'f', 'lb')
```

### DOTS formula

```typescript
import { dots } from '@nikkiselev/ipf'

// 93 kg male that lifted 700 kg in total
dots(93, 700, 'm')

// 61 kg female that lifted 500 kg in total
dots(61, 500, 'f')

// 137 lb female that lifted 882 lb in total
dots(137, 882, 'f', 'lb')
```

### API

`wilks`, `wilks2` and `dots` share the same interface.

```typescript
wilks(bodyWeight, liftedWeight, gender, unitType)
```

- **bodyWeight**: number
- **liftedWeight**: number
- **gender**: `m` - male, `f` - female
- **unitType**: `kg` - in kilograms, `lb` in pounds. Optional. Default value is `kg`.



