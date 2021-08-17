async function dadosUtilizadores() {
    let tableRowsBoxElement = document.querySelector('#app-users-list');
    let tableRows = '';
    
    // Pesquisa da net
    const response = await fetch('./server/api.json');
    const { users } = await response.json();
    let usersCount = users.length;

    for (let index=0; index <= usersCount; index++) {
        const user = await users[index];

        // const [ UtilizadorId, Designacao, Nome, NomeUtilizador, Estado ] = Object.values(await user);

        // console.log(user.UtilizadorId)
        
        
        tableRows += `
            <tr>
                <td>${user.Designacao}</td>
                <td>${user.Estado}</td>
                <td>${user.Nome}</td>
                <td>${user.NomeUtilizador}</td>
                <td>${user.UtilizadorId}</td>
            </tr>
        `;
    }

    tableRowsBoxElement.innerHTML = tableRows;

    console.log(users)
    // Fim Pesquisa da net
}

dadosUtilizadores();