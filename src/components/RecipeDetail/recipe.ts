export const recipe = {
  image: "/RecipeDetail/food.jpg",
  name: "Delicious Food",
  subtitle: "A tasty and healthy meal",
  servings: 4,
  time: "30 minutes",
  author: {
    name: "John Doe",
    profileImage: "/RecipeDetail/food.jpg",
  },
  ingredients: [
    "1 cup of ingredient 1",
    "2 cups of ingredient 2",
    "1/2 cup of ingredient 3",
    "1 tbsp of ingredient 4",
  ],
  steps: [
    {
      description:
        "먼저 재료 1을 깨끗이 씻은 후 물기를 제거합니다. 그런 다음 적당한 크기로 썰어 준비한 후, 중간 불로 예열한 팬에 살짝 볶아 재료의 풍미를 끌어냅니다. 이 과정은 재료의 본연의 맛을 살리고 요리의 기본 베이스를 형성하는 데 중요합니다.",
      image: "/RecipeDetail/food.jpg",
    },
    {
      description:
        "재료 2와 재료 3을 큰 볼에 넣고 잘 섞어줍니다. 이때 재료들이 고르게 섞이도록 숟가락이나 주걱을 사용해 충분히 저어줍니다. 혼합하는 과정에서 덩어리가 생기지 않도록 주의하며, 필요에 따라 소금이나 후추로 간을 조절할 수 있습니다.",
      image: "/RecipeDetail/food.jpg",
    },
    {
      description:
        "잘 섞은 재료들을 냄비나 팬에 옮긴 후, 중약불에서 20분간 조리합니다. 이때 재료가 바닥에 눌어붙지 않도록 가끔 저어주는 것이 좋습니다. 조리 과정에서 재료의 맛이 어우러지고, 시간이 지남에 따라 농도가 진해지며 풍미가 깊어집니다.",
      image: "/RecipeDetail/food.jpg",
    },
    {
      description:
        "20분간 충분히 익힌 후 불을 끄기 직전, 재료 4를 추가합니다. 재료 4는 신선한 상태로 넣어야 향과 식감을 살릴 수 있습니다. 가볍게 저어 모든 재료가 잘 섞이도록 한 후, 예쁜 그릇에 담아 따뜻할 때 바로 서빙하면 완성입니다.",
      image: "/RecipeDetail/food.jpg",
    },
  ],
};

// 추천 음식 mock 데이터
export const recommendedFoods = [
  {
    image: "/RecipeDetail/food.jpg",
    name: "Spaghetti Carbonara",
    description: "Creamy Italian pasta with bacon and cheese.",
  },
  {
    image: "/RecipeDetail/food.jpg",
    name: "Chicken Curry",
    description: "Spicy and flavorful Indian chicken curry.",
  },
  {
    image: "/RecipeDetail/food.jpg",
    name: "Beef Tacos",
    description: "Mexican tacos with seasoned beef and fresh toppings.",
  },
  {
    image: "/RecipeDetail/food.jpg",
    name: "Vegetable Stir Fry",
    description: "Healthy stir-fried vegetables with a tangy sauce.",
  },
];
