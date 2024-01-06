<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>本日のランキング</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
        }

        h1 {
            text-align: center;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        table, th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>本日のランキング</h1>

        <table>
            <tr>
                <th>順位</th>
                <th>名前</th>
                <th>スコア</th>
            </tr>

            <?php
            // SQLiteデータベースに接続
            $db = new PDO("sqlite:test_ranking.sqlite");
            $day = date("Y-m-d");
            $rows = $db->query("SELECT * FROM ranking WHERE day = '$day' order by score DESC");
            $i = 0;
           
            
           
            while ($cols = $rows->fetch()) {
                echo "<tr>";
                echo "<td>" . ++$i . "</td>";
                echo "<td>" . $cols[2] . "</td>";
                echo "<td>" . $cols[3] . "</td>";
                echo "</tr>";
            }
           
            ?>
        </table>
    </div>

    <!-- 戻るボタン -->
    <a href="index.html">戻る</a>
</body>
</html>
