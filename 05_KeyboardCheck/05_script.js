const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
    <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td><key>${e.key === ' '? 'Space': e.key}</key></td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    </div>
    `

}, false)