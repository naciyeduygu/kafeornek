<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/../config/database.php';

$query = $pdo->query('SELECT id, title, category, description, ingredients, price, image, is_featured FROM menu_items ORDER BY id DESC');
$items = $query->fetchAll(PDO::FETCH_ASSOC);

echo json_encode([
    'success' => true,
    'count' => count($items),
    'data' => $items,
], JSON_UNESCAPED_UNICODE);
