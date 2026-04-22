import { galleryFrames, getHeroItems, rotateGallery } from "./gallery.js";
import { baseListings } from "./listings.js";

const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const priceRange = document.getElementById("priceRange");
const maxPriceText = document.getElementById("maxPriceText");
const resultCount = document.getElementById("resultCount");
const menuGrid = document.getElementById("menuGrid");
const cartBadge = document.getElementById("cartBadge");

const detailModal = document.getElementById("detailModal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalPrice = document.getElementById("modalPrice");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const siteNav = document.getElementById("siteNav");

const reservationForm = document.getElementById("reservationForm");
const reservationDate = document.getElementById("reservationDate");
const reservationTime = document.getElementById("reservationTime");
const reservationMessage = document.getElementById("reservationMessage");
const slotInfo = document.getElementById("slotInfo");

const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");
const copyrightYear = document.getElementById("copyrightYear");

const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");

const state = {
  searchText: "",
  category: "Tum Kategoriler",
  maxPrice: 260,
  orderList: new Set(),
  galleryIndex: 0,
  heroIndex: 0,
};

const slotCapacity = {
  "10:00": 8,
  "12:00": 12,
  "14:00": 7,
  "16:00": 10,
  "18:00": 6,
  "20:00": 5,
};

function formatPrice(value) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(value);
}

function getFilteredMenu() {
  return baseListings.filter((item) => {
    const categoryMatch = state.category === "Tum Kategoriler" || item.category === state.category;
    const text = `${item.title} ${item.description} ${item.ingredients}`.toLowerCase();
    const searchMatch = text.includes(state.searchText.toLowerCase());
    const priceMatch = item.price <= state.maxPrice;
    return categoryMatch && searchMatch && priceMatch;
  });
}

function createMenuItem(item) {
  const article = document.createElement("article");
  article.className = "menu-item reveal";

  article.innerHTML = `
    <figure>
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
    </figure>
    <div class="menu-body">
      <p class="menu-category">${item.category}</p>
      <h3>${item.title}</h3>
      <p class="menu-desc">${item.description}</p>
      <div class="menu-bottom">
        <strong>${formatPrice(item.price)}</strong>
        <div class="menu-actions">
          <button class="btn btn-small btn-ghost" data-action="detail">Detay</button>
          <button class="btn btn-small btn-primary" data-action="add">${
            state.orderList.has(item.id) ? "Eklendi" : "Listeye Ekle"
          }</button>
        </div>
      </div>
    </div>
  `;

  article.querySelector('[data-action="detail"]').addEventListener("click", () => {
    openDetail(item);
  });

  article.querySelector('[data-action="add"]').addEventListener("click", () => {
    toggleOrder(item.id);
  });

  return article;
}

function renderMenu() {
  const filtered = getFilteredMenu();
  menuGrid.innerHTML = "";
  filtered.forEach((item) => {
    menuGrid.appendChild(createMenuItem(item));
  });
  resultCount.textContent = String(filtered.length);

  if (!filtered.length) {
    menuGrid.innerHTML = '<p class="empty-state">Filtrelere uygun urun bulunamadi. Fiyat veya kategori secimini guncelleyin.</p>';
  }

  observeReveals();
}

function toggleOrder(id) {
  if (state.orderList.has(id)) {
    state.orderList.delete(id);
  } else {
    state.orderList.add(id);
  }
  cartBadge.textContent = `Siparis ${state.orderList.size}`;
  renderMenu();
}

function openDetail(item) {
  modalImage.src = item.image;
  modalTitle.textContent = item.title;
  modalMeta.textContent = `${item.category} | ${item.ingredients}`;
  modalPrice.textContent = formatPrice(item.price);
  detailModal.classList.add("is-open");
  detailModal.setAttribute("aria-hidden", "false");
}

function closeDetail() {
  detailModal.classList.remove("is-open");
  detailModal.setAttribute("aria-hidden", "true");
}

function updateHeroBackground() {
  const heroItems = getHeroItems(baseListings);
  const active = rotateGallery(heroItems, state.heroIndex);
  if (!active) {
    return;
  }

  document.querySelector(".hero").style.backgroundImage =
    "linear-gradient(rgba(100, 36, 47, 0.86), rgba(100, 36, 47, 0.56))," +
    `url("${active.image}")`;
  state.heroIndex += 1;
}

function updateGallery() {
  const active = rotateGallery(galleryFrames, state.galleryIndex);
  if (!active) {
    return;
  }

  galleryImage.src = active.image;
  galleryCaption.textContent = active.caption;
}

function fillTimeSlots() {
  reservationTime.innerHTML = "";
  Object.keys(slotCapacity).forEach((slot) => {
    const option = document.createElement("option");
    option.value = slot;
    option.textContent = `${slot} (${slotCapacity[slot]} masa bos)`;
    reservationTime.appendChild(option);
  });
  slotInfo.textContent = "Toplam gunluk kapasite: 48 masa";
}

function handleReservation(event) {
  event.preventDefault();
  const data = new FormData(reservationForm);
  const name = data.get("fullName");
  const date = data.get("date");
  const time = data.get("time");
  const people = Number(data.get("people")) || 1;

  if (!date) {
    reservationMessage.textContent = "Lutfen gecerli bir tarih secin.";
    return;
  }

  if (slotCapacity[time] <= 0) {
    reservationMessage.textContent = "Secilen saat dolu. Lutfen farkli bir saat secin.";
    return;
  }

  slotCapacity[time] -= 1;
  reservationMessage.textContent = `${name} icin ${date} ${time} saatine ${people} kisilik rezervasyon alindi.`;
  fillTimeSlots();
  reservationForm.reset();
}

function handleContact(event) {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get("name");
  contactMessage.textContent = `${name}, mesajiniz alindi. En gec 10 dakika icinde donus yapacagiz.`;
  contactForm.reset();
}

function observeReveals() {
  const observer = new IntersectionObserver(
    (entries, target) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          target.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 },
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    if (!element.classList.contains("is-visible")) {
      observer.observe(element);
    }
  });
}

function handleScrollNav() {
  if (window.scrollY > 40) {
    siteNav.classList.add("scrolled");
  } else {
    siteNav.classList.remove("scrolled");
  }
}

searchInput.addEventListener("input", (event) => {
  state.searchText = event.target.value;
  renderMenu();
});

categorySelect.addEventListener("change", (event) => {
  state.category = event.target.value;
  renderMenu();
});

priceRange.addEventListener("input", (event) => {
  state.maxPrice = Number(event.target.value);
  maxPriceText.textContent = `Maksimum fiyat: ${state.maxPrice} TL`;
  renderMenu();
});

modalClose.addEventListener("click", closeDetail);
detailModal.addEventListener("click", (event) => {
  if (event.target === detailModal) {
    closeDetail();
  }
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("is-open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
  });
});

reservationForm.addEventListener("submit", handleReservation);
contactForm.addEventListener("submit", handleContact);

prevSlide.addEventListener("click", () => {
  state.galleryIndex -= 1;
  updateGallery();
});

nextSlide.addEventListener("click", () => {
  state.galleryIndex += 1;
  updateGallery();
});

window.addEventListener("scroll", handleScrollNav);

renderMenu();
fillTimeSlots();
updateHeroBackground();
updateGallery();
observeReveals();
copyrightYear.textContent = `(c) ${new Date().getFullYear()} Maroon Brew`;

setInterval(updateHeroBackground, 6500);
setInterval(() => {
  state.galleryIndex += 1;
  updateGallery();
}, 5000);