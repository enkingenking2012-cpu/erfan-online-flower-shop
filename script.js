const products = [
  { id: 1, name: "carnation", price: 450000, shortDesc: "میخک. گل با دوام و مقرون به صرفه", longDesc: "میخک گلی مقاوم و بادوام است که برای دسته‌گل‌های ترکیبی بسیار استفاده می‌شود. این گل با قیمت مناسب و طول عمر بالا، گزینه‌ای کاربردی برای مصرف روزانه و تزئینات ساده محسوب می‌شود.", images: ["images/carnation.png", "images/carnation1.png"] },
  { id: 2, name: "chrysanthemum", price: 320000, shortDesc: "داوودی. گل پرکاربرد در مراسم و مناسبتها ", longDesc: "داوودی یکی از پرکاربردترین گل‌ها در گل‌فروشی‌هاست که به دلیل تنوع بالا و قیمت مناسب، محبوبیت زیادی دارد. این گل ماندگاری خوبی داشته و در مراسم مختلف و استفاده روزمره کاربرد دارد.", images: ["images/chrysanthemum.png", "images/chrysanthemum1.png"] },
  { id: 3, name: "ficus", price: 750000, shortDesc: "فیکوس. گیاه آپارتمانی مقاوم با برگ‌های پهن", longDesc: " فیکوس گیاهی آپارتمانی با برگ‌های پهن و ظاهر مدرن است که به دکوراسیون فضا جلوه‌ای شیک می‌دهد. این گیاه مقاومت خوبی دارد و برای خانه‌ها و دفاتر کاری مناسب است.", images: ["images/ficus.png", "images/ficus1.png"] },
  { id: 4, name: "gerbera", price: 950000, shortDesc: "ژربرا. گل رنگارنگ و شاد ", longDesc: "این گل انتخابی عالی برای هدیه‌های دوستانه، مناسبت‌های شاد و تزئین فضاهای پرنور است. ژربرا در دسته‌گل‌ها بسیار چشمگیر است و به دلیل ظاهر جذاب، فروش بالایی دارد.", images: ["images/gerbera.png", "images/gerbera1.png"] },
  { id: 5, name: "hyacinth", price: 780000, shortDesc: "سنبل. گل معطر و فصلی", longDesc: "سنبل گلی فصلی با عطر بسیار قوی و ظاهری زیباست که بیشتر در ایام عید استفاده می‌شود. این گل جلوه‌ای خاص به فضای خانه می‌دهد و به دلیل عطر ماندگار، بسیار محبوب است.", images: ["images/hyacinth.png", "images/hyacinth1.png"] },
  { id: 6, name: "lily", price: 520000, shortDesc: "لیلیوم. گل خوش‌عطر با گلبرگ‌های درشت", longDesc: "لیلیوم با گلبرگ‌های بزرگ و عطر قوی، یکی از شیک‌ترین گل‌های شاخه‌بریده محسوب می‌شود. این گل اغلب در مراسم رسمی، دسته‌گل‌های مجلسی و تزئینات خاص استفاده می‌شود.", images: ["images/lily.png", "images/lily1.png"] },
  { id: 7, name: "narcissus", price: 650000, shortDesc: " نرگس. گل خوش‌عطر سنتی ", longDesc: "نرگس گلی سنتی با عطر قوی و دلنشین است که طرفداران خاص خود را دارد. این گل اغلب در فصل خودش عرضه می‌شود و به دلیل رایحه خاص، حس نوستالژی و آرامش ایجاد می‌کند.", images: ["images/narcissus.png", "images/narcissus1.png"] },
  { id: 8, name: "pothos", price: 430000, shortDesc: " پتوس. گیاه رونده و کم‌دردسر", longDesc: "پتوس گیاهی رونده و زیبا با نگهداری بسیار آسان است که در نور کم هم رشد می‌کند. این گیاه انتخابی عالی برای آپارتمان‌ها و فضاهای داخلی است.", images: ["images/pothos.png", "images/pothos1.png"] },
  { id: 9, name: "red_anthurium ", price: 1200000, shortDesc: "آنتوریوم قرمز. گیاهی مقاوم با گل براق و مدرن", longDesc: "آنتوریوم گیاهی زینتی با برگ‌ها و گل‌های براق و قلبی‌شکل است که ظاهری مدرن و جذاب دارد. این گیاه مقاوم بوده و نگهداری آسانی دارد، به همین دلیل برای خانه و محیط‌های اداری بسیار مناسب است.", images: ["images/red_anthurium.png", "images/red_anthurium1.png"] },
  { id: 10, name: "rose", price: 300000, shortDesc: "رز. گل کلاسیک و محبوب با عطر دلنشین", longDesc: "رز یکی از محبوب‌ترین و پرفروش‌ترین گل‌های دنیاست که نماد عشق، احترام و احساسات عمیق محسوب می‌شود. این گل با تنوع رنگ بالا، عطر دلنشین و ظاهر کلاسیک، انتخاب اول برای هدیه، مناسبت‌های عاشقانه، تولد، سالگرد و مراسم رسمی است.", images: ["images/rose.png", "images/rose1.png"] },
  { id: 11, name: "snake_plant", price: 480000, shortDesc: "سانسوریا. گیاه بسیار مقاوم و کم‌نیاز", longDesc: "سانسوریا یکی از مقاوم‌ترین گیاهان آپارتمانی است که به نور و آب کمی نیاز دارد. این گیاه برای افراد مبتدی و محیط‌های اداری ایده‌آل است و ظاهر ساده و مدرنی دارد.", images: ["images/snake_plant.png", "images/snake_plant1.png"] },
  { id: 12, name: "tulip", price: 400000, shortDesc: "لاله. گل فصلی با ظاهر ساده و شیک", longDesc: "لاله گلی فصلی با ظاهری ساده، شیک و مینیمال است که نماد تازگی و شروع دوباره محسوب می‌شود. این گل در فصل خود فروش بالایی دارد و برای هدیه و دکوراسیون بهاری بسیار محبوب است.", images: ["images/tulip.png", "images/tulip1.png"] },
  { id: 13, name: "white_orchid", price: 800000, shortDesc: "ارکیده سفید. گل لوکس و ماندگار با ظاهر خاص", longDesc: "ارکیده گلی لوکس و خاص با ظاهری متفاوت است که نماد ظرافت و شکوه محسوب می‌شود. این گیاه ماندگاری بالایی دارد و با نگهداری مناسب، مدت‌ها گل می‌دهد.", images: ["images/white_orchid.png", "images/white_orchid1.png"] },
  { id: 14, name: "alstroemeria", price: 350000, shortDesc: "آلسترومریا. گل ظریف با ماندگاری بالا", longDesc: "آلسترومریا گلی ظریف با طرح‌های خاص روی گلبرگ‌هاست که ماندگاری بالایی دارد. این گل انتخاب حرفه‌ای گل‌فروش‌ها برای دسته‌گل‌های شکیل و بادوام است.", images: ["images/alstroemeria.png", "images/alstroemeria1.png"] },
  { id: 15, name: "peace_lily", price: 350000, shortDesc: "اسپاتی فیلوم. گیاه شیک با گل سفید", longDesc: "اسپاتی‌فیلوم گیاهی شیک با گل‌های سفید و برگ‌های سبز براق است که حس آرامش به فضا می‌دهد. این گیاه نگهداری آسانی دارد و برای خانه و محل کار بسیار مناسب است.", images: ["images/peace_lily.png", "images/peace_lily1.png"] }
];
let filteredProducts = [...products];
const productListEl = document.getElementById("product-list");

function renderProducts() {
  productListEl.innerHTML = "";
  filteredProducts.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.images[0]}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.shortDesc}</p>
      <p class="price">${p.price.toLocaleString()} تومان</p>
      <button class="btn-details" data-id="${p.id}">مشاهده جزئیات</button>
    `;
    productListEl.appendChild(card);
  });
}


renderProducts();

const productDetailEl = document.getElementById("product-detail");

productListEl.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-details")) {
    const id = parseInt(e.target.dataset.id);
    openProductDetail(id);
  }
});

function openProductDetail(id) {
  const product = products.find(p => p.id === id);

  let imagesHtml = "";
  product.images.forEach(src => {
    imagesHtml += `<img src="${src}" alt="${product.name}">`;
  });

  productDetailEl.innerHTML = `
    <div class="detail-content">
      <button id="close-detail">X</button>
      <h2>${product.name}</h2>
      <div class="detail-images">${imagesHtml}</div>
      <p>${product.longDesc}</p>
      <p class="price">${product.price.toLocaleString()} تومان</p>
      <label>تعداد:
        <input type="number" id="detail-qty" value="1" min="1">
      </label>
      <button id="add-to-cart" data-id="${product.id}">افزودن به سبد خرید</button>
    </div>
  `;

  productDetailEl.classList.remove("hidden");

  document.getElementById("close-detail").onclick = () => {
    productDetailEl.classList.add("hidden");
  };
}

let cart = [];
const cartCountEl = document.getElementById("cart-count");

function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCountEl.textContent = total;
}

productDetailEl.addEventListener("click", function (e) {
  if (e.target.id === "add-to-cart") {
    const id = parseInt(e.target.dataset.id);
    const qty = parseInt(document.getElementById("detail-qty").value);
    addToCart(id, qty);
    productDetailEl.classList.add("hidden");
  }
});

function addToCart(productId, qty) {
  const item = cart.find(c => c.productId === productId);
  if (item) item.qty += qty;
  else cart.push({ productId, qty });

  updateCartCount();
}

const cartPanelEl = document.getElementById("cart-panel");
const cartIconEl = document.getElementById("cart-icon");

cartIconEl.onclick = () => {
  renderCart();
  cartPanelEl.classList.toggle("hidden");
};

function renderCart() {
  if (cart.length === 0) {
    cartPanelEl.innerHTML = "<p>سبد خرید خالی است.</p>";
    return;
  }

  let html = "";
  let total = 0;

  cart.forEach(item => {
    const p = products.find(pr => pr.id === item.productId);
    const sum = p.price * item.qty;
    total += sum;

    html += `
      <div class="cart-item">
        <img src="${p.images[0]}">
        <div>
          <h4>${p.name}</h4>
          <p>${p.shortDesc}</p>
          <p>تعداد: ${item.qty}</p>
          <p>قیمت: ${sum.toLocaleString()} تومان</p>
        </div>
        <button class="btn-remove" data-id="${p.id}">حذف</button>
      </div>
    `;
  });

  cartPanelEl.innerHTML = `
    <h3>سبد خرید</h3>
    ${html}
    <hr>
    <p><strong>مجموع کل: ${total.toLocaleString()} تومان</strong></p>
    <button id="btn-checkout">تایید نهایی</button>
  `;
}

cartPanelEl.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-remove")) {
    const id = parseInt(e.target.dataset.id);
    cart = cart.filter(item => item.productId !== id);
    updateCartCount();
    renderCart();
  }

  if (e.target.id === "btn-checkout") {
    alert("سفارش شما ثبت شد.");
  }
});
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function () {
  const keyword = searchInput.value.trim().toLowerCase();

  filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(keyword) ||
    p.shortDesc.toLowerCase().includes(keyword) ||
    p.longDesc.toLowerCase().includes(keyword)
  );

  renderProducts();
});