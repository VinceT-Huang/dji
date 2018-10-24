<?php
    header("content-type:text/html;charset='utf-8'");
    error_reporting(0);

    $link = mysql_connect("localhost", "root", "123456");

    if(!$link){
        echo "数据库连接失败";
        exit;
    }
    mysql_set_charset("utf8");
    mysql_select_db("dji");

    $type = $_GET["type"];
    if($type == "login"){
        $username = $_POST["username"];
        $password = $_POST["password"];

        //查询数据库有没有数据
        $sql = "SELECT * FROM users WHERE username = '{$username}' AND password = '{$password}'";
        $res = mysql_query($sql);
        $row = mysql_fetch_assoc($res);
        // var_dump($res);
        if($row){
            echo "success";
            exit;
        }else{
            echo "false";
            exit;
        }
    }else{
        $username = $_POST["username"];
        $password = $_POST["password"];

        // 检查数据库中有没有相同的账号
        $sql1 = "SELECT * FROM users WHERE username = '{$username}'";
        $res1 = mysql_query($sql1);
        $row1 = mysql_fetch_assoc($res1);
        if($row1){
            echo "账号已存在";
            exit;
        }else{
          //插入数据库
            $sql = "INSERT INTO users(username, password) VALUES('{$username}','{$password}')";
            $res = mysql_query($sql);
            // var_dump("{$sql}");
            if($res){
                echo "success";
                exit;
            }else{
                echo "false";
                exit;
            }  
        }
    }
    // echo "{$type}".","."{$username}".","."{$password}";


    mysql_close($link);
 ?>
