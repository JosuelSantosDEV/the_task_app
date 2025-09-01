# Componente Input

Componente de input profissional com styled-components seguindo o padrão do projeto.

## Uso

```tsx
import { Input } from "../components/Input";

// Uso básico
<Input 
  placeholder="Digite seu nome" 
  label="Nome completo" 
/>

// Com diferentes tamanhos
<Input 
  $size="sm" 
  placeholder="Pequeno" 
  label="Input pequeno" 
/>
<Input 
  $size="md" 
  placeholder="Médio" 
  label="Input médio" 
/>
<Input 
  $size="lg" 
  placeholder="Grande" 
  label="Input grande" 
/>

// Com diferentes variantes
<Input 
  $variant="outlined" 
  placeholder="Outlined" 
  label="Input outlined" 
/>
<Input 
  $variant="filled" 
  placeholder="Filled" 
  label="Input filled" 
/>

// Com erro
<Input 
  placeholder="Com erro" 
  label="Input com erro" 
  error="Este campo é obrigatório" 
/>

// Com texto de ajuda
<Input 
  placeholder="Com ajuda" 
  label="Input com ajuda" 
  helperText="Digite pelo menos 3 caracteres" 
/>

// Desabilitado
<Input 
  placeholder="Desabilitado" 
  label="Input desabilitado" 
  $disabled 
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `label` | `string` | - | Label do input |
| `placeholder` | `string` | - | Placeholder do input |
| `error` | `string` | - | Mensagem de erro |
| `helperText` | `string` | - | Texto de ajuda |
| `$size` | `"sm" \| "md" \| "lg"` | `"md"` | Tamanho do input |
| `$variant` | `"default" \| "outlined" \| "filled"` | `"default"` | Variante visual |
| `$disabled` | `boolean` | `false` | Estado desabilitado |

Todas as props nativas do `input` HTML também são suportadas.
