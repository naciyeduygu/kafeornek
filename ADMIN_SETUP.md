# Maroon Brew Admin Kurulum

1. `config/database.php` dosyasinda veritabani baglanti bilgilerini guncelleyin.
2. `cafe_db` icinde asagidaki SQL ile `menu_items` tablosunu olusturun.

```sql
CREATE TABLE menu_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  category VARCHAR(80) NOT NULL,
  description TEXT NOT NULL,
  ingredients VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image TEXT NOT NULL,
  is_featured TINYINT(1) DEFAULT 0
);
```

3. API test icin `api/properties.php` endpointini calistirin.
4. Admin paneli icin `admin/index.html` dosyasini tarayicida acin.

Not: Bu yapi statik HTML/CSS/JS arayuzu ve opsiyonel PHP API katmani birlikte calissin diye duzenlenmistir.