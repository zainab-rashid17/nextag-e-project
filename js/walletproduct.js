const products = [
    {
        title: "Executive Essence Wallet",
        description: "Make a statement with the Executive Essence Wallet. Crafted in sleek black leather, it exudes professionalism while offering ample card slots and a secure coin pocket. Elevate your business style with this sophisticated accessory."
    },
    {
        title: "Radiant Aura Wallet",
        description: "Elevate your everyday carry with the Radiant Aura Wallet. Cast in a shimmering metallic rose gold, this compact masterpiece merges opulence with functionality. Featuring thoughtfully designed card slots, a secure coin pocket, and a bill compartment, it's a dazzling statement accessory for those who appreciate both style and practicality."
    },
    {
        title: "Tech Defender RFID Wallet",
        description: "Stay secure and stylish with the Tech Defender RFID Wallet. Featuring advanced RFID-blocking technology, this wallet protects your cards from electronic theft while maintaining a sleek and modern design."
    },
    {
        title: "Metropolitan Elegance Wallet",
        description: "Make a seamless transition from day to night with the Metropolitan Elegance Wallet. Crafted from sleek black leather, its minimalist design exudes urban sophistication. Abundant card slots and a zippered coin pocket make it a stylish companion for your metropolitan lifestyle."
    },
    {
        title: "Timeless Charm Wallet",
        description: "Indulge in timeless elegance with the Timeless Charm Wallet. The rich cognac leather exterior evokes classic charm, while the meticulously arranged interior offers a haven for cards, coins, and bills. This wallet is a perfect fusion of sophistication and practicality."
    },
    {
        title: "Vintage Virtue Wallet",
        description: "Timeless elegance meets practicality in the Vintage Virtue Wallet. Its rich leather exterior houses a well-organized interior for cards, bills, and coins, making it a versatile everyday accessory."
    }, {
        title: "Eco Chic Sustainable Wallet",
        description: "Redefine fashion with a conscience through the Eco Chic Sustainable Wallet. Crafted from eco-friendly materials, its chic design conceals an interior optimized for organization. For the eco-conscious trendsetter, this wallet is a sustainable and stylish choice."
    }, {
        title: "Urban Navigator Wallet",
        description: "Navigate city life effortlessly with the Urban Navigator Wallet. Designed for urban functionality, it combines a compact form with spacious card slots and a convenient ID window, ensuring you're always prepared."
    }, {
        title: "TechSculpt Commuter Wallet",
        description: "Commute in style with the Tech Sculpt Commuter Wallet. Integrating tech-friendly features like RFID protection and a designated phone pocket, it ensures your essentials are secure and easily accessible on the go."
    }, {
        title: "Digital Diva Smart Wallet",
        description: "Stay ahead in the digital age with the Digital Diva Smart Wallet. The sleek design incorporates RFID-blocking technology to secure your essentials while adding a touch of modernity to your daily carry. Elevate your tech-savvy style with this intelligent accessory."
    }, {
        title: "Wanderlust Passport Wallet",
        description: "Discover the perfect blend of style and functionality with the Wanderlust Passport Wallet. This chic accessory is meticulously designed for globetrotters, featuring dedicated slots for passports, cards, and travel essentials. Jet-set with confidence and flair."
    }, {
        title: "Adventure Ally RFID Wallet",
        description: "Embark on adventures with the Adventure Ally RFID Wallet. Its rugged design, RFID protection, and strategically placed compartments make it the ideal companion for the modern explorer."
    }, {
        title: "Boho Dream Wallet",
        description:"Embrace carefree bohemian vibes with the Boho Dream Wallet. The playful fringe detail and vibrant colors make a bold fashion statement, while the interior design ensures your valuables stay organized with a touch of boho-chic flair."
    }, {
        title: "Casual Class Slim Wallet",
        description: "Embrace casual coolness with the Casual Class Slim Wallet. This minimalist wallet offers a slim profile without compromising on functionality, making it perfect for those who prefer a lightweight and stylish accessory."
    }, {
        title: "Sports Elite Athlete Wallet",
        description: "Score points for style with the Sports Elite Athlete Wallet. Crafted for the active lifestyle, it combines durable materials with practical features, ensuring your essentials stay secure whether you're on the field or off."
    }, {
        title: "Nature Serene Floral Wallet",
        description: "Carry the serenity of nature with the Nature Serene Floral Wallet. Adorned with a delicate floral pattern, this wallet brings a touch of calmness to your everyday life. Immerse yourself in nature's beauty while keeping your cards and cash impeccably organized."
    }, {
        title: "Retro Revive Money Clip Wallet",
        description: "Channel retro vibes with the Retro Revive Money Clip Wallet. Its classic design and sturdy money clip keep your bills organized, while the compact size makes it a timeless and convenient accessory for everyday use."
    }, {
        title: "Tech Smart Wallet",
        description: "Elevate your tech-savvy style with the Tech Smart Wallet. Packed with features like Bluetooth tracking, RFID protection, and a sleek design, it's the epitome of modern sophistication for the connected gentleman."
    }, {
        title: "Outdoor Pioneer Utility Wallet",
        description: "Conquer the outdoors with the Outdoor Pioneer Utility Wallet. Designed for adventure, it features rugged materials, a built-in multitool, and ample storage, ensuring you're ready for any expedition."
    }, {
        title: "Gentleman’s Select Wallet",
        description: "Choose timeless elegance with the Gentleman’s Select Wallet. Crafted in sophisticated brown leather, it strikes the perfect balance between classic style and modern functionality."
    },
    {
        title: "Business Belle Wallet",
        description: "Project confidence and professionalism with the Business Belle Wallet. Crafted in sleek black leather, it not only exudes sophistication but also features dedicated slots for business cards, ensuring you make a lasting impression in every business encounter."
    },
    {
        title: "Active Verve Wallet",
        description: "Elevate your active lifestyle with the Active Verve Wallet. Designed for the on-the-go woman, its durable, water-resistant material and sporty design make it a practical yet stylish choice. Stay organized while on the move with this dynamic accessory."
    },
    {
        title: "Moonlit Velvet Wallet",
        description:"Unleash your mystique with the Moonlit Velvet Wallet. The plush midnight blue velvet exterior exudes luxury, while the well-organized interior adds a touch of magic to this enchanting evening accessory. Elevate your evening ensemble with sophistication and glamor."
    },
    {
        title: "Artisanal Craft Wallet",
        description: "Immerse yourself in the world of artisanal luxury with the Artisanal Craft Wallet. Meticulously hand-stitched details and premium leather create a one-of-a-kind accessory that transcends the ordinary. This wallet is not just a functional item; it's a true work of art."
    },
    {
        title: "Retro Revival Card Holder Wallet",
        description: "Embrace a touch of nostalgia with the Retro Revival Card Holder Wallet. Its slim profile accommodates your essential cards, and the retro design adds a stylish flair to your daily carry."
    },
    {
        title: "Tec Innovate Charging Wallet",
        description: "Stay charged on the go with the Tec Innovate Charging Wallet. Featuring a built-in power bank and RFID protection, it's the perfect blend of technology and style for the modern man."
    },
    {
        title: "City Chic Skyline Wallet",
        description: "Carry the energy of urban life with the City Chic Skyline Wallet. Its contemporary design features a city skyline motif, adding a cosmopolitan flair to your everyday style. Immerse yourself in the vibrancy of the city with this stylish and functional accessory."
    },
    {
        title: "Blossom Bouquet Wallet",
        description: "Embrace the delicate beauty of nature with the Blossom Bouquet Wallet. Soft pink hues and a blossom pattern make it a charming accessory for any season. Carry a piece of the ethereal beauty of cherry blossoms with you wherever you go."
    },
    {
        title: "Sunlit Shore Beach Wallet",
        description: "Channel the vibrant energy of the beach with the Sunlit Shore Beach Wallet. Its playful design and vibrant colors capture the spirit of summer, while the practical layout keeps your essentials in check. Bring a touch of beachside joy to your daily adventures."
    },
    {
        title: "Crimson Couture Statement Wallet",
        description: "Make a bold statement with the Crimson Couture Statement Wallet. The eye-catching red hue and chic design ensure you stand out while keeping your cards and cash impeccably organized. Elevate your style with this fashion-forward accessory."
    },
    {
        title: "Genuine Grit Tactical Wallet",
        description: "Face challenges head-on with the Genuine Grit Tactical Wallet. Built with rugged materials and tactical features, it's a robust companion for those who demand durability and functionality."
    },
    {
        title: "City Slicker Slim Wallet",
        description: "Navigate city streets with the City Slicker Slim Wallet. Its sleek design accommodates your essential cards while maintaining a minimalist and urban aesthetic."
    },
    {
        title: "Fireside Finesse Cozy Wallet",
        description: "Stay cozy and stylish with the Fireside Finesse Cozy Wallet. The warm, textured material and earthy tones create a comforting accessory that's perfect for the colder seasons. Embrace the cozy sophistication of this unique and functional wallet."
    },
    {
        title: "Starlit Symphony Evening Wallet",
        description: "Shine bright during your evening outings with the Starlit Symphony Evening Wallet. The metallic finish and starry details add a touch of glamor to your nighttime ensemble. Elevate your evenings with this sophisticated and radiant accessory."
    },
    {
        title: "Cascade Waterfall Wallet",
        description: "Dive into elegance with the Cascade Waterfall Wallet. Its flowing lines and cool tones evoke the serenity of a waterfall, making it a calming yet fashionable accessory. Carry a touch of nature's tranquility with this stylish wallet."
    },
    {
        title: "Luxe Loom Woven Leather Wallet",
        description: "Indulge in tactile luxury with the Luxe Loom Woven Leather Wallet. The intricate woven pattern and supple leather create a visually stunning accessory that's as pleasurable to touch as it is to behold. Elevate your style with this unique and luxurious wallet."
    },
    {
        title: "Sleek Style Money Clip Wallet",
        description: "Define your style with the Sleek Style Money Clip Wallet. This minimalist accessory combines a polished look with the convenience of a secure money clip, making it an essential for the modern man."
    },
    {
        title: "AthleticEdge Sports Wallet",
        description: "Score a style win with the Athletic Edge Sports Wallet. Crafted for the sports enthusiast, it combines athletic design with practical features, ensuring you're prepared for both the game and everyday life."
    },
    {
        title: "Gentleman Explorer Travel Wallet",
        description: "Embark on journeys with the Gentleman Explorer Travel Wallet. Designed for the modern traveler, it offers dedicated compartments for passports, cards, and currency, ensuring a seamless travel experience."
    },
    {
        title: "LuxeCrafted Leather Wallet",
        description: "Indulge in luxury with the LuxeCrafted Leather Wallet. Meticulously handcrafted with premium leather, it's a symbol of refined taste and sophistication, making a bold statement in any setting."
    },
];
function handleCardClick(imageSrc, title) {
    console.log("Clicked title:", title);

    const modalImage = document.getElementById("modalProductImage");
    const modalDescription = document.getElementById("modalProductDescription");

    const product = products.find(product => {
        console.log("Product title:", product.title);
        return product.title === title;
    });

    modalImage.src = imageSrc;
    modalDescription.innerHTML = product ? product.description : "No description available.";

    const productModal = new bootstrap.Modal(document.getElementById("productModal"));
    productModal.show();
}
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".cardhover");

    cards.forEach((card) => {
        card.addEventListener("click", function () {
            const imageSrc = card.querySelector(".product-image").src;
            let title = card.querySelector(".card-title").textContent;
            let t = document.querySelector('.h1_title');
            t.textContent = title;
            console.log(t)
            handleCardClick(imageSrc, title);
        });
    });
    
});