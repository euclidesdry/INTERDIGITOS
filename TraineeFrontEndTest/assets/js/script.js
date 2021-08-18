( function () {
    let tableRowsBoxElement = document.querySelector('#app-users-list');
    let tableRows = '';
    const apiURL = './server/api.json';

    async function getUsers() {
        // Fetch API
        // const response = await fetch(apiURL);
        // const { users } = await response.json();
        // listUsers(users);

        // AXIOS
        // try {
        //     const { data } = await axios.get(apiURL);
        //     const { users } = await data;

        //     listUsers(users);

        //     console.log('Axios Request: ', data, users);
        // } catch (error) {
        //     console.warn('Axios Request Error: ', error);
        // }

        // JQUERY
        try {
            const data = await $.getJSON(apiURL);
            const { users } = data;

            listUsers(users);

            console.log('jQuery Request: ', data, users);
        } catch (error) {
            console.warn('jQuery Request Error: ', error);
        }
    }

    const listUsers = async (users) => {
        let usersCount = await users.length;

        for (let index=0; index < usersCount; index++) {
            const user = users[index];

            // console.log('--users[index]: ', users[index]);

            const { UtilizadorId, Designacao, Nome, NomeUtilizador, Estado } = user;
            
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

        tableRowsBoxElement.innerHTML = tableRows;

        console.log('AJAX HTTP Request Result:', users);
    }

    getUsers();
})();