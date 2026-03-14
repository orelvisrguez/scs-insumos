import 'dotenv/config';
import pg from 'pg';

const { Client } = pg;

async function main() {
  console.log('DATABASE_URL:', process.env.DATABASE_URL?.substring(0, 50) + '...');
  
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();
  console.log('Connected to database');

  const products = [
    {
      name: 'Papel A4 Premium x 500 hojas',
      description: 'Papel blanco de alta calidad, 80g, formato A4. Ideal para impresiones y fotocopias.',
      price: 2500,
      stock: 150,
      category: 'Papel',
    },
    {
      name: 'Bolígrafo Bic Cristal x 50 unidades',
      description: 'Bolas de tinta azul, escritura fluida. Pack económico para oficina.',
      price: 4500,
      stock: 80,
      category: 'Escritura',
    },
    {
      name: 'Carpeta Archivador Deluxe',
      description: 'Carpeta de cartón forrado, mecanismo metálico, color azul.',
      price: 890,
      stock: 60,
      category: 'Archivos',
    },
    {
      name: 'Marcadores Stabilo Boss x 12 colores',
      description: 'Marcadores fluorescentes ideales para destacar texto. Colores vibrantes.',
      price: 3200,
      stock: 40,
      category: 'Escritura',
    },
    {
      name: 'Grapadora Rapid Ford',
      description: 'Grapadora profesional para escritorio, capacidad hasta 50 hojas.',
      price: 4500,
      stock: 25,
      category: 'Oficina',
    },
    {
      name: 'Cuaderno ABC x 100 hojas',
      description: 'Cuaderno universitario cosido, tapa dura, líneas.',
      price: 1200,
      stock: 100,
      category: 'Escritura',
    },
    {
      name: 'Tijera Escolar 15cm',
      description: 'Tijera con puntas redondeadas, ideal para niños. Color surtido.',
      price: 450,
      stock: 50,
      category: 'Oficina',
    },
    {
      name: 'Cinta Adhesiva Transparente x 6 unidades',
      description: 'Cinta de 12mm x 40m, transparente. Pack familiar.',
      price: 1800,
      stock: 70,
      category: 'Oficina',
    },
    {
      name: 'Resma de Cartón Corrugado x 50 hojas',
      description: 'Cartón para manualidades, colores básicos. 200g.',
      price: 3500,
      stock: 30,
      category: 'Arte',
    },
    {
      name: 'Pen Drive 32GB USB 3.0',
      description: 'Memoria USB de alta velocidad, compatible con USB 2.0.',
      price: 2800,
      stock: 45,
      category: 'Tecnologia',
    },
    {
      name: 'Calculadora Científica Casio',
      description: 'Calculadora científica con 240 funciones, pantalla de 2 líneas.',
      price: 8500,
      stock: 20,
      category: 'Tecnologia',
    },
    {
      name: 'Separadores Index x 5 colores',
      description: 'Separadores decartulina para archivar, pack de 5 colores.',
      price: 650,
      stock: 90,
      category: 'Archivos',
    },
  ];

  console.log('Seeding database...');
  
  for (const product of products) {
    await client.query(
      `INSERT INTO "Product" (id, name, description, price, stock, category, "createdAt", "updatedAt") 
       VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, NOW(), NOW())`,
      [product.name, product.description, product.price, product.stock, product.category]
    );
    console.log(`Inserted: ${product.name}`);
  }
  
  console.log('Seeding completed!');
  await client.end();
}

main().catch(console.error);