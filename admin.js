:root {
  --maroon-900: #64242f;
  --maroon-700: #b44446;
  --rose-400: #fc8f8f;
  --sand-100: #dfd9d8;
}

body {
  margin: 0;
  background: var(--sand-100);
  color: #31191f;
  font-family: Inter, Arial, sans-serif;
}

.admin-shell {
  max-width: 980px;
  margin: 0 auto;
  padding: 28px;
}

h1 {
  margin-bottom: 8px;
  color: var(--maroon-900);
}

.admin-grid {
  margin-top: 18px;
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.admin-grid article {
  background: white;
  border: 1px solid #cdb9bb;
  border-radius: 10px;
  padding: 16px;
}

#itemCount,
#reservationCount,
#topSeller,
#messageCount {
  margin: 0;
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--maroon-700);
}

.admin-note {
  margin-top: 16px;
  color: var(--maroon-900);
  font-weight: 600;
}