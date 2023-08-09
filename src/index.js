import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  // MapOverviewInformational,
  Main,
  GenericMap,
} from "./components";
import "./index.css";

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
    contexs: [
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

const allMarkers = [...AB11_Markers, ...CK09_Markers, ...DM12_Markers, ...SJ13_Markers, ...TM08_Markers, ...ZS07_Markers];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar tabIndex="1"/>
    <Routes>
      {/* <Route tabIndex="2" path="/" element={<Main />} /> */}
      {/* <Route tabIndex="3" path="/mapoverviewinformational" element={<MapOverviewInformational />} /> */}
      <Route tabIndex="2" path="/AB11_Walk" element={<GenericMap key="AB11" isAllMarkers={false} markers={AB11_Markers} />} />
      <Route tabIndex="3" path="/AN10_Walk" element={<GenericMap key="AN10" isAllMarkers={false} markers={AN10_Markers} />} />
      <Route tabIndex="4" path="/CK09_Walk" element={<GenericMap key="CK09" isAllMarkers={false} markers={CK09_Markers} />} />
      <Route tabIndex="5" path="/DM12_Walk" element={<GenericMap key="DM12" isAllMarkers={false} markers={DM12_Markers} />} />
      <Route tabIndex="6" path="/SJ13_Walk" element={<GenericMap key="SJ13" isAllMarkers={false} markers={SJ13_Markers} />} />
      <Route tabIndex="7" path="/TM08_Walk" element={<GenericMap key="TM08" isAllMarkers={false} markers={TM08_Markers} />} />
      <Route tabIndex="8" path="/ZS07_Walk" element={<GenericMap key="ZS07" isAllMarkers={false} markers={ZS07_Markers} />} />
      <Route tabIndex="9" path="/allMarkers" element={<GenericMap key="allMarkers" isAllMarkers={true} markers={allMarkers} />} />
    </Routes>
  </Router>
);