export interface CardProps {
 id: string ;
 title: string;
 description: string;
 completed: boolean;
 step: string; 
}

export const taskMockData: CardProps[] = [
 {
   id: "1",
   title: 'Criar página de login',
   description: 'Desenvolver a página de login com campos de usuário e senha.',
   completed: false,
   step: "todo",
 },
 {
   id: "2",
   title: 'Implementar autenticação',
   description: 'Configurar a autenticação de usuário utilizando JWT.',
   completed: false,
   step: "todo",
 },
 {
   id: "3",
   title: 'Estilizar página inicial',
   description: 'Aplicar estilos à página inicial da aplicação.',
   completed: false,
   step: "todo",
 },
 {
   id: "4",
   title: 'Conectar frontend com backend',
   description: 'Estabelecer a comunicação entre o frontend e o backend da aplicação.',
   completed: false,
   step: "todo",
 },
 {
   id: "5",
   title: 'Testar funcionalidades',
   description: 'Realizar testes unitários e de integração.',
   completed: false,
   step: "doing",
 },
];
