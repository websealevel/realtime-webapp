<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Time Application with Pusher</title>
</head>

<body>
    <div id="connection-status"></div>

    <h1>Real Time Application with <a href="https://pusher.com">Pusher</a>, PHP Backend (v <?php echo phpversion(); ?>)</h1>

    <main>
        <section>
            <form action="handle-form.php" method="POST">
                <label for="name">
                    Your name
                    <input type="text" name="name" placeholder="J Incubator Jones">
                </label>
                <label for="message">
                    Your message
                    <input type="text" name="message">
                </label>
                <button type="submit">Submit</button>
            </form>
        </section>
    </main>

    <aside>
        <h2>Received Messages</h2>
        <ul id="messages">
            <li class="no-messages">No messages yet</li>
        </ul>
        </label>
    </aside>

    <script src="https://code.jquery.com/jquery-3.6.2.slim.min.js" integrity="sha256-E3P3OaTZH+HlEM7f1gdAT3lHAn4nWBZXuYe89DFg2d0=" crossorigin="anonymous"></script>
    <script src="https://js.pusher.com/7.2/pusher.min.js"></script>
    <script src="./main.js" type="module"></script>

</body>

</html>