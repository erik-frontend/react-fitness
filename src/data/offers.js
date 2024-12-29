import { arm, heartIcon, offerImg1, offerImg2 } from "../assets/img/index"

export const offers = [
    {
        icon: arm,
        title: "Crush any strength program with our suite of strength equipment",
        listItems: [
          "Fully fitted powerlifting and strongman section",
          "Olympic lifting platforms, weights, and bars",
          "Dumbells ranging 5lbs-250lbs",
        ],
        buttonText: "Join Now",
        image: offerImg1,
        reverse: false,
      },
      {
        icon: heartIcon,
        title: "Be guided every step of the way with one of our world class coaches",
        listItems: ["Weightloss", "Competitive CrossFit", "Powerlifting"],
        buttonText: "Join Now",
        image: offerImg2,
        reverse: true,
      },
]