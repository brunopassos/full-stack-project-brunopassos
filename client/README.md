<h1>App Schedule</h1> 

## Instalação 

O que acha de testar a nossa aplicação? Siga os passos abaixo:

+ Aplicação

    1) Faça o clone da branch ```main``` para o teu computador.
    2) Abra a aplicação na sua IDE de preferência.
    3) O projeto foi dividido em duas pastas: client e server.
    4) Dentro da pasta serve você verá um arquivo chamado ```.env```. Adicione as informações que são solicitadas:
        1) POSTGRES_USER="" (informe o usuário que você criou na instalação do postgress. Ex: POSTGRES_USER="user")
        2) POSTGRES_PWD="" (informe a senha que você criou na instalação do postgress. Ex: POSTGRES_PWD="senhaForte")
        3) POSTGRES_DB="" (informe o nome da database que foi criana no beekeeper. Ex: POSTGRES_DB="app-car-catalog")
        4) JWT_SECRET="" (Digite uma sequência de caracteres. Ex: JWT_SECRET="stringSecretKey")
    5) Via terminal, acesse a pasta "server": ```cd server/```
    6) No terminal, rode o comando ```yarn``` para instalar todas as dependências.
    7) Execute o comando ```yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts``` para gerar as migrações.
    8) Execute o comando ```yarn typeorm migration:run -d src/data-source.ts``` para rodar as migrações.
    9) Após a instalação, execute o comando ```yarn dev```
    10) Abra um sergundo terminal, acesse a pasta "client": ```cd client/```
    11) No terminal, rode o comando ```yarn``` para instalar todas as dependências.
    12) Após a instalação, execute o comando ```expo start```
    13) A aplicação será aberta no seu navegador e você já pode utilizar.


