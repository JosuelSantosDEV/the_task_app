# Componente SelectInput

Componente de select profissional com styled-components seguindo o padrão do projeto.

## Uso

```tsx
import { SelectInput } from "../components/SelectInput";

const options = [
  { value: "1", label: "Opção 1" },
  { value: "2", label: "Opção 2" },
  { value: "3", label: "Opção 3", disabled: true },
];

// Uso básico
<SelectInput 
  options={options}
  placeholder="Selecione uma opção" 
  label="Escolha uma opção" 
/>

// Com diferentes tamanhos
<SelectInput 
  $size="sm" 
  options={options}
  placeholder="Pequeno" 
  label="Select pequeno" 
/>
<SelectInput 
  $size="md" 
  options={options}
  placeholder="Médio" 
  label="Select médio" 
/>
<SelectInput 
  $size="lg" 
  options={options}
  placeholder="Grande" 
  label="Select grande" 
/>

// Com diferentes variantes
<SelectInput 
  $variant="outlined" 
  options={options}
  placeholder="Outlined" 
  label="Select outlined" 
/>
<SelectInput 
  $variant="filled" 
  options={options}
  placeholder="Filled" 
  label="Select filled" 
/>

// Com erro
<SelectInput 
  options={options}
  placeholder="Com erro" 
  label="Select com erro" 
  error="Este campo é obrigatório" 
/>

// Com texto de ajuda
<SelectInput 
  options={options}
  placeholder="Com ajuda" 
  label="Select com ajuda" 
  helperText="Escolha uma das opções disponíveis" 
/>

// Desabilitado
<SelectInput 
  options={options}
  placeholder="Desabilitado" 
  label="Select desabilitado" 
  $disabled 
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `label` | `string` | - | Label do select |
| `placeholder` | `string` | - | Placeholder do select |
| `error` | `string` | - | Mensagem de erro |
| `helperText` | `string` | - | Texto de ajuda |
| `options` | `SelectOption[]` | - | Array de opções |
| `$size` | `"sm" \| "md" \| "lg"` | `"md"` | Tamanho do select |
| `$variant` | `"default" \| "outlined" \| "filled"` | `"default"` | Variante visual |
| `$disabled` | `boolean` | `false` | Estado desabilitado |

## SelectOption

```tsx
type SelectOption = {
  value: string | number;
  label: string;
  disabled?: boolean;
};
```

Todas as props nativas do `select` HTML também são suportadas.

