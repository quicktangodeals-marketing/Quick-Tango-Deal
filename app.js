// Application data
const appData = {
  "company": {
    "name": "Quick Tango Deals",
    "tagline": "Super Saver Deals – Lower Than Amazon & Flipkart",
    "phone": "+919819580407",
    "email": "support@quicktangodeals.com",
    "mission": "QTD is committed to providing customers with the best deals on quality products at prices guaranteed to be lower than major e-commerce platforms. We ensure fast delivery, secure payments, and excellent customer service with a 100% satisfaction guarantee.",
    "delivery_time": "2-5 business days",
    "payment_methods": "UPI, Cards, Net Banking, Cash on Delivery",
    "return_policy": "7-day easy returns on all products"
  },
  "products": [
    {
      "id": 1,
      "name": "Wooden Chopping Board | Premium Quality | 30x20 cm",
      "image": "https://m.media-amazon.com/images/I/61-Fl5bPt8L._SL1500_.jpg",
      "description": "High-quality wooden chopping board, perfect for all your kitchen needs. Durable and easy to clean.",
      "qtd_price": 199,
      "amazon_price": 270,
      "flipkart_price": 229,
      "amazon_url": "https://amazohttps://www.amazon.in/Non-Slip-Cutting-Antibacterial-Stainless-Chopping/dp/B092SGDZ1G/ref=sr_1_6?crid=G8E5COPUR8SS&dib=eyJ2IjoiMSJ9.n5Yl3L9aqmWc0PB0wkykpqwuu7QHGgpCX53EDgkvjDV7LpOe6EYnB1UFFUgph9X3fbtrFJQm4h7GUygV3wekoT-rNae7m2afAkO_xrIN16D4fSHNl0rcmH56c63OE6ut0OhboQg163umwJEx1khZ7PWSIaMM8lLOo82P2-wz4o4IIKbfROjsHZmdH4L_Ghl83lC71NGcuVIjZ85MeaL819qFlMJV-7P70BNnA_IVtYvi9mykrzu2HnShtk73fqqMv2ylgbqNBQC1mG9blOocHYMg_89SeiweYpJwHoKH8_k.z2KEhhUgFkdghZjK2gZdD1F-kgPYEIPiqclTP1A6wRo&dib_tag=se&keywords=chopping%2Bboard%2Bwood&qid=1755068001&sprefix=chopping%2Bboard%2Caps%2C232&sr=8-6&th=1n.in/search?k=wireless+bluetooth+earbuds",
      "flipkart_url": "https://www.flipkart.com/pigeon-bamboo-cutting-board/p/itm9265987a81961?pid=CTBGZM5FHGHVNQZA&lid=LSTCTBGZM5FHGHVNQZALIJXNR&marketplace=FLIPKART&q=chopping+board&store=upp%2Fnwv%2F3dc&spotlightTagId=default_FkPickId_upp%2Fnwv%2F3dc&srno=s_1_16&otracker=search&otracker1=search&fm=Search&iid=155a6fa6-ccb9-4c37-81d1-9e5f5eae7a76.CTBGZM5FHGHVNQZA.SEARCH&ppt=sp&ppn=sp&ssid=6lais8360w0000001755068260374&qH=000768c598f5276d",
      "savings": 71,
      "category": "Home & Kitchen",
      "stock": "In Stock"
    },
    {
      "id": 2,
      "name": "1000 ML Handy Push Chopper Vegetable & Fruit Cutter",
      "image": "https://m.media-amazon.com/images/I/61fNsFkxcmL._SL1080_.jpg",
      "description": "Insulated 750ml bottle keeps drinks cold for 24hrs, perfect for daily use",
      "qtd_price": 249,
      "amazon_price": 399,
      "flipkart_price": 449,
      "amazon_url": "https://www.amazon.in/SHAYONAM-Chopper-Kitchen-Hand-Press-Vegetable/dp/B0FCM5X1JH/ref=sr_1_1_sspa?crid=XPEDVBJFW73P&dib=eyJ2IjoiMSJ9.8FsfbAGaerdLNj-KqkVe-eZm880HcdLpLuC5wBtnftxV4IQLMDFIXOKaEfcjIn954LbCqtpV06pPEz8AOHR5t4yEcY4BDnRT0ig6FjKanbghZpdWRpcAwswdJo5C-HbjCswnLPUJJ5ZiTEt1DGuAiBK870ouAbvaCw9SKsCLoyxSlNsqH3h_h21lwe2YH9_56EHvx-Gig1VkSFn53oXC27qfO-lzJrYk0n5cZYgmctVfGGi29G-4DadQ8R7oCoHRSHRNckZoXTMJTnahIyzFDEKgY_0aAb5pfzI1t8thnQk.MHDc-knTpdKdL3cvDM-1UuEehk_Q4bP8ttceeOuPaYw&dib_tag=se&keywords=1000%2BML%2BHandy%2BPush%2BChopper%2BVegetable%2B%26%2BFruit%2BCutter&qid=1755068721&sprefix=1000%2Bml%2Bhandy%2Bpush%2Bchopper%2Bvegetable%2B%26%2Bfruit%2Bcutter%2Caps%2C262&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
      "flipkart_url": "https://www.flipkart.com/drumstone-buy-1-get-2-in-1-push-n-chop-vegetable-fruit-cutter-chopper/p/itm6b25b94af5cf6?pid=CPRH56WK5HY8WVNU&lid=LSTCPRH56WK5HY8WVNUFLK5PJ&marketplace=FLIPKART&q=1000+ML+Handy+Push+Chopper+Vegetable+%26+Fruit+Cutter&store=upp%2Fnwv%2Fjem&srno=s_1_10&otracker=search&otracker1=search&fm=Search&iid=3c24fcbb-58a7-4f1b-9ddd-54acd5d3df17.CPRH56WK5HY8WVNU.SEARCH&ppt=sp&ppn=sp&qH=cd6ce9ec6467d9cc",
      "savings": 150,
      "category": "Home & Kitchen",
      "stock": "In Stock"
    },
    {
      "id": 3,
      "name": "Plastic Manual Vegetable Chopper for Kitchen",
      "image": "https://m.media-amazon.com/images/I/51d6+0TVOgL._SL1024_.jpg",
      "description": "900 ml handy chopper with stainless steel blades, perfect for quick vegetable chopping",
      "qtd_price": 179,
      "amazon_price": 264,
      "flipkart_price": 249,
      "amazon_url": "https://www.amazon.in/Emergity-Plastic-Vegetable-Chopper-Kitchen/dp/B0CVXSKG5D/ref=sr_1_4_sspa?crid=MMJERU13VT3A&dib=eyJ2IjoiMSJ9.-1cYLu-iRH91U0l2ITonehHcLWTdOmAktIv4kK_mf-nyIPhxVUG8Yxqr2HDVcLRWYfwQEjJhXuDRE4g6Fg3Xk0wbQ-cKZWCrKP2rYxmZDC4szHI0BGH6d3_VlHCSP7ozGT7-8us6srja-r9yyS3ngk-tIg7ik4RI8m_7BOtGGWpg0u1lU6CLFn5G6g4ekuLtkCxZbsWW5DBWKtmS8suTduZW2OO_0TKo3gxxMsE0b5juSjLGYLlqa6XzvLnly6seNWh7rf8YE1WntN2jFWXP1rF7gXJudtqkaxAmgGbsWWg.Nd3Xm1GmNLVtSxI1R4jCFGLgSeI6qNlDUStNxcrlnTU&dib_tag=se&keywords=900+ml+handy+chopper+vegetable&qid=1755069139&sprefix=900+ml+handy+chopper+vegetable+%2Caps%2C210&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
      "flipkart_url": "https://www.flipkart.com/olix-handy-multi-color-vegetable-fruit-chopper-manual-chopper-hand-multipurpose-2-1-900-ml/p/itm6aad501d36d36?pid=CPRFZX9H8S6FTN3M&lid=LSTCPRFZX9H8S6FTN3MNKSDP8&marketplace=FLIPKART&q=Plastic+Manual+Vegetable+Chopper+for+Kitchen+900ml&store=upp%2Fnwv%2Fjem&srno=s_1_8&otracker=search&otracker1=search&fm=Search&iid=a9f99d42-dae0-434f-bc6e-d5ae417e9bd6.CPRFZX9H8S6FTN3M.SEARCH&ppt=sp&ppn=sp&ssid=flc70rkc000000001755069267882&qH=79e174711e50cc80",
      "savings": 85,
      "category": "Home & Kitchen",
      "stock": "Selling Fast"
    },
    {
      "id": 4,
      "name": "Stainless Steel Chopping Board | 42x32 cm | Non-Slip | Extra Large",
      "image": "https://images.meesho.com/images/products/417629962/wcm72_512.avif?width=512",
      "description": "Extra large stainless steel chopping board with non-slip base, perfect for heavy-duty kitchen tasks",
      "qtd_price": 449,
      "amazon_price": 1099,
      "flipkart_price": 629,
      "amazon_url": "https://www.amazon.in/Board-Stainless-Steel-Chopping-Vegetables/dp/B09VGNLG6Z/ref=sr_1_1_sspa?crid=2AAN5B1WOK9X7&dib=eyJ2IjoiMSJ9.BGr7tWoFBKOsFRdxjrqiLuPv7jpkiQE9nnqRCf5xijOXmH41K1DStTLcn35V8gGUugUqRbCycrIc1w02E12-oStFPUHkX63H103zyVJ9Upk_1MniBcja6EmGOTUS8tvIeiRjKft8rbH2kB-SaJJOmBymYqCMrI5lK6pJrRVJh0utoxZqtBiw8PooHbEK3MxGiyalPCXyxo6L26XIrQyBH58OYZSEEujudhxlljWs87fq-VFFFfgDSDLdrQd04rYHxEk14wGWwaO9Jfkn0gRxhhqlRaKJAzPB3AoAPmO6J40.s4PSmERrCpkK7bRyO44RzarGDd2CTTSJcHanhFuavvw&dib_tag=se&keywords=stainless%2Bsteel%2Bchopping%2Bboard%2Bextra%2Blarge&qid=1755069388&sprefix=stainless%2Bsteel%2Bchopping%2Bboard%2Be%2Caps%2C249&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
      "flipkart_url": "https://www.flipkart.com/sweevan-stainless-steel-chopping-board-cutting-vegetable-meat-42-x-32-cm/p/itmb3cebd96d28d3?pid=CTBH575SJBUKPSYF&lid=LSTCTBH575SJBUKPSYF181Q0V&marketplace=FLIPKART&q=Stainless+steel+chopping+board+42x32cm&store=upp%2Fnwv%2F3dc&srno=s_1_5&otracker=search&otracker1=search&fm=Search&iid=42d0a14d-7987-4a55-98e4-01e065d5c6ec.CTBH575SJBUKPSYF.SEARCH&ppt=sp&ppn=sp&ssid=cn2nb25dow0000001755069570134&qH=66ca2bdb4295c7a4",
      "savings": 650,
      "category": "Home & Kitchen",
      "stock": "In Stock"
    },
    {
      "id": 5,
      "name": "WILDAUK Wallet For Men | 7 Card Slots | 2 Cash Compartments | 2 Hidden Pockets",
      "image": "https://images.meesho.com/images/products/7694508/e23b6_512.avif?width=512",
      "description": "Stylish and functional wallet with 7 card slots, 2 cash compartments, and 2 hidden pockets",
      "qtd_price": 229,
      "amazon_price": 'Not Found',
      "flipkart_price": 'Not Found',
      "amazon_url": "",
      "flipkart_url": "",
      "savings": 'None',
      "category": "Accessories",
      "stock": "In Stock"
    },
    {
      "id": 6,
      "name": "Black Leather Wallet For Men | 12x8 cm",
      "image": "https://images.meesho.com/images/products/476671523/odyje_512.avif?width=512",
      "description": "Premium black leather wallet with RFID protection, 8 card slots, and 2 cash compartments",
      "qtd_price": 179,
      "amazon_price": 'Not Found',
      "flipkart_price": 'Not Found',
      "amazon_url": "",
      "flipkart_url": "",
      "savings": 'None',
      "category": "Accessories",
      "stock": "Few in Stock"
    },
    {
      "id": 7,
      "name": "Hoppup Xo3 Gaming Earbuds with 35MS Low Latency, 13MM DRIVERS & 50H PlayTime Bluetooth Headset (Yellow, True Wireless)",
      "image": "https://m.media-amazon.com/images/I/613FTOHA-BL._SL1500_.jpg",
      "description": "HOPPUP Predator Xo3 Gaming Earbuds with 35MS Low Latency, 13MM DRIVERS & 50H PlayTime Bluetooth Headset (Yellow, True Wireless)",
      "qtd_price": 749,
      "amazon_price": 799,
      "flipkart_price": 799,
      "amazon_url": "https://www.amazon.in/HOPPUP-Predator-Playtime-Bluetooth-Wireless/dp/B0DHL74MGX/ref=sr_1_3?crid=QZJ7PKJEI3QP&dib=eyJ2IjoiMSJ9.fyuqw8nCBqL76gk6X8C_kYR_VZo0IBvMeJmX6xnk0ScNOOLKvKulcbVw3Lpx2IMynqW_ahTVycQSUrhVBCQ7o370a6milHuPwoxaG0kdOewvGl5kbsrjXrTNye4MmbFajus7X3xlZSA4JW_BddoR6-6iun9WUnEFJQx_jvLZjZ-q5gWQsfz9nHnP0Y9IMZn28clEBWRGQPGjV9p4x0_zZLwy2mmoxKSBl49o8nX3tl4.j-yPLiVJPg-0cY7301ezXJgjcfJ7uKh-zj_TYd07yU4&dib_tag=se&keywords=Hoppup%2BXo3%2BGaming%2BEarbuds%2Bwith%2B35MS%2BLow%2BLatency%2C%2B13MM%2BDRIVERS%2B%26%2B50H%2BPlayTime%2BBluetooth%2BHeadset%2B(Yellow%2C%2BTrue%2BWireless)&nsdOptOutParam=true&qid=1755070496&sprefix=hoppup%2Bxo3%2Bgaming%2Bearbuds%2Bwith%2B35ms%2Blow%2Blatency%2C%2B13mm%2Bdrivers%2B%26%2B50h%2Bplaytime%2Bbluetooth%2Bheadset%2Byellow%2C%2Btrue%2Bwireless%2B%2Caps%2C283&sr=8-3&th=1",
      "flipkart_url": "https://www.flipkart.com/hoppup-predator-xo3-gaming-earbuds-35ms-low-latency-13mm-drivers-50h-playtime-bluetooth/p/itm5c79343528d83?pid=ACCGX7GBAHQ5YEMB&lid=LSTACCGX7GBAHQ5YEMBHL72GF&marketplace=FLIPKART&q=Hoppup+Xo3+Gaming+Earbuds+with+35MS+Low+Latency%2C+13MM+DRIVERS+%26+50H+PlayTime+Bluetooth+Headset+%28Yellow%2C+True+Wireless%29&store=0pm%2Ffcn%2Fgc3&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=b940bf59-1db4-4f5d-b891-6c4b05311cd8.ACCGX7GBAHQ5YEMB.SEARCH&ppt=sp&ppn=sp&ssid=64w3kvz9xc0000001755070557904&qH=1ab22e93fa3b247b",
      "savings": 50,
      "category": "Electronics",
      "stock": "Selling Fast"
    },
    {
      "id": 8,
      "name": "HOPPUP Xo6 Gaming Earbuds with 35MS Low Latency, RGB LED, 13MM Drivers & 50H Playtime Bluetooth (Coal Black, True Wireless)",
      "image": "https://m.media-amazon.com/images/I/61daXt-SdtL._SL1496_.jpg",
      "description": "HOPPUP Predator Xo6 Gaming Earbuds with 35MS Low Latency, RGB LED, 13MM Drivers & 50H Playtime Bluetooth (Coal Black, True Wireless)",
      "qtd_price": 849,
      "amazon_price": 899,
      "flipkart_price": 'Not Found',
      "amazon_url": "https://www.amazon.in/HOPPUP-Earbuds-Playtime-Bluetooth-Wireless/dp/B0DHVTD1QZ/ref=sr_1_3?crid=2TLWMYIOVKCF0&dib=eyJ2IjoiMSJ9.4F1-PtRhgcxQvoQVZJ0XQPq4U4pXqryHdymvSjKqrxTKPtlUsvlEhpX-MvOeNZPO-eLQoWxhB0UPsCjr2-nUNUh0dpT62Br3C10gerswH9zXoJJuqPqvF2BUQ_SKXoGD_KtOfeWzTLWxveIG_W9zOjFOMHkpua8qF5dwytnZ5ec1Rc0XITVV_Fwf3pX1sKXOuXFDGB-zVw26mMenT_dkV3GXaburNziaSvU766JIa7M.AUn__zcPFS3cHM0-8kRIbcsTf3dxoOV5_ckJbeUsdGY&dib_tag=se&keywords=HOPPUP%2BXo6%2BGaming%2BEarbuds%2Bwith%2B35MS%2BLow%2BLatency%2C%2BRGB%2BLED%2C%2B13MM%2BDRIVERS%2B%26%2B50H%2BPlayTime%2BBluetooth%2B(Coal%2BBlack%2C%2BTrue%2BWireless)%2B%E2%82%B9792%2B%E2%82%B94999%2B84%25%2Boff&nsdOptOutParam=true&qid=1755070812&sprefix=hoppup%2Bxo6%2Bgaming%2Bearbuds%2Bwith%2B35ms%2Blow%2Blatency%2C%2Brgb%2Bled%2C%2B13mm%2Bdrivers%2B%26%2B50h%2Bplaytime%2Bbluetooth%2Bcoal%2Bblack%2C%2Btrue%2Bwireless%2B792%2B4999%2B84%25%2Boff%2Caps%2C256&sr=8-3&th=1",
      "flipkart_url": "",
      "savings": 50,
      "category": "Electronics",
      "stock": "Few in Stock"
    }
  ],
  "categories": ["All Categories", "Electronics", "Home & Kitchen", "Fitness", "Accessories"],
  "stock_statuses": ["All Stock Status", "In Stock", "Few in Stock", "Selling Fast", "Out of Stock"],
  "faq": [
    {
      "question": "What is the delivery time?",
      "answer": "We deliver within 2-5 business days across India with free shipping on all orders."
    },
    {
      "question": "What payment methods do you accept?",
      "answer": "We accept UPI and Cash on Delivery for your convenience."
    },
    {
      "question": "Do you offer returns?",
      "answer": "Yes, we offer 7-day easy returns on all products policy."
    },
    {
      "question": "Are your prices really lower than Amazon and Flipkart?",
      "answer": "Absolutely! We monitor competitor prices daily and guarantee our prices are always lower with the same or better quality."
    },
    {
      "question": "How do I place an order?",
      "answer": "Simply click 'Order Now on WhatsApp' next to any product, and our team will assist you with the ordering process."
    }
  ]
};

// Application state
let currentSection = 'home';
let filteredProducts = [...appData.products];
let filteredStockItems = [...appData.products];

// Filter state for stock section
let currentStockFilters = {
  category: 'all',
  status: 'all'
};

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('QTD App: Initializing application...');
    
    try {
        // Initialize core functionality
        initializeNavigation();
        initializeMobileMenu();
        
        // Load content
        loadFeaturedProducts();
        loadAllProducts();
        loadFAQ();
        loadStockStatus();
        
        // Initialize filters
        initializeFilters();
        initializeStockFilters();
        initializeMobileChipFilters();
        initializeClearFiltersButton();
        
        // Initialize forms and buttons
        initializeContactForm();
        initializeWhatsAppButtons();
        
        // Set initial active section
        showSection('home');
        
        console.log('QTD App: Successfully initialized with price comparison feature!');
    } catch (error) {
        console.error('QTD App: Initialization error:', error);
    }
});

// Navigation functionality - FIXED
function initializeNavigation() {
    console.log('QTD App: Initializing navigation...');
    
    // Desktop navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const section = this.getAttribute('data-section');
            console.log('QTD App: Desktop navigation to:', section);
            showSection(section);
            updateActiveNavLink(this);
        });
    });
    
    // Mobile navigation
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const section = this.getAttribute('data-section');
            console.log('QTD App: Mobile navigation to:', section);
            showSection(section);
            closeMobileMenu();
            updateActiveNavLink(document.querySelector(`.nav-link[data-section="${section}"]`));
        });
    });
    
    console.log('QTD App: Navigation initialized successfully');
}

// FIXED: Section switching functionality
function showSection(sectionName) {
    console.log('QTD App: Showing section:', sectionName);
    
    try {
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });
        
        // Show target section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
            targetSection.style.display = 'block';
            currentSection = sectionName;
            
            // Update nav links
            updateActiveNavLink(document.querySelector(`.nav-link[data-section="${sectionName}"]`));
            
            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Reload content for specific sections
            if (sectionName === 'products') {
                setTimeout(() => loadAllProducts(), 100);
            } else if (sectionName === 'live-stock') {
                setTimeout(() => loadStockStatus(), 100);
            }
            
            console.log('QTD App: Section switched to:', sectionName);
        } else {
            console.error('QTD App: Section not found:', sectionName);
        }
    } catch (error) {
        console.error('QTD App: Error switching section:', error);
    }
}

function updateActiveNavLink(activeLink) {
    if (activeLink) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    
    if (mobileMenuToggle && mobileNavOverlay) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('QTD App: Mobile menu toggle clicked');
            this.classList.toggle('active');
            mobileNavOverlay.classList.toggle('active');
            document.body.style.overflow = mobileNavOverlay.classList.contains('active') ? 'hidden' : '';
        });
        
        mobileNavOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeMobileMenu();
            }
        });
        
        console.log('QTD App: Mobile menu initialized');
    }
}

function closeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    
    if (mobileMenuToggle && mobileNavOverlay) {
        mobileMenuToggle.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
        console.log('QTD App: Mobile menu closed');
    }
}

// Product loading functions
function loadFeaturedProducts() {
    console.log('QTD App: Loading featured products...');
    const featuredProductsGrid = document.getElementById('featured-products-grid');
    if (featuredProductsGrid) {
        const featuredProducts = appData.products.slice(0, 6);
        featuredProductsGrid.innerHTML = featuredProducts.map(product => createProductCard(product, true)).join('');
        console.log(`QTD App: Featured products loaded: ${featuredProducts.length} products`);
        // Initialize comparison after loading
        setTimeout(() => initializePriceComparison(), 100);
    }
}

function loadAllProducts() {
    console.log('QTD App: Loading all products...');
    const allProductsGrid = document.getElementById('all-products-grid');
    if (allProductsGrid) {
        allProductsGrid.innerHTML = filteredProducts.map(product => createProductCard(product, false)).join('');
        console.log(`QTD App: All products loaded: ${filteredProducts.length} products`);
        // Initialize comparison after loading
        setTimeout(() => initializePriceComparison(), 100);
    }
}

// FIXED: Product card creation with proper comparison feature
function createProductCard(product, isFeatured = false) {
    const stockClass = getStockStatusClass(product.stock);
    const whatsappMessage = `i want to order ${product.name}`;
    const whatsappUrl = `https://wa.me/919819580407?text=${encodeURIComponent(whatsappMessage)}`;
    
    const cardId = `product-${product.id}-${isFeatured ? 'featured' : 'all'}`;
    const comparisonId = `comparison-${product.id}-${isFeatured ? 'featured' : 'all'}`;
    
    const fallbackSvg = `data:image/svg+xml;base64,${btoa(`
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#F5F2E8"/>
            <rect x="150" y="150" width="100" height="80" rx="8" fill="#8B6F47"/>
            <circle cx="200" cy="180" r="15" fill="#B8860B"/>
            <text x="200" y="280" text-anchor="middle" fill="#000000" font-family="Arial" font-size="14" font-weight="bold">${product.name}</text>
        </svg>
    `)}`;
    
    return `
        <div class="product-card" id="${cardId}">
            <img src="${product.image}" alt="${product.name}" class="product-image" 
                 onerror="this.src='${fallbackSvg}'">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            
            <div class="product-pricing">
                <div class="qtd-price">₹${product.qtd_price.toLocaleString()}</div>
                
                <!-- Price Comparison Feature -->
                <div class="price-comparison">
                    <button class="compare-trigger" 
                            data-product-id="${product.id}" 
                            aria-expanded="false" 
                            aria-controls="${comparisonId}"
                            type="button">
                        <span class="compare-arrow">▼</span>
                        <span>Compare</span>
                    </button>
                    <div class="comparison-panel" id="${comparisonId}" aria-hidden="true">
                        <div class="comparison-content">
                            <div class="comparison-item">
                                <div class="comparison-platform">Amazon</div>
                                <div class="comparison-price">₹${product.amazon_price.toLocaleString()}</div>
                                <a href="${product.amazon_url}" target="_blank" class="comparison-link">
                                    View on Amazon
                                </a>
                            </div>
                            <div class="comparison-item">
                                <div class="comparison-platform">Flipkart</div>
                                <div class="comparison-price">₹${product.flipkart_price.toLocaleString()}</div>
                                <a href="${product.flipkart_url}" target="_blank" class="comparison-link">
                                    View on Flipkart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="savings-badge">Save ₹${product.savings.toLocaleString()}</div>
            </div>
            
            <div class="product-footer">
                <span class="stock-status ${stockClass}">${product.stock}</span>
                <a href="${whatsappUrl}" target="_blank" class="btn btn--primary btn--sm product-order-btn">
                   Order Now on WhatsApp
                </a>
            </div>
        </div>
    `;
}

function getStockStatusClass(stock) {
    switch (stock) {
        case 'In Stock': return 'stock-status--in-stock';
        case 'Few in Stock': return 'stock-status--few-stock';
        case 'Selling Fast': return 'stock-status--selling-fast';
        case 'Out of Stock': return 'stock-status--out-of-stock';
        default: return 'stock-status--in-stock';
    }
}

// FIXED: Price Comparison Functionality
function initializePriceComparison() {
    console.log('QTD App: Initializing price comparison feature...');
    
    const compareButtons = document.querySelectorAll('.compare-trigger');
    compareButtons.forEach(button => {
        // Remove existing listeners to prevent duplicates
        button.removeEventListener('click', handleComparisonToggle);
        button.addEventListener('click', handleComparisonToggle);
    });
    
    console.log(`QTD App: Price comparison initialized for ${compareButtons.length} products`);
}

function handleComparisonToggle(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const button = e.currentTarget;
    const productId = button.getAttribute('data-product-id');
    const panelId = button.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    const arrow = button.querySelector('.compare-arrow');
    
    if (!panel || !arrow) {
        console.error('QTD App: Comparison elements not found');
        return;
    }
    
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const newExpandedState = !isExpanded;
    
    console.log(`QTD App: Toggling comparison for product ${productId}, expanding: ${newExpandedState}`);
    
    // Update ARIA attributes
    button.setAttribute('aria-expanded', newExpandedState.toString());
    panel.setAttribute('aria-hidden', (!newExpandedState).toString());
    
    // Toggle visual states
    if (newExpandedState) {
        button.classList.add('expanded');
        panel.classList.add('expanded');
        arrow.textContent = '▲';
    } else {
        button.classList.remove('expanded');
        panel.classList.remove('expanded');
        arrow.textContent = '▼';
    }
    
    console.log(`QTD App: Comparison panel ${newExpandedState ? 'opened' : 'closed'} for product ${productId}`);
}

// FIXED: WhatsApp buttons functionality
function initializeWhatsAppButtons() {
    console.log('QTD App: Initializing WhatsApp buttons...');
    
    // Hero CTA button
    const heroCta = document.querySelector('.hero-cta');
    if (heroCta) {
        heroCta.addEventListener('click', function(e) {
            console.log('QTD App: Hero CTA clicked');
        });
    }
    
    // Floating WhatsApp button
    const floatingBtn = document.querySelector('.whatsapp-float-btn');
    if (floatingBtn) {
        floatingBtn.addEventListener('click', function(e) {
            console.log('QTD App: Floating WhatsApp clicked');
        });
    }
    
    // Contact WhatsApp button
    const contactBtn = document.querySelector('.whatsapp-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            console.log('QTD App: Contact WhatsApp clicked');
        });
    }
    
    console.log('QTD App: WhatsApp buttons initialized');
}

// Filter functionality
function initializeFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            console.log('QTD App: Category filter changed to:', this.value);
            filterProducts();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            console.log('QTD App: Search input:', this.value);
            debounceFilter();
        });
    }
}

function initializeStockFilters() {
    const stockCategoryFilter = document.getElementById('stock-category-filter');
    const stockStatusFilter = document.getElementById('stock-status-filter');
    
    if (stockCategoryFilter) {
        stockCategoryFilter.addEventListener('change', function() {
            console.log('QTD App: Stock category filter changed to:', this.value);
            currentStockFilters.category = this.value;
            updateMobileChipStates();
            filterStockItemsWithTransition();
        });
    }
    
    if (stockStatusFilter) {
        stockStatusFilter.addEventListener('change', function() {
            console.log('QTD App: Stock status filter changed to:', this.value);
            currentStockFilters.status = this.value;
            updateMobileChipStates();
            filterStockItemsWithTransition();
        });
    }
}

function initializeMobileChipFilters() {
    const categoryChips = document.querySelectorAll('#category-chips .filter-chip');
    categoryChips.forEach(chip => {
        chip.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            categoryChips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            currentStockFilters.category = category;
            const desktopFilter = document.getElementById('stock-category-filter');
            if (desktopFilter) desktopFilter.value = category;
            filterStockItemsWithTransition();
        });
    });
    
    const statusChips = document.querySelectorAll('#stock-status-chips .filter-chip');
    statusChips.forEach(chip => {
        chip.addEventListener('click', function() {
            const status = this.getAttribute('data-stock');
            statusChips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            currentStockFilters.status = status;
            const desktopFilter = document.getElementById('stock-status-filter');
            if (desktopFilter) desktopFilter.value = status;
            filterStockItemsWithTransition();
        });
    });
}

function initializeClearFiltersButton() {
    const clearButton = document.getElementById('clear-stock-filters');
    if (clearButton) {
        clearButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('QTD App: Clear filters button clicked');
            clearStockFilters();
        });
    }
}

function clearStockFilters() {
    currentStockFilters = { category: 'all', status: 'all' };
    
    const categoryFilter = document.getElementById('stock-category-filter');
    const statusFilter = document.getElementById('stock-status-filter');
    if (categoryFilter) categoryFilter.value = 'all';
    if (statusFilter) statusFilter.value = 'all';
    
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.remove('active');
        if (chip.getAttribute('data-category') === 'all' || chip.getAttribute('data-stock') === 'all') {
            chip.classList.add('active');
        }
    });
    
    filterStockItemsWithTransition();
    showNotification('Filters cleared successfully!', 'success');
}

function updateMobileChipStates() {
    document.querySelectorAll('#category-chips .filter-chip').forEach(chip => {
        chip.classList.toggle('active', chip.getAttribute('data-category') === currentStockFilters.category);
    });
    document.querySelectorAll('#stock-status-chips .filter-chip').forEach(chip => {
        chip.classList.toggle('active', chip.getAttribute('data-stock') === currentStockFilters.status);
    });
}

function filterProducts() {
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    
    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    
    filteredProducts = appData.products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch = searchTerm === '' || 
                             product.name.toLowerCase().includes(searchTerm) || 
                             product.description.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });
    
    loadAllProducts();
}

function filterStockItemsWithTransition() {
    const stockGrid = document.getElementById('stock-grid');
    if (stockGrid) {
        stockGrid.classList.add('updating');
        setTimeout(() => {
            filterStockItems();
            stockGrid.classList.remove('updating');
        }, 150);
    }
}

function filterStockItems() {
    filteredStockItems = appData.products.filter(product => {
        const matchesCategory = currentStockFilters.category === 'all' || product.category === currentStockFilters.category;
        const matchesStatus = currentStockFilters.status === 'all' || product.stock === currentStockFilters.status;
        return matchesCategory && matchesStatus;
    });
    loadStockStatus();
}

let filterTimeout;
function debounceFilter() {
    clearTimeout(filterTimeout);
    filterTimeout = setTimeout(filterProducts, 300);
}

function loadFAQ() {
    const faqList = document.getElementById('faq-list');
    if (faqList) {
        faqList.innerHTML = appData.faq.map((item, index) => `
            <div class="faq-item">
                <button class="faq-question" data-faq="${index}">
                    ${item.question}
                </button>
                <div class="faq-answer" id="faq-answer-${index}">
                    ${item.answer}
                </div>
            </div>
        `).join('');
        
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function(e) {
                e.preventDefault();
                const faqIndex = this.getAttribute('data-faq');
                const answer = document.getElementById(`faq-answer-${faqIndex}`);
                const isActive = this.classList.contains('active');
                
                // Close all other FAQs
                document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
                document.querySelectorAll('.faq-answer').forEach(a => {
                    a.classList.remove('active');
                    a.style.display = 'none';
                });
                
                if (!isActive) {
                    this.classList.add('active');
                    answer.classList.add('active');
                    answer.style.display = 'block';
                }
            });
        });
    }
}

// FIXED: Stock status loading with comparison feature
function loadStockStatus() {
    console.log('QTD App: Loading stock status...');
    const stockGrid = document.getElementById('stock-grid');
    if (stockGrid) {
        stockGrid.innerHTML = filteredStockItems.map(product => {
            const stockClass = getStockStatusClass(product.stock);
            const whatsappMessage = `i want to buy ${product.name}`;
            const whatsappUrl = `https://wa.me/919819580407?text=${encodeURIComponent(whatsappMessage)}`;
            const stockComparisonId = `stock-comparison-${product.id}`;
            
            return `
                <div class="stock-item">
                    <div class="stock-info">
                        <h4>${product.name}</h4>
                        <p>₹${product.qtd_price.toLocaleString()}</p>
                        
                        <div class="price-comparison">
                            <button class="compare-trigger" 
                                    data-product-id="${product.id}" 
                                    aria-expanded="false" 
                                    aria-controls="${stockComparisonId}"
                                    type="button">
                                <span class="compare-arrow">▼</span>
                                <span>Compare</span>
                            </button>
                            <div class="comparison-panel" id="${stockComparisonId}" aria-hidden="true">
                                <div class="comparison-content">
                                    <div class="comparison-item">
                                        <div class="comparison-platform">Amazon</div>
                                        <div class="comparison-price">₹${product.amazon_price.toLocaleString()}</div>
                                        <a href="${product.amazon_url}" target="_blank" class="comparison-link">
                                            View on Amazon
                                        </a>
                                    </div>
                                    <div class="comparison-item">
                                        <div class="comparison-platform">Flipkart</div>
                                        <div class="comparison-price">₹${product.flipkart_price.toLocaleString()}</div>
                                        <a href="${product.flipkart_url}" target="_blank" class="comparison-link">
                                            View on Flipkart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="stock-actions">
                        <span class="stock-status ${stockClass}">${product.stock}</span>
                        <a href="${whatsappUrl}" target="_blank" class="btn btn--primary btn--sm stock-order-btn">
                            Quick Order
                        </a>
                    </div>
                </div>
            `;
        }).join('');
        
        // Initialize comparison for stock items
        setTimeout(() => initializePriceComparison(), 100);
        console.log(`QTD App: Stock status loaded: ${filteredStockItems.length} items`);
    }
}

function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            const whatsappMessage = `Hi! I'm ${name} (${email}). Message: ${message}`;
            const whatsappUrl = `https://wa.me/919819580407?text=${encodeURIComponent(whatsappMessage)}`;
            
            window.open(whatsappUrl, '_blank');
            this.reset();
            showNotification('Your message will be sent via WhatsApp!', 'success');
        });
    }
}

// Notification system
function showNotification(message, type = 'info') {
    console.log(`QTD App: Showing notification: ${message} (${type})`);
    
    const notification = document.createElement('div');
    let backgroundColor;
    switch(type) {
        case 'success': backgroundColor = '#B8860B'; break;
        case 'error': backgroundColor = '#DC2626'; break;
        case 'warning': backgroundColor = '#D97706'; break;
        default: backgroundColor = '#374151';
    }
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${backgroundColor};
        color: #FFFFFF;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 14px;
        max-width: 300px;
        word-wrap: break-word;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.style.transform = 'translateX(0)', 100);
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('QTD App: Application error:', e.error);
    showNotification('An error occurred. Please refresh the page if issues persist.', 'error');
});

console.log('QTD App: Quick Tango Deals - Enhanced with Price Comparison Feature Loaded Successfully!');