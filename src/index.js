import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  MapOverviewInformational,
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
    image: "/gems-issues/AN10_Photo2.jpeg",
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
    image: "/gems-issues/AN10_Photo3.jpeg",
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
  {
    id: 4,
    name: "4",
    image: "/gems-issues/AN10_Photo4.jpeg",
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
    image: "/gems-issues/AN10_Photo5.jpeg",
    contexts: [
      {
        context:
          `This is, like, Founder’s House. I was living, like, in this place in cold weather likes
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

const CK09_Markers = [
  {
    id: 1,
    name: "1",
    image: "/gems-issues/AN10_Photo1.jpeg",
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
    image: "/gems-issues/AN10_Photo2.jpeg",
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
    image: "/gems-issues/AN10_Photo3.jpeg",
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
  {
    id: 4,
    name: "4",
    image: "/gems-issues/AN10_Photo4.jpeg",
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
    image: "/gems-issues/AN10_Photo5.jpeg",
    contexts: [
      {
        context:
          `This is, like, Founder’s House. I was living, like, in this place in cold weather likes
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

const DM12_Markers = [
  {
    id: 1,
    name: "1",
    image: "/gems-issues/AN10_Photo1.jpeg",
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
    image: "/gems-issues/AN10_Photo2.jpeg",
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
    image: "/gems-issues/AN10_Photo3.jpeg",
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
  {
    id: 4,
    name: "4",
    image: "/gems-issues/AN10_Photo4.jpeg",
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
    image: "/gems-issues/AN10_Photo5.jpeg",
    contexts: [
      {
        context:
          `This is, like, Founder’s House. I was living, like, in this place in cold weather likes
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

const SJ13_Markers = [
  {
    id: 1,
    name: "1",
    image: "/gems-issues/AN10_Photo1.jpeg",
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
    image: "/gems-issues/AN10_Photo2.jpeg",
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
    image: "/gems-issues/AN10_Photo3.jpeg",
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
  {
    id: 4,
    name: "4",
    image: "/gems-issues/AN10_Photo4.jpeg",
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
    image: "/gems-issues/AN10_Photo5.jpeg",
    contexts: [
      {
        context:
          `This is, like, Founder’s House. I was living, like, in this place in cold weather likes
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

const TM08_Markers = [
  {
    id: 1,
    name: "1",
    image: "/gems-issues/AN10_Photo1.jpeg",
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
    image: "/gems-issues/AN10_Photo2.jpeg",
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
    image: "/gems-issues/AN10_Photo3.jpeg",
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
  {
    id: 4,
    name: "4",
    image: "/gems-issues/AN10_Photo4.jpeg",
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
    image: "/gems-issues/AN10_Photo5.jpeg",
    contexts: [
      {
        context:
          `This is, like, Founder’s House. I was living, like, in this place in cold weather likes
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

const allMarkers = [...AB11_Markers, ...ZS07_Markers];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar tabindex="1"/>
    <Routes>
      <Route tabindex="2" path="/" element={<Main />} />
      <Route tabindex="3" path="/mapoverviewinformational" element={<MapOverviewInformational />} />
      <Route tabindex="4" path="/AB11_Walk" element={<GenericMap markers={AB11_Markers} />} />
      <Route tabindex="5" path="/AN10_Walk" element={<GenericMap markers={AN10_Markers} />} />
      <Route tabindex="6" path="/CK09_Walk" element={<GenericMap markers={CK09_Markers} />} />
      <Route tabindex="7" path="/DM12_Walk" element={<GenericMap markers={DM12_Markers} />} />
      <Route tabindex="8" path="/SJ13_Walk" element={<GenericMap markers={SJ13_Markers} />} />
      <Route tabindex="9" path="/TM08_Walk" element={<GenericMap markers={TM08_Markers} />} />
      <Route tabindex="10" path="/ZS07_Walk" element={<GenericMap markers={ZS07_Markers} />} />
      <Route tabindex="11" path="/allMarkers" element={<GenericMap markers={allMarkers} />} />
    </Routes>
  </Router>
);