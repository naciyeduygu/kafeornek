export const galleryFrames = [
  {
    id: "g1",
    caption: "Sabah saatlerinde kahve barimizi izleyin.",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "g2",
    caption: "Chef tabaklari gunluk taze urunlerle hazirlanir.",
    image:
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "g3",
    caption: "Aksam servisinde sakin ve premium bir atmosfer.",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "g4",
    caption: "Kahvalti servisimiz haftanin her gunu 09.00'da baslar.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80",
  },
];

export function rotateGallery(items, index) {
  if (!items.length) {
    return null;
  }

  const safeIndex = ((index % items.length) + items.length) % items.length;
  return items[safeIndex];
}

export function getHeroItems(items) {
  const featured = items.filter((item) => item.featured);
  return featured.length ? featured : items;
}