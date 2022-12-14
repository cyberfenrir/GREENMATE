const products = [
    {
      '_id': '1',
      'name': 'Aglaonema Valentine Red Hybrid',
      'image': './Aglaonema Valentine Red Hybrid.png',
      'description':
        'Aglaonema Valentine Red Hybrid is a succulent plant that is not only colorful, but also easy to care for. This particular variety of Aglaonema has a dark green stem and dark green leaves that have a red-brown coloring on the underside. Aglaonema Valentine Red Hybrid is a low maintenance plant that can be grown in indirect light. In fact, Aglaonema Valentine Red Hybrid thrives in a shaded area. This variety of Aglaonema also prefers cool temperatures, so it can be placed in a cooler room. Aglaonema Valentine Red Hybrid is not a very demanding plant, so it can be grown in most conditions.',
      'brand': 'Apple',
      'category': 'Indoor Plant',
      'price': 550,
      'countInStock': 10,
      'rating': 4.5,
      'numReviews': 12,
    },
    {
        
      '_id': '2',
      'name': 'Dracaena Colorama',
      'image': './Dracaena Colorama.png',
      'description':
        'Dracaena Colorama prefers medium indirect sunlight. Brown spots on the leaves usually indicate the plant is getting too much light. Pale leaves, slow growth, and small new leaves indicate it is not getting enough light. Overwatering causes root rot and is the main reason a Colorama plant dies.',
      'brand': 'Apple',
      'category': 'Indoor Plant',
      'price': 600,
      'countInStock': 10,
      'rating': 4.5,
      'numReviews': 12,
    },
    {
        '_id': '3',
        'name': 'Golden Pothos',
        'image': './Golden Pothos.png',
        'description':
          'The plant has a multitude of common names including golden pothos, Ceylon creeper, hunter’s robe, ivy arum, money plant, silver vine, Solomon Islands ivy, marble queen, and taro vine. It is also called devil’s vine or devil’s ivy because it is almost impossible to kill and it stays green even when kept in the dark. It is sometimes mistakenly labeled as a Philodendron in plant stores. It is commonly known as money plant in many parts of the Indian subcontinent. Plant Ht-26cm Dia-35cm Plastic pot size-12.5cm.',
        'brand': 'Apple',
        'category': 'Indoor Plant',
        'price': 450,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    {
        '_id': '4',
        'name': 'Peace Lily',
        'image': './Peace Lily.png',
        'description':
          'Peace lilies are sturdy plants with glossy, dark green oval leaves that narrow to a point. The leaves rise directly from the soil. These plants also periodically produce lightly fragrant white flowers that resemble calla lilies. The long-lasting flowers start out pale green and slowly turn creamy white as they open. Plant Name -Peace Lily Plant Placement – Indoor & Outdoor Plant Type- Flowering Plant/ Air Purifying Plant Plastic Pot Plant Ht-40cm Dia-28cm Plastic Pot size-8.5cm.',
        'brand': 'Apple',
        'category': 'Indoor Plant',
        'price': 500,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    {
        '_id': '5',
        'name': 'Cotton Candy Fern',
        'image': './Cotton Candy Fern.png',
        'description':
          'Cotton Candy Fern is a small houseplant that is native to China. It has a light pink color and is a delicate, airy plant. The plant grows to be about 10 inches tall and wide. Cotton Candy Ferns are great for those who want a small, easy to care for plant. They can grow in a variety of light conditions and need only to be watered about once a week..',
        'brand': 'Apple',
        'category': 'Outdoor Plant',
        'price': 399,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    {
        '_id': '6',
        'name': 'Iresine Plant',
        'image': './Iresine Plant.png',
        'description':
          'Iresine herbstii, commonly called bloodleaf or beefsteak plant. is native to Brazil. It is noted for its ornamental foliage. This is a short-lived perennial that is often grown as an annual. In its native habitat, it may grow to 5′ tall with spread to 3′ wide.',
        'brand': 'Apple',
        'category': 'Outdoor Plant',
        'price': 280,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    {
         
        '_id': '7',
        'name': 'Broadleaf Lady Palm',
        'image': './Broadleaf Lady Palm.png',
        'description':
          'Rhapis excelsa grows up to 4 m in height and 30 mm in diameter in multi-stemmed clumps with glossy, palmate leaves divided into broad, ribbed segments. Leaf segments are single or few in young plants and increase to a dozen or more in mature plants; segments are divided to the petiole. Leaf-ends are saw-toothed unlike most other palms, occurring on slender petioles ranging from 20 to 60 cm in length.',
        'brand': 'Apple',
        'category': 'Outdoor Plant',
        'price': 449,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    {
        '_id': '8',
        'name': 'Stromanthe Triostar Plant',
        'image': './Stromanthe Triostar Plant.png',
        'description':
          'Feed the Stromanthe Triostar a rich compost and a well-balanced water-soluble fertilizer, reduced to half its strength, in its growing months of spring and early summer when its sprouting new leaves.Variegated Stromanthe sanguinea 'Triostar' plant - Pet Safe Plant - Air-purifying Plant - Triostar Plant - more bushy plant - pink variegated you will receive 1 pink variegated triostar plant as shown in the picture.',
        'brand': 'Apple',
        'category': 'Outdoor Plant',
        'price': 600,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    {
        '_id': '9',
        'name': 'Bhringraj Plant - Eclipta Alba',
        'image': './Bhringraj Plant - Eclipta Alba.png',
        'description':
          'Bhringraj plant is a flowering plant that is used for a variety of purposes. It is used as a natural hair care product and has a long history of use in Ayurvedic medicine. The plant has also been used for its medicinal properties, including being used to treat depression, diarrhea, indigestion, and nausea. It is also believed to improve hair health and be a natural hair dye.',
        'brand': 'Apple',
        'category': 'Medicinal Plant',
        'price': 220,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    {
        '_id': '10',
        'name': 'Banyan Plant',
        'image': './Banyan Plant.png',
        'description':
          'There are many reasons to purchase a Banyan Plant. For one, they are very beautiful. With its dark green leaves and deep red trunk, it will brighten up any room. Another reason to buy a Banyan Plant is that they are very hardy. With their thick, tough bark, they can withstand extreme weather conditions. The last reason to buy a Banyan Plant is that they are very healthy. With their high levels of oxygen, they will make your home a cleaner and healthier place. The Banyan Plant is the perfect gift for any occasion.',
        'brand': 'Apple',
        'category': 'Medicinal Plant',
        'price': 199,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    {
        '_id': '11',
        'name': 'Ashwagandha Plant',
        'image': './Ashwagandha Plant.png',
        'description':
          'Ashwagandha plant is an erect branching growing shrub, with a height up to 1.5 meters. Ashwagandha is a hardy and drought tolerant plant. Ashwagandha leaves are dull green color, an elliptic shape, usually up to 10 to 12 cm in length. Usually, the flowers are small, greenish yellow and bell-shaped.',
        'brand': 'Apple',
        'category': 'Medicinal Plant',
        'price': 199,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    {
        '_id': '12',
        'name': 'Aloevera Plant',
        'image': './Aloevera Plant.png',
        'description':
          'Aloe vera belongs to the Asphodelaceae family. Aloe vera cultivated for agricultural and medicinal uses. Aloe vera also used for decorative purposes and grows successfully indoors and outdoor. The leaves are thick and fleshy, green to grey-green.',
        'brand': 'Apple',
        'category': 'Medicinal Plant',
        'price': 199,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    {
        '_id': '13',
        'name': 'Sunflower Seeds',
        'image': './Sunflower Seeds.png',
        'description':
          'Sunflower seeds are usually classified by the pattern on their husks. If the husk is solid black, the seeds are called black oil sunflower seeds. The crops may be referred to as oilseed sunflower crops. These seeds are usually pressed to extract their oil. Striped sunflower seeds are primarily eaten as a snack food; as a result, they may be called confectionery sunflower seeds.',
        'brand': 'Apple',
        'category': 'Seeds',
        'price': 99,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    {
        '_id': '14',
        'name': 'Pumpkin Seeds',
        'image': './Pumpkin Seeds.png',
        'description':
          'Pumpkin seeds are rich in vitamins and minerals like manganese and vitamin K, both of which are important in helping wounds heal. They also contain zinc, a mineral that helps the immune system fight bacteria and viruses. Pumpkin seeds are also an excellent source of Phosphorus.',
        'brand': 'Apple',
        'category': 'Seeds',
        'price': 99,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    {
        '_id': '15',
        'name': 'Sesame Seeds',
        'image': './Sesame Seeds.png',
        'description':
          'Sesame seeds are a high energy food that help to provide optimum health and wellness. They are an excellent source of high quality protein which is most beneficial for growth, especially in children. Sesame seeds are also high in minerals such as calcium, iron, zinc, magnesium, and selenium.',
        'brand': 'Apple',
        'category': 'Seeds',
        'price': 99,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    {
        '_id': '16',
        'name': 'Thyme Seeds',
        'image': './Thyme Seeds.png',
        'description':
          'Easy to grow from seed though germination is slow taking from 14 to 28 days. Seeding best started indoors in a flat where temperature can be kept around 70°. Thyme seeds are very small, 170,000 to the ounce. One ounce needed to plant one acre. Sow thyme seed in sterilized growing medium either in shallow rows or scatter on top with little or no covering. After they take root, have been transplanted to 2- 1/4" peat pots and reach a height of 2-3 inches, they may be moved outside to cooler weather. For small gardens, space plants about 9 inches apart, for field production space plants 12-18 inches apart in rows 3 feet apart.',
        'brand': 'Apple',
        'category': 'Seeds',
        'price': 99,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    {
        '_id': '17',
        'name': 'Spray Bottle 1.5 L Hand Held Sprayer (Pack Of 1)',
        'image': './Spray Bottle 1.5 L Hand Held Sprayer (Pack Of 1).png',
        'description':
          'Blue Spray Bottle Is A Hand Held Spray Bottle Which Is Much Adjustable In Hand And Can Be Used For Gardening, Cleaning Vegetables. Adjustable Brass Nozzle, Durable And Easy To Use. It Is Suitable For Watering, Fertilizing, Foam Spraying, Sanitizing. Best Gardening Spray Bottle For Herbicides, Pesticides, Plant Flowers, Watering Flowers And Fertilizing.',
        'brand': 'Apple',
        'category': 'Gardening Tools',
        'price': 299,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    {
        '_id': '18',
        'name': 'Large Pruning Secateur',
        'image': './Large Pruning Secateur.png',
        'description':
          'Pruning Secateur is a piece of cultivation and silviculture in which the parts of plants or trees, for example, branches, buds and roots are cut or trimmed for different purposes. For this reason, these pruning secateurs are all that much required and considered as the best types of gear. Falcon Pruning Secateur shear 10 inch - 225 mm. Non Slip Plastic Grip for firm Handling and Easy use',
        'brand': 'Apple',
        'category': 'Gardening Tools',
        'price': 599,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    {
        '_id': '19',
        'name': 'Hand Cultivator',
        'image': './Hand Cultivator.png',
        'description':
          'Hand cultivators are small, handheld gardening tools that are suitable for digging and breaking up the soil from the depth. It can be helpful for you to loosen the soil and remove weeds without putting much strain on your back and arms.',
        'brand': 'Apple',
        'category': 'Gardening Tools',
        'price': 299,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    {
        '_id': '20',
        'name': 'Hand Digging Trowel',
        'image': './Hand Digging Trowel.png',
        'description':
          'A trowel is a hand tool used to dig small soil furrows, remove surface roots of plants, apply and smooth, or moving small amounts of material. There are a variety of masonry trowels, garden trowels, and float trowels ready in the market for all the operators. A power trowel is much larger gasoline or electrically powered walk-behind device with rotating paddles which are used to finish concrete floors.',
        'brand': 'Apple',
        'category': 'Gardening Tools',
        'price': 299,
        'countInStock': 10,
        'rating': 4.5,
        'numReviews': 12,
    },
    
    
  ]
  export default products