    const Texts = [
        'HTML5', 'CSS3', 'JavaScript',
        'Mongoose', 'React JS',
        'Python', 'SASS', 'SQL',
        'Django', 'Node JS', 'Redux', 'Mongo DB', 'Git',
        'Express JS', 'GSAP' , 'MYSQL', 'Bootstrap', 'npm' , 'Tailwind CSS', 'Github'
    ];

    var tagCloud = TagCloud('.Sphere', Texts, {

        // Sphere radius in px
        radius: 227,

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
    // let color = '#88f7f7';
    let color = 'rgb(22, 236, 136)';
    document.querySelector('.Sphere').style.color = color;