( function () {
    let tableRowsBoxElement = document.querySelector('#app-users-list');
    let tableRows = '';
    const apiURL = './server/api.json';

    async function getUsers() { // Pega os utilizaores via AJAX
        // Método 1: Obtendo os dados da JSON API com Fetch API

        // const response = await fetch(apiURL);
        // const { users } = await response.json();
        // // Função de Listagem dos Utilizadores
        // listUsers(users);

        // Método 2: Obtendo os dados da JSON API com AXIOS

        // try {
        //     const { data } = await axios.get(apiURL);
        //     const { users } = await data;

                // // Função de Listagem dos Utilizadores
        //      listUsers(users);

        //     console.log('Axios Request: ', data, users);
        // } catch (error) {
        //     console.warn('Axios Request Error: ', error);
        // }

        // Método 3: Obtendo os dados da JSON API com JQUERY

        try {
            const data = await $.getJSON(apiURL);
            const { users } = data;
            
            // Função de Listagem dos Utilizadores
            listUsers(users);

            console.log('jQuery Request: ', data, users);
        } catch (error) {
            console.warn('jQuery Request Error: ', error);
        }
    }

    const listUsers = async (users) => { // Lista os Utilizadores na tabela
        let usersCount = await users.length; // conta o número de utilizadores vindo da API

        for (let index=0; index < usersCount; index++) {
            const user = users[index]; // Obter cada utilizador

            // console.log('--users[index]: ', users[index]);

            const { UtilizadorId, Designacao, Nome, NomeUtilizador, Estado } = user; // Abstrair os campos dos utilizadores
            
            // Adicionar utilisadores em uma linha da tabela
            tableRows += `
                <tr>
                    <td>${Designacao}</td>
                    <td>${Estado}</td>
                    <td>${Nome}</td>
                    <td>${NomeUtilizador}</td>
                    <td>${UtilizadorId}</td>
                </tr>
            `;
        }

        // Listar os utilizadores na tabela
        tableRowsBoxElement.innerHTML = tableRows;

        console.log('AJAX HTTP Request Result:', users);
    }

    getUsers();
})();