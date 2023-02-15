    const Texts = [
        'HTML5', 'CSS3', 'JAVASCRIPT',
        'MONGOOSE', 'REACT JS',
        'PYTHON', 'SASS', 'SQL',
        'DJANGO', 'NODEJS', 'MONGODB', 'GIT',
        'EXPRESS JS', 'MYSQL', 'BOOTSTRAP', 'TAILWIND CSS', 'GITHUB'
    ];

    var tagCloud = TagCloud('.Sphere', Texts, {

        // Sphere radius in px
        radius: 230,

        // animation speed
        // slow, normal, fast
        maxSpeed: 'normal',
        initSpeed: 'fast',

        // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
        direction: 135,

        // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
        keep: true

    });

    // Giving color to each text in sphere
    // var color = 'rgb(17, 238, 238)';
    let color = '#88f7f7';
    document.querySelector('.Sphere').style.color = color;