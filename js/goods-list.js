Vue.component('goods-list',{
    template:`
    <table class="table">

                    <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Наименование</th>
                        <th scope="col">Количество</th>
                        <th scope="col">Цена</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Брюки мужские</td>
                        <td>35</td>
                        <td>2650</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Платье женское </td>
                        <td>13</td>
                        <td>2500</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Кеды мужские</td>
                        <td>44</td>
                        <td>1650</td>
                    </tr>
                    </tbody>
                </table>
    `
})