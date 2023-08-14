import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  // MapOverviewInformational,
  ImageGallery,
  GenericMap,
} from "./components";
import "./index.css";
import MultipleMaps from "./components/MultipleMaps";

const AB11_Markers = [
  {
    id: 1,
    name: "1",
    image: "/gems-issues/AB11_Photo1.jpeg",
    contexts: [
        {
          context:
            `To remind me where I used to be, how low I got before I got back on my feet again… 
            I'd say [this is] positive… Because it's got me off the streets and helped me get 
            into my own place.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.51201, lng: -0.02533 },
  },
  {
    id: 2,
    name: "2",
    image: "/gems-issues/AB11_Photo2.jpeg",
    contexts: [
        {
          context:
            `You just get a positive feeling up here [the park]. Yeah. Some places you can go and you 
            get a bad, negative feeling. And there's some places you can go and get a good, positive feeling.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.51237, lng: -0.02090 },
  },
  {
    id: 3,
    name: "3",
    image: "/gems-issues/AB11_Photo3.jpeg",
    contexts: [
        {
          context:
            `The sign says, 'Are you causing a nuisance or behaving antisocially? You could be given a fine.' Lose your
             freedom of speech or losing the freedom of enjoying yourself. So, that's negative…Playing football. 
             Everybody enjoys having a kick about.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "concern",
    position: { lat: 51.51378, lng: -0.02025 },
  },
];

const AN10_Markers = [
  {
    id: 1,
    name: "1",
    image: "/gems-issues/AN10_Photo1.jpeg",
    contexts: [
        {
          context:
            "Because we're on the way out the gate.",
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.50821, lng: -0.02513 },
  },
  {
    id: 2,
    name: "2",
    image: "/gems-issues/AN10_Photo2.jpeg",
    contexts: [
        {
          context:
            `You just need to press the button to add the date. We're on our way out the gate.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.50852, lng: -0.02501 },
  },
  {
    id: 3,
    name: "3",
    image: "/gems-issues/AN10_Photo3.jpeg",
    contexts: [
        {
          context:
            `Roads are bumpy. They should do more things for people that are wheelchair bound, or got like 
            hard of walking, you know. When I'm indoors it's all right because I can just use my Zimmer frame, you know.
            Most of the time the carers [have to] do my shopping anyway. Yeah. But now and again, when I go to l
            ike Chris street or whatever, I do get my bits and pieces myself. Because I know what I want.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "concern",
    position: { lat: 51.51050, lng: -0.02676 },
  },
  {
    id: 4,
    name: "4",
    image: "/gems-issues/AN10_Photo4.jpeg",
    contexts: [
      {
        context:
          `That's where all the shops are, this is where we have to walk to. This is my local area. This is where 
          I, well, when I'm needing food and when I got my boyfriend or someone to take me, this is where I come 
          to… I was a trained chef, so I've done that all my life.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51161, lng: -0.02859 },
  },
  {
    id: 5,
    name: "5",
    image: "/gems-issues/AN10_Photo5.jpeg",
    contexts: [
      {
        context:
          `Hi, this is West Ferry. This is just down the road from where I live. So just letting you know. 
          This is West Ferry, you just have to cross the road at the zebra crossing, and then we're nearly home.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.50929, lng: -0.02679 },
  },
];

const CK09_Markers = [
  {
    id: 1,
    name: "1",
    image: "/gems-issues/CK09_Photo1.jpeg",
    contexts: [
        {
          context:
            `So because that's my room. So that's the window that I look out of. It's positive because 
            I've got a roof over my head. And, I'm lucky because although I haven't actually had to 
            live on the streets. If it wasn't for Riverside, that's where I would be.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.50803, lng: -0.02529 },
  },
  {
    id: 2,
    name: "2",
    image: "/gems-issues/CK09_Photo2.jpeg",
    contexts: [
        {
          context:
            `Cuz basically the college is up this way. And I never went to college but I never knew this 
            area until I moved to Riverside. The reason why I got moved to Riverside was because Hackney 
            Road project was abstinent place. So you have to be sober. And again, they'd do breathalyzer 
            tests, like on the spot without you realizing. And yeah, lo and behold, there was, I did fall 
            off the wagon again.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.50930, lng: -0.02156 },
  },
  {
    id: 3,
    name: "3",
    image: "/gems-issues/CK09_Photo3.jpeg",
    contexts: [
        {
          context:
            `(Researcher Note: NEED TO FIND)`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "concern",
    position: { lat: 51.50930, lng: -0.01851 },
  },
  {
    id: 4,
    name: "4",
    image: "/gems-issues/CK09_Photo4.jpeg",
    contexts: [
      {
        context:
          `It used to be a lot different. Yeah, Poplar Recreation. Well, even now if like me and 
          my brother meet up, we'll just sit on these benches.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51004, lng: -0.01724 },
  },
  {
    id: 5,
    name: "5",
    image: "/gems-issues/CK09_Photo5.jpeg",
    contexts: [
      {
        context:
          `Been coming here for like, as I say, since I've been back in London, so about five, six years. 
          The reason her took picture of that is because I've never noticed it before. You've drawn my 
          attention to it. Because for me, this is just somewhere where I quickly go to the bench and sit 
          and drink…This is, I never read that before until today. So I'm actually discovering more.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51050, lng: -0.01674 },
  },
  {
    id: 6,
    name: "6",
    image: "/gems-issues/CK09_Photo6.jpeg",
    contexts: [
      {
        context:
          `It's beautiful but then the circle inside is not so beautiful…So this is basically where everybody 
          comes to chill and do everything. Usually, like in summer, it will be all day long especially at night. 
          But I don't know if they lock the gates now but they just sort of sit here and yeah, because it's sort 
          of closed up, isn't it? It's away from like public. Away from the road and when it's dark, you know, 
          everybody can just come into one place and smoke, drink. It's positive, because it's where me and my 
          brother [name] can sit and drink without my mom being my mom. And yeah, I think it was a safe place for 
          everybody.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51064, lng: -0.01674 },
  },  {
    id: 7,
    name: "7",
    image: "/gems-issues/CK09_Photo7.jpeg",
    contexts: [
      {
        context:
          `So, this is actually my Savior as well. When I moved to Riverside, I met a lady that used to come and do 
          the artwork. And they said, Well, why don't you come to the Salvation Army to have a meal and everything. 
          So that kept me away from silliness. And then I just started helping with the dishes, like washing up, all 
          of that sort of stuff. And then I met a lot of um people here. I used to do the breakfast in the morning.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51157, lng: -0.01558 },
  },
  {
    id: 8,
    name: "8",
    image: "/gems-issues/CK09_Photo8.jpeg",
    contexts: [
      {
        context:
          `Because this is where I would walk in, the entrance. Cuz it was like, I'm part of the staff… [It makes me 
            feel] like important and part of…this is a perfect example of the best gate ever. And then the [service site] 
            gate is horrible, because middle of the night, or when it's raining, and you're pressing the bell, nobody's 
            answering.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51177, lng: -0.01563 },
  },
  {
    id: 9,
    name: "9",
    image: "/gems-issues/CK09_Photo9.jpeg",
    contexts: [
      {
        context:
          `Because we were talking about gates. And as I was talking about, like, my mom's house, and it could be like, a 
          good thing and a bad thing. So like, the extremes. Just the word ‘gate’.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51140, lng: -0.01420 },
  },
  {
    id: 10,
    name: "10",
    image: "/gems-issues/CK09_Photo10.jpeg",
    contexts: [
      {
        context:
          `Okay, so this round thing. I brought my son to London when I used to live in Doncaster. And so he liked to 
          play in on that. Yeah. Because I was drinking at the time as well. Yeah. I didn't like it because it's 
          lopsided as well. Makes you dizzy. Yeah. And that, what they're playing on? Yeah. The round one. I had a picture 
          of me and [son] on that as well. The park has changed a lot., they've modified it. There was only just that, and 
          one of those rope things. Yeah, but it's not there anymore.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51040, lng: -0.01674 },
  },
  {
    id: 11,
    name: "11",
    image: "/gems-issues/CK09_Photo11.jpeg",
    contexts: [
      {
        context:
          `This one is actually the divide from when I was at home with my mom. And then now this means like, I'm in my own 
          area now. So when my brother comes, he will say 'I'm in the area.' So 'area' means that side [behind us]. Yeah, 
          he'll say to me, are you coming to the area? Technically, I'm already here. But until I come through here and meet 
          him in Poplar Park, I'm not in the area either because I'm not living at my mom's.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.50995, lng: -0.01748 },
  },
  {
    id: 12,
    name: "12",
    image: "/gems-issues/CK09_Photo12.jpeg",
    contexts: [
      {
        context:
          `It's the best chicken shop. Food is amazing. And whenever now obviously, I can't buy [friend] any alcohol or anything 
          like that. But she'll give me— this is an alcoholic shop. But she'll give me money and I can take that in front of the 
          staff and say I'm getting her chicken and chips from here because she loves it from here too.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.50922, lng: -0.01885 },
  },
  {
    id: 13,
    name: "13",
    image: "/gems-issues/CK09_Photo13.jpeg",
    contexts: [
      {
        context:
          `So at Riverside, as much as I will always say —and I mean this— I am so grateful that I've got a roof over my head. 
          Yeah, I say as a joke that I'm toothless but not ruthless. So yeah, I think they need to have the rats and the mice 
          paying rent as well because it's unfair. It's got to a point where I just did not sleep in my room. I used to sleep in 
          the kitchen the communal kitchen because of the mice in my room. Okay, that is my proposed please change. Yeah, I was so 
          depressed to a point where I'd go round my mum's—this is when she wouldn't open the door for me—just to not be near 
          the mice. So I'd end up drinking there.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.50932, lng: -0.02032 },
  },
  {
    id: 14,
    name: "14",
    image: "/gems-issues/CK09_Photo14.jpeg",
    contexts: [
      {
        context:
          `This is the car park that me and my ex-partner would sit in so you know, this square bit, actually the middle. 
          That's the stairwell. Yeah. And so we'd sit around the top floor and smoke there. And it's close to my place. 
          So obviously, once we've done that, I just go straight home.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.50899, lng: -0.02364 },
  },
  {
    id: 15,
    name: "15",
    image: "/gems-issues/CK09_Photo15.jpeg",
    contexts: [
      {
        context:
          `Yeah, this is the gate that I love and I hate it. And I'm a poet and I now know it. [Rings door]… Riverside gate 
          is horrible, because middle of the night, or when it's raining, and you're pressing the bell, nobody's answering 
          and you know, they're sitting there with their feet, the night staff in particular. And sometimes there was one 
          of them that she used to do it on purpose. Definitely. And it was not in my head. She meant to do that, 
          especially when it's raining, I'd have to, and I used to literally record as I've gotten to the gate, and I'd say out 
          loud. 'So it's 11 o'clock. And I'm at the gate, let's see how many times I'm gonna have to buzz now.' It's raining. 
          Or, you know, there's people behind me.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.50866, lng: -0.02496 },
  },
];

const DM12_Markers = [
  {
    id: 1,
    name: "1",
    image: "/gems-issues/DM12_Photo1.jpeg",
    contexts: [
        {
          context:
            `Because there's plenty of rats. And we need a little bit of change. And this is where I live. 
            It’s complicated because I'm grateful I'm not on the streets.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.51192, lng: -0.02549 },
  },
  {
    id: 2,
    name: "2",
    image: "/gems-issues/DM12_Photo2.jpeg",
    contexts: [
        {
          context:
            `This is the park I come to. It means peace and tranquility. I think it's a nice place to escape. 
            Come, I sit. I enjoy the sun. I do a picnic. Normally I get something from the place. We cook, 
            me and a few friends will come and enjoy the sun and have a meal.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.51388, lng: -0.02384 },
  },
  {
    id: 3,
    name: "3",
    image: "/gems-issues/DM12_Photo3.jpeg",
    contexts: [
        {
          context:
            `That is Canary Wharf. It's a beautiful place. Yeah, it is really a beautiful place. If I took more 
            pictures there, you will see for yourself how pretty it is.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "concern",
    position: { lat: 51.51544, lng: -0.02282 },
  },
  {
    id: 4,
    name: "4",
    image: "/gems-issues/DM12_Photo4.jpeg",
    contexts: [
      {
        context:
          `I love the canal. It's very peaceful. I normally come and walk, I would walk from here all the way to 
          Shoreditch. On the canal, yeah. It's nice, it’s quiet.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51616, lng: -0.02249 },
  },
  {
    id: 5,
    name: "5",
    image: "/gems-issues/DM12_Photo5.jpeg",
    contexts: [
      {
        context:
          `I love this place. It’s, it's quiet. The best place you can be is right here. There is, I have slept here 
          for a month. When it's not raining, I will just go there. And the security over here were very nice. 
          In the morning, they would bring breakfast.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51502, lng: -0.02421 },
  },
  {
    id: 6,
    name: "6",
    image: "/gems-issues/DM12_Photo6.jpeg",
    contexts: [
      {
        context:
          `Yeah, it's nice. It's cheap. It's not like Waitrose. That is why this place, locals, [think] it's better 
          because the shopping there, it's easier...Why I took Lidl, I normally shop there.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51360, lng: -0.02797 },
  },
  {
    id: 7,
    name: "7",
    image: "/gems-issues/DM12_Photo7.jpeg",
    contexts: [
      {
        context:
          `And I get my mail from here.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51360, lng: -0.02799 },
  },
];

const DRESETFebruary9_Markers = [
  {
    id: 1,
    name: "1",
    image: "/gems-issues/DRESETFebruary9_photo1.jpg",
    contexts: [
        {
          context:
            `[PF: And then you talk into it. So, why did you take that photo?]

            Um yeah, I take this photo because this is one of the organizations which is called Providence Row, otherwise The Dellow, which help with vulnerable and homeless people. And that's where I'm like, literally living upstairs at The Dellow at the moment until I can be housed properly.
            
            [PF: Ok, and then you click the red...]`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.5171670188, lng: -0.071480296392404 },
  },
  {
    id: 2,
    name: "2",
    image: "/gems-issues/DRESETFebruary9_photo2.jpg",
    contexts: [
        {
          context:
            `Oh yeah, this is Brick Lane, it's one of the most famous lane in London, one of the most famous and old market in London surrounded the story of like Jack the Ripper, which is the serial killer you know about this? 

            [PF: Yeah.] 
            
            He was local around this market around this area. And this has been a very like interesting market because it's keep most it's old features like from back in a century ago and stuff like that. Yes. It's a good market where people come and socialize and bring up community spirit. Very good, community. 
            
            [PF: Nice. And then you click stop.]`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "both",
    position: { lat: 51.517431197313, lng: -0.070720791089453 },
  },
  {
    id: 3,
    name: "3",
    image: "/gems-issues/DRESETFebruary9_photo3.jpg",
    contexts: [
        {
          context:
            `Yeah, that's Reset, that's one of the organization that helps people deal with addiction, which I'm getting engaged in at the moment. And, it's pretty good so far, so I would recommend it to anyone like  struggling with addiction.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.518355760506, lng: -0.063796350144084 },
  },
  {
    id: 4,
    name: "4",
    image: "/gems-issues/DRESETFebruary9_photo4.jpg",
    contexts: [
      {
        context:
          `[PF: ...Explain the park]

          Yeah, that's one of the park like we mainly sit, chill out, like maybe have a drink. People smoking drugs would normally smoke openly in the park.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "both",
    position: { lat: 51.52000477296, lng: -0.062427460761546 },
  },
  {
    id: 5,
    name: "5",
    image: "/gems-issues/DRESETFebruary9_photo5.jpg",
    contexts: [
      {
        context:
          `Yeah most of these doorways, you find them all over the place in apartment blocks. But this is where like, people come and have like quick smoke.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 51.519879481535, lng: -0.062442445960784 },
  },
  {
    id: 6,
    name: "6",
    image: "/gems-issues/DRESETFebruary9_photo6.jpg",
    contexts: [
      {
        context:
          `Yeah, this bridge is like one of the main meeting points like where people come and pick their drugs up, so this is definitely. [Loud revving noise throughout]`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 51.519643602052, lng: -0.061689593206698 },
  },
  {
    id: 7,
    name: "7",
    image: "/gems-issues/DRESETFebruary9_photo7.jpg",
    contexts: [
      {
        context:
          `Yeah, as you can see here in Whitechapel we have a massive hospital, the Royal Hospital. But there's always room for improvement. Cuz like if you meant to go Accident and Emergency, the waiting time is like four hours or more. So that's the area that could do with like a bit of improvement. There was like a demonstration there yesterday [both laugh[ with the with the nurses, yeah the other nurses, and employees at this hospital, they were demonstrating today. Yes, please are you alright? [to another person, who replies: "How are you"]. So the government like needs to do something in that area, like maybe um wage improvements with the working condition. Like that will attract more people to want to get a career in the health department and with better paid, more employees, better working condition. Obviously the service is going to improve init?`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "both",
    position: { lat: 51.519039953032, lng: -0.059123526901205 },
  },
  {
    id: 8,
    name: "8",
    image: "/gems-issues/DRESETFebruary9_photo8.jpg",
    contexts: [
      {
        context:
          `Yeah, I was in this is eye clinic roughly around two months ago with a eye injury, which I had treated, and everything went well so. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.517304446056, lng: -0.059698531250461 },
  },
  {
    id: 9,
    name: "9",
    image: "/gems-issues/DRESETFebruary9_photo9.jpg",
    contexts: [
      {
        context:
          `Oh yeah, that's the other side of the hospital. As you can see it's a massive hospital but we still have waiting issue in the emergency department. So that's something like we need to get addressed like from the politicians or prime minister.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 51.517541562803, lng: -0.057185654998527 },
  },
  {
    id: 10,
    name: "10",
    image: "/gems-issues/DRESETFebruary9_photo10.jpg",
    contexts: [
      {
        context:
          `Yeah few months ago, that's where I normally slept. I slept there like for three months, before getting help from the Dellow Center. So, that's, that's one of the spot that I normally sleep when I was homeless. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "none",
    position: { lat: 51.518741560342, lng: -0.057455175171972 },
  },
  {
    id: 11,
    name: "11",
    image: "/gems-issues/DRESETFebruary9_photo11.jpg",
    contexts: [
      {
        context:
          `Yeah this is the back of the mission, White Chapel Mission, which I mentioned earlier on in this talk, Like you can go there for like breakfast, I'm sure and a change of clothes. Yeah so we are moving around to the front.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "none",
    position: { lat: 51.51883633135, lng: -0.057360896668949 },
  },
  {
    id: 12,
    name: "12",
    image: "/gems-issues/DRESETFebruary9_photo12.jpg",
    contexts: [
      {
        context:
          `Front entrance for the mission. [loud noises]`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "none",
    position: { lat: 51.519050790548, lng: -0.057331604491472 },
  },
  {
    id: 13,
    name: "13",
    image: "/gems-issues/DRESETFebruary9_photo13.jpg",
    contexts: [
      {
        context:
          `Yeah, that's that's the local library, that's White Chapel Library. I normally sleep on the library, like this library normally be my home like for a few months, so bring back a lot of memories.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "both",
    position: { lat: 51.519545870982, lng: -0.057639718537876 },
  },
  {
    id: 14,
    name: "14",
    image: "/gems-issues/DRESETFebruary9_photo14.jpg",
    contexts: [
      {
        context:
          `Yeah, that's White Chapel underground station. Yeah White Chapel have a good connection when it comes to travel. You can go to Central quite easily, they have a good bus, underground. So traveling isn't a big issue like traveling from White Chapel to elsewhere in London. But there is a slight problems, like sometime at peak hours with the overcrowding and, and stuff on the on underground on the buses so that's something that we look into.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "both",
    position: { lat: 51.519258621534, lng: -0.059572453921636 },
  },
];

const DRESETFebruary17_Markers = [
  {
    id: 1,
    name: "1",
    image: "/gems-issues/DRESETFebruary17_photo1.jpg",
    contexts: [
        {
          context:
            `[PF: And then you explain why did you take that photo] 

            Photo of local day center where I come for food, a wash, and other bits and pieces for my good health. `,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.517097266377, lng: -0.071488156095891 },
  },
  {
    id: 2,
    name: "2",
    image: "/gems-issues/DRESETFebruary17_photo2.jpg",
    contexts: [
        {
          context:
            `Pebble street two seconds from the center. If you're walking, not very nice on your feet.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "concern",
    position: { lat: 51.516932946977, lng: -0.071730267073858 },
  },
  {
    id: 3,
    name: "3",
    image: "/gems-issues/DRESETFebruary17_photo3.jpg",
    contexts: [
        {
          context:
            `OK, a picture of pavement. As we get closer to the city, it may not seems like that on the photo, but the pavement slowly gets cleaner and cleaner. I don't know whether that's got to do with politics or money, but definite difference. `,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.514388882473, lng: -0.074246585397949 },
  },
  {
    id: 4,
    name: "4",
    image: "/gems-issues/DRESETFebruary17_photo4.jpg",
    contexts: [
      {
        context:
          `Black sheep coffee, Aldgate station, if you're homeless they allow you a free coffee, and on a good day maybe a bun as well. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51403193097, lng: -0.075468412753873 },
  },
  {
    id: 5,
    name: "5",
    image: "/gems-issues/DRESETFebruary17_photo5.jpg",
    contexts: [
      {
        context:
          `Um, picture of steps at the church where I would drink my free coffee and bun. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "none",
    position: { lat: 51.513768037688, lng: -0.076113180541851 },
  },
  {
    id: 6,
    name: "6",
    image: "/gems-issues/DRESETFebruary17_photo6.jpg",
    contexts: [
      {
        context:
          `[Did not pick up - below is from go along walk audio.]

          Local um park has a bit of a sun trap when the sun comes out with a dancing fountain, pretty relaxing. And especially when it's been a bit of a strange day.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.514175444594, lng: -0.076953498114335 },
  },
  {
    id: 7,
    name: "7",
    image: "/gems-issues/DRESETFebruary17_photo7.jpg",
    contexts: [
      {
        context:
          `[Did not pick up - review go along walk to ensure this is correct.]

          Some kind of grip on the corner of most roads, which is fine if you want a grip change but... if you have painful feet.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 51.513667830162, lng: -0.076368832000179 },
  },
  {
    id: 8,
    name: "8",
    image: "/gems-issues/DRESETFebruary17_photo8.jpg",
    contexts: [
      {
        context:
          `[Did not pick up - review go along walk.]

          Down in the alley way, people dump stuff...it seems to be decent, a convenient dumping site for rubbish and people going to the toilet. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 51.514095176907, lng: -0.074799087312677 },
  },
  {
    id: 9,
    name: "9",
    image: "/gems-issues/DRESETFebruary17_photo9.jpg",
    contexts: [
      {
        context:
          `[Did not pick up - review go along walk.]

          Small pub in the same alley way. It would be a nice place to take somebody, but if you if come out to the smell of pee and rubbish, ... the fact that this pub actually exists.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.513981523513, lng: -0.074577866729764 },
  },
];

const DRESETMarch2_Markers = [
  {
    id: 1,
    name: "1",
    image: "/gems-issues/DRESETMarch2_photo1.jpg",
    contexts: [
        {
          context:
            `[PF: And you explain.]This is the Dellow Center where we eat and sleep and shower, and they look after us, and yeah. [PF: Yeah, perfect, then you click the red button]`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.517122192387, lng: -0.071438103101474 },
  },
  {
    id: 2,
    name: "2",
    image: "/gems-issues/DRESETMarch2_photo2.jpg",
    contexts: [
        {
          context:
            `This is the health center for the homeless and rough sleepers, and they help people and yeah, basically.  Yeah? [Turns to PF to continue go-along interview]`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.517503996164, lng: -0.070916338694677 },
  },
  {
    id: 3,
    name: "3",
    image: "/gems-issues/DRESETMarch2_photo3.jpg",
    contexts: [
        {
          context:
            `This is the house where I used to live, me and my partner. [wind, check go-along interview for better audio] She's gone, my partner passed away, you know, yeah. [emotional moment]`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.517449122203, lng: -0.069812372723209 },
  },
  {
    id: 4,
    name: "4",
    image: "/gems-issues/DRESETMarch2_photo4.jpg",
    contexts: [
      {
        context:
          `When I come home, yeah, yeah, this is all in the past now and it reminds me of my son, init? [emotional] Cuz yeah, I had a good memory in that house. I really miss them [emphasis]. Thank you. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.517550884248, lng: -0.06939712135162 },
  },
  {
    id: 5,
    name: "5",
    image: "/gems-issues/DRESETMarch27_1_photo5.jpg",
    contexts: [
      {
        context:
          `[sirens in the background]. Ok. Yeah, this is the hostel where the homeless people, they used to live. But it's closed down, and now it's been closed and I don't know. So that's why, that's why people are sleeping rough and sleeping underneath the bridges. And uh you know, it's like you see everyone like everyone in the street sleeping like in the doorway. And some people are sleeping in the car. Some people are sleeping underneath the bridge. Some people sleeping in the hospital. Everyone, just to keep warm. And yeah. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.518017956206, lng: -0.064877035653738 },
  },
  {
    id: 6,
    name: "6",
    image: "/gems-issues/DRESETMarch2_photo6.jpg",
    contexts: [
      {
        context:
          `[PF: Go ahead, talk into the phone.] I said, yeah, I just wanted to like, to thank this hospital, init? Cus they saved my life, long time ago. So without them, I don't think I'd be here. So yeah, yeah this, the hospital. I love this hospital and I love this area as well so. Thank you. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.518549346072, lng: -0.06310758486964 },
  },
  {
    id: 7,
    name: "7",
    image: "/gems-issues/DRESETMarch2_photo7.jpg",
    contexts: [
      {
        context:
          `So I used to, I don't know, it's always...Yeah, like I said, I used to sleep there and yeah, I don't know. So yeah, it brought back my memory. [PF: There was a nice security man.] Yeah, the security guy, he was a good guy as well. Yeah, thank you. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.518147868324, lng: -0.061603274113112 },
  },
  {
    id: 8,
    name: "8",
    image: "/gems-issues/DRESETMarch2_photo8.jpg",
    contexts: [
      {
        context:
          `Yeah, I was gonna say, yeah to explain-- that we, I used to sleep there, me and four guys. Then yeah. Yeah, it's changed now. Now it's like, now you see like it's a dump. Yeah, thank you. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 51.513524351607, lng: -0.05755884825451 },
  },
  {
    id: 9,
    name: "9",
    image: "/gems-issues/DRESETMarch2_photo9.jpg",
    contexts: [
      {
        context:
          `Yeah, sorry, yeah what I was gonna say, like I said to you, sorry, this is what we used to sleep in a bus. I think there was ten people in there. Sleeping in there. I think another, another- look, look [points] you can see, look, people there, thinks they still sleeping there, we used to sleep there as well. And at the back. At least here at least 58 people, they used to sleep here. And I'll go there and take another picture there as well. 

          [PF: And would you say it's positive (asks for clarification because citizen scientist selected green)?]
          
          Yeah yeah positive, yeah. 
          
          [PF: Why?] 
          
          Yeah, no no no, negative. No, I don't want this. This is not me. I don't want to sleep here. No, it's not me. I don't want this. No, sorry. Yeah, thank you. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 51.513791665789, lng: -0.057458066869111 },
  },
  {
    id: 10,
    name: "10",
    image: "/gems-issues/DRESETMarch2_photo10.jpg",
    contexts: [
      {
        context:
          `Yeah and in this place as well. Same place. We used to sleep there, me and [name], and [name]. There was a bout ten of em. And some drug users used to come everyday, every night, they used to stay all night. Smoking, don't know what they're doing. It's like screaming and shouting. It's not even clean, look, even people, they go and use the toilet there. Yeah, it's not nice. Yeah, thank you very much. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 51.51432737948, lng: -0.057925649152862 },
  },
  {
    id: 11,
    name: "11",
    image: "/gems-issues/DRESETMarch2_photo11.jpg",
    contexts: [
      {
        context:
          `And like, yeah, same as well, same place as well. So like here, like we said, too many people used to sleep here as well. 
          [PF: And it's dirty.] 
          Yeah, you see init? Yeah, thank you, you can see it's very dirty, not even clean, people use toilet there and you can smell stuff. You got sleeping bags in there as well. Yeah, thank you very much.  `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.519332412437, lng: -0.057900527640049 },
  },
  {
    id: 12,
    name: "12",
    image: "/gems-issues/DRESETMarch2_photo12.jpg",
    contexts: [
      {
        context:
          `Like I want to say, yeah, I want to thank that cleaner as well. He's always used to help us and clean it for us there, and they used to clean it for us and find bedding, and stuff. He used to bring it to us. And yeah I just want to thank him. This is his van, and he's sitting there, I don't wanna go cus he's talking, I don't wanna go and see him. He's an uncle, good guy. Thank you very much.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.513676601015, lng: -0.060926802884287 },
  },
  {
    id: 13,
    name: "13",
    image: "/gems-issues/DRESETMarch2_photo13.jpg",
    contexts: [
      {
        context:
          `Yeah, like I said this is another door as well, so another exit as well from that side. You got this one, and that one. And that one, it's about four exits. So this is the best one. 

          [PF: And it's good because?]
          
          Yeah, they leave it open for us as well, they don't even close it. Yeah, thank you. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "both",
    position: { lat: 51.512413122872, lng: -0.04906563960936 },
  },
  {
    id: 14,
    name: "14",
    image: "/gems-issues/DRESETMarch2_photo14.jpg",
    contexts: [
      {
        context:
          `Basically what I'm saying that this is East London Mosque. So they should be like at least, like I said they got showers in there and stuff I know cuz they don't give us no food nothing and just like shower. Some time ago, I have a shower and just take people like from all different, sorry, all different backgrounds and just take them have a shower. And yeah, so I don't know they at least they should help us. YEAH [emphasis], give us food or something cuz sometimes we're hungry. So go and have a shower. We asked the brother, please I need some food. 'I'm sorry, brother we don't do no food, we don't no food.' He said, 'no we don't do no food.' [emphasis]. He said, 'yeah, shower? Huh, go and wash if you want.' So it shouldn't be like that, it shouldn't be open because worship you know it should be left. In India, what they do, they feed people they everything, if I wanna eat. Why they don't do that here? Because we got money, they got everything. People, they donate every single day.

          [PF: Yeah. Where's the money going?]
          
          Exactly! Because it's corruption. Tower Hamlets, I'll be honest with you, I'll be honest. I'm telling the truth, though. It's all and... most of them, they're corrupt!
          
          [PF: Them being mosques?]
          
          Yeah, the people that are running the mosque. I'll be honest with you. I'll tell, I'll tell them in the face. Because it's true. Because what they're doing, they're corrupt. They got houses, restaurants and what they do? They just collect the money, collect the money. Forget the homeless and forget the people that need. So we need more than them. So you got house, you got, you got a business. I've got nothing. Please help me, give me something to eat or something. I'm not asking for much. I just want something to eat because I'm hungry. I don't want to go to Tesco, Sainsbury and stealing. I don't want to get in trouble.
          
          [PF: Who do you think.. you know, in the community meeting, I want to invite people. Maybe we should ask somebody from the mosque to come?]
           
          Yeah! yeah, to come, please. I'll come and explain that. And I've got proof and everything I've got for you.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 51.517761338308, lng: -0.065759425590635 },
  },
];

const DRESETMarch27_1_Markers = [
  {
    id: 1,
    name: "1",
    image: "/gems-issues/DRESETMarch27_1_Photo0.jpg",
    contexts: [
        {
          context:
            `["And you record why" PF explains] Cuz they help people out, and they listen to ya.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.517235049924, lng: -0.071345157467269 },
  },
  {
    id: 2,
    name: "2",
    image: "/gems-issues/DRESETMarch27_1_photo1.jpg",
    contexts: [
        {
          context:
            `It's where people come to drink, and they take drugs in there as well. So, it's not a good place. `,
          createdAt: Date.now().toString(),
        },
    ],
    type: "concern",
    position: { lat: 51.516241085008, lng: -0.069388728265926 },
  },
  {
    id: 3,
    name: "3",
    image: "/gems-issues/DRESETMarch27_1_photo2.jpg",
    contexts: [
        {
          context:
            `This shop's good for people to go and get cheap, like, domestic stuff and that for their houses. `,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.517271326523, lng: -0.067045190413085 },
  },
  {
    id: 4,
    name: "4",
    image: "/gems-issues/DRESETMarch27_1_photo3.jpg",
    contexts: [
      {
        context:
          `This is where they come to pray at the mosque. Is that alright? [turns to PF]`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.517499838767, lng: -0.065799517860066 },
  },
  {
    id: 5,
    name: "5",
    image: "/gems-issues/DRESETMarch27_1_photo4.jpg",
    contexts: [
      {
        context:
          `This is where some homeless people used to live, but they used to have drug and alcohol people in there as well. So, I'd say it's, it's not good. [PF: it's complicated?] Yeah. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "both",
    position: { lat: 51.517972260374, lng: -0.064911252778942 },
  },
  {
    id: 6,
    name: "6",
    image: "/gems-issues/DRESETMarch27_1_photo5.jpg",
    contexts: [
      {
        context:
          `This is where, used to be a hospital, and now it's become a town hall. But they help a lot of people in there. [car noises from busy street].`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.518805003619, lng: -0.060481451053717 },
  },
  {
    id: 7,
    name: "7",
    image: "/gems-issues/DRESETMarch27_1_photo6.jpg",
    contexts: [
      {
        context:
          `This is the new hospital, Royal London. I've been here a few times, through drink [emphasis]. But it's a good place to be in where they help ya. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.518871808531, lng: -0.059003683896392 },
  },
  {
    id: 8,
    name: "8",
    image: "/gems-issues/DRESETMarch27_1_photo7.jpg",
    contexts: [
      {
        context:
          `[loud wind tunnel]. This is where homeless people come to have breakfast in the morning, and a cuppa coffee or tea. And to have a chat with whoever is on duty at that time. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.519281138772, lng: -0.057884194976009 },
  },
  {
    id: 9,
    name: "9",
    image: "/gems-issues/DRESETMarch27_1_photo8.jpg",
    contexts: [
      {
        context:
          `He's one that sleeps under there. [loud wind tunnel] This is the library in White Chapel, where the homeless people go to sleep over night time. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.519332412437, lng: -0.057900527640049 },
  },
];

const DRESETMarch27_2_Markers = [
  {
    id: 1,
    name: "1",
    image: "/gems-issues/DRESETMarch27_2_photo0.jpg",
    contexts: [
        {
          context:
            `["And you record why" PF explains] Cuz they help people out, and they listen to ya.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.525580397946, lng: -0.032286689344803 },
  },
  {
    id: 2,
    name: "2",
    image: "/gems-issues/DRESETMarch27_2_photo1.jpg",
    contexts: [
        {
          context:
            `It's where people come to drink, and they take drugs in there as well. So, it's not a good place. `,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.524261869653, lng: -0.030929766401857 },
  },
  {
    id: 3,
    name: "3",
    image: "/gems-issues/DRESETMarch27_2_photo2.jpg",
    contexts: [
        {
          context:
            `This shop's good for people to go and get cheap, like, domestic stuff and that for their houses. `,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.524216479798, lng: -0.030935668347068 },
  },
  {
    id: 4,
    name: "4",
    image: "/gems-issues/DRESETMarch27_2_photo3.jpg",
    contexts: [
      {
        context:
          `This is where they come to pray at the mosque. Is that alright? [turns to PF]`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 51.523509432367, lng: -0.03015831198417 },
  },
  {
    id: 5,
    name: "5",
    image: "/gems-issues/DRESETMarch27_2_photo4.jpg",
    contexts: [
      {
        context:
          `This is where some homeless people used to live, but they used to have drug and alcohol people in there as well. So, I'd say it's, it's not good. [PF: it's complicated?] Yeah. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.52248348881, lng: -0.029610856415222 },
  },
  {
    id: 6,
    name: "6",
    image: "/gems-issues/DRESETMarch27_2_photo5.jpg",
    contexts: [
      {
        context:
          `This is where, used to be a hospital, and now it's become a town hall. But they help a lot of people in there. [car noises from busy street].`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.522906009879, lng: -0.028550851053002 },
  },
  {
    id: 7,
    name: "7",
    image: "/gems-issues/DRESETMarch27_2_photo6.jpg",
    contexts: [
      {
        context:
          `This is the new hospital, Royal London. I've been here a few times, through drink [emphasis]. But it's a good place to be in where they help ya. `,
        createdAt: Date.now().toString(),
      },
    ],
    type: "none",
    position: { lat: 51.523576750105, lng: -0.031365039850177 },
  },
];

const SJ13_Markers = [
  {
    id: 1,
    name: "1",
    image: "/gems-issues/SJ13_Photo1.jpeg",
    contexts: [
        {
          context:
            `Because this is the area, really, that I'm not very comfortable being in. Even though I live here, but it's 
            one of my triggers with the drug situation. I've always used drugs but I've mainly started using a lot more 
            since I moved into Riverside House.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.50854, lng: -0.02492 },
  },
  {
    id: 2,
    name: "2",
    image: "/gems-issues/SJ13_Photo2.jpeg",
    contexts: [
        {
          context:
            `Yeah, I used that mainly to get back and forth from my mum's and to see my kids because they live at uh—my 
            daughter lives at [XX] road that's right by Bow Road. I mean, mom used to live in Stepney, but now she's moved 
            out to the Cotswolds, not so long ago. So, yeah, I use that quite a bit.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.50920, lng: -0.02625 },
  },
  {
    id: 3,
    name: "3",
    image: "/gems-issues/SJ13_Photo3.jpeg",
    contexts: [
        {
          context:
            `This is where everyone sticks overnight and literally does drugs, this is why that I'd normally don't go down here 
            overnight… there's a climbing wall literally there. It's funny because sometimes every day you get all homeless people 
            that literally sit at the end of their. And I've seen people get quite intimidated walking down here, when there's a 
            load of them up there… their concept of seeing one homeless person is just one homeless person is the same as every 
            homeless person. So people think one drug addict is the same as every other drug addict. And it's not. It really isn't… 
            Our cards are not marked all the same.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "concern",
    position: { lat: 51.50931, lng: -0.02669 },
  },
  {
    id: 4,
    name: "4",
    image: "/gems-issues/SJ13_Photo4.jpeg",
    contexts: [
      {
        context:
          `Because when I was younger, we used to all come down here, there used to be about 20 of us. Was only, what, 13, 14? And we 
          used to all just get our dingies out and put our costumes on with our T-shirts. And we used to just jump in the water, and 
          literally just mess about. Even though we'd get out with all the seaweed stuck to us and we'd stink of all the dirty water. 
          But, these are the happy places. Like literally, even with my kids when they got older, I used to bring them down here to feed 
          the ducks. And they used to love it. They could sit down here, I'd come down with no money and just do a picnic. And my kids 
          would sit here for hours. I used to have to try and drag them away. They just sit there and  put their feet in the water. Or 
          talk to people as they're coming past. And these were literally my happy memories when I had no burdens. No, no money. I was 
          just a normal kid.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51227, lng: -0.03175 },
  },
  {
    id: 5,
    name: "5",
    image: "/gems-issues/SJ13_Photo5.jpeg",
    contexts: [
      {
        context:
          `I've seen a lot of drunk people walking and falling as well…The photo I took is a pub. It's just around the corner. And my dad used 
          to take me and my two kids there every Sunday, We used to get a loaf of bread and we'd sit on the end of the like the decking bit. 
          And we've thrown the bread in for the ducks while my dad was in the pub. They were relatively nice, times where it was family oriented. 
          Because when I was younger, we did have family time, but it weren't as much because my mom, obviously she'd be probably pissed. 
          But mom's a functioning drinker. She held down a job.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51058, lng: -0.03312 },
  },
  {
    id: 6,
    name: "6",
    image: "/gems-issues/SJ13_Photo6.jpeg",
    contexts: [
      {
        context:
          `This is the area that actually, I avoid. Because a few times— like my friend, [name], she was mugged walking down here. And it was 
          around people, around friends… Yeah, they took her money. Because this is where all the drug addicts come and wait for the dealers 
          or they wait for someone to come to score drugs. And then they will take their stuff off them.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51000, lng: -0.03010 },
  },
];

const TM08_Markers = [
  {
    id: 1,
    name: "1",
    image: "/gems-issues/TM08_Photo1.jpeg",
    contexts: [
        {
          context:
            `You have to press this all the time to get out.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.50845, lng: -0.02503 },
  },
  {
    id: 2,
    name: "2",
    image: "/gems-issues/TM08_Photo2.jpeg",
    contexts: [
        {
          context:
            `And on the way in, you have to press this.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.50854, lng: -0.02505 },
  },
  {
    id: 3,
    name: "3",
    image: "/gems-issues/TM08_Photo3.jpeg",
    contexts: [
        {
          context:
            `This is near the Westferry Station. I took that photo because I use that station a lot. And this is how close it is. So, I don't have a long way to walk. Right, because I can't walk far. 
            Yeah. And that's why I always have to have someone with me. Yeah, in case I do one of me falls. Because that can be walking along with you. And I can just go, and you're probably still 
            walking. Yeah. So, that's how dangerous it is for me.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "concern",
    position: { lat: 51.50881, lng: -0.02523 },
  },
  {
    id: 4,
    name: "4",
    image: "/gems-issues/TM08_Photo4.jpeg",
    contexts: [
      {
        context:
          `Here, there's a lot of people that hang about. That hang about in this station, doing their drugs on the stairs. They're using cocaine and heroin. And they leave all their paper bags and 
          everything for other people to clean up.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.50914, lng: -0.02639 },
  },
  {
    id: 5,
    name: "5",
    image: "/gems-issues/TM08_Photo5.jpeg",
    contexts: [
      {
        context:
          `Here, around here, is where a lot of girls from the hostel, they score here.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.50938, lng: -0.02694 },
  },
  {
    id: 6,
    name: "6",
    image: "/gems-issues/TM08_Photo6.jpeg",
    contexts: [
        {
          context:
            `This part here, yeah is, where it gets very busy here [echo from being under tunnel]. 
            Yeah it gets very busy, where the girls come and do the scoring here, which I think is 
            wrong because of the people that live in the area. There's a mosque there.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.50982, lng: -0.02788 },
  },
  {
    id: 7,
    name: "7",
    image: "/gems-issues/TM08_Photo7.jpeg",
    contexts: [
        {
          context:
            `This part here, yeah is, where it gets very busy here [echo from being under tunnel]. 
            Yeah it gets very busy, where the girls come and do the scoring here, which I think is 
            wrong because of the people that live in the area. There's a mosque there.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.50982, lng: -0.02788 },
  },
  {
    id: 8,
    name: "8",
    image: "/gems-issues/TM08_Photo8.jpeg",
    contexts: [
        {
          context:
            `This part here, yeah is, where it gets very busy here [echo from being under tunnel]. 
            Yeah it gets very busy, where the girls come and do the scoring here, which I think is 
            wrong because of the people that live in the area. There's a mosque there.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "concern",
    position: { lat: 51.51000, lng: -0.02803 },
  },
  {
    id: 9,
    name: "9",
    image: "/gems-issues/TM08_Photo9.jpeg",
    contexts: [
      {
        context:
          `This part here, yeah is, where it gets very busy here [echo from being under tunnel]. 
          Yeah it gets very busy, where the girls come and do the scoring here, which I think is 
          wrong because of the people that live in the area. There's a mosque there.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51006, lng: -0.02856 },
  },
  {
    id: 10,
    name: "10",
    image: "/gems-issues/TM08_Photo10.jpeg",
    contexts: [
      {
        context:
          `So this here, this corner here. Yeah. I mean, take this here. And it's got the school in it. 
          And what I don't agree with here. There's a school there. And people just don't care and score 
          even with children. And in front of the mums when they're picking them up from school, taking 
          them to school.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51021, lng: -0.02890 },
  },
  {
    id: 11,
    name: "11",
    image: "/gems-issues/TM08_Photo11.jpeg",
    contexts: [
        {
          context:
            `This here, Gill Street, is my doctors.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.51092, lng: -0.02916 },
  },
  {
    id: 12,
    name: "12",
    image: "/gems-issues/TM08_Photo12.jpeg",
    contexts: [
        {
          context:
            `And that there. You see what I mean? It's a community, but that there is another place that 
            people hang about and do the scoring, do the smoking.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.51100, lng: -0.02920 },
  },
  {
    id: 13,
    name: "13",
    image: "/gems-issues/TM08_Photo13.jpeg",
    contexts: [
        {
          context:
            `Now, here. This shop here, a lot of people actually come here. Knock about here, yeah, it's open all night. Right. 
            Old geezers, all working girls, all beggars. There's no one there at the moment.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "concern",
    position: { lat: 51.51184, lng: -0.02927 },
  },
  {
    id: 14,
    name: "14",
    image: "/gems-issues/TM08_Photo14.jpeg",
    contexts: [
      {
        context:
          `I was really, really ill. And all because it was their mistake for not sending my prescription to the chemist. Yeah, that I 
          missed the weekend one. So I'll come here Friday, half past five. Reset so, right I can't get my prescription 'til Monday. So 
          that knocked me right back. Even though I had that excuse there. They had to start me, yeah well, over again. But I'm so glad 
          that I had methadone saved.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51195, lng: -0.02890 },
  },
  {
    id: 15,
    name: "15",
    image: "/gems-issues/TM08_Photo15.jpeg",
    contexts: [
      {
        context:
          `This is my chemist, they are very nice people.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51200, lng: -0.02837 },
  },
  {
    id: 16,
    name: "16",
    image: "/gems-issues/TM08_Photo16.jpeg",
    contexts: [
        {
          context:
            `And just come here. This is where we go for the methadone, you go behind there. Because some people have to drink it in. So rather than doing it in 
            front of the customers,  they have this kind of private compartment.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.51196, lng: -0.02826 },
  },
  {
    id: 17,
    name: "17",
    image: "/gems-issues/TM08_Photo17.jpeg",
    contexts: [
        {
          context:
            `Because this machine turns off at a certain time. They like it to be known that later than six thirty because 
            it turns off automatically because it's a class A drug machine.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.51198, lng: -0.02821 },
  },
  {
    id: 18,
    name: "18",
    image: "/gems-issues/TM08_Photo18.jpeg",
    contexts: [
        {
          context:
            `So here, all round here is a 'drug area' where dealers, working girls come, things like that. People come and beg in 
            the middle of these roads. Doing the windows. Yeah.`,
          createdAt: Date.now().toString(),
        },
    ],
    type: "concern",
    position: { lat: 51.51207, lng: -0.02800 },
  },
  {
    id: 19,
    name: "19",
    image: "/gems-issues/TM08_Photo19.jpeg",
    contexts: [
      {
        context:
          `Luke house. This is the other hostel. Luke house is another part, right, with the area where they put us all in. Yeah. Because we're all talking the same thing: 
          That we've been here to fail. Because we've been longtime drug users. Right. So the people I know at Riverside, are long-time drug users. 
          Yeah, right. I'm 66 years old and I'm in a hostel. Yeah. I don't think I should be there. I don't think it's right.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51176, lng: -0.02578 },
  },
  {
    id: 20,
    name: "20",
    image: "/gems-issues/TM08_Photo20.jpeg",
    contexts: [
      {
        context:
          `Now this part here is another one. Yeah. Where [pause] drug dealers again. Yeah, this is all that is around our hostel. So all that walking around in that circle, yeah, 
          it's just drugs, drugs, drugs, drugs. You know, me and [friend] are so sick about it.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51046, lng: -0.02566 },
  },
  {
    id: 21,
    name: "21",
    image: "/gems-issues/TM08_Photo21.jpeg",
    contexts: [
      {
        context:
          `(Research Note: [need to ID])`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.51009, lng: -0.02538 },
  },
];

const ZS07_Markers = [
  {
    id: 1,
    name: "1",
    image: "/gems-issues/ZS07_Photo1.jpeg",
    contexts: [
        {
          context:
            "This was training. [Test Image]",
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.517070, lng: -0.071350 },
  },
  {
    id: 2,
    name: "2",
    image: "gems-issues/ZS07_Photo2.jpeg",
    contexts: [
      {
        context:
          "Yeah, in this place, because people- they are using drugs, smoking, like drinking cans..like cans and stuff. It’s, like, not good.",
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 51.517237, lng: -0.071472 },
  },
  {
    id: 3,
    name: "3",
    image: "/gems-issues/ZS07_Photo3.jpeg",
    contexts: [
      {
        context:
          "Because in this place, the drug dealers [are] coming, they [are] selling drugs. We need to do something about that.",
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 51.517687, lng: -0.071511 },
  },
  {
    id: 4,
    name: "4",
    image: "/gems-issues/ZS07_Photo4.jpeg",
    contexts: [
      {
        context:
          `[This is] the day center, and after like three o'clock I'm leaving, this area, basically.
          It's good here, when you're coming. You can, like, do your skills and stuff, training.
          That's why I'm coming here all the time. I want to be a person, not to do nothing,
          basically. Yeah. Dellow is a good place as well.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.517612, lng: -0.071642 },
  },
  {
    id: 5,
    name: "5",
    image: "/gems-issues/ZS07_Photo5.jpeg",
    contexts: [
      {
        context:
          `This is, like, Founder’s House. I was living, like, in this place in cold weather like
          for homeless people and basically displaced from Salvation Army. Yeah. So they
          provide housing and benefits as well to get, some, they [are] doing like training as
          well.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.517588, lng: -0.068986 },
  },
];

const tagWithSource = (source, markers) => 
    markers.map(marker => ({ ...marker, source }));

const allMarkers = [
    ...tagWithSource("AB11", AB11_Markers),
    ...tagWithSource("CK09", CK09_Markers),
    ...tagWithSource("DM12", DM12_Markers),
    ...tagWithSource("DRESET February 9", DRESETFebruary9_Markers),
    ...tagWithSource("DRESET February 17", DRESETFebruary17_Markers),
    ...tagWithSource("DRESET March 2", DRESETMarch2_Markers),
    ...tagWithSource("DRESET March 27 (1)", DRESETMarch27_1_Markers),
    ...tagWithSource("DRESET March 27 (2)", DRESETMarch27_2_Markers),
    ...tagWithSource("SJ13", SJ13_Markers),
    ...tagWithSource("TM08", TM08_Markers),
    ...tagWithSource("ZS07", ZS07_Markers)
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route tabIndex="2" path="/" element={<ImageGallery markers={allMarkers} />} />
      {/* <Route tabindex="3" path="/mapoverviewinformational" element={<MapOverviewInformational />} /> */}
      <Route tabIndex="3" path="/AB11_Walk" element={<GenericMap key="AB11" mapName="AB11 Walk" isAllMarkers={false} markers={AB11_Markers} />} />
      <Route tabIndex="4" path="/AN10_Walk" element={<GenericMap key="AN10" mapName="AN10 Walk"  isAllMarkers={false} markers={AN10_Markers} />} />
      <Route tabIndex="5" path="/CK09_Walk" element={<GenericMap key="CK09" mapName="CK09 Walk" isAllMarkers={false} markers={CK09_Markers} />} />
      <Route tabIndex="6" path="/DM12_Walk" element={<GenericMap key="DM12" mapName="DM12 Walk" isAllMarkers={false} markers={DM12_Markers} />} />
      <Route tabIndex="7" 
        path="/MultipleMaps" 
          element={
              <MultipleMaps 
                  key="DRESET_February9" 
                  mapName="DRESET February 9 Walk" 
                  isAllMarkers={false} 
                  markersDRESETFebruary9={DRESETFebruary9_Markers}
                  markersDRESETFebruary17={DRESETFebruary17_Markers}
                  markersDRESETMarch2={DRESETMarch2_Markers}
                  markersDRESETMarch27_1={DRESETMarch27_1_Markers}
                  markersDRESETMarch27_2={DRESETMarch27_2_Markers}
              />
          } 
      />
      <Route tabIndex="8" path="/SJ13_Walk" element={<GenericMap key="SJ13" mapName="SJ13 Walk" isAllMarkers={false} markers={SJ13_Markers} />} />
      <Route tabIndex="9" path="/TM08_Walk" element={<GenericMap key="TM08" mapName="TM08 Walk" isAllMarkers={false} markers={TM08_Markers} />} />
      <Route tabIndex="10" path="/ZS07_Walk" element={<GenericMap key="ZS07" mapName="ZS07 Walk" isAllMarkers={false} markers={ZS07_Markers} />} />
      <Route tabIndex="11" path="/allMarkers" element={<GenericMap key="allMarkers" mapName="All Walk Data" isAllMarkers={true} markers={allMarkers} />} />
    </Routes>
  </Router>
);