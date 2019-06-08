window.onload = function(){
    //get canvas contexts
    var ctxLeft = document.getElementById('chartLeft');
    var ctxRight = document.getElementById('chartRight');

    //instantiate arrays (hope chart.js takes variables for data arrays)
    var leftArr = [1.5,1.5,1.5,1.5,1.5,1.5,1.5];
    var rightArr = [1.5,1.5,1.5,1.5,1.5,1.5,1.5];
    var labelsArr = [];
    var blueDarkDefaults = [39,170,225];
    var blueLightDefaults = [39,170,225];
    var pinkDarkDefaults = [238,74,154];
    var pinkLightDefaults = [238,74,154];

    //load background image
    /* var img = new Image();
    img.src = '../assets/Radar-Wheel.png';
    img.onload() = function() {
        var fillLeft = ctxLeft.getContext('2d').createPattern(img, 'no-repeat');
        var fillright = ctxRight.getContext('2d').createPattern(img, 'no-repeat');
    } */

    var blueDark = 'rgba(39,170,225,1.0)';
    var pinkDark = 'rgba(238,74,154,1.0)';
    var blueLight = 'rgba(39,170,225,0.5)';
    var pinkLight = 'rgba(238,74,154,0.5)';

    for(var i = 0; i < 7; i++)
    {
        num = Math.floor(Math.random() * Crit.length - 5);
        name = Crit.splice(num,1);
        var nameArr = name.split('-');
        labelsArr.push(nameArr);
    }

    Chart.defaults.global.animation.easing = 'easeOutBounce';

    //create magic plugin to render image on dataset area
    Chart.plugins.register({
        id: "drawBackgroundImage",
        beforeDraw: chart => {
            var ctx = chart.chart.ctx;
            var chartArea = chart.chartArea;
            var scaleArea = chart.scale.drawingArea;
            var scaleCenterX = chart.scale.xCenter;
            var scaleCenterY = chart.scale.yCenter;
            //console.log(scaleArea);
            //console.log(scaleCenterX);
            //console.log(scaleCenterY);
            var img = new Image((scaleArea/2), (scaleArea/2));
            img.src = '../assets/radar-wheel.png';
            ctx.drawImage(img, scaleCenterX-scaleArea, scaleCenterY-scaleArea, scaleArea*2, scaleArea*2);
        }
    });

    //set up radar chart options (set scale to 1-10)
    var radarOptions = {
        legend: {display: false},
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            enabled: false
        },
        scale: {
            ticks: {
                beginAtZero: true,
                max: 10,
                stepSize: 1,
                display: false
            },
            angleLines: {
                display: false
            },
            gridLines: {
                display: false,
                circular: true
            },
            pointLabels: {
                fontColor: 'rgba(0,255,0,1.0)',
                fontFamily: 'Monospace',
                fontSize: 14
            }
        }
    };

    var radarLeft = new Chart(ctxLeft, {
        type: 'radar',
        data: {
            labels: labelsArr,
            datasets: [{
                label: 'Artist 1',
                data: leftArr,
                pointBackgroundColor: blueLight,
                backgroundColor: blueLight,
                pointBorderColor: blueDark,
                lineTension: 0
            }]
        },
        options: radarOptions
    }); 

    var radarRight = new Chart(ctxRight, {
        type: 'radar',
        data: {
            //labels: ['POWER','SPEED','RANGE','DURABILITY','PRECISION','POTENTIAL','FUNKINESS'],
            labels: labelsArr,
            datasets: [{
                label: 'Artist 2',
                data: rightArr,
                pointBackgroundColor: pinkLight,
                backgroundColor: pinkLight,
                pointBorderColor: pinkDark,
                lineTension: 0
            }]
        },
        options: radarOptions
    }); 

    Chart.defaults.global.defaultFontSize = 24;

    function randomizeValues(arr, chart)
    {
        var min = 1.5;
        var max = 9.45;
        var prob = .45;
        for(var i = 0; i < arr.length; i++)
        {
            var ran = Math.random() * (+max - +min) + +min; 
            var odds = Math.random();
            //console.log(ran);
            if(odds > prob)
            {
                arr[i] = ran;
                prob += .25;
            }
            else
            {
                prob -= .1;
            }
        }
        chart.update();
    }
    
    function updateCharts()
    {
        randomizeValues(leftArr, radarLeft);
        randomizeValues(rightArr, radarRight);
    }

    function initializeArrays(value)
    {
        for(var i = 0; i < leftArr.length; i++)
        {
            leftArr[i] = value;
        }
        for(i = 0; i < rightArr.length; i++)
        {
            rightArr[i] = value;
        }
    }

    function spinText(){
        var max = 100;
        var min = 10;
        var leftNum = Math.trunc((Math.random() * (+max - +min) + +min)); 
        var rightNum = Math.trunc((Math.random() * (+max - +min) + +min)); 
        document.getElementById("LeftScore").textContent = leftNum; 
        document.getElementById("RightScore").textContent = rightNum;
    }
    
    document.getElementById("Calculate").onclick = function(){
        updateCount = 0;
        var total = (total, num) => total + num;
        var clearVar = setInterval(updateCharts, 300);
        var textVar = setInterval(spinText, 34);
        setTimeout(function(){
            clearInterval(clearVar);}, 3000);
        setTimeout(function(){
            clearInterval(textVar);
            document.getElementById("LeftScore").textContent = Math.trunc(leftArr.reduce(total) / 70 * 1000);
            document.getElementById("RightScore").textContent = Math.trunc(rightArr.reduce(total) / 70 * 1000);
        }, 3000);
    }

    document.getElementById("ShowHide").onclick = function(){
        if(document.getElementById("BodyCon").classList.contains('fadeIn')){
            document.getElementById("BodyCon").classList.remove("fadeIn");
            document.getElementById("BodyCon").classList.add('fadeOut');
        }
        else{
            document.getElementById("BodyCon").classList.remove('fadeOut');
            document.getElementById("BodyCon").classList.add('fadeIn');
        }
    }

    document.getElementById("Initialize").onclick = function(){
        initializeArrays(1.5);
        radarLeft.update();
        radarRight.update();
        document.getElementById("LeftScore").textContent = 0;
        document.getElementById("RightScore").textContent = 0;
    }
}