var config = {
    style: 'mapbox://styles/qwervo88/ckmlu7c6t4kor17ph8t6wp0vt',
    accessToken: 'pk.eyJ1IjoicXdlcnZvODgiLCJhIjoiY2tsN3U4eHpyMnU5bDJycW8xb3V5cmlmeCJ9.mDK_8T9UCiQLg04Yd9wwCQ',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'Best motorcycle routes in the UK 2021',
    subtitle: 'Twisty roads and scenic views for the thrill of riding with your machine, along the most famous motorcycle routes in Great Britain.',
    byline: 'Scroll down to go over each route and learn more about them',
    footer: 'Yeah this is the footer',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            title: 'Scroll down to see 1st route',
            location: {
                center: [-3.142, 53.939],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {layer: 'ch1-route', opacity: 0.9},
                {layer: 'ch2-route', opacity: 0.9},
                {layer: 'ch3-route', opacity: 0.9}
            ],
            onChapterExit: [
                {layer: 'ch1-route', opacity: 0},
                {layer: 'ch2-route', opacity: 0},
                {layer: 'ch3-route', opacity: 0}
            ]
        },
        {

            id: 'chapter1',
            alignment: 'right',
            title: 'Yorkshire valley, Buttertubs Pass - North England',
            image: 'img/ch1-barnard-castle-to-hawes@2x.jpg',
            description: "Challenging corners, rapid descents and plenty of steep hills makes the 27 miles of this route a brilliant afternoon ride. From Thwaite to Hawes, you will ride through the Buttertubs pass with beautiful scenery and twisting roads.",
            location: {
                center: [-2.045, 54.423],
                zoom: 10,
                pitch: 55.50,
                bearing: -15.09
            },
            onChapterEnter: [
                {
                    layer: 'ch1-route',
                    opacity: 0.9
                },
                {
                    layer: 'ch1-markers',
                    opacity: 1
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'ch1-route',
                    opacity: 0
                },
                {
                    layer: 'ch1-markers',
                    opacity: 0
                }

            ]
        },
        {
            id: 'chapter2',
            alignment: 'right',
            title: 'EVO Triangle - North Wales',
            image: 'img/ch2-evo-triangle@2x.jpg',
            description: "Affectionately named after EVO magazine who are known for testing cars on this 20 mile round trip. Forming the triangle is the A5 West, A543 North-East to B4501 in North Wales. The EVO Triangle offers open road as far as the eye can see. A memorable experience that you wont forget.",
            location: {
                center: [-3.592, 53.073],
                zoom: 11,
                pitch: 60.00,
                bearing: 149.34
            },
            onChapterEnter: [
                {
                    layer: 'ch2-route',
                    opacity: 0.9
                },
                {
                    layer: 'ch2-markers',
                    opacity: 1
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'ch2-route',
                    opacity: 0
                },
                {
                    layer: 'ch2-markers',
                    opacity: 0
                }
            ]

        },
        {
            id: 'chapter3',
            alignment: 'right',
            title: 'Penrith to Alston',
            image: 'img/ch3-hartside-summit@2x.jpg',
            description: "Named one of the greatest roads in Britain, start the A686 near Penrith and ride through quaint British villages through Langwathby before summiting the Hartside summit at over 1900ft. The ride of the week ending at the highest market town in Britain, Alston",
            location: {
                center: [-2.568, 54.738],
                zoom: 10.65,
                pitch: 49.00,
                bearing: -0.72
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
                {
                    layer: 'ch3-route',
                    opacity: 0.9
                },
                {
                    layer: 'ch3-markers',
                    opacity: 1
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'ch3-route',
                    opacity: 0
                },
                {
                    layer: 'ch3-markers',
                    opacity: 0
                }
            ] 
        },
    ]
};
