# Sistema de Autenticação

## Estrutura

### Contexto de Autenticação
- **AuthProvider**: Gerencia o estado global de autenticação
- **useAuth**: Hook para acessar funções e estado de autenticação
- **ProtectedRoute**: Componente para proteger rotas que requerem autenticação

### Formulários
- **LoginForm**: Formulário de login com validações
- **RegisterForm**: Formulário de registro com validações

### API
- **axios.ts**: Configuração do axios com interceptadores
- **user.ts**: Funções da API para autenticação

## Funcionalidades

### Login
- Validação de email e senha
- Estados de loading
- Tratamento de erros
- Redirecionamento automático após login

### Registro
- Validação de email, senha e confirmação
- Aceite de termos obrigatório
- Estados de loading
- Tratamento de erros
- Redirecionamento automático após registro

### Proteção de Rotas
- Rotas protegidas redirecionam para login se não autenticado
- Verificação automática de token
- Limpeza automática de dados em caso de erro 401

## Configuração

1. Configure a variável de ambiente `VITE_API_BASE_URL` no arquivo `.env`
2. O sistema espera que a API retorne:
   ```json
   {
     "user": {
       "id": "string",
       "email": "string",
       "username": "string",
       "createdAt": "string",
       "updatedAt": "string"
     },
     "token": "string",
     "refreshToken": "string" // opcional
   }
   ```

## Endpoints Esperados

- `POST /user` - Registro de usuário
- `POST /auth/login` - Login
- `POST /auth/logout` - Logout
- `POST /auth/refresh` - Refresh token

