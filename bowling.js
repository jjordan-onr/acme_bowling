    var game;

    $( "#calculate_button" ).click(function() {
        var total = 0;
        game = new BowlingGame();
        
        function get_score(frame,roll) {
            var entered = $("#frame"+frame+"_"+roll).val();
            
            if (entered.toUpperCase() === 'X') entered = 10; 
            else if (entered.toUpperCase() === '/') entered = 10 - get_score(frame,roll-1);
            else entered = parseInt(entered);
                
            if (!entered) entered = 0; 
            
            return parseInt(entered);
        }
        
        function calc_frame(num){
            game.roll(get_score(num,1));
            
            if (num === 10 || (get_score(num,1)) !== 10) game.roll(get_score(num,2));
            
            if (num === 10 && ((get_score(num,1) === 10) || (get_score(num,1) + get_score(num,2)) === 10)) game.roll(get_score(num,3));
        }
        
        for (var i=1; i<11; i++) {
            calc_frame(i);
        }
        
        $("#total_score").html(game.score());
    });


    $( "#submit_button" ).click(function() {
        
        var data = {};
        data.userId = "user999";
        data.gameId = $("#game_id").val();
        data.score = game.total;
        data.turkeys = game.turkeys;
        data.beers = parseInt($("#num_of_beers").val());
            
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: 'http://192.168.1.235:8080/games',						
            success: function(data) {
                console.log('success');
                console.log(JSON.stringify(data));
                window.location.replace("index.php");
            }
        });
        
    });
