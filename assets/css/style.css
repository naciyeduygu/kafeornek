:root {
  --maroon-900: #64242f;
  --maroon-700: #b44446;
  --rose-400: #fc8f8f;
  --sand-100: #dfd9d8;
  --ink: #2f161d;
  --surface: #fffaf9;
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Inter, Arial, sans-serif;
  background: var(--surface);
  color: var(--ink);
  line-height: 1.55;
}

img {
  width: 100%;
  display: block;
}

.container {
  width: min(1160px, calc(100% - 3rem));
  margin-inline: auto;
}

.hero {
  min-height: 100vh;
  color: #fff;
  position: relative;
  overflow: hidden;
  background: linear-gradient(rgba(100, 36, 47, 0.86), rgba(100, 36, 47, 0.56)),
    url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=80") center/cover no-repeat;
  transition: background-image 580ms ease;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 75% 15%, rgba(252, 143, 143, 0.33), transparent 42%);
  animation: heroPulse 12s ease-in-out infinite;
}

.nav,
.hero-content {
  position: relative;
  z-index: 2;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.2rem;
  position: sticky;
  top: 0;
}

.nav.scrolled {
  backdrop-filter: blur(8px);
  background: rgba(100, 36, 47, 0.74);
  border-radius: 0 0 12px 12px;
  padding: 0.8rem 1rem;
}

.brand {
  color: #fff;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-decoration: none;
  font-size: 1.35rem;
}

.menu-toggle {
  display: none;
}

.nav-links {
  display: flex;
  gap: 1.4rem;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  opacity: 0.92;
}

.nav-links a:hover {
  opacity: 1;
}

.cart-badge {
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  padding: 0.45rem 0.9rem;
  background: transparent;
  color: #fff;
  font-weight: 600;
}

.hero-content {
  min-height: calc(100vh - 74px);
  max-width: 680px;
  display: grid;
  align-content: center;
  gap: 1rem;
}

.hero-brand {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

h1 {
  margin: 0;
  font-size: clamp(2.1rem, 5vw, 4.1rem);
  line-height: 1.06;
}

.hero-actions {
  margin-top: 0.4rem;
  display: flex;
  gap: 0.85rem;
}

.btn {
  border: 0;
  border-radius: 8px;
  padding: 0.72rem 1.2rem;
  font: inherit;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
}

.btn-primary {
  background: var(--maroon-700);
  color: #fff;
}

.btn-primary:hover {
  background: var(--maroon-900);
}

.btn-secondary {
  border: 1px solid rgba(255, 255, 255, 0.88);
  color: #fff;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.16);
}

.btn-ghost {
  border: 1px solid rgba(100, 36, 47, 0.2);
  background: #fff;
  color: var(--maroon-900);
}

.btn-small {
  padding: 0.48rem 0.72rem;
  font-size: 0.86rem;
}

.section {
  padding-block: 4.4rem;
}

h2 {
  margin: 0;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  color: var(--maroon-900);
}

.section-copy {
  margin-top: 0.62rem;
  color: #633842;
  max-width: 720px;
}

.filters {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.3fr 0.7fr;
  gap: 0.8rem;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid #c1b3b4;
  border-radius: 8px;
  padding: 0.75rem 0.82rem;
  font: inherit;
  color: var(--ink);
  background: #fff;
}

input:focus,
select:focus,
textarea:focus {
  outline: 2px solid rgba(180, 68, 70, 0.28);
  outline-offset: 1px;
}

.range-wrap {
  border: 1px solid #c1b3b4;
  border-radius: 8px;
  padding: 0.62rem 0.8rem;
  display: grid;
  gap: 0.45rem;
}

.range-wrap span {
  font-size: 0.86rem;
}

.result-box {
  background: var(--maroon-900);
  color: #fff;
  border-radius: 8px;
  display: grid;
  place-items: center;
  align-content: center;
}

.result-box strong {
  font-size: 1.5rem;
}

.menu-grid {
  margin-top: 1.1rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.menu-item {
  border: 1px solid #e1d6d5;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.menu-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 30px rgba(100, 36, 47, 0.12);
}

.menu-item figure {
  margin: 0;
  height: 220px;
  overflow: hidden;
}

.menu-item img {
  height: 100%;
  object-fit: cover;
  transition: transform 480ms ease;
}

.menu-item:hover img {
  transform: scale(1.05);
}

.menu-body {
  padding: 0.92rem;
}

.menu-category {
  margin: 0;
  font-size: 0.74rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--maroon-700);
  font-weight: 700;
}

.menu-body h3 {
  margin: 0.35rem 0 0;
  color: var(--maroon-900);
}

.menu-desc {
  margin: 0.5rem 0 0;
  color: #6a4b53;
  font-size: 0.94rem;
}

.menu-bottom {
  margin-top: 0.9rem;
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  align-items: center;
}

.menu-bottom strong {
  color: var(--maroon-700);
  white-space: nowrap;
}

.menu-actions {
  display: flex;
  gap: 0.5rem;
}

.empty-state {
  margin: 0;
  padding: 1rem;
  border: 1px dashed #ceb7b9;
  border-radius: 10px;
  color: #6a4b53;
}

.gallery-section {
  background: linear-gradient(180deg, #fff8f8, #f2ebea);
}

.gallery-layout {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1.2fr;
  align-items: center;
}

.gallery-controls {
  margin-top: 1rem;
  display: flex;
  gap: 0.55rem;
}

.gallery-stage {
  margin: 0;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #dacbcc;
  background: #fff;
}

.gallery-stage img {
  height: 410px;
  object-fit: cover;
  animation: galleryZoom 5s ease;
}

.gallery-stage figcaption {
  padding: 0.8rem 0.9rem;
  color: #6a4b53;
}

.reservation-layout {
  margin-top: 1.1rem;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 0.9rem;
}

.reservation-form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.72rem;
  padding: 1rem;
  border: 1px solid #d8cbcb;
  border-radius: 12px;
  background: #fff;
}

.reservation-form label {
  display: grid;
  gap: 0.4rem;
  color: #53333b;
  font-size: 0.93rem;
}

.reservation-form button {
  align-self: end;
}

.reservation-panel {
  background: #fff;
  border: 1px solid #d8cbcb;
  border-radius: 12px;
  padding: 1rem;
}

.reservation-panel h3 {
  margin-top: 0;
  color: var(--maroon-900);
}

.status-message {
  min-height: 1.4rem;
  color: var(--maroon-700);
  font-weight: 700;
  margin-top: 0.8rem;
}

.contact-section {
  background: var(--sand-100);
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: start;
}

.contact-links {
  display: grid;
  gap: 0.45rem;
}

.contact-links a {
  color: var(--maroon-900);
  text-decoration: none;
  font-weight: 600;
}

.contact-links a:hover {
  text-decoration: underline;
}

.contact-form {
  display: grid;
  gap: 0.7rem;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(39, 13, 20, 0.66);
  display: none;
  place-items: center;
  padding: 1rem;
  z-index: 20;
}

.modal.is-open {
  display: grid;
}

.modal-content {
  width: min(620px, 100%);
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  position: relative;
  animation: modalIn 240ms ease;
}

.modal-content img {
  height: 290px;
  object-fit: cover;
}

.modal-content h3,
.modal-content p {
  margin: 0;
  padding-inline: 1rem;
}

.modal-content h3 {
  margin-top: 0.9rem;
  color: var(--maroon-900);
}

.modal-content p {
  margin-top: 0.52rem;
  margin-bottom: 0.8rem;
  color: #63434a;
}

.modal-close {
  position: absolute;
  top: 0.52rem;
  right: 0.52rem;
  border: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  cursor: pointer;
}

.footer {
  background: var(--maroon-900);
  color: #fff;
}

.footer-content {
  padding: 1.3rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.7rem;
}

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 520ms ease, transform 520ms ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes heroPulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes galleryZoom {
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1);
  }
}

@keyframes modalIn {
  from {
    opacity: 0;
    transform: translateY(22px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 980px) {
  .nav {
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .menu-toggle {
    display: block;
    border: 1px solid rgba(255, 255, 255, 0.62);
    background: transparent;
    color: #fff;
    border-radius: 8px;
    padding: 0.45rem 0.66rem;
  }

  .nav-links {
    width: 100%;
    display: none;
    flex-direction: column;
    gap: 0.6rem;
    background: rgba(100, 36, 47, 0.9);
    border-radius: 10px;
    padding: 0.8rem;
  }

  .nav-links.is-open {
    display: flex;
  }

  .filters {
    grid-template-columns: 1fr;
  }

  .menu-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .gallery-layout,
  .reservation-layout,
  .contact-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .container {
    width: min(1160px, calc(100% - 1.3rem));
  }

  .hero-actions {
    flex-wrap: wrap;
  }

  .menu-grid {
    grid-template-columns: 1fr;
  }

  .reservation-form {
    grid-template-columns: 1fr;
  }

  .gallery-stage img {
    height: 280px;
  }
}