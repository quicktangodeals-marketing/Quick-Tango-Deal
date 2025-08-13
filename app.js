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
      "name": "Wireless Bluetooth Earbuds",
      "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
      "description": "Premium sound quality with active noise cancellation and 24-hour battery life",
      "qtd_price": 799,
      "amazon_price": 1099,
      "flipkart_price": 1099,
      "amazon_url": "https://amazon.in/search?k=wireless+bluetooth+earbuds",
      "flipkart_url": "https://flipkart.com/search?q=wireless+bluetooth+earbuds",
      "savings": 300+,
      "category": "Electronics",
      "stock": "In Stock"
    },
    {
      "id": 2,
      "name": "Stainless Steel Water Bottle",
      "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      "description": "Insulated 750ml bottle keeps drinks cold for 24hrs, perfect for daily use",
      "qtd_price": 599,
      "amazon_price": 899,
      "flipkart_price": 849,
      "amazon_url": "https://amazon.in/search?k=stainless+steel+water+bottle",
      "flipkart_url": "https://flipkart.com/search?q=stainless+steel+water+bottle",
      "savings": 300,
      "category": "Home & Kitchen",
      "stock": "Few in Stock"
    },
    {
      "id": 3,
      "name": "LED Desk Lamp",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      "description": "Adjustable brightness with USB charging port and flexible neck design",
      "qtd_price": 899,
      "amazon_price": 1299,
      "flipkart_price": 1199,
      "amazon_url": "https://amazon.in/search?k=led+desk+lamp",
      "flipkart_url": "https://flipkart.com/search?q=led+desk+lamp",
      "savings": 400,
      "category": "Electronics",
      "stock": "Selling Fast"
    },
    {
      "id": 4,
      "name": "Yoga Mat",
      "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
      "description": "Non-slip exercise mat with extra cushioning for comfortable workouts",
      "qtd_price": 799,
      "amazon_price": 1199,
      "flipkart_price": 1099,
      "amazon_url": "https://amazon.in/search?k=yoga+mat",
      "flipkart_url": "https://flipkart.com/search?q=yoga+mat",
      "savings": 400,
      "category": "Fitness",
      "stock": "In Stock"
    },
    {
      "id": 5,
      "name": "Smartphone Stand",
      "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
      "description": "Adjustable aluminum stand for phones and tablets with anti-slip base",
      "qtd_price": 399,
      "amazon_price": 699,
      "flipkart_price": 649,
      "amazon_url": "https://amazon.in/search?k=smartphone+stand",
      "flipkart_url": "https://flipkart.com/search?q=smartphone+stand",
      "savings": 300,
      "category": "Accessories",
      "stock": "Out of Stock"
    },
    {
      "id": 6,
      "name": "Ceramic Coffee Mug Set",
      "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop",
      "description": "Set of 4 elegant ceramic mugs perfect for daily use, dishwasher safe",
      "qtd_price": 699,
      "amazon_price": 999,
      "flipkart_price": 949,
      "amazon_url": "https://amazon.in/search?k=ceramic+coffee+mug+set",
      "flipkart_url": "https://flipkart.com/search?q=ceramic+coffee+mug+set",
      "savings": 300,
      "category": "Home & Kitchen",
      "stock": "Selling Fast"
    },
    {
      "id": 7,
      "name": "Wireless Mouse",
      "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
      "description": "Ergonomic wireless mouse with long battery life",
      "qtd_price": 499,
      "amazon_price": 799,
      "flipkart_price": 749,
      "amazon_url": "https://amazon.in/search?k=wireless+mouse",
      "flipkart_url": "https://flipkart.com/search?q=wireless+mouse",
      "savings": 300,
      "category": "Electronics",
      "stock": "Few in Stock"
    },
    {
      "id": 8,
      "name": "Kitchen Knife Set",
      "image": "https://images.unsplash.com/photo-1594736797933-d0b71a5b7b4d?w=400&h=400&fit=crop",
      "description": "Professional stainless steel knife set with wooden block",
      "qtd_price": 1299,
      "amazon_price": 1999,
      "flipkart_price": 1849,
      "amazon_url": "https://amazon.in/search?k=kitchen+knife+set",
      "flipkart_url": "https://flipkart.com/search?q=kitchen+knife+set",
      "savings": 700,
      "category": "Home & Kitchen",
      "stock": "Out of Stock"
    }
  ],
  "categories": ["All Categories", "Electronics", "Home & Kitchen", "Fitness", "Accessories"],
  "stock_statuses": ["All Stock Status", "In Stock", "Few in Stock", "Selling Fast", "Out of Stock"],
  "faq": [
    {
      "question": "What is the delivery time?",
      "answer": "We deliver within 2-5 business days across India with free shipping on orders above ₹499."
    },
    {
      "question": "What payment methods do you accept?",
      "answer": "We accept UPI, Credit/Debit Cards, Net Banking, and Cash on Delivery for your convenience."
    },
    {
      "question": "Do you offer returns?",
      "answer": "Yes, we offer 7-day easy returns on all products with no questions asked policy."
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
