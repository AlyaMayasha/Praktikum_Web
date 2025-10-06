<?php

session_start();

if (isset($_SESSION['username'])) {
    header('Location: index.php'); 
    exit;
}

$error_message = '';
$valid_username = 'alya'; 
$valid_password = '20052006';  

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if ($username === $valid_username && $password === $valid_password) {
        $_SESSION['username'] = $username;
        
        header('Location: index.php');
        exit;
    } else {
        $error_message = 'Username atau Password salah!';
    }
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lovegoods Studio - Login</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f5f5dc; 
        }
        .login-container {
            background: #fff;
            padding: 3rem;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 400px;
            text-align: center;
        }
        .login-container h2 {
            font-family: 'Playfair Display', serif;
            color: #510400;
            margin-bottom: 2rem;
        }
        .error-message {
            color: red;
            margin-bottom: 1rem;
            font-weight: 500;
        }
    </style>
</head>
<body>

<div class="login-container">
    <h2>Masuk ke Lovegoods Studio</h2>
    
    <?php if ($error_message): ?>
        <p class="error-message"><?php echo $error_message; ?></p>
    <?php endif; ?>

    <form method="POST" action="login.php" class="login-form">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
    
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</div>

</body>
</html>