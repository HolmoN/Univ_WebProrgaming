import { io, Socket } from 'socket.io-client';

window.onload = () => {
    const socket = io();
    socket.emit('log', () => { });
    socket.emit('requestSQL', () => { });

    socket.on('queryResult', (response) => {
        if (response.error) {
            console.error('Query execution error: ', response.error);
            return;
        }

        console.log(response);

        const tableBody = document.querySelector('.ranckingTable');
        if (tableBody == null) return;
        tableBody.innerHTML = '';

        const trx = document.createElement('tr');
        const td1 = document.createElement('td') as HTMLTableCellElement;
        const td2 = document.createElement('td') as HTMLTableCellElement;
        const td3 = document.createElement('td') as HTMLTableCellElement;
        td1.textContent = "順位";
        td2.textContent = "名前";
        td3.textContent = "スコア";
        trx.appendChild(td1);
        trx.appendChild(td2);
        trx.appendChild(td3);
        tableBody.appendChild(trx);

        let rank = 0;
        response.forEach((row: any) => {
            rank= rank + 1;
            const tr = document.createElement('tr');

            const td = document.createElement('td') as HTMLTableCellElement;
            if (td == null) return;
            td.textContent = rank.toString() + "位";
            tr.appendChild(td);

            let i = 0;
            Object.values(row).forEach((value: any) => {
                if (i != 0) {
                    const td = document.createElement('td') as HTMLTableCellElement;
                    if (td == null) return;
                    td.textContent = value;
                    tr.appendChild(td);
                }

                i++;
            });

            tableBody.appendChild(tr);
        });
    });

}