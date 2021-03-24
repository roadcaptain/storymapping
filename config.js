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
        {
        // A_theblackforest R_baden-freudenstadt M_baden-baden M_freudenstadt

            id: 'chapter4',
            alignment: 'right',
            title: 'The Snake Pass',
            image: 'b500.jpg',
            description: "The Snake Pass is between Glossop and Ladybower Reservoir on the A57. Covered by beautiful scenery and winding roads of the Peak District. The Snake Pass makes for a superb day out on the bike.",
            location: {
                center: [8.41932, 48.57354],
                zoom: 10.65,
                pitch: 49.00,
                bearing: -0.72
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
               
            ],
            onChapterExit: [
               
            ]
        },
        {
        // A_theblackforest R_baden-freudenstadt M_baden-baden M_freudenstadt

            id: 'chapter5',
            alignment: 'right',
            title: 'Cornwall Coastline',
            image: 'b500.jpg',
            description: "The long meandering road (A39) between Barnstaple and Newquay is any lover of coastlines dream. 160 miles of road with stops off in Constantine Bay to take in the sea breeze and sandy beaches make for a perfect day out on two wheels.",
            location: {
                center: [8.41932, 48.57354],
                zoom: 10.65,
                pitch: 49.00,
                bearing: -0.72
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
              
            ],
            onChapterExit: [
               
            ]
        },
        {
        // A_theblackforest R_baden-freudenstadt M_baden-baden M_freudenstadt

            id: 'chapter6',
            alignment: 'right',
            title: 'The Cheddar Gorge Route',
            image: 'b500.jpg',
            description: "The Cheddar Gorge route offers stunning scenery that encapsulates you as you ride between cliffs on either side. The route starts or ends in Oakhill/Cheddar (14 miles). Enjoy the many sweeping and tight bends of the Somerset countryside and take the time out to visit the Cheddar Gorge on your way. Happy Riding!",
            location: {
                center: [8.41932, 48.57354],
                zoom: 10.65,
                pitch: 49.00,
                bearing: -0.72
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {
        // A_theblackforest R_baden-freudenstadt M_baden-baden M_freudenstadt

            id: 'chapter7',
            alignment: 'right',
            title: 'The Windermere Loop',
            image: 'b500.jpg',
            description: "The Loop is one of the UK’s most picturesque 1 day rides that is full of big lakes, high passes and unspoilt beauty. Enjoy a 65 mile round trip in the Lake District from Windermere round to Broughton-in-Furness and looping back round to the start.",
            location: {
                center: [8.41932, 48.57354],
                zoom: 10.65,
                pitch: 49.00,
                bearing: -0.72
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
        // A_theblackforest R_baden-freudenstadt M_baden-baden M_freudenstadt

            id: 'chapter8',
            alignment: 'right',
            title: 'Yorkshire Dales',
            image: 'b500.jpg',
            description: "Ride through the Yorkshire Dales -A challenging ride with an objective of serenity over speed. Away from the bustle of any Yorkshire towns, you can really feel a million miles away.",
            location: {
                center: [8.41932, 48.57354],
                zoom: 10.65,
                pitch: 49.00,
                bearing: -0.72
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
        // A_theblackforest R_baden-freudenstadt M_baden-baden M_freudenstadt

            id: 'chapter9',
            alignment: 'right',
            title: 'London to Brighton',
            image: 'b500.jpg',
            description: "Our favourite ride at RideTo is London’s most popular day trip. Ride riding down the A23 through several scenic Surrey commuter towns before passing through the rural countryside of West Sussex leading up into Brighton.",
            location: {
                center: [8.41932, 48.57354],
                zoom: 10.65,
                pitch: 49.00,
                bearing: -0.72
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
        // A_theblackforest R_baden-freudenstadt M_baden-baden M_freudenstadt

            id: 'chapter10',
            alignment: 'right',
            title: 'Black Mountain Pass',
            image: 'b500.jpg',
            description: "Considered the best road in Wales, cutting through the Brecon Beacons National Park. The Black Mountain Pass is short and sweet passing through the most beautiful scenery in Wales.",
            location: {
                center: [8.41932, 48.57354],
                zoom: 10.65,
                pitch: 49.00,
                bearing: -0.72
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
                
            ],
            onChapterExit: [
               
            ]
        },
        {
        // A_theblackforest R_baden-freudenstadt M_baden-baden M_freudenstadt

            id: 'chapter11',
            alignment: 'right',
            title: 'Coast to Coast',
            image: 'b500.jpg',
            description: "The Coast to Coast is a stunning route along the A66, however many variations can be take. From West to East; passing through the Lake District, over the Pennines and to the railway paths of County Durham.",
            location: {
                center: [8.41932, 48.57354],
                zoom: 10.65,
                pitch: 49.00,
                bearing: -0.72
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
        // A_theblackforest R_baden-freudenstadt M_baden-baden M_freudenstadt

            id: 'chapter12',
            alignment: 'right',
            title: 'London to Whitstable',
            image: 'b500.jpg',
            description: "A London favourite is to bike your way east to north Kent out on the A20 and its upbeat seaside towns. From the seafood bars of Whitstable to the views of the English Channel, every biker is sure to enjoy this top-notch day trip.",
            location: {
                center: [8.41932, 48.57354],
                zoom: 10.65,
                pitch: 49.00,
                bearing: -0.72
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
        // A_theblackforest R_baden-freudenstadt M_baden-baden M_freudenstadt

            id: 'chapter13',
            alignment: 'right',
            title: 'London to Windsor',
            image: 'b500.jpg',
            description: "Taking the A3 through Richmond and Hampton Court up to Windsor for a day of beauty. You’ll pass the site of the Magna Carta and roll into Windsor town right up to the Castle, where you can park in front and have a sandwich. You can then ride out of town, across the rolling hills of Windsor Park - beaut.",
            location: {
                center: [8.41932, 48.57354],
                zoom: 10.65,
                pitch: 49.00,
                bearing: -0.72
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            // A_theblackforest R_baden-freudenstadt M_baden-baden M_freudenstadt
    
                id: 'branding',
                alignment: 'right',
                title: 'Join the club!!',
                image: '../../assets/rc-branding-yellow.svg',
                description: '<span class="claim">Motorcycle thrilling routes made simple. Skip the main road with RoadCaptain app </span>',
                location: {
                    center: [9.84495, 47.76613],
                    zoom: 4.94,
                    pitch: 0.50,
                    bearing: 0.14
                },
                mapAnimation: 'easeTo',
                onChapterEnter: [
                   
                ],
                onChapterExit: [
                  
                ]
            }
    ]
};
