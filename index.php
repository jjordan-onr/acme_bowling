<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Basic Responsive Site">

    <title>Base Responsive Site</title>

    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
    <!--[if lte IE 8]>
      <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-old-ie-min.css">
    <![endif]-->
    <!--[if gt IE 8]><!-->
      <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css">
    <!--<![endif]-->

    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">

    <link rel="stylesheet" href="style.css">
    
    <!--[if lt IE 9]>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7/html5shiv.js"></script>
    <![endif]-->
    
<style>
    .pure-form input[type] { 
        width: 28px;
        padding: .25em .2em;
        margin-right: 4px;
    }
    .pure-form-stacked input[type=text] {
        display: inline;
    }
    .pure-table td{ padding: .25em .5em; }
</style>

</head>
<body>

<?php
    $game_id = rand(1,20000);
?>
    
<div class="header">
    <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <a class="pure-menu-heading" href="/">ONR Bowling Site</a>

        <ul class="pure-menu-list">
            <li class="pure-menu-item pure-menu-selected"><a href="#" class="pure-menu-link">Home</a></li>
            <li class="pure-menu-item"><a href="https://rotogrinders.com/threads/fantasy-bowling-539904" class="pure-menu-link">Go be Social</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Buy Stuff</a></li>
        </ul>
    </div>
</div>



<div class="content-wrapper">
    <div class="content">
        <h2 class="content-head is-center">Agile Bowling</h2>

        <div class="pure-g">
            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

                <h3 class="content-subhead">
                    <i class="fa fa-rocket"></i>
                    Users
                </h3>
                <p>Some text about user management</p>
            </div>
            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 class="content-subhead">
                    <i class="fa fa-mobile"></i>
                    Leagues
                </h3>
                <p>Some text about the leagues</p>
            </div>
            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 class="content-subhead">
                    <i class="fa fa-th-large"></i>
                    Game Stats
                </h3>
                <p>Enter your game here: <a href="game.php?id=<?php echo $game_id; ?>" class="pure-menu-link">Game #<?php echo $game_id; ?></a></p>
            </div>
            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 class="content-subhead">
                    <i class="fa fa-th-large"></i>
                    Shop
                </h3>
                <p>Something about shopping</p>
            </div>
        </div>
    </div>

    <div class="footer l-box is-center">
        Bowling is Awesome!!!
    </div>

</div>

<script src="vendor/jquery.js"></script>
<script src="index.js"></script>
<script src="bowling.js"></script>
    
</body>
</html>
